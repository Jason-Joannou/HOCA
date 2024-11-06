"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Oswald } from "next/font/google";
import { FadingWords } from "./components/FadingWords";
import { useRouter } from "next/navigation";

const oswald = Oswald({ subsets: ["cyrillic"] });

const WavyCircle = () => (
  <svg
    className="fixed inset-0 w-full h-full z-50"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M50,50
         C60,50 70,45 80,50
         C90,55 100,60 100,70
         C100,80 90,90 80,95
         C70,100 60,100 50,100
         C40,100 30,100 20,95
         C10,90 0,80 0,70
         C0,60 10,55 20,50
         C30,45 40,50 50,50 Z"
      fill="#1e88e5"
      initial={{ scale: 0, translateX: "50%", translateY: "50%" }}
      animate={{ scale: 20, translateX: "0%", translateY: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  </svg>
);

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isTransitioning) {
      document.body.style.backgroundColor = "#1e88e5";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [isTransitioning]);

  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/about");
    }, 1200);
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

      <div className="text-center z-10">
        <h1
          className={`${oswald.className} text-8xl font-black mb-4 text-blue-600 flex justify-center`}
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

      <AnimatePresence>{isTransitioning && <WavyCircle />}</AnimatePresence>
    </div>
  );
}
