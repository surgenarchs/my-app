'use client';

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Message {
  sender: "bot" | "user";
  text: string;
}

const API_KEY = process.env.CHAT_API_KEY; // 🔹 Replace with your Hugging Face API key

const API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [typingMessage, setTypingMessage] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to the latest message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, typingMessage]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        { inputs: input },
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );

      console.log("📩 API Response:", response.data);

      const botResponse =
        response.data[0]?.generated_text || "Sorry, I didn't understand that.";

      setTypingMessage(""); // Clear previous typing effect
      animateBotResponse(botResponse);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error fetching response. Try again later." },
      ]);
      setLoading(false);
    }
    
  };

  // Function to simulate word-by-word typing effect
  const animateBotResponse = (text: string) => {
    let index = 0;
    setTypingMessage("");

    const interval = setInterval(() => {
      setTypingMessage((prev) => prev + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setMessages((prev) => [...prev, { sender: "bot", text }]);
        setTypingMessage("");
        setLoading(false);
      }
    }, 10); // Speed of typing effect
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-muted rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-green-500 mb-4">
        🤖 AI Chatbot
      </h2>

      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="h-96 overflow-y-auto p-3 border border-black-200 rounded-lg shadow-l flex flex-col bg-white dark:bg-gray-800"
      >
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-3 my-2 rounded-lg max-w-[80%] border ${
              msg.sender === "user"
                ? "bg-gradient-to-r from-green-400 to-green-600 text-white self-end border-green-500 shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white self-start border-gray-300 dark:border-gray-600 shadow-lg"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {typingMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-3 my-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg max-w-[80%] self-start border border-gray-300 dark:border-gray-600 shadow-lg"
          >
            {typingMessage}
          </motion.div>
        )}

        {loading && (
          <p className="text-gray-400 text-sm animate-pulse">🤖 AI is typing...</p>
        )}
      </div>

      {/* Input Box */}
      <div className="flex mt-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 p-3 border rounded-lg shadow-inner"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-md"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}