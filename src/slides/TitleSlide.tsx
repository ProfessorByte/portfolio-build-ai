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
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

const TitleSlide: React.FC = () => {
  return (
    <SlideContainer>
      <SlideContent>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: theme.spacing(4),
          }}
        >
          {" "}
          <SlideTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "clamp(2rem, 5vw, 5rem)",
              background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "clamp(16px, 4vh, 32px)",
              textAlign: "center",
              lineHeight: 1.2,
              zIndex: 10,
              fontWeight: 800,
              filter: "brightness(1.2) contrast(1.1)",
              textShadow: `0 0 15px ${theme.colors.primary}80`,
            }}
          >
            Potencia Tu Marca Personal con IA:
            <br />
            Crea un Portafolio de Otro Nivel
          </SlideTitle>{" "}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "800px",
              height: "3px",
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              borderRadius: theme.borderRadius.medium,
              marginTop: "clamp(8px, 2vh, 16px)",
              marginBottom: "clamp(16px, 4vh, 48px)",
            }}
          />
        </motion.div>
      </SlideContent>
    </SlideContainer>
  );
};

export default TitleSlide;
