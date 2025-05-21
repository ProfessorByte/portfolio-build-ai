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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const TestSlide: React.FC = () => {
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
        >          <SlideTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: theme.colors.onBackground,
              marginBottom: "clamp(16px, 4vh, 32px)",
              textAlign: "center",
            }}
          >
            Slide de prueba
          </SlideTitle>          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={{
              width: "clamp(120px, 30vw, 200px)",
              height: "clamp(120px, 30vw, 200px)",
              borderRadius: theme.borderRadius.circle,
              background: `conic-gradient(${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent}, ${theme.colors.primary})`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: theme.shadows[4],
              position: "relative",
              marginTop: "clamp(16px, 4vh, 32px)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: theme.borderRadius.circle,
                position: "absolute",
                background: `conic-gradient(${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent}, ${theme.colors.primary})`,
                opacity: 0.7,
                filter: "blur(15px)",
              }}
            />            <motion.div
              style={{
                width: "calc(100% - 40px)",
                height: "calc(100% - 40px)",
                borderRadius: theme.borderRadius.circle,
                background: theme.colors.elevation2,
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                style={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  color: theme.colors.onBackground,
                }}
              >
                Demo
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </SlideContent>
      <SlideFooter>
        <LogoImage src="/PablouxLogo.png" alt="Pabloux Logo" />
        <span>Powered by Pabloux Darkmind</span>
      </SlideFooter>
    </SlideContainer>
  );
};

export default TestSlide;
