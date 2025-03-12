"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import Typed from 'typed.js';

const testimonials = [
  { name: "Jane Doe", feedback: "Exceptional data scientist with a keen eye for detail!" },
  { name: "John Smith", feedback: "Helped our company scale AI solutions effortlessly." },
  { name: "Alice Johnson", feedback: "A true expert in data-driven decision-making!" },
];

const skills = [
  { name: "Python", description: "A powerful programming language for AI & ML." },
  { name: "Machine Learning", description: "Building intelligent models with data." },
  { name: "Deep Learning", description: "Using neural networks for complex tasks." },
  { name: "Data Visualization", description: "Converting data into meaningful insights." },
  { name: "SQL", description: "Managing and querying relational databases." },
  { name: "Statistical Analysis", description: "Applying statistics to analyze data trends." },
  { name: "Data Wrangling", description: "Cleaning and transforming raw data." },
{ name: "Big Data (Hadoop, Spark)", description: "Processing massive datasets efficiently." },
{ name: "NLP", description: "Understanding and processing human language." },
{ name: "Predictive Modeling", description: "Forecasting outcomes using data patterns." },
{ name: "Time Series Analysis", description: "Analyzing time-dependent data trends." },
{ name: "Data Engineering", description: "Building and maintaining data pipelines." },
{ name: "ETL Processes", description: "Extract, Transform, Load for data workflows." },
{ name: "Business Intelligence", description: "Using data to drive business decisions." },
{ name: "Cloud Computing (AWS, Azure, GCP)", description: "Deploying scalable solutions in the cloud." },
{ name: "Version Control (Git)", description: "Tracking and managing code changes." },
{ name: "A/B Testing", description: "Comparing two versions to optimize performance." },
{ name: "Computer Vision", description: "Teaching computers to interpret images." },
{ name: "AI Deployment", description: "Deploying AI models into production." },
];

export default function Dashboard() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; description: string } | null>(null);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<span class='text-green-800'>Welcome to</span>",
        "<span class='text-green-500'>Surgen Archs</span>",
        "<span class='italic text-green-400'>A One-stop Shop</span>",
        "<span class='italic text-green-500'>For Business</span>",
        "<span class='italic text-green-600'>Solutions</span>",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      startDelay: 100,
      backDelay: 1000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: ".",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 transition-all duration-300 overflow-scroll">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            <motion.span
              ref={el}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </h1>
        </motion.div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          We specialize in AI-driven solutions, data analytics, and business intelligence, empowering businesses to harness data for smarter decisions.
        </p>
      </motion.div>

      {/* Skills & Testimonials in One Row */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-green-500 text-center">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-4 justify-center relative">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 border border-green-500 text-green-700 dark:text-green-300 rounded-full text-sm cursor-pointer transition duration-300 ease-in-out"
                >
                  {skill.name}
                </motion.span>
                <AnimatePresence>
                  {hoveredSkill?.name === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-green-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
                    >
                      {skill.description}
                      <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-green-600"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-green-500">Testimonials</h2>
          <div className="relative h-24 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <p className="mt-4 text-gray-700 dark:text-gray-300 italic">
                  &ldquo;{testimonials[testimonialIndex].feedback}&rdquo;
                </p>

                <p className="mt-2 text-green-700 dark:text-green-400 font-semibold">
                  {testimonials[testimonialIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <Button
            className="mt-4 cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
          >
            Next Testimonial
          </Button>
        </motion.div>
      </div>

      {/* Floating Contact Button */}
      <Link href="/dashboard/contacts">
        <motion.div
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          <PhoneCall className="w-6 h-6" />
        </motion.div>
      </Link>
    </div>
  );
}