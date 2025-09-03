"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const CallToActionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const popupRef = useRef(null);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);
  const handleMouseMove = (e: any) => {
    const popup = popupRef.current;
    const popupWidth = popup?.offsetWidth || 0;
    const popupHeight = popup?.offsetHeight || 0;

    let x = e.clientX + 15;
    let y = e.clientY + 15;

    if (x + popupWidth > window.innerWidth) {
      x = e.clientX - popupWidth - 10;
    }

    if (y + popupHeight > window.innerHeight) {
      y = e.clientY - popupHeight - 10;
    }

    setPos({ x, y });
  };

  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentiful Search Section Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 md:mr-10">
            <h2 className="text-2xl font-bold text-white">
              Find Уour Dream Rental Property
            </h2>
          </div>
          <div>
            <p className="text-white mb-3">
              Discover a wide range of rental properties in your desired
              location.
            </p>
            <div className="flex justify-center md:justify-start gap-4 ">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                className="inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-600 hover:text-primary-50 cursor-pointer transition-all duration-300"
              >
                Search
              </button>
              {isVisible && (
                <div
                  ref={popupRef}
                  style={{
                    position: "fixed",
                    top: pos.y,
                    left: pos.x,
                    background: "white",
                    border: "1px solid #ccc",
                    padding: "15px 10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    pointerEvents: "none",
                    // whiteSpace: "nowrap",
                    maxWidth: "300px",
                  }}
                >
                  Search for properties with our inovative search engine. Find
                  the best places to stay for short or long period.
                </div>
              )}
              <Link
                href="/signup"
                className="inline-block text-white bg-secondary-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600 transition-all duration-300"
                scroll={false}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;
