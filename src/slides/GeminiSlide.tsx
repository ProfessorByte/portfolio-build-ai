import React from "react";
import {
  SlideContainer,
  SlideTitle,
  SlideContent,
} from "../components/SlideComponents";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import { isMobile } from "react-device-detect";

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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.02,
    backgroundColor: "rgba(138, 180, 248, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Google's Gemini key features
const geminiFeatures = [
  {
    title: "Acceso Gratuito",
    description: "Experimenta con Gemini 2.5 Pro en Google AI Studio sin costo",
    icon: "🆓",
    color: "#4285F4", // Google Blue
  },
  {
    title: "Deep Think",
    description:
      "Modo experimental de razonamiento paso a paso para soluciones complejas",
    icon: "🧠",
    color: "#EA4335", // Google Red
  },
  {
    title: "API Competitiva",
    description: "Precios altamente competitivos para entrada/salida de tokens",
    icon: "💰",
    color: "#FBBC05", // Google Yellow
  },
  {
    title: "Líder en Codificación",
    description:
      "Rendimiento superior en benchmarks como WebDev Arena y LMArena",
    icon: "🏆",
    color: "#34A853", // Google Green
  },
  {
    title: "Multimodal Nativo",
    description:
      "Procesa texto, código, imágenes, audio y video de forma integrada",
    icon: "🔄",
    color: "#4285F4", // Google Blue
  },
  {
    title: "1M Tokens de Contexto",
    description:
      "Ventana de contexto extensa para proyectos completos sin fragmentación",
    icon: "📚",
    color: "#EA4335", // Google Red
  },
  {
    title: "Herramientas Avanzadas",
    description:
      "Resúmenes de pensamiento, MCP tools y más recursos para desarrolladores",
    icon: "🛠️",
    color: "#34A853", // Google Green
  },
];

// Efectos de partículas para fondo tecnológico con estilo Google
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
      {/* Líneas de cuadrícula de estilo Google */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`hline-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 + (i % 3) * 0.01 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "1px",
            backgroundColor: i % 2 === 0 ? "#4285F4" : "#34A853",
            top: `${(i + 1) * 8}%`,
          }}
        />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`vline-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 + (i % 3) * 0.01 }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "1px",
            backgroundColor: i % 2 === 0 ? "#FBBC05" : "#EA4335",
            left: `${(i + 1) * 8}%`,
          }}
        />
      ))}

      {/* Círculos de fondo con colores de Google */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #4285F4 0%, rgba(66, 133, 244, 0) 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #EA4335 0%, rgba(234, 67, 53, 0) 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        style={{
          position: "absolute",
          top: "60%",
          right: "20%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #34A853 0%, rgba(52, 168, 83, 0) 70%)",
        }}
      />
    </motion.div>
  );
};

const GeminiSlide: React.FC = () => {
  return (
    <SlideContainer>
      <TechBackgroundEffect />
      <SlideContent>
        {" "}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            width: "100%",
            height: "100%",
            padding: isMobile ? theme.spacing(2) : theme.spacing(4),
            zIndex: 1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {" "}
          <SlideTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: isMobile ? "1.8rem" : "clamp(2rem, 5vw, 3.5rem)",
              background: `linear-gradient(135deg, #4285F4 15%, #34A853 40%, #FBBC05 65%, #EA4335 85%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: isMobile ? "16px" : "clamp(16px, 4vh, 32px)",
              textAlign: "center",
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            Gemini 2.5 Pro I/O Edition
          </SlideTitle>
          {!isMobile && (
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "clamp(20px, 5vh, 40px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.img
                src="/ai-logos/gemini.png"
                alt="Gemini Logo"
                style={{
                  height: "80px",
                  objectFit: "contain",
                  marginRight: "16px",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
              <motion.h2
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                  color: theme.colors.onBackground,
                  margin: 0,
                  padding: 0,
                  fontWeight: 400,
                  textAlign: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                La nueva era de la Ingeniería
                <br />
                de Software Agéntica
              </motion.h2>
            </motion.div>
          )}{" "}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: isMobile ? "8px" : "clamp(12px, 2vw, 20px)",
              width: "100%",
              maxWidth: "1200px",
              overflow: "visible",
              padding: isMobile ? "8px" : "12px",
              borderRadius: theme.borderRadius.medium,
              backgroundColor: "rgba(30, 30, 30, 0.6)",
              backdropFilter: "blur(5px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {geminiFeatures.map((feature, index) => (
              <motion.div
                key={`feature-${index}`}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                style={{
                  backgroundColor: "rgba(40, 40, 40, 0.5)",
                  borderRadius: theme.borderRadius.medium,
                  padding: isMobile ? "8px" : "16px",
                  display: "flex",
                  alignItems: isMobile ? "center" : "flex-start",
                  border: `1px solid ${feature.color}30`,
                  boxShadow: `0 0 15px ${feature.color}10`,
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? "18px" : "24px",
                    marginRight: isMobile ? "8px" : "12px",
                    backgroundColor: `${feature.color}20`,
                    width: isMobile ? "30px" : "40px",
                    height: isMobile ? "30px" : "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    style={{
                      margin: isMobile ? "0" : "0 0 6px 0",
                      fontSize: isMobile
                        ? "0.9rem"
                        : "clamp(1rem, 2vw, 1.2rem)",
                      color: feature.color,
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </h3>
                  {!isMobile && (
                    <p
                      style={{
                        margin: 0,
                        fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.4,
                      }}
                    >
                      {feature.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>{" "}
          {/* Google-styled link */}
          <motion.a
            href="https://ai.google.dev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: isMobile ? "12px" : "clamp(20px, 3vh, 30px)",
              padding: isMobile ? "6px 14px" : "8px 20px",
              backgroundColor: "#4285F4",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: isMobile ? "0.9rem" : "1rem",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(66, 133, 244, 0.5)",
              border: "none",
              cursor: "pointer",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(66, 133, 244, 0.7)",
            }}
          >
            Google AI Studio →
          </motion.a>
        </motion.div>
      </SlideContent>
    </SlideContainer>
  );
};

export default GeminiSlide;
