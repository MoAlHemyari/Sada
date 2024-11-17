import React, { useEffect } from "react";

export default function IsFirstVisit() {
  let isFirstVisit;

  useEffect(() => {
    const saved = localStorage.getItem("isFirstVisit");
    if (saved === "true" || saved === "false") {
      localStorage.isFirstVisit = false;
      isFirstVisit = false;
    } else {
      localStorage.setItem("isFirstVisit", true);
      isFirstVisit = true;
    }
  }, []);

  return isFirstVisit;
}
