"use client";

import { useEffect } from "react";

export default function ClientSettings() {

  // Stickying header
  useEffect(() => {
    const handleScroll = () => {
      document
        .querySelector("header")
        ?.classList.toggle(
          "scrolled-header",
          window.scrollY > document.querySelector("header").scrollHeight
        );
    };

    window.addEventListener("scroll", handleScroll);

    // Run once in case the user has already scrolled when the component mounts
    handleScroll();

    // Cleanup function to remove the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate numbers in StatisticsSection
  useEffect(() => {
    document.querySelectorAll(".animate-numbers").forEach(counter => {
      let inc = 6, [target, suffix = "", prefix = ""] = [
        +counter.getAttribute("data-target"),
        counter.getAttribute("data-suffix"),
        counter.getAttribute("data-prefix")
      ];
      let curr = +counter.innerText || 0;
      (function updateNum() {
        curr = Math.ceil(curr + target / 200);
        inc += 0.3;
        counter.textContent = `${prefix}${curr < target ? curr : target}${suffix}`;
        curr < target && setTimeout(updateNum, inc);
      })();
    });
  }, []);


  return null;
}
