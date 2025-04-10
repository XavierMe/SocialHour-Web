"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  const handleTesterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Collect tester data and send to backend or Supabase
    console.log("Tester form submitted");
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text drop-shadow-lg">
          SocialHour
        </h1>

        <p className="text-base sm:text-lg mb-8 text-gray-400">
          Sign up to be the first to know when we launch near you.
        </p>

        {submitted ? (
          <p className="text-green-400">Thanks! We’ll notify you when we launch 🎉</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md text-white placeholder-gray-400 bg-[#1e1e22] border border-[#3a3a40] w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              Notify Me
            </button>
          </form>
        )}

        <p className="text-sm text-gray-500 mt-6">
          No spam. Just good vibes. You can unsubscribe anytime.
        </p>

        {/* Tester Signup Section */}
        <div className="mt-12 border-t border-[#2a2a2a] pt-10 text-left">
          <h2 className="text-2xl font-bold mb-4">Want to be a tester?</h2>
          <p className="text-gray-400 mb-6">
            Help shape SocialHour by testing early features. We're currently accepting testers in select cities.
          </p>

          <form onSubmit={handleTesterSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Which city are you in?
              </label>
              <input
                type="text"
                placeholder="e.g. Richmond, VA"
                className="w-full px-4 py-2 rounded-md text-white bg-[#1e1e22] border border-[#3a3a40] placeholder-gray-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium mb-1">
                Are you willing to...
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                Give feedback
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                Join our tester Discord
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                Use the app at least once a week
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              Apply to be a Tester
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
