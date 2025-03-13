import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-blue-50 w-full min-h-[85vh] flex flex-col items-center justify-center px-6 text-gray-800 ">
      {/* Hero Section */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}

        <div className="flex-1 flex justify-center">
          <Image
            src="/homepage1.svg"
            alt="Code-Buddy AI Assistant"
            width={500}
            height={500}
            className="max-w-full h-auto"
            priority
          />
        </div>

        {/* Right Content */}

        <div className="flex-1 -mt-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-blue-600">Code-Buddy</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Code-Buddy is your AI-powered coding assistant, helping you debug code, explain errors, and suggest project ideas in real-time.
          </p>

          {/* Features List */}
          <ul className="text-gray-700 space-y-3 text-left max-w-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} />
              Instant debugging & AI-driven fixes
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} />
              Clear explanations of code snippets
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} />
              Project suggestions based on skill level
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} />
              Support for Python, Java, C++, and more
            </li>
          </ul>

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
    </div>
  );
}