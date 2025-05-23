import React from "react";
import {
  SlideContainer,
  SlideTitle,
  SlideContent,
} from "../components/SlideComponents";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import { isMobile } from "react-device-detect";
import { FirebaseStudioLogo } from "../assets/FirebaseStudioLogo";

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
    backgroundColor: "rgba(251, 188, 5, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Firebase Studio key features
const firebaseStudioFeatures = [
  {
    title: "Prototipado Rápido con IA",
    description:
      "Crea apps a partir de descripciones, imágenes o dibujos con App Prototyping",
    icon: "🚀",
    color: "#FFA000", // Firebase yellow/orange
  },
  {
    title: "Chat de IA Integrado",
    description:
      "Modifica tu app con Gemini directamente desde Firebase Studio",
    icon: "💬",
    color: "#F57C00", // Firebase orange
  },
  {
    title: "IDE Completo",
    description:
      "Entorno de codificación basado en Code OSS con asistencia de Gemini",
    icon: "💻",
    color: "#FFCA28", // Firebase light yellow
  },
  {
    title: "Vista Previa Instantánea",
    description:
      "Genera URL pública o código QR para pruebas en cualquier dispositivo",
    icon: "👁️",
    color: "#FFA000", // Firebase yellow/orange
  },
  {
    title: "Integración con Firebase",
    description:
      "Conexión nativa con Firestore, Authentication, Hosting y Functions",
    icon: "🔥",
    color: "#F57C00", // Firebase orange
  },
  {
    title: "Amplio Soporte de Frameworks",
    description: "Compatible con Next.js, React, Angular, Vue, Flutter y más",
    icon: "📚",
    color: "#FFCA28", // Firebase light yellow
  },
  {
    title: "Despliegue con un Clic",
    description: "Publica en Firebase App Hosting y monitoriza el rendimiento",
    icon: "🚀",
    color: "#FFA000", // Firebase yellow/orange
  },
  {
    title: "Colaboración en Tiempo Real",
    description: "Comparte espacios de trabajo con miembros del equipo",
    icon: "👥",
    color: "#F57C00", // Firebase orange
  },
];

// Firebase style background effect
const FirebaseBackgroundEffect = () => {
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
      {/* Firebase styled grid lines */}
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
            background: `linear-gradient(90deg, rgba(255,160,0,0.3) 0%, rgba(251,188,5,0.5) 50%, rgba(255,160,0,0.3) 100%)`,
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
            background: `linear-gradient(180deg, rgba(245,124,0,0.3) 0%, rgba(234,67,53,0.5) 70%, rgba(245,124,0,0.3) 100%)`,
            left: `${(i + 1) * 8}%`,
          }}
        />
      ))}

      {/* Firebase styled background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,160,0,1) 0%, rgba(255,160,0,0) 70%)",
          filter: "blur(50px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,124,0,1) 0%, rgba(245,124,0,0) 70%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
};

const FirebaseStudioSlide: React.FC = () => {
  return (
    <SlideContainer>
      <FirebaseBackgroundEffect />
      <SlideContent>
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
          <SlideTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: isMobile ? "1.8rem" : "clamp(2rem, 5vw, 3.5rem)",
              background: `linear-gradient(135deg, #FFA000 15%, #F57C00 40%, #FF6F00 65%, #FFCA28 85%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: isMobile ? "16px" : "clamp(16px, 4vh, 32px)",
              textAlign: "center",
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            Firebase Studio
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
              <motion.div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "16px",
                  background: "rgba(20, 20, 20, 0.6)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  border: "1px solid rgba(255, 160, 0, 0.3)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <FirebaseStudioLogo width={180} />
              </motion.div>
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
                Desarrollo full-stack con IA
                <br />
                por Google
              </motion.h2>
            </motion.div>
          )}

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
              backgroundColor: "rgba(30, 30, 30, 0.7)",
              backdropFilter: "blur(5px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {firebaseStudioFeatures.map((feature, index) => (
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
          </motion.div>

          {/* Firebase styled link */}
          <motion.a
            href="https://firebase.google.com/products/studio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: isMobile ? "12px" : "clamp(20px, 3vh, 30px)",
              padding: isMobile ? "6px 14px" : "8px 20px",
              backgroundColor: "#FFA000",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: isMobile ? "0.9rem" : "1rem",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(255, 160, 0, 0.5)",
              border: "none",
              cursor: "pointer",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(255, 160, 0, 0.7)",
            }}
          >
            Firebase Studio →
          </motion.a>
        </motion.div>
      </SlideContent>
    </SlideContainer>
  );
};

export default FirebaseStudioSlide;
