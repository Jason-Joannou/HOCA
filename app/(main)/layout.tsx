"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        className="bg-white shadow-md"
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            HOCA
          </Link>
          <div className="space-x-4">
            <Link href="/about" className="text-blue-600 hover:text-blue-800">
              About
            </Link>
            <Link href="/events" className="text-blue-600 hover:text-blue-800">
              Events
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">
              Contact
            </Link>
          </div>
        </div>
      </motion.nav>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-6 py-8"
      >
        {children}
      </motion.main>

      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-blue-600 z-50"
          initial={{ scale: 10 }}
          animate={{ scale: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
