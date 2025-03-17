"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "AI-Powered Chatbot",
    category: "AI & Automation",
    description: "An advanced AI chatbot that enhances customer support efficiency by 70%.",
    image: "/chatai.jpeg",
    url: "/dashboard/portfolio/chatbot",
  },
  {
    id: 2,
    title: "E-Commerce Analytics Dashboard",
    category: "Data Science",
    description: "A data-driven dashboard that helps online stores optimize sales and inventory.",
    image: "/dashboard.png",
    url: "/projects/ecommerce-dashboard",
  },
  {
    id: 3,
    title: "Predictive Maintenance for Manufacturing",
    category: "Machine Learning",
    description: "ML models to reduce machine downtime by 40% and optimize performance.",
    image: "/predictive.png",
    url: "/projects/predictive-maintenance",
  },
];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="py-4 px-4">
      <h1>Portfolio page</h1>
   
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-green-500">Our Case Studies & Portfolio</h1>
        <p className="mt-2 text-gray-400">{`Discover how we've transformed businesses with AI & Data Science.`}</p>
      </motion.div>


      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {["All", "AI & Automation", "Data Science", "Machine Learning"].map((category) => (
          <Button
            key={category}
            className={`px-5 py-2 rounded-lg transition-all ${
              selectedCategory === category
                ? "bg-green-500 shadow-lg"
                : "bg-green-400 hover:bg-green-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-muted/50 shadow-lg hover:shadow-green-500/50 transition-all rounded-lg">
              <CardHeader>
                <CardTitle className="text-green-500 text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={240}
                  height={240}
                  className="w-full h-40 object-cover rounded-md transition-transform hover:scale-105"
                />
                <p className="mt-3 text-gray-400 text-center">{project.description}</p>
                <Link href={project.url} className="w-full">
                  <Button className="mt-4 w-full cursor-pointer bg-green-500 hover:bg-green-600 ">
                    View Project
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold text-green-500">Want to work with us?</h2>
        <p className="text-gray-400 mt-2">{`Let's create something amazing together.`}</p>
        <Link href="/dashboard/contacts">
          <Button className="mt-4 px-6 py-3 cursor-pointer bg-green-500 hover:bg-green-600 ">
            Get in Touch
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
