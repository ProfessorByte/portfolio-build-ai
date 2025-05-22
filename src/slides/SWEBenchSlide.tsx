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
      {" "}
      <SlideTitle
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
          marginBottom: "clamp(16px, 4vh, 28px)",
          textAlign: "center",
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          padding: "0 0 10px 0",
          zIndex: 10,
          fontWeight: 800,
          filter: "brightness(1.2) contrast(1.1)",
          textShadow: `0 0 15px ${theme.colors.primary}80`,
        }}
      >
        Resultados en SWE-bench Verified{" "}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "80%" }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            height: "4px",
            background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
            borderRadius: "2px",
            boxShadow: `0 0 10px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}40`,
            filter: "brightness(1.1)",
          }}
        />
      </SlideTitle>
      {/* Efecto de fondo tecnológico */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Grid de líneas horizontales */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: 0.04 + Math.random() * 0.06,
              scaleX: 1,
            }}
            transition={{
              delay: 0.8 + i * 0.1,
              duration: 0.8 + Math.random() * 0.5,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              top: `${(i + 1) * 14}%`,
              left: 0,
              width: "100%",
              height: "1px",
              background: `linear-gradient(90deg, transparent 0%, ${theme.colors.primary} 40%, ${theme.colors.secondary} 60%, transparent 100%)`,
              boxShadow: `0 0 8px ${theme.colors.primary}50`,
              zIndex: 0,
            }}
          />
        ))}

        {/* Grid de líneas verticales */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: 0.04 + Math.random() * 0.06,
              scaleY: 1,
            }}
            transition={{
              delay: 1 + i * 0.1,
              duration: 0.8 + Math.random() * 0.5,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              left: `${(i + 1) * 14}%`,
              top: 0,
              width: "1px",
              height: "100%",
              background: `linear-gradient(180deg, transparent 0%, ${theme.colors.primary} 40%, ${theme.colors.secondary} 60%, transparent 100%)`,
              boxShadow: `0 0 8px ${theme.colors.secondary}50`,
              zIndex: 0,
            }}
          />
        ))}
      </motion.div>{" "}
      {/* Efecto acrílico/glassmorphism para el fondo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(18, 18, 18, 0.6)",
          backdropFilter: "blur(15px)",
          zIndex: 1,
        }}
      />
      <SlideContent
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: theme.spacing(2),
        }}
      >
        {/* Container for image with same styling as iframe container */}{" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, delay: 0.5 },
          }}
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            aspectRatio: "16/10",
            borderRadius: theme.borderRadius.medium,
            overflow: "hidden",
            boxShadow: theme.shadows[3],
            border: `1px solid ${theme.colors.elevationBorder}`,
            position: "relative",
            marginBottom: theme.spacing(3),
            backgroundColor: "#121212",
          }}
        >
          {/* Borde luminoso decorativo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
              borderRadius: theme.borderRadius.medium,
              boxShadow: `0 0 15px ${theme.colors.primary}40, inset 0 0 10px ${theme.colors.primary}20`,
              pointerEvents: "none",
            }}
          />

          <motion.img
            src="/img/swe-verified-2025-05-anthropic.png"
            alt="SWE-bench Verified Results"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              zIndex: 1,
              padding: theme.spacing(2),
            }}
          />
        </motion.div>
      </SlideContent>{" "}
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
          zIndex: 10,
        }}
      >
        <motion.div
          style={{
            padding: theme.spacing(1.5),
            borderRadius: theme.borderRadius.small,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            boxShadow: theme.shadows[1],
            border: `1px solid ${theme.colors.elevationBorder}`,
            maxWidth: "900px",
          }}
        >
          <motion.p
            style={{
              fontSize: "1rem",
              textAlign: "center",
              color: theme.colors.onBackground,
              margin: 0,
              fontWeight: 500,
              letterSpacing: "0.01em",
              textShadow: "0 1px 1px rgba(0, 0, 0, 0.3)",
            }}
          >
            SWE-bench Verified es un benchmark que evalúa el rendimiento de
            distintos modelos en tareas reales de ingeniería de software a un
            nivel agéntico
          </motion.p>
        </motion.div>
      </SlideFooter>
    </SlideContainer>
  );
};

export default SWEBenchSlide;
