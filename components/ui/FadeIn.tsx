"use client";

import React, { useRef, useEffect, useState } from "react";

type Direction = "tb" | "bt" | "lr" | "rl" | "center";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number; // Animation duration in milliseconds
  delay?: number; // Delay before animation starts
  opacity?: boolean; // Whether opacity animation is enabled
  direction?: Direction; // Animation direction
  scale?: number, // Scale factor
  displacement?: number; // Distance to move in pixels
  once?: boolean; // Whether to animate only once
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration = 1000,
  delay = 0,
  opacity = true,
  direction = "center",
  scale = 1,
  displacement = 50,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getTransform = (): string => {
    if (!isVisible) {
      switch (direction) {
        case "tb":
          return `translateY(${displacement}px)`;
        case "bt":
          return `translateY(-${displacement}px)`;
        case "lr":
          return `translateX(-${displacement}px)`;
        case "rl":
          return `translateX(${displacement}px)`;
        case "center":
          return `scale(${scale})`;
        default:
          return "";
      }
    }
    return "translate(0, 0) scale(1)";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [once]);

  const styles = {
    transition: `all ${duration}ms ease-out ${delay}ms`,
    opacity: isVisible || !opacity ? 1 : 0,
    transform: getTransform(),
  };

  return (
    <div ref={ref} style={styles} aria-hidden={!isVisible}>
      {children}
    </div>
  );
};

export default FadeIn;
