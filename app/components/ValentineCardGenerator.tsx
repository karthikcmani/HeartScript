"use client";

import { useState } from "react";

export default function ValentineCardGenerator() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="p-6 max-w-xl mx-auto">

      {/* Input Section */}
      <div className="space-y-4">

        <div>
          <label className="block text-sm font-medium">
            Recipient Name
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter recipient name"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Personal Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            className="w-full border rounded p-2"
          />
        </div>

      </div>

      {/* Preview Section */}
      <div className="mt-6 border rounded p-4">

        <h3 className="font-semibold">Preview</h3>

        <p>
          To: {recipient || "Someone Special"}
        </p>

        <p>
          {message || "Your message will appear here..."}
        </p>

      </div>

    </div>
  );
}
