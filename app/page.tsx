"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { FadingWords } from "./components/FadingWords";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsTransitioning(true);
    // Navigate after animation completes
    setTimeout(() => {
      router.push("/about");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
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
        <h1
          className={`${playfair.className} text-8xl font-black mb-4 text-blue-600 flex justify-center`}
        >
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

        <motion.p
          className="text-2xl mb-8 text-teal-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hellenic Heritage, Modern Horizons
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="/about"
            onClick={handleLearnMore}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-colors duration-300 inline-block"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-blue-600 z-50"
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 10, borderRadius: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
