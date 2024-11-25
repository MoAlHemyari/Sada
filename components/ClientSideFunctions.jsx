"use client";

import { useEffect } from "react";

export default function ClientSideFunctions() {
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
        inc += 0.6;
        counter.textContent = `${prefix}${curr < target ? curr : target}${suffix}`;
        curr < target && setTimeout(updateNum, inc);
      })();
    });
  }, []);

  return null;
}
