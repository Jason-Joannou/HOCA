"use client";

import { Button } from "./components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadingWords } from "./components/FadingWords";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50"
        animate={{
          background: [
            "linear-gradient(to bottom right, #E6F3FF, #E6FCFF, #E6FFFB)",
            "linear-gradient(to bottom right, #E6FCFF, #E6FFFB, #E6F3FF)",
            "linear-gradient(to bottom right, #E6FFFB, #E6F3FF, #E6FCFF)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <FadingWords />

      <div className="text-center z-10">
        <h1 className="text-8xl font-black mb-4 text-blue-600 flex justify-center">
          {"HOCA".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.1,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Motto with appearance animation */}
        <motion.p
          className="text-2xl mb-8 text-teal-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hellenic Heritage, Modern Horizons
        </motion.p>

        {/* Button with hover effect */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-colors duration-300"
            asChild
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
