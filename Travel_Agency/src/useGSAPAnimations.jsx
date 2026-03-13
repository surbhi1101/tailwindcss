import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
function useGSAPAnimations() {
  // section animation
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fadeIn-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // animated-text
  useEffect(() => {
    document.fonts.ready.then(() => {
      const elements = document.querySelectorAll(
        ".animate-title p, .animate-text p",
      );

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const split = SplitText.create(entry.target, {
                type: "chars,words,lines",
              });

              gsap.from(split.chars, {
                y: 10,
                opacity: 0,
                duration: 0.7,
                ease: "power4.out",
                stagger: 0.04,
              });

              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 },
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    });
  }, []);

  // underline animation
  useEffect(() => {
    const lines = document.querySelectorAll(".animate-underline");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target, {
              width: 0,
              opacity: 0,
              duration: 2,
              ease: "power2.out",
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    lines.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // split lines
  useEffect(() => {
    document.fonts.ready.then(() => {
      const elements = document.querySelectorAll(
        ".split-lines ,.blog-readmore button",
      );

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;

              gsap.set(el, { opacity: 1 });

              SplitText.create(el, {
                type: "words,lines",
                autoSplit: true,

                onSplit: (self) => {
                  return gsap.from(self.lines, {
                    yPercent: 40,
                    opacity: 0,
                    stagger: 0.06,
                    duration: 1,
                    ease: "power2.out",
                  });
                },
              });

              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.3 },
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    });
  }, []);
}

export default useGSAPAnimations;
