"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

const greekValues = [
  {
    greek: "Φιλία",
    english: "Friendship",
    description: "Building lasting connections within our community",
  },
  {
    greek: "Παιδεία",
    english: "Education",
    description: "Fostering knowledge and personal growth",
  },
  {
    greek: "Πολιτισμός",
    english: "Culture",
    description: "Celebrating and preserving our rich heritage",
  },
  {
    greek: "Κοινότητα",
    english: "Community",
    description: "Creating a supportive network for all members",
  },
  {
    greek: "Πρόοδος",
    english: "Progress",
    description: "Advancing Hellenic ideals in the modern world",
  },
];

export default function About() {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1
        className={`${playfair.className} text-5xl font-bold mb-8 text-blue-600 text-center`}
      >
        About HOCA
      </h1>

      <section className="mb-16">
        <p className="text-lg mb-6 leading-relaxed">
          In the vibrant heart of Cape Town, where diverse cultures intertwine,
          the Hellenic Organization for Contemporary Advancement (HOCA) stands
          as a beacon of Hellenic heritage and modern progress. Founded on the
          principles of community, education, and cultural preservation, HOCA
          has become a home away from home for those who cherish Greek
          traditions and seek to weave them into the fabric of contemporary
          South African life.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Our journey began with a vision: to create a space where the timeless
          wisdom of ancient Greece could flourish alongside the dynamism of
          today's world. We believe that the philosophies, art, and values that
          have guided Hellenic culture for millennia have profound relevance in
          our rapidly changing society. Through HOCA, we strive to bridge the
          gap between our rich past and the promising future that lies ahead.
        </p>
      </section>

      <section className="mb-16">
        <h2
          className={`${playfair.className} text-3xl font-bold mb-6 text-blue-600`}
        >
          Our Mission
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          At the core of HOCA's mission is the desire to nurture a thriving
          Hellenic community in Cape Town. We are committed to providing a
          platform where individuals can explore their heritage, forge
          meaningful connections, and contribute to the cultural mosaic of our
          city. Through a diverse array of programs and events, we aim to:
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Cultivate an appreciation for Hellenic culture, from its ancient roots
          to its modern expressions. Foster personal and professional growth,
          empowering our members to excel in their chosen paths. Create
          opportunities for cultural exchange, promoting understanding and
          friendship between the Hellenic community and the broader Cape Town
          society. Support Hellenic studies and language preservation, ensuring
          that future generations can access the wealth of Greek knowledge and
          literature.
        </p>
      </section>

      <section className="mb-16">
        <h2
          className={`${playfair.className} text-3xl font-bold mb-6 text-blue-600`}
        >
          The HOCA Experience
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          To truly understand HOCA is to experience the values that guide us.
          Each of these principles is deeply rooted in Hellenic tradition and
          shapes our approach to building a vibrant, forward-thinking community:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {greekValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                setActiveValue(activeValue === index ? null : index)
              }
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                {value.greek}
              </h3>
              <p className="text-gray-600">{value.english}</p>
              <AnimatePresence>
                {activeValue === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm mt-2"
                  >
                    {value.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className={`${playfair.className} text-3xl font-bold mb-6 text-blue-600`}
        >
          Join Our Community
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Whether you're of Greek descent, a philhellene, or simply curious
          about Hellenic culture, HOCA welcomes you with open arms. Our doors
          are open to all who wish to explore the richness of Greek heritage and
          contribute to its ongoing story in Cape Town. Join us in our events,
          participate in our programs, and become part of a community that
          celebrates the past while embracing the future.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Together, let's create a tapestry of experiences that honors our roots
          and inspires new growth. Welcome to HOCA – where Hellenic heritage
          meets contemporary advancement, and where every individual has the
          opportunity to write their own chapter in our collective story.
        </p>
      </section>
    </div>
  );
}
