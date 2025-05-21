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
      delay: 0.3,
    },
  },
};

const gridItemVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Array of AI model logos with size configuration for bento grid
const aiLogos = [
  {
    name: "ChatGPT",
    src: "/ai-logos/chatgpt.png",
    size: "medium",
    position: [0, 0],
  },
  {
    name: "Claude",
    src: "/ai-logos/claude.png",
    size: "small",
    position: [0, 1],
  },
  {
    name: "Gemini",
    src: "/ai-logos/gemini.png",
    size: "small",
    position: [1, 0],
  },
  {
    name: "GitHub Copilot",
    src: "/ai-logos/copilot.png",
    size: "medium",
    position: [1, 1],
  },
  {
    name: "Mistral",
    src: "/ai-logos/mistral.png",
    size: "small",
    position: [0, 2],
  },
  {
    name: "DeepSeek",
    src: "/ai-logos/deepseek.png",
    size: "small",
    position: [1, 2],
  },
  { name: "Grok", src: "/ai-logos/grok.png", size: "small", position: [2, 0] },
  {
    name: "Meta AI",
    src: "/ai-logos/meta.png",
    size: "small",
    position: [2, 1],
  },
  { name: "Qwen", src: "/ai-logos/qwen.png", size: "small", position: [2, 2] },
];

const AIModelsSlide: React.FC = () => {
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
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
            padding: theme.spacing(2),
            paddingTop: theme.spacing(4),
            overflow: "hidden",
          }}
        >
          <SlideTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              marginBottom: "clamp(24px, 6vh, 42px)",
              textAlign: "center",
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              padding: "0 0 10px 0",
            }}
          >
            ¿Cuál es el mejor modelo para programar?
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              style={{
                position: "absolute",
                bottom: 0,
                left: "10%",
                height: "4px",
                background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                borderRadius: "2px",
              }}
            />
          </SlideTitle>

          {/* Bento Grid layout */}
          <motion.div
            variants={contentVariants}
            className="bento-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
              gap: "clamp(10px, 2vw, 20px)",
              width: "100%",
              maxWidth: "1000px",
              height: "clamp(320px, 60vh, 600px)",
              position: "relative",
            }}
          >
            {aiLogos.map((logo, index) => {
              const sizeStyles =
                logo.size === "medium"
                  ? {
                      gridRow: "span 2",
                      gridColumn: "span 1",
                    }
                  : {};

              return (
                <motion.div
                  key={logo.name}
                  variants={gridItemVariants}
                  custom={index}
                  whileHover="hover"
                  style={{
                    ...sizeStyles,
                    borderRadius: theme.borderRadius.medium,
                    background: `linear-gradient(145deg, ${theme.colors.elevation3}, ${theme.colors.elevation2})`,
                    overflow: "hidden",
                    boxShadow: theme.shadows[2],
                    border: `1px solid ${theme.colors.elevationBorder}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    padding: theme.spacing(2),
                  }}
                >
                  {/* Glassmorphism overlay */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(255, 255, 255, 0.03)",
                      borderRadius: "inherit",
                      backdropFilter: "blur(1px)",
                      zIndex: 1,
                    }}
                  />

                  {/* Logo image */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      zIndex: 2,
                      position: "relative",
                    }}
                  >
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.4 + index * 0.1, duration: 0.5 },
                      }}
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      style={{
                        width: logo.size === "medium" ? "60%" : "65%",
                        height: "auto",
                        maxHeight: "70%",
                        objectFit: "contain",
                        filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.15))",
                      }}
                    />
                  </div>

                  {/* Model name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.6 + index * 0.1, duration: 0.5 },
                    }}
                    style={{
                      padding: theme.spacing(1),
                      textAlign: "center",
                      zIndex: 2,
                    }}
                  >
                    <p
                      style={{
                        fontSize: logo.size === "medium" ? "1.2rem" : "0.9rem",
                        fontWeight: 500,
                        margin: 0,
                        color: theme.colors.onBackground,
                      }}
                    >
                      {logo.name}
                    </p>
                  </motion.div>

                  {/* Subtle accent color */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 0.15,
                      transition: { delay: 0.7 + index * 0.1, duration: 1 },
                    }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "4px",
                      width: "100%",
                      background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                      zIndex: 2,
                    }}
                  />
                </motion.div>
              );
            })}
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

export default AIModelsSlide;
