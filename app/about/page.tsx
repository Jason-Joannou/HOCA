'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHorizontalDone, setIsHorizontalDone] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger horizontal animation after component mounts
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { x: 0, y: 0, opacity: 0 },
    animate: ({ staggerIndex }) => ({
      x: isMounted ? 0 : (staggerIndex - 1) * 25,
      y: isMounted ? 0 : staggerIndex * 25,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
    vertical: ({ staggerIndex }) => ({
      x: -50, // Move to left, adjust this value as needed
      y: staggerIndex * 30,
      opacity: 1,
      transition: {
        delay: 0.1 * staggerIndex, // Slight delay for staggered vertical animation
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  const letters = ['H', 'O', 'C', 'A'];

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <motion.div
        className={`text-4xl`}
        initial="initial"
        animate="animate"
        variants={containerVariants}
        onAnimationComplete={() => setIsHorizontalDone(true)} // Set the state to true when horizontal animation is done
      >
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            custom={{ staggerIndex: index }}
            initial="initial"
            animate={isHorizontalDone ? 'vertical' : 'animate'}
            variants={itemVariants}
            className="relative inline-block"
          >
            {letter}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Page;