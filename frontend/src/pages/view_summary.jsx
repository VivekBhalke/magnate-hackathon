import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation()
  const {text} = location.state || {}
  console.log(text)
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto p-2 border rounded-lg">
        {text}
      </div>

      <div className="mt-2">
        <Textarea className="w-full" placeholder="Type your message..." />
      </div>
    </div>
  );
};

export default Summary;
