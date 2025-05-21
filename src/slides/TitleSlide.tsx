import React from "react";
import {
  SlideContainer,
  SlideTitle,
  SlideContent,
  SlideFooter,
  LogoImage,
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
          <SlideTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "5rem",
              background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: theme.spacing(4),
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Potencia Tu Marca Personal con IA:
            <br />
            Crea un Portafolio de Otro Nivel
          </SlideTitle>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              height: "4px",
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              borderRadius: theme.borderRadius.medium,
              marginTop: theme.spacing(2),
              marginBottom: theme.spacing(6),
            }}
          />
        </motion.div>
      </SlideContent>
      <SlideFooter>
        <LogoImage src="/PablouxLogo.png" alt="Pabloux Logo" />
        <span>Powered by Pabloux Darkmind</span>
      </SlideFooter>
    </SlideContainer>
  );
};

export default TitleSlide;
