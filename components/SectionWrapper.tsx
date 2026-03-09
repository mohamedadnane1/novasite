"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  id?: string;
  children: React.ReactNode;
  delay?: number;
};

export function SectionWrapper({ id, children, delay = 0 }: Props) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimatedRef.current) return;

    if (typeof IntersectionObserver === "undefined") {
      controls.start("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            controls.start("visible");
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  function setRefs(node: HTMLDivElement | null) {
    if (!node) return;
    ref.current = node;
  }

  return (
    <section id={id} className="section-padding">
      <motion.div
        ref={setRefs}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay }
          }
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

