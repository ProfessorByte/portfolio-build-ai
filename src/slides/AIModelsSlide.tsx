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
    isDark: true, // Logo más oscuro que necesita un fondo más claro
    accentColor: "rgba(106, 176, 129, 0.4)", // Verde de OpenAI
  },
  {
    name: "Claude",
    src: "/ai-logos/claude.png",
    size: "small",
    position: [0, 1],
    isDark: true,
    accentColor: "rgba(152, 106, 171, 0.4)", // Morado de Anthropic
  },
  {
    name: "Gemini",
    src: "/ai-logos/gemini.png",
    size: "small",
    position: [1, 0],
    isDark: false,
    accentColor: "rgba(72, 136, 240, 0.4)", // Azul de Google
  },
  {
    name: "GitHub Copilot",
    src: "/ai-logos/copilot.png",
    size: "medium",
    position: [1, 1],
    isDark: true,
    accentColor: "rgba(110, 84, 148, 0.4)", // Morado de GitHub
  },
  {
    name: "Mistral",
    src: "/ai-logos/mistral.png",
    size: "small",
    position: [0, 2],
    isDark: true,
    accentColor: "rgba(91, 113, 180, 0.4)", // Azul de Mistral
  },
  {
    name: "DeepSeek",
    src: "/ai-logos/deepseek.png",
    size: "small",
    position: [1, 2],
    isDark: false,
    accentColor: "rgba(39, 128, 227, 0.4)", // Azul de DeepSeek
  },
  {
    name: "Grok",
    src: "/ai-logos/grok.png",
    size: "small",
    position: [2, 0],
    isDark: true,
    accentColor: "rgba(255, 102, 102, 0.4)", // Rojo de xAI
  },
  {
    name: "Meta AI",
    src: "/ai-logos/meta.png",
    size: "small",
    position: [2, 1],
    isDark: true,
    accentColor: "rgba(12, 119, 238, 0.4)", // Azul de Meta
  },
  {
    name: "Qwen",
    src: "/ai-logos/qwen.png",
    size: "small",
    position: [2, 2],
    isDark: false,
    accentColor: "rgba(249, 94, 37, 0.4)", // Naranja de Alibaba
  },
];

