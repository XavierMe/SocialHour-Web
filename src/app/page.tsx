"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase"; // adjust the path if needed

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [city, setCity] = useState("");
  const [allowed, setAllowed] = useState(false);
  const [showTesterForm, setShowTesterForm] = useState(false);
  const [willingToHelp, setWillingToHelp] = useState<string | null>(null);
  const [testerEmail, setTesterEmail] = useState("");

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

  const handleTesterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.from("testers").insert([
      {
        email: testerEmail,
        city: city,
        willing: willingToHelp === "yes",
        feedback: "",
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message);
    } else {
      console.log("Inserted:", data);
    }
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
              className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Notify Me
            </button>
          </form>
        )}

        <p className="text-sm text-gray-500 mt-6">
          No spam. Just good vibes. You can unsubscribe anytime.
        </p>

        {/* Tester Toggle Section */}
        <div className="mt-12">
          <button
            onClick={() => setShowTesterForm(!showTesterForm)}
            className="text-purple-400 font-semibold underline cursor-pointer"
          >
            {showTesterForm ? "Hide Tester Form" : "Want to be a tester?"}
          </button>
        </div>

        {/* Tester Form */}
        {showTesterForm && (
          <div className="mt-8 border-t border-[#2a2a2a] pt-10 text-left space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Apply to be a <span className="text-purple-400">tester</span>
            </h2>
            <div className="space-y-3">
              <label className="block text-sm font-medium mb-1 text-white">Which city are you in?</label>
              <div className="relative">
                <select
                  value={city}
                  onChange={(e) => {
                    const selectedCity = e.target.value;
                    setCity(selectedCity);
                    setAllowed(allowedCities.includes(selectedCity));
                  }}
                  className="w-full appearance-none bg-[#1e1e22] text-white border border-[#3a3a40] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm pr-10"
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
            </div>

            {city === "Other" && (
              <p className="text-sm text-red-500">
                Sorry, we're currently only accepting testers in Richmond and Hampton Roads.
              </p>
            )}

            {allowed && (
              <form onSubmit={handleTesterSubmit} className="space-y-6 pt-2">
                <div>
                  <label className="block text-sm font-medium mb-1 text-white">Your email</label>
                  <input
                    type="email"
                    required
                    placeholder="Email for tester invite"
                    value={testerEmail}
                    onChange={(e) => setTesterEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-md text-white bg-[#1e1e22] border border-[#3a3a40] placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium mb-1 text-white">
                    Are you willing to help us improve the app?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="willingToHelp"
                        value="yes"
                        onChange={() => setWillingToHelp("yes")}
                        className="accent-purple-500"
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="willingToHelp"
                        value="no"
                        onChange={() => setWillingToHelp("no")}
                        className="accent-purple-500"
                      />
                      No
                    </label>
                  </div>
                </div>

                {willingToHelp === "no" && (
                  <p className="text-sm text-red-500">
                    Thanks for your interest, but we’re currently only accepting testers who are excited to help improve the experience.
                  </p>
                )}

                {willingToHelp === "yes" && (
                  <>
                    <button
                      type="submit"
                      className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      Submit Application
                    </button>

                    <p className="text-sm text-gray-400 mt-4">
                      Join our Discord! {" "}
                      <a
                        href="https://discord.gg/your-server"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 underline hover:text-pink-400 transition"
                      >
                        Click here to connect
                      </a>
                    </p>
                  </>
                )}
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}