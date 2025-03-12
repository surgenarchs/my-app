"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    const loadingToastId = toast.loading("Sending message...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: { success?: boolean; error?: string } = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", { id: loadingToastId });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message.");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong.", { id: loadingToastId });
      } else {
        toast.error("An unexpected error occurred.", { id: loadingToastId });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full text-center"
      >
        <h1 className="text-4xl font-bold text-green-600">Contact Us</h1>
        <p className="mt-2 text-gray-500">
          We&apos;d love to hear from you! Reach out with any questions.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 bg-muted/50 p-6 border rounded-lg shadow-lg max-w-lg w-full"
      >
        <div className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border focus:shadow-2xl"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border focus:shadow-2xl"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md border focus:shadow-2xl"
          />
        </div>
        <Button
          type="submit"
          className="w-full mt-4 bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? "Sending..." : <><Send size={20} /> Send Message</>}
        </Button>
      </motion.form>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10 text-center"
      >
        <h2 className="text-2xl font-semibold text-green-500">Business Info</h2>
        <div className="mt-4 space-y-2">
          <p className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-green-500 transition">
            <Phone size={18} /> <a href="tel:+254797400805">+254 797 400 805</a>
          </p>
          <p className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-green-500 transition">
            <Mail size={18} /> <a href="mailto:surgenarchs@gmail.com">surgenarchs@gmail.com</a>
          </p>
        </div>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="https://www.linkedin.com/in/surgenarchs"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-muted/60 border rounded-full hover:bg-green-600 transition"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://twitter.com/surgenarchs"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-muted/60 border rounded-full hover:bg-blue-500 transition"
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://facebook.com/surgenarchs"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-muted/60 border rounded-full hover:bg-blue-700 transition"
        >
          <Facebook size={24} />
        </a>
      </motion.div>
    </div>
  );
}
