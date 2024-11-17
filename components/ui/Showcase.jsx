"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Showcase({ lang }) {
  const containerRef = useRef(null);
  const [screenCategory, setScreenCategory] = useState("desktop");

  useEffect(() => {
    const updateScreenCategory = () => {
      const width = window.innerWidth;
      if (width <= 768) setScreenCategory("mobile");
      else if (width <= 1024) setScreenCategory("tablet");
      else if (width <= 1920) setScreenCategory("desktop");
      else setScreenCategory("large");
    };

    updateScreenCategory();
    window.addEventListener("resize", updateScreenCategory);

    return () => window.removeEventListener("resize", updateScreenCategory);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Define ranges for each screen size
  const ranges = {
    mobile: {
      rightX: [90, 100],
      leftX: [4, 8],
      rightRotate: [8, 0],
      leftRotate: [-14, -2],
    },
    tablet: {
      rightX: [340, 250],
      leftX: [10, 100],
      rightRotate: [6, 0],
      leftRotate: [-20, -4],
    },
    desktop: {
      rightX: [700, 600],
      leftX: [250, 400],
      rightRotate: [10, 0],
      leftRotate: [-20, -5],
    },
    large: {
      rightX: [700, 600],
      leftX: [250, 400],
      rightRotate: [10, 0],
      leftRotate: [-20, -5],
    },
  };

  // Get the appropriate range based on screen size
  const { rightX, leftX, rightRotate, leftRotate } = ranges[screenCategory];

  const [rightXTransform, rightRotateTransform] = [
    useTransform(scrollYProgress, [0, 1], rightX),
    useTransform(scrollYProgress, [0, 1], rightRotate),
  ];
  const [leftXTransform, leftRotateTransform] = [
    useTransform(scrollYProgress, [0, 1], leftX),
    useTransform(scrollYProgress, [0, 1], leftRotate),
  ];

  return (
    <div
      ref={containerRef}
      className="relative desktop:h-96 tablet:h-96 h-64 overflow-hidden bg-[url('/image/showcase-bg.svg')] bg-contain bg-center bg-no-repeat"
    >
      <motion.div
        className="absolute top-14 desktop:w-96 tablet:w-96 w-64"
        style={{
          x: rightXTransform,
          rotate: rightRotateTransform,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <img
          src="/image/showcase-dashboard.webp"
          alt={lang === "ar" ? "عرض لوحة التحكم" : "Dashboard Showcase"}
        />
      </motion.div>
      <motion.div
        className="absolute top-24 tablet:top-28 desktop:w-40 tablet:w-40 w-28"
        style={{
          x: leftXTransform,
          rotate: leftRotateTransform,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <img
          src="/image/showcase-mobile.webp"
          alt={lang === "ar" ? "عرض الجوال" : "Mobile Showcase"}
        />
      </motion.div>
    </div>
  );
}
