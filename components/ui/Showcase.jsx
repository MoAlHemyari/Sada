"use client"
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Showcase({ lang }) {
  const containerRef = useRef(null);
  const [screenCategory, setScreenCategory] = useState("desktop");
  const isRTL = lang === "ar";

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

  // Define base ranges for LTR
  const baseRanges = {
    mobile: {
      rightX: [80, 90],
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

  // Function to mirror ranges for RTL
  const getRangesForDirection = (baseRange) => {
    if (!isRTL) return baseRange;

    return {
      // For RTL, swap and negate X values
      rightX: baseRange.rightX.map(x => -x - 200),
      leftX: baseRange.leftX.map(x => -x + 20),
      // For RTL, swap and negate rotation values
      rightRotate: baseRange.rightRotate.map(r => -r - 8),
      leftRotate: baseRange.leftRotate.map(r => -r - 8),
    };
  };

  // Get direction-aware ranges
  const { rightX, leftX, rightRotate, leftRotate } = getRangesForDirection(baseRanges[screenCategory]);

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
          x: isRTL ? leftXTransform : rightXTransform,
          rotate: isRTL ? leftRotateTransform : rightRotateTransform,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <Image
          src="/image/showcase-dashboard.webp"
          className=""
          width={1920}
          height={1080}
          alt={isRTL ? "عرض لوحة التحكم" : "Dashboard Showcase"}
          unoptimized
        />
      </motion.div>      <motion.div
        className="absolute top-24 tablet:top-28 desktop:w-40 tablet:w-40 w-28"
        style={{
          x: isRTL ? rightXTransform : leftXTransform,
          rotate: isRTL ? rightRotateTransform : leftRotateTransform,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <Image
          src="/image/showcase-mobile.webp"
          className=""
          width={1920}
          height={1080}
          alt={isRTL ? "عرض الجوال" : "Mobile Showcase"}
          unoptimized
        />
      </motion.div>
    </div>
  );
}
