"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (query) {
      setResults([
        `Result 1 for "${query}"`,
        `Result 2 for "${query}"`,
        `More about "${query}"`,
      ]);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold">Search Results for "{query}"</h1>

      {results.length > 0 ? (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 space-y-3"
        >
          {results.map((result, index) => (
            <li
              key={index}
              className="p-4 bg-white shadow rounded-lg hover:shadow-md transition"
            >
              <Link href={`/dashboard/${query.toLowerCase()}`} className="text-green-600">
                {result}
              </Link>
            </li>
          ))}
        </motion.ul>
      ) : (
        <p className="mt-4 text-gray-600">No results found.</p>
      )}
    </div>
  );
}
