'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Facebook, Instagram, Twitter, Copy } from "lucide-react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${text} copied to clipboard!`);
  };

  return (
    <div 
      className="flex items-center justify-center px-4"
    >
      <Card className="backdrop-blur-lg bg-muted/20 shadow-2xl border border-white/20 rounded-2xl w-[400px] p-6 relative">
        
        {/* Header */}
        <CardHeader className="text-center">
          <CardTitle className="text-green-400 text-3xl font-bold tracking-wide">
            Get in Touch
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm">
            We are available 24/7. Reach out to us anytime!
          </CardDescription>
        </CardHeader>

        {/* Contact Info */}
        <CardContent className="space-y-4 text-center text-lg text-gray-300">
          <motion.div 
            className="flex items-center justify-center gap-3 cursor-pointer hover:text-green-500 transition-all"
            whileHover={{ scale: 1.05 }}
            onClick={() => copyToClipboard("+254797400805")}
          >
            <Phone size={20} className="text-green-400" />
            <span>+254 797 400 805</span>
            <Copy size={16} className="text-gray-400 hover:text-white transition" />
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-3 cursor-pointer hover:text-red-500 transition-all"
            whileHover={{ scale: 1.05 }}
            onClick={() => copyToClipboard("surgenarchs@gmail.com")}
          >
            <Mail size={20} className="text-red-400" />
            <span>surgenarchs@gmail.com</span>
            <Copy size={16} className="text-gray-400 hover:text-white transition" />
          </motion.div>
        </CardContent>

        {/* Socials */}
        <CardFooter className="flex justify-around mt-4 text-gray-400">
          <motion.a 
            href="https://www.facebook.com/surgenarchs" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
          >
            <Facebook size={20} />
            Facebook
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/surgenarchs/" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-600 transition-all flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
          >
            <Instagram size={20} />
            Instagram
          </motion.a>
          <motion.a 
            href="https://x.com/surgenarchs" target="_blank" rel="noopener noreferrer"
            className="hover:text-cyan-600 transition-all flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
          >
            <Twitter size={20} />
            X
          </motion.a>

          <motion.a href="https://www.tiktok.com/@surgenarchs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              >
            TikTok
          </motion.a>
        </CardFooter>
      </Card>
    </div>
  );
}
