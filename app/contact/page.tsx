"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "hariramesh1893@gmail.com",
          subject: `Message from Code-Buddy ${formData.name}`,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[86vh] px-6 py-12 bg-blue-50">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 justify-center">
        <Image src="/contact.svg" alt="Contact Illustration" width={450} height={450} className="drop-shadow-lg" />
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 max-w-lg bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Get in Touch</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 text-blue-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 text-blue-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className="w-full p-3 text-blue-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-24 py-2 rounded-lg text-lg font-medium shadow-md transition-all ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {/* Success/Error Messages */}
          {status === "success" && <p className="text-green-600 text-center mt-3">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600 text-center mt-3">Failed to send message. Try again.</p>}
        </form>
      </div>
    </div>
  );
}
