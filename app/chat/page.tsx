"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot } from "lucide-react";
import ScrollToTop from "@/components/scrollToTop";
import { remark } from "remark";
import html from "remark-html";

export default function Chat() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error("API response not OK");

      const data = await response.json();
      let formattedResponse = await remark().use(html).process(data.reply);
      let botText = String(formattedResponse);

      const botMessage = { text: botText, sender: "bot" as const };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { text: "Error fetching response", sender: "bot" as const }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (

    <div className="flex flex-col min-h-[86vh] bg-blue-50">
     
      {/* Chat Messages */}
      <div ref={chatContainerRef} className="flex-1 pb-10 overflow-y-hidden p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-3 max-w-[80%] text-sm rounded-lg shadow-md break-words ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 justify-start">
            <Bot className="w-6 h-6 text-gray-500" />
            <div className="p-3 bg-gray-200 text-gray-800 text-sm rounded-lg shadow-md">Typing...</div>
          </div>
        )}
      </div>



      {/* Input Box */}
      <div className=" fixed bottom-0 right-0 left-0 p-4 border-t flex items-center gap-2 bg-white">

        <input
          type="text"
          className="flex-1 text-blue-950 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          <Send size={20} />
        </button>
      </div>

      
      <ScrollToTop  />
      
    </div>
  );
}