import React from "react";
import {
  SlideContainer,
  SlideTitle,
  SlideContent,
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
      duration: 0.5,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const iframeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Efecto de partículas para fondo tecnológico (simplificado para no distraer del iframe)
const TechBackgroundEffect = () => {
  return (
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
      {Array.from({ length: 10 }).map((_, i) => (
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
            top: `${(i + 1) * 9}%`,
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
      {Array.from({ length: 10 }).map((_, i) => (
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
            left: `${(i + 1) * 9}%`,
            top: 0,
            width: "1px",
            height: "100%",
            background: `linear-gradient(180deg, transparent 0%, ${theme.colors.primary} 40%, ${theme.colors.secondary} 60%, transparent 100%)`,
            boxShadow: `0 0 8px ${theme.colors.secondary}50`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Efecto de nebulosa digital (sutilmente) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2, duration: 2 }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "40%",
          height: "30%",
          background: `radial-gradient(ellipse at center, ${theme.colors.primary}20, transparent 70%)`,
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
    </motion.div>
  );
};

const WebDevArenaSlide: React.FC = () => {
  return (
    <SlideContainer>
      {/* Efecto de fondo tecnológico */}
      <TechBackgroundEffect />

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
          background: "rgba(18, 18, 18, 0.5)",
          backdropFilter: "blur(30px)",
          zIndex: 1,
        }}
      />

      {/* Efectos de luz en las esquinas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "20%",
          height: "20%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.primary}35, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <SlideContent
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
            padding: theme.spacing(2),
            paddingTop: theme.spacing(3),
            overflow: "hidden",
          }}
        >
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
            WebDev Arena: Comparativa de Modelos
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
          {/* Iframe container */}
          <motion.div
            variants={iframeVariants}
            style={{
              width: "100%",
              height: "calc(100% - 80px)",
              borderRadius: theme.borderRadius.medium,
              overflow: "hidden",
              boxShadow: theme.shadows[3],
              border: `1px solid ${theme.colors.elevationBorder}`,
              position: "relative",
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
                zIndex: 0,
                borderRadius: theme.borderRadius.medium,
                boxShadow: `0 0 15px ${theme.colors.primary}40, inset 0 0 10px ${theme.colors.primary}20`,
                pointerEvents: "none",
              }}
            />

            {/* Iframe con WebDev Arena */}
            <iframe
              src="https://beta.lmarena.ai/leaderboard/webdev"
              title="WebDev Arena Leaderboard"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: theme.borderRadius.medium,
                backgroundColor: "#121212",
              }}
            />
          </motion.div>
        </motion.div>
      </SlideContent>
    </SlideContainer>
  );
};

export default WebDevArenaSlide;
