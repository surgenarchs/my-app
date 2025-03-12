"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TermsConditions from "@/components/TermConditions";
import Privacy from "@/components/PrivacyPolicy";
import CookiePolicy from "@/components/CookiePolicy";

const policies = [
  { id: 1, title: "Privacy Policy", component: <Privacy /> },
  { id: 2, title: "Terms & Conditions", component: <TermsConditions /> },
  { id: 3, title: "Cookie Policy", component: <CookiePolicy /> },
];

export default function PoliciesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Privacy Policy");

  return (
    <div className="py-4 px-4 max-w-4xl mx-auto text-center">
      {/* Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-green-600"
      >
        Legal Policies
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {policies.map(({ title }) => (
          <Button
            key={title}
            variant={selectedCategory === title ? "default" : "outline"}
            className="bg-green-500 hover:bg-green-600 transition-all px-6 py-2"
            onClick={() => setSelectedCategory(title)}
          >
            {title}
          </Button>
        ))}
      </div>

      {/* Display Selected Policy */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-left"
      >
        {policies.find((policy) => policy.title === selectedCategory)?.component}
      </motion.div>
    </div>
  );
}
