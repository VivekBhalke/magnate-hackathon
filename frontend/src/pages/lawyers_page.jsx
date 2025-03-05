import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
  
        try {
          const response = await fetch(`http://localhost:3000/api/lawyers?lat=${lat}&lng=${lng}`);
          const data = await response.json();
          if (data.results) {
            setLawyers(data.results.slice(0, 5)); // Get top 5
          }
        } catch (error) {
          console.error("Error fetching lawyers:", error);
        }
      });
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Connect with Lawyers</h2>
      <div className="grid gap-4">
        {lawyers.length > 0 ? (
          lawyers.map((lawyer, index) => (
            <Card key={index} className="flex justify-between items-center p-4">
              <CardContent className="flex-1">
                <CardTitle>{lawyer.name}</CardTitle>
                <CardDescription>
                  <p>⭐ {lawyer.rating ? lawyer.rating : "No Rating"}</p>
                  <p className="text-sm text-gray-600">{lawyer.vicinity}</p>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button>Book Appointment</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>Loading nearby lawyers...</p>
        )}
      </div>
    </div>
  );
};

export default Lawyers;
