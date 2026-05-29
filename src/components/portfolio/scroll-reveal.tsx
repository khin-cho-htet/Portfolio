"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // base delay in ms
  stagger?: boolean; // if true, children get staggered delays automatically
  staggerSpeed?: number; // ms between consecutive children
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  staggerSpeed = 100,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // trigger early
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // If we are staggering, we'll wrap children or inject styles.
  // A clean approach is to map children and apply inline styles.
  if (stagger) {
    return (
      <div
        ref={containerRef}
        className={`${className}`}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;

          const itemDelay = delay + index * staggerSpeed;
          
          // Cast child.props as any to safely access className
          const childProps = child.props as any;
          const childClassName = childProps.className || "";

          return React.cloneElement(child, {
            className: `${childClassName} reveal-item ${isRevealed ? "revealed" : ""}`.trim(),
            style: {
              ...childProps.style,
              transitionDelay: `${itemDelay}ms`,
            },
          } as any);
        })}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`reveal-item ${isRevealed ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
