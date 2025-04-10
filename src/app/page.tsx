// app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to Supabase, Mailchimp, or backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-5xl font-bold mb-4">SocialHour</h1>
        <p className="text-lg mb-8 text-gray-300">Your city. Your scene. Coming soon.</p>

        {submitted ? (
          <p className="text-green-400">Thanks! We’ll notify you when we launch 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Notify Me
            </button>
          </form>
        )}

        <p className="text-sm text-gray-500 mt-4">No spam, just good vibes. You can unsubscribe anytime.</p>
      </div>
    </div>
  );
}
