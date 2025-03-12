"use client";

import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-green-600">Privacy Policy</h1>
        <p className="text-gray-500 mt-2">
          Last updated: <span className="font-semibold">March 2025</span>
        </p>
        <p className="text-gray-500 mt-4">
          Your privacy is important to us. This policy explains how we collect, use, and protect your
          information when you use our services.
        </p>
      </motion.div>

      {/* Section: Data Collection */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">1. Data Collection</h2>
        <p className="text-gray-500 mt-2">
          We collect data through cookies, forms, and analytics tools. This includes:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mt-2 space-y-1">
          <li>Personal Information (e.g., name, email, phone number)</li>
          <li>Technical Data (e.g., IP address, browser type, device information)</li>
          <li>Usage Data (e.g., pages visited, time spent on the site)</li>
        </ul>
      </motion.div>

      {/* Section: How We Use Your Data */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">2. How We Use Your Data</h2>
        <p className="text-gray-500 mt-2">
          We use collected data to enhance your experience, including:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mt-2 space-y-1">
          <li>Personalizing content and recommendations</li>
          <li>Improving site functionality and security</li>
          <li>Sending updates, newsletters, and service-related emails</li>
        </ul>
      </motion.div>

      {/* Section: Data Security */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">3. Data Security</h2>
        <p className="text-gray-500 mt-2">
          We prioritize security and use encryption, firewalls, and secure servers to protect your
          data. However, no online platform can be 100% secure.
        </p>
      </motion.div>

      {/* Section: Third-Party Sharing */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">4. Third-Party Sharing</h2>
        <p className="text-gray-500 mt-2">
          We do not sell your data. However, we may share it with:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mt-2 space-y-1">
          <li>Trusted partners for analytics and service improvements</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </motion.div>

      {/* Section: Your Rights */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">5. Your Rights</h2>
        <p className="text-gray-500 mt-2">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mt-2 space-y-1">
          <li>Request access to your data</li>
          <li>Opt-out of data tracking and marketing emails</li>
          <li>Request data deletion or updates</li>
        </ul>
      </motion.div>

      {/* Section: Policy Updates */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">6. Changes to This Policy</h2>
        <p className="text-gray-500 mt-2">
          We may update this Privacy Policy occasionally. We encourage you to review this page for the
          latest information.
        </p>
      </motion.div>

      {/* Contact & CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 p-4 bg-green-500 hover:bg-green-600 rounded-lg text-center"
      >
        <h3 className="text-lg font-semibold">Questions or Concerns?</h3>
        <p className="text-gray-600">Contact us at:</p>
        <p className="text-blue-600 font-semibold mt-1">privacy@surgenarchs.com</p>
      </motion.div>
    </div>
  );
}
