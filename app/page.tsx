'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Brain, LineChart, MessageCircle, ArrowRight } from 'lucide-react';
import Contact from '@/components/Contacts';

export default function Home() {
  const router = useRouter();
  const [showContact, setShowContact] = useState(false);

  const services = [
    { title: 'Predictive Analytics', desc: 'Forecast trends and behaviors.', icon: <LineChart size={40} /> },
    { title: 'Business Intelligence', desc: 'Create data-driven dashboards.', icon: <BarChart size={40} /> },
    { title: 'Machine Learning', desc: 'AI solutions tailored to your needs.', icon: <Brain size={40} /> }
  ];

  return (
    <div className="h-screen overflow-scroll w-full flex items-center justify-center text-white relative max-w-full">
      <Head>
        <title>Sugern Arch | AI & Data Science</title>
        <meta name="description" content="AI-driven solutions to transform businesses with data science and machine learning." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Background Section */}
      <div 
        className="absolute inset-0 flex flex-col overflow-scroll items-center justify-center text-center px-4"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/image.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'top center', // Adjusted for better mobile fit
          backgroundRepeat: 'no-repeat',
          height: '100%', 
          minHeight: '100vh',
          width: '100%'
        }}
        
      >
        {/* Logo */}
        <div className="flex flex-col items-center justify-center w-full">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/logo.png"
              alt="Sugern Arch Logo"
              width={150}
              height={150}
              priority
              className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shadow-lg border border-green-400"
            />
          </motion.span>
        </div>


        {/* Title & Description */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold mt-4 text-green-400"
        >
          Welcome to Sugern Archs
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}       
          className="mt-2 text-sm md:text-lg text-gray-300 max-w-md md:max-w-lg px-2">
          A futuristic hub for technology, AI, and innovation.
        </motion.p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-4 w-full max-w-4xl">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-muted/30 p-4 rounded-lg shadow-md flex flex-col items-center text-center w-full"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-white mt-2">{service.title}</h3>
              <blockquote className="text-sm border-l-2 pl-6 italic text-green-300">{service.desc}</blockquote>
            </motion.div>
          ))}

          {/* Explore Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button 
              className=" bg-green-600 w-full cursor-pointer hover:bg-green-800 px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm md:text-base"
              onClick={() => router.push('/dashboard')}
            >
              Explore Now <ArrowRight size={18} />
            </Button>
          </motion.div>

          {/* Floating Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button 
              className=" bg-blue-600 w-full hover:bg-blue-700 px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm md:text-base"
              onClick={() => setShowContact(true)}
            >
              <MessageCircle size={18} /> Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowContact(false)}
          >
            <motion.div 
              className="relative w-full max-w-sm md:max-w-md p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Contact />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
