import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const words = [
  { text: "Φιλότιμο", translation: "Philotimo" },
  { text: "Φιλοξενία", translation: "Hospitality" },
  { text: "Αρετή", translation: "Virtue" },
  { text: "Τιμή", translation: "Honor" },
  { text: "Αξιοπρέπεια", translation: "Dignity" },
  { text: "Ελπίδα", translation: "Hope" },
  { text: "Υγεία", translation: "Health" },
  { text: "Ευτυχία", translation: "Happiness" },
  { text: "Ελευθερία", translation: "Freedom" },
];

const FadingWord: React.FC<{ word: (typeof words)[0]; index: number }> = ({
  word,
  index,
}) => {
  const controls = useAnimation();
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const animate = async () => {
      while (true) {
        setPosition({
          top: Math.random() * 80 + 10, // 10% to 90%
          left: Math.random() * 80 + 10, // 10% to 90%
        });
        await controls.start({ opacity: [0, 1, 1, 0] });
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait before next cycle
      }
    };
    animate();
  }, [controls]);

  return (
    <motion.div
      className="absolute text-2xl text-blue-300/30 pointer-events-none"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
      }}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{
        duration: 5,
        times: [0, 0.1, 0.9, 1],
        delay: index * 2,
      }}
    >
      <div>{word.text}</div>
      <div className="text-sm">{word.translation}</div>
    </motion.div>
  );
};

export const FadingWords: React.FC = () => {
  return (
    <>
      {words.map((word, index) => (
        <FadingWord key={index} word={word} index={index} />
      ))}
    </>
  );
};
