import Image from "next/image";
import Link from "next/link";
import { Code, Brain, Rocket, Users, ShieldCheck, BookOpen } from "lucide-react";
import ScrollToTop from "@/components/scrollToTop";

export default function About() {
  return (
    <div className="bg-blue-50 w-full min-h-screen flex flex-col items-center text-gray-800 px-6 sm:px-16 lg:px-24 py-10 sm:py-20">
      
      {/* Section 1: About Code-Buddy */}
      <div className="min-h-[90vh] md:-mt-30 max-w-6xl w-full flex flex-col lg:flex-row items-center mb-15 text-left gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src="/about1.svg" alt="About Code-Buddy" width={500} height={300} className="max-w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-700 ">About <span className="text-blue-800 text-4xl sm:text-5xl font-extrabold">Code-Buddy</span> </h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-6 leading-relaxed">
            Code-Buddy is your AI-powered coding assistant, built to help developers debug, learn, and create projects faster. 
            With intelligent insights and real-time suggestions, it makes coding more efficient and enjoyable.
          </p>
          {/* CTA Button */}
        <div className="mt-6 mb-6">
            <Link
              href="/chat"
              className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Try Code-Buddy Now →
            </Link>
          </div>
        </div>
        
      </div>

      {/* Section 2: Key Features */}
      <div className="max-w-6xl w-full text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">Key Features</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-4xl mx-auto leading-relaxed">
          Unlock powerful tools to enhance your coding experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {[{ icon: Code, title: "AI-Powered Debugging", desc: "Get instant code fixes, suggestions, and error explanations with AI-driven debugging." },
            { icon: Brain, title: "Smart Code Explanations", desc: "Understand complex code snippets with clear and concise explanations." },
            { icon: Rocket, title: "Project Suggestions", desc: "Receive personalized project ideas tailored to your skill level and interests." }]
            .map((feature, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
                <feature.icon size={50} className="text-blue-700" />
                <h3 className="text-2xl font-semibold mt-5">{feature.title}</h3>
                <p className="text-gray-600 mt-3 text-lg leading-relaxed">{feature.desc}</p>
              </div>
          ))}
        </div>
      </div>

      {/* Section 3: Why Choose Us? */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center text-left gap-12">
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
          <Image src="/about2.svg" alt="Why Choose Code-Buddy" width={500} height={300} className="max-w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">Why Choose Code-Buddy?</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            We are committed to providing the best AI-driven coding experience.
          </p>
          <ul className="mt-8 space-y-6 text-lg text-gray-700">
            <li className="flex items-center gap-4">
              <Users size={40} className="text-blue-700 hidden md:block" />
              <span><strong className="text-blue-700">Real-Time Assistance:</strong> Instant help saves hours of debugging frustration.</span>
            </li>
            <li className="flex items-center gap-4">
              <ShieldCheck size={40} className="text-blue-700 hidden md:block" />
              <span><strong className="text-blue-700">Multi-Language Support:</strong> Works with Python, JavaScript, C++, Java, and more.</span>
            </li>
            <li className="flex items-center gap-4">
              <BookOpen size={40} className="text-blue-700 hidden md:block" />
              <span><strong className="text-blue-700">Beginner to Expert:</strong> Designed for all skill levels, from students to professionals.</span>
            </li>
            <li className="flex items-center gap-4">
              <Brain size={40} className="text-blue-700 hidden md:block" />
              <span><strong className="text-blue-700">AI-Powered Learning:</strong> Gain insights, best practices, and detailed explanations.</span>
            </li>
          </ul>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}