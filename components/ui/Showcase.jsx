"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Showcase() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isMobile = window.innerWidth <= 768;
  const [rightXTransform, rightRotate] = [
    useTransform(scrollYProgress, [0, 1], isMobile ? [180, 120] : [300, 120]),
    useTransform(scrollYProgress, [0, 1], [10, 3])
  ];
  const [leftXTransform, leftRotate] = [
    useTransform(scrollYProgress, [0, 1], isMobile ? [-200, -120] : [-380, -140]),
    useTransform(scrollYProgress, [0, 1], [-30, 0])
  ];

  return (
    <div
      ref={containerRef}
      className="relative desktop:h-96 tablet:h-96 h-56 flex items-center justify-center overflow-hidden bg-[url('/image/bg-showcase.svg')] bg-contain bg-center bg-no-repeat"
    >
            <motion.div
        className="absolute desktop:w-96 tablet:w-96 w-64"
        style={{
          x: rightXTransform,
          rotate: rightRotate,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <img src="/image/dashboard-showcase.svg" />
      </motion.div>
      <motion.div
        className="absolute desktop:w-40 tablet:w-40 w-28"
        style={{
          x: leftXTransform,
          rotate: leftRotate,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <img src="/image/mobile-showcase.svg" />
      </motion.div>

    </div>
  );
}

