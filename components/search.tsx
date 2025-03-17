"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SearchIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Mock search suggestions (replace with API call)
  const fetchSuggestions = (query: string) => {
    const mockData = ["Dashboard", "Settings", "Profile", "Help Center", "Notifications"];
    return mockData.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    console.log("Searching for:", searchQuery);
    router.push(`/dashboard/${searchQuery.toLowerCase()}`); // Redirect to the page
    closeSearch();
  };

  const openSearch = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100); // Auto-focus input
  };

  const closeSearch = () => {
    setIsOpen(false);
    setSearchQuery("");
    setSuggestions([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeSearch();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Search Icon (Trigger) */}
      <Search
        className="w-5 h-5 text-gray-700 dark:text-gray-300 cursor-pointer hover:scale-110 transition-transform"
        onClick={openSearch}
      />

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
          >
            <motion.div
              ref={modalRef}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white dark:bg-gray-900 w-full max-w-md p-6 rounded-lg shadow-lg relative"
            >
              {/* Close Button */}
              <X
                className="absolute top-4 right-4 w-5 h-5 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white"
                onClick={closeSearch}
              />

              {/* Modal Header */}
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Search</h2>

              {/* Search Input */}
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSuggestions(fetchSuggestions(e.target.value));
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white"
                />
                {searchQuery && (
                  <X
                    className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={() => {
                      setSearchQuery("");
                      setSuggestions([]);
                    }}
                  />
                )}
              </div>

              {/* Search Suggestions */}
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="mt-2 bg-white dark:bg-gray-800 rounded-md shadow-md max-h-40 overflow-y-auto"
                  >
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          handleSearch();
                        }}
                        className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* Search Button */}
              <div className="flex justify-end mt-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}