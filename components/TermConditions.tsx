"use client";

import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-green-600">Terms & Conditions</h1>
        <p className="text-gray-400 mt-2">
          Last updated: <span className="font-semibold">March 2025</span>
        </p>
        <p className="text-gray-500 mt-4">
          By accessing or using our services, you agree to the following terms and conditions. Please read them
          carefully before using our platform.
        </p>
      </motion.div>

      {/* Section: User Responsibilities */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">1. User Responsibilities</h2>
        <p className="text-gray-500 mt-2">
          When using our services, you agree to:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mt-2 space-y-1">
          <li>Comply with all applicable laws and regulations</li>
          <li>Provide accurate and truthful information</li>
          <li>Respect the rights and privacy of other users</li>
        </ul>
      </motion.div>

      {/* Section: Account Termination */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">2. Account Suspension & Termination</h2>
        <p className="text-gray-500 mt-2">
          We reserve the right to suspend or terminate accounts that:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mt-2 space-y-1">
          <li>Violate our terms and conditions</li>
          <li>Engage in fraudulent, illegal, or abusive activities</li>
          <li>Compromise the security and integrity of our platform</li>
        </ul>
      </motion.div>

      {/* Section: Intellectual Property */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">3. Intellectual Property Rights</h2>
        <p className="text-gray-500 mt-2">
          All content on our platform, including text, graphics, logos, and software, is the property of
          Surgen Archs or its licensors. Unauthorized use, reproduction, or distribution is strictly
          prohibited.
        </p>
      </motion.div>

      {/* Section: Limitation of Liability */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">4. Limitation of Liability</h2>
        <p className="text-gray-500 mt-2">
          We strive to provide accurate and secure services, but we are not responsible for:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mt-2 space-y-1">
          <li>Any direct, indirect, or incidental damages arising from service use</li>
          <li>Technical disruptions, data loss, or unauthorized access</li>
          <li>Third-party services or external content linked on our site</li>
        </ul>
      </motion.div>

      {/* Section: Governing Law & Dispute Resolution */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">5. Governing Law & Dispute Resolution</h2>
        <p className="text-gray-500 mt-2">
          These terms are governed by the laws of [Your Country/State]. In case of disputes:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mt-2 space-y-1">
          <li>We encourage resolution through negotiation first</li>
          <li>If unresolved, disputes shall be settled through arbitration</li>
          <li>Legal proceedings will be held in the applicable jurisdiction</li>
        </ul>
      </motion.div>

      {/* Section: Changes to Terms */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">6. Updates to These Terms</h2>
        <p className="text-gray-500 mt-2">
          We may modify these Terms & Conditions as needed. Users will be notified of major changes,
          and continued use of our services implies acceptance of the updated terms.
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
        <p className="text-blue-600 font-semibold mt-1">support@surgenarchs.com</p>
      </motion.div>
    </div>
  );
}