// Efectos de partículas para fondo tecnológico
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
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`h-line-${i}`}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: 0.07 + Math.random() * 0.1,
            scaleX: 1,
          }}
          transition={{
            delay: 0.8 + i * 0.1,
            duration: 0.8 + Math.random() * 0.5,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            top: `${(i + 1) * 6.5}%`,
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
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`v-line-${i}`}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: 0.07 + Math.random() * 0.1,
            scaleY: 1,
          }}
          transition={{
            delay: 1 + i * 0.1,
            duration: 0.8 + Math.random() * 0.5,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: `${(i + 1) * 6.5}%`,
            top: 0,
            width: "1px",
            height: "100%",
            background: `linear-gradient(180deg, transparent 0%, ${theme.colors.primary} 40%, ${theme.colors.secondary} 60%, transparent 100%)`,
            boxShadow: `0 0 8px ${theme.colors.secondary}50`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Puntos de intersección brillantes */}
      {Array.from({ length: 30 }).map((_, i) => {
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 80;
        const size = 4 + Math.random() * 4; // Tamaño algo más grande
        const isSpecial = i % 5 === 0; // Algunos puntos con efecto pulsante

        return (
          <motion.div
            key={`glow-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isSpecial
                ? {
                    opacity: [0.6, 0.9, 0.6],
                    scale: [0.8, 1.2, 0.8],
                  }
                : {
                    opacity: 0.5 + Math.random() * 0.5,
                    scale: 0.8 + Math.random() * 1.5,
                  }
            }
            transition={
              isSpecial
                ? {
                    repeat: Infinity,
                    duration: 2 + Math.random() * 2,
                    ease: "easeInOut",
                  }
                : {
                    delay: 1.5 + Math.random() * 1,
                    duration: 0.5 + Math.random() * 0.5,
                    ease: "easeOut",
                  }
            }
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              background:
                Math.random() > 0.5
                  ? theme.colors.primary
                  : theme.colors.secondary,
              filter: `blur(${3 + Math.random() * 4}px)`,
              boxShadow: `0 0 10px ${
                Math.random() > 0.5
                  ? theme.colors.primary
                  : theme.colors.secondary
              }`,
              zIndex: 0,
            }}
          />
        );
      })}

      {/* Efecto de nebulosa digital */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.2, duration: 2 }}
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "40%",
          height: "40%",
          background: `radial-gradient(ellipse at center, ${theme.colors.primary}30, transparent 70%)`,
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
    </motion.div>
  );
};

const AIModelsSlide: React.FC = () => {
  return (
    <SlideContainer>
      {/* Efecto de fondo tecnológico */}
      <TechBackgroundEffect />{" "}
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
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        style={{
          position: "absolute",
          top: "-15%",
          left: "-15%",
          width: "30%",
          height: "30%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.primary}35, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.7, duration: 1.5 }}
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-15%",
          width: "30%",
          height: "30%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.secondary}35, transparent 70%)`,
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
            {" "}
            {aiLogos.map((logo, index) => {
              const sizeStyles =
                logo.size === "medium"
                  ? {
                      gridRow: "span 2",
                      gridColumn: "span 1",
                    }
                  : {};

              // Determinar el fondo basado en si el logo es oscuro o claro
              const bgGradient = logo.isDark
                ? `linear-gradient(145deg, rgba(75, 75, 80, 0.95), rgba(63, 63, 68, 0.9))`
                : `linear-gradient(145deg, rgba(42, 42, 47, 0.95), rgba(32, 32, 37, 0.9))`;
              // Efecto de brillo basado en el color de acento del logo
              const accentGlow = logo.isDark
                ? logo.accentColor?.replace("0.4", "0.6") ||
                  "rgba(138, 180, 248, 0.6)"
                : logo.accentColor || "rgba(138, 180, 248, 0.4)";

              return (
                <motion.div
                  key={logo.name}
                  variants={gridItemVariants}
                  custom={index}
                  whileHover="hover"
                  style={{
                    ...sizeStyles,
                    borderRadius: theme.borderRadius.medium,
                    background: bgGradient,
                    overflow: "hidden",
                    boxShadow: theme.shadows[2],
                    border: `1px solid ${
                      logo.isDark
                        ? "rgba(255, 255, 255, 0.15)"
                        : theme.colors.elevationBorder
                    }`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    padding: theme.spacing(2),
                  }}
                >
                  {" "}
                  {/* Illuminate effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                    style={{
                      position: "absolute",
                      top: "10%",
                      left: "10%",
                      width: "80%",
                      height: "80%",
                      background: accentGlow,
                      borderRadius: "50%",
                      filter: `blur(${logo.isDark ? "20px" : "30px"})`,
                      zIndex: 0,
                    }}
                  />
                  {/* Efecto adicional para logos oscuros */}
                  {logo.isDark && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.75 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 1.2 }}
                      style={{
                        position: "absolute",
                        top: "5%",
                        left: "5%",
                        right: "5%",
                        bottom: "5%",
                        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), transparent 70%)`,
                        zIndex: 1,
                        borderRadius: theme.borderRadius.medium,
                      }}
                    />
                  )}
                  {/* Glassmorphism overlay */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: logo.isDark
                        ? "rgba(255, 255, 255, 0.07)"
                        : "rgba(255, 255, 255, 0.03)",
                      borderRadius: "inherit",
                      backdropFilter: "blur(3px)",
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
                  </motion.div>{" "}
                  {/* Subtle accent color */}
                  <motion.div
                    initial={{ opacity: 0, width: "0%" }}
                    animate={{
                      opacity: logo.isDark ? 0.25 : 0.15,
                      width: "100%",
                      transition: { duration: 1.2, delay: 0.7 + index * 0.1 },
                    }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "4px",
                      background: logo.isDark
                        ? `linear-gradient(90deg, ${
                            theme.colors.primary
                          }, ${accentGlow.replace("0.6", "1")})`
                        : `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                      zIndex: 2,
                      borderRadius: `0 0 ${theme.borderRadius.medium} ${theme.borderRadius.medium}`,
                      boxShadow: logo.isDark
                        ? `0 0 8px 0 ${accentGlow}`
                        : "none",
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
