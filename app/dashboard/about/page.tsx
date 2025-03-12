"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-4">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-400">About Sugern Archs</h1>
        <p className="mt-3 text-gray-400 text-lg md:text-xl max-w-2xl">
          We are a cutting-edge technology company specializing in AI, Machine Learning, and Data Science.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl text-center md:text-left">
        {/* Mission */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }} 
          className="bg-muted/50 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-green-400">Our Mission</h2>
          <p className="mt-2 text-gray-400">
            Empowering businesses through innovative AI-driven solutions, transforming data into insights.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.4, duration: 0.8 }} 
          className="bg-muted/50 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-green-400">Our Vision</h2>
          <p className="mt-2 text-gray-400">
            To be the leading force in AI & Data Science, revolutionizing industries worldwide.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="mt-12 max-w-4xl text-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-green-400">Our Core Values</motion.h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Innovation", desc: "We drive continuous AI innovation." },
            { title: "Integrity", desc: "We uphold transparency & trust." },
            { title: "Excellence", desc: "We deliver top-tier AI solutions." }
          ].map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
              className="bg-muted/50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-green-400">{value.title}</h3>
              <p className="mt-2 text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
