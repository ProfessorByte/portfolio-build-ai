import React from "react";
import {
  SlideContainer,
  SlideTitle,
  SlideContent,
  SlideFooter,
} from "../components/SlideComponents";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

// Animation variants for elements
const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.7,
    },
  },
};

const SWEBenchSlide: React.FC = () => {
  return (
    <SlideContainer>
      <SlideTitle variants={titleVariants} initial="hidden" animate="visible">
        Resultados en SWE-bench Verified
      </SlideTitle>{" "}
      <SlideContent
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: theme.spacing(2),
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.img
            src="/img/swe-verified-2025-05-anthropic.png"
            alt="SWE-bench Verified Results"
            style={{
              width: "100%",
              maxWidth: "900px",
              objectFit: "contain",
              marginBottom: theme.spacing(3),
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, delay: 0.5 },
            }}
          />
        </div>
      </SlideContent>
      <SlideFooter
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          bottom: theme.spacing(2),
          width: "100%",
          display: "flex",
          justifyContent: "center",
          left: 0,
          right: 0,
        }}
      >
        <motion.p
          style={{
            fontSize: "1rem",
            maxWidth: "900px",
            textAlign: "center",
            color: theme.colors.onBackground,
            margin: 0,
          }}
        >
          SWE-bench Verified es un benchmark que evalúa el rendimiento de
          distintos modelos en tareas reales de ingeniería de software a un
          nivel agéntico
        </motion.p>
      </SlideFooter>
    </SlideContainer>
  );
};

export default SWEBenchSlide;
