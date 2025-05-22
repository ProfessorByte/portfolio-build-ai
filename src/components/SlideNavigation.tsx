import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import styled from "styled-components";
import {
  LeftArrow,
  RightArrow,
  SlideProgress,
  ProgressDot,
  SlideFooter,
  LogoImage,
} from "./SlideComponents";
import { ArrowBackIcon, ArrowForwardIcon } from "./Icons";
import { useSwipe } from "../hooks/useSwipe";

interface SlideNavigationProps {
  children: React.ReactNode[];
  initialSlide?: number;
}

interface MotionProps {
  key: number;
  custom?: number;
  variants?: Variants;
  initial?: string;
  animate?: string;
  exit?: string;
}

const SlideContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const slideVariants = {
  hidden: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 250, damping: 25 },
      opacity: { duration: 0.4, ease: "easeInOut" },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 250, damping: 25 },
      opacity: { duration: 0.3, ease: "easeIn" },
    },
  }),
};

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  children,
  initialSlide = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  const [direction, setDirection] = useState(0);
  const slideCount = React.Children.count(children);
  const nextSlide = useCallback(() => {
    if (currentIndex < slideCount - 1) {
      setDirection(1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentIndex, slideCount]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]); // Use the swipe hook for touch gestures
  const { ref } = useSwipe(
    {
      onSwipeLeft: nextSlide,
      onSwipeRight: prevSlide,
    },
    { threshold: 40 }
  );
  return (
    <SlideContainerWrapper ref={ref}>
      <AnimatePresence initial={false} mode="sync">
        {React.Children.map(children, (child, index) => {
          // Only render the current slide
          if (index === currentIndex) {
            const props: MotionProps = {
              key: index,
              animate: "visible",
              initial: "hidden",
              exit: "exit",
              variants: slideVariants,
              custom: direction,
            };
            return React.cloneElement(child as React.ReactElement, props);
          }
          return null;
        })}
      </AnimatePresence>
      {currentIndex > 0 && (
        <LeftArrow onClick={prevSlide} aria-label="Anterior slide">
          <ArrowBackIcon />
        </LeftArrow>
      )}
      {currentIndex < slideCount - 1 && (
        <RightArrow onClick={nextSlide} aria-label="Siguiente slide">
          <ArrowForwardIcon />
        </RightArrow>
      )}{" "}      <SlideProgress
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 101, // Mayor que el z-index del footer (100)
          background: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(5px)",
          padding: "4px 8px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {Array.from({ length: slideCount }).map((_, index) => (
          <ProgressDot key={index} active={index === currentIndex} />
        ))}
      </SlideProgress>
      {/* Global Footer que aparecerá en todas las diapositivas */}      <SlideFooter
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          zIndex: 100,
          background: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(5px)",
          padding: "4px 8px",
          borderRadius: "4px",
          maxWidth: "calc(100% - 100px)", // Evitar que se solape con los indicadores
        }}
      >
        <LogoImage src="/PablouxLogo.png" alt="Pabloux Logo" />
        <span>Powered by Pabloux Darkmind</span>
      </SlideFooter>
    </SlideContainerWrapper>
  );
};
