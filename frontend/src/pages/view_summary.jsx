import React from "react";
import { Textarea } from "@/components/ui/textarea";

const Summary = () => {
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto p-2 border rounded-lg">
        <p>Here there will be some text</p>
        <p>Chat messages will appear here...</p>
        <p>More messages...</p>
      </div>

      <div className="mt-2">
        <Textarea className="w-full" placeholder="Type your message..." />
      </div>
    </div>
  );
};

export default Summary;
