"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";

export default function CookiePolicy() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    personalization: false,
    security: true,
  });

  const toggleCookieSetting = (type: string) => {
    setCookieSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl text-green-600 font-bold">Cookie Policy</h1>
        <p className="text-gray-500 mt-2">
          We use cookies to improve your browsing experience. Manage your preferences below.
        </p>
      </motion.div>

      {/* Section: What Are Cookies? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">1. What Are Cookies?</h2>
        <p className="mt-2 text-gray-500">
          Cookies are small text files stored on your device. They help us understand user behavior,
          improve security, and enhance your experience.
        </p>
      </motion.div>

      {/* Section: Types of Cookies */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">2. Types of Cookies We Use</h2>
        <ul className="list-disc text-gray-400 pl-6 mt-2 space-y-2">
          <li>
            <strong>Essential Cookies:</strong> Required for website functionality and security.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us analyze traffic and user interactions.
          </li>
          <li>
            <strong>Personalization Cookies:</strong> Enable customized content and preferences.
          </li>
          <li>
            <strong>Security Cookies:</strong> Protect against fraud and unauthorized access.
          </li>
        </ul>
      </motion.div>

      {/* Section: Interactive Cookie Settings */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 p-4 border shadow-2xl rounded-lg"
      >
        <h2 className="text-2xl text-green-500 font-semibold">3. Manage Your Cookie Preferences</h2>
        <p className="text-gray-500 mt-2">
          You can control which cookies you allow. Note that essential cookies cannot be disabled.
        </p>

        {/* Cookie Toggle Settings */}
        <div className="mt-4 text-green-500 space-y-3">
          <div className="flex justify-between items-center p-3 border rounded-lg">
            <span>Essential Cookies</span>
            <Switch checked={cookieSettings.essential} disabled />
          </div>
          <div className="flex justify-between items-center p-3 border rounded-lg">
            <span>Analytics Cookies</span>
            <Switch
              checked={cookieSettings.analytics}
              onCheckedChange={() => toggleCookieSetting("analytics")}
            />
          </div>
          <div className="flex justify-between items-center p-3 border rounded-lg">
            <span>Personalization Cookies</span>
            <Switch
              checked={cookieSettings.personalization}
              onCheckedChange={() => toggleCookieSetting("personalization")}
            />
          </div>
          <div className="flex justify-between items-center p-3 border rounded-lg">
            <span>Security Cookies</span>
            <Switch
              checked={cookieSettings.security}
              onCheckedChange={() => toggleCookieSetting("security")}
              className="cursor-pointer"
            />
          </div>
        </div>
      </motion.div>

      {/* Section: How to Control Cookies */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">4. How to Control Cookies</h2>
        <p className="mt-2 text-gray-500">
          You can manage or delete cookies in your browser settings. Below are links to help you manage
          cookies on different browsers:
        </p>
        <ul className="list-disc text-gray-400 pl-6 mt-2 space-y-1">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">
              Internet Explorer/Edge
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Section: Changes to This Policy */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl text-green-500 font-semibold mt-6">5. Updates to This Cookie Policy</h2>
        <p className="mt-2 text-gray-500">
          We may update our Cookie Policy from time to time. Significant changes will be communicated
          via our website.
        </p>
      </motion.div>

      {/* Contact & CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 p-4 bg-green-500 hover:bg-green-600 rounded-lg text-center"
      >
        <h3 className="text-lg font-semibold">Have Questions?</h3>
        <p className="text-green-600">Reach out to us at:</p>
        <p className="text-blue-600 font-semibold mt-1">privacy@surgenarchs.com</p>
      </motion.div>
    </div>
  );
}
