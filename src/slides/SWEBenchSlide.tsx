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
      duration: 1.2,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const SWEBenchSlide: React.FC = () => {
  return (
    <SlideContainer>
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
        Resultados en SWE-bench Verified
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
      </motion.div>
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
      {/* Contenido principal con layout modificado */}{" "}
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
          justifyContent: "space-around", // Distribución equitativa
          width: "100%",
          padding: theme.spacing(2),
          flex: 1,
          height: "100%", // Ocupar toda la altura disponible
          marginTop: "-20px", // Ajuste para centrar mejor verticalmente
        }}
      >
        {" "}
        <div          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "auto", // Ancho automático en lugar de 100%
            maxWidth: "90%", // Limitar al 90% del contenedor
            gap: theme.spacing(2),
            justifyContent: "center",
            height: "auto", // Ajuste para no forzar altura completa
            paddingBottom: "clamp(60px, 12vh, 100px)", // Espacio para el footer
            margin: "0 auto", // Centrar horizontalmente
          }}
        >
          {/* Contenedor para la imagen con estilo similar al iframe */}{" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, delay: 0.5 },
            }}            style={{
              width: "600px", // Ancho fijo en lugar de 100%
              maxWidth: "90%", // Nunca más del 90% del contenedor
              height: "auto",
              aspectRatio: "16/10",
              borderRadius: theme.borderRadius.medium,
              overflow: "hidden",
              boxShadow: theme.shadows[3],
              border: `1px solid ${theme.colors.elevationBorder}`,
              position: "relative",
              backgroundColor: "#121212",
              flex: "0 0 auto", // No crecer ni encogerse
              maxHeight: "50vh", // Reducir altura máxima
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
                objectFit: "contain", // Cambiado a contain para mejor visualización
                objectPosition: "center center", // Centrado completo
                zIndex: 1,
                padding: theme.spacing(1.5), // Padding reducido para imagen más grande
              }}
            />
          </motion.div>
          {/* Texto descriptivo del benchmark DEBAJO de la imagen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}            style={{
              padding: theme.spacing(2),
              borderRadius: theme.borderRadius.small,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(10px)",
              boxShadow: theme.shadows[1],
              border: `1px solid ${theme.colors.elevationBorder}`,
              width: "600px", // Ancho fijo igual que el contenedor de la imagen
              maxWidth: "90%", // Nunca más del 90% del contenedor
              marginTop: theme.spacing(2), // Espacio entre imagen y texto
            }}
          >
            <motion.p
              style={{
                fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)", // Tamaño de texto adaptativo
                textAlign: "center",
                color: theme.colors.onBackground,
                margin: 0,
                fontWeight: 500,
                letterSpacing: "0.01em",
                textShadow: "0 1px 1px rgba(0, 0, 0, 0.3)",
                lineHeight: 1.5,
              }}
            >
              SWE-bench Verified es un benchmark que evalúa el rendimiento de
              distintos modelos en tareas reales de ingeniería de software a un
              nivel agéntico
            </motion.p>
          </motion.div>
        </div>
      </SlideContent>
    </SlideContainer>
  );
};

export default SWEBenchSlide;
