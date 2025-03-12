"use client";

import { motion } from "framer-motion";
import { BarChart, Brain, LineChart, Database, ShieldCheck, Rocket, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Predictive Analytics",
    description: "Forecast trends and behaviors using AI-driven insights.",
    icon: <LineChart size={50} className="text-green-400" />,
  },
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable business strategies.",
    icon: <BarChart size={50} className="text-blue-400" />,
  },
  {
    title: "Machine Learning",
    description: "AI models customized to solve complex business problems.",
    icon: <Brain size={50} className="text-yellow-400" />,
  },
  {
    title: "Big Data Management",
    description: "Optimize and manage large-scale datasets efficiently.",
    icon: <Database size={50} className="text-purple-400" />,
  },
  {
    title: "Cybersecurity Solutions",
    description: "Ensure data privacy and protection against cyber threats.",
    icon: <ShieldCheck size={50} className="text-red-400" />,
  },
  {
    title: "AI Automation",
    description: "Streamline operations with intelligent process automation.",
    icon: <Rocket size={50} className="text-teal-400" />,
  },
  {
    title: "Natural Language Processing",
    description: "Enhancing human-computer interactions.",
    icon: <BrainCircuit size={50} className="text-teal-400" />,
  },
];

export default function Services() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-4">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-400">Our Services</h1>
        <p className="mt-3 text-gray-400 text-lg md:text-xl max-w-2xl">
          Cutting-edge AI solutions tailored for business growth and efficiency.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-muted/50 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="mt-2 text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
