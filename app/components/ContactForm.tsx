"use client";

import { useState } from "react";
import Image from "next/image";
import Particles from "./Particles"; // Import the Particles component

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form error:", err);
      setStatus("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div
      id="contact"
      className="relative bg-[#000000] py-16 px-6 overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        particleCount={200}
        particleSpread={20}
        speed={1}
        particleColors={["#ffffff"]}
        alphaParticles={true}
        particleBaseSize={200}
        cameraDistance={25}
      />

<Particles
        particleCount={200}
        particleSpread={25}
        speed={1}
        particleColors={["#ffffff"]}
        alphaParticles={true}
        particleBaseSize={200}
        cameraDistance={25}
      />

      {/* Flex Layout: Form Left, Image Right */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Form Box */}
        <div className="p-10 bg-[#EFF2F8] shadow-2xl rounded-2xl border border-gray-200 
                        hover:shadow-blue-300/40 transition-transform transform hover:-translate-y-2">
          {/* Terminal-style header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Get in Touch
            <p className="text-gray-600 text-sm font-medium mt-2">
              Contact me at kakadeshreya9@gmail.com or go through this form.
            </p>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="$full_name"
              required
              className="w-full p-3 rounded-xl border shadow-sm bg-blue-50 
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
                         suppressHydrationWarning
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="$email"
              required
              className="w-full p-3 rounded-xl border shadow-sm bg-blue-50 
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
                          suppressHydrationWarning
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="$phone_number"
              className="w-full p-3 rounded-xl border shadow-sm bg-blue-50 
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
                         suppressHydrationWarning
            />
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="$subject"
              required
              className="w-full p-3 rounded-xl border shadow-sm bg-blue-50 
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition md:col-span-2"
                          suppressHydrationWarning
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="$message"
              rows={5}
              required
              className="w-full p-3 rounded-xl border shadow-sm bg-blue-50 
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition md:col-span-2"
              suppressHydrationWarning
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
                         text-white px-6 py-3 rounded-xl font-semibold shadow-md transition md:col-span-2 
                         disabled:opacity-70"
              suppressHydrationWarning
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center font-medium md:col-span-2">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-medium md:col-span-2">
                ❌ Failed to send. Try again.
              </p>
            )}
          </form>
        </div>

        {/* Moon Image on Right */}
        <div className="flex justify-center">
          <Image
            src="/moon1.jpg" // ✅ Make sure file is in /public
            alt="Moon"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 mt-12 text-center text-white">
        <p className="text-sm"> Created with {"\u{1F90D}"} by Shreya Kakade</p>
      </footer>
    </div>
  );
}
