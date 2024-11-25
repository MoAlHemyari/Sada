"use client";
import React, { useRef, useEffect, useState } from "react";

type Direction = "tb" | "bt" | "lr" | "rl" | "center";
type TriggerType = "load" | "scroll";

interface FadeInProps {
  langDir?: "ltr" | "rtl";
  children: React.ReactNode;
  duration?: number; // Animation duration in milliseconds
  delay?: number; // Delay before animation starts
  opacity?: boolean; // Whether opacity animation is enabled
  direction?: Direction; // Animation direction
  scale?: number; // Scale factor
  displacement?: number; // Distance to move in pixels
  once?: boolean; // Whether to animate only once
  className?: string;
  when?: TriggerType; // When to trigger the animation
}

const FadeIn: React.FC<FadeInProps> = ({
  langDir = "ltr",
  children,
  duration = 300,
  delay = 0,
  opacity = true,
  direction = "center",
  scale = 1,
  displacement = 5,
  once = true,
  className,
  when = "scroll",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  direction = langDir === "rtl" ? (direction === "lr" ? "rl" : "lr") : direction;

  const getTransform = (): string => {
    if (!(when === "load" ? isLoaded : isVisible)) {
      switch (direction) {
        case "tb":
          return `translateY(-${displacement}px)`;
        case "bt":
          return `translateY(${displacement}px)`;
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
    if (when === "load") {
      // Add a minimal delay to ensure the initial state is rendered
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (!once) {
            setIsVisible(false);
          }
        },
        { threshold: 0.05 }
      );

      const current = ref.current;
      if (current) observer.observe(current);

      return () => {
        if (current) observer.unobserve(current);
      };
    }
  }, [once, when]);

  const styles = {
    transition: `all ${duration}ms ease-out ${delay}ms`,
    opacity: (when === "load" ? isLoaded : isVisible) || !opacity ? 1 : 0,
    transform: getTransform(),
  };

  return (
    <div
      ref={ref}
      style={styles}
      aria-hidden={!(when === "load" ? isLoaded : isVisible)}
      className={className}
    >
      {children}
    </div>
  );
};

export default FadeIn;
