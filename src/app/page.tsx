"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [city, setCity] = useState("");
  const [allowed, setAllowed] = useState(false);

  const allowedCities = [
    "Richmond",
    "Norfolk",
    "Virginia Beach",
    "Chesapeake",
    "Hampton",
    "Newport News",
    "Suffolk",
    "Portsmouth",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  const handleTesterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <div className="mt-12 border-t border-[#2a2a2a] pt-10 text-left space-y-6">
          <h2 className="text-2xl font-bold text-white">Want to be a tester?</h2>
          <p className="text-gray-300">
            We’re currently accepting testers in{" "}
            <span className="font-semibold text-white">Richmond</span> and the{" "}
            <span className="font-semibold text-white">Hampton Roads</span> area.
          </p>

          {/* Styled Dropdown */}
          <div className="space-y-3">
            <label className="block text-sm font-medium mb-1 text-white">Which city are you in?</label>
            <select
              value={city}
              onChange={(e) => {
                const selectedCity = e.target.value;
                setCity(selectedCity);
                setAllowed(allowedCities.includes(selectedCity));
              }}
              className="w-full px-4 py-2 rounded-md bg-[#1e1e22] text-white border border-[#3a3a40] focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              <option value="">Select a city...</option>
              {allowedCities.map((cityOption) => (
                <option key={cityOption} value={cityOption}>
                  {cityOption}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Conditional Form */}
          {allowed ? (
            <form onSubmit={handleTesterSubmit} className="space-y-4 pt-2">
              {/* Checkboxes */}
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1 text-white">Are you willing to...</label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-purple-500" required />
                  Give feedback regularly
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-purple-500" required />
                  Join our Discord for updates & discussions
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-purple-500" required />
                  Use the app in real-world social settings
                </label>
              </div>

              {/* Honest feedback question */}
              <div>
                <label className="block text-sm font-medium mb-1 text-white">
                  What kind of feedback would you give to help us grow?
                </label>
                <textarea
                  placeholder="Be honest — what would make this app better, more fun, or more useful?"
                  className="w-full h-28 px-4 py-2 rounded-md bg-[#1e1e22] text-white border border-[#3a3a40] placeholder-gray-400"
                  required
                />
              </div>

              {/* Device / experience */}
              <div>
                <label className="block text-sm font-medium mb-1 text-white">What phone do you use?</label>
                <input
                  type="text"
                  placeholder="e.g. iPhone 15, Galaxy S22"
                  className="w-full px-4 py-2 rounded-md bg-[#1e1e22] text-white border border-[#3a3a40] placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-white">Have you ever beta tested an app before?</label>
                <select
                  className="w-full px-4 py-2 rounded-md bg-[#1e1e22] text-white border border-[#3a3a40] focus:outline-none"
                  required
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
              >
                Apply to be a Tester
              </button>

              {/* Discord Link */}
              <p className="text-sm text-gray-400 mt-4">
                Already on Discord?{" "}
                <a
                  href="https://discord.gg/your-server" // Replace with real link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline hover:text-pink-400 transition"
                >
                  Join our tester Discord here
                </a>
              </p>
            </form>
          ) : city && (
            <p className="text-sm text-red-500">
              We’re not accepting testers in your area yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
