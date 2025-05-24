import React from "react";
import {
  SlideContainer,
  SlideContent,
  SlideTitle,
} from "../components/SlideComponents";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import styled from "styled-components";
import { isMobile, isTablet } from "react-device-detect";

// Animation variants for elements
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

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const quoteVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Styled components
const QuoteContainer = styled(motion.div)`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: ${isMobile ? "center" : "flex-start"};
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  gap: ${theme.spacing(isMobile ? 3 : 4)};
  padding: ${theme.spacing(2)};
  max-height: 85vh;
  overflow: hidden;
  position: relative;
  z-index: 5;
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: ${isMobile ? "0 0 auto" : "0 0 30%"};
`;

const ProfileImage = styled(motion.img)`
  width: ${isMobile ? "120px" : isTablet ? "160px" : "200px"};
  height: ${isMobile ? "120px" : isTablet ? "160px" : "200px"};
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${theme.colors.primary};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 8px ${theme.colors.primary}50;
`;

const PersonInfo = styled(motion.div)`
  text-align: center;
  margin-top: ${theme.spacing(2)};
`;

const Name = styled(motion.h3)`
  font-size: ${isMobile ? "1.3rem" : "1.8rem"};
  font-weight: 700;
  margin: ${theme.spacing(1)} 0;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Role = styled(motion.p)`
  font-size: ${isMobile ? "0.9rem" : "1.1rem"};
  color: ${theme.colors.onBackground};
  margin: 0;
  opacity: 0.8;
`;

const QuoteSection = styled(motion.div)`
  flex: ${isMobile ? "0 0 auto" : "0 0 65%"};
  font-size: ${isMobile ? "0.85rem" : isTablet ? "0.9rem" : "1rem"};
  line-height: 1.6;
  color: ${theme.colors.onBackground};
  background: rgba(30, 30, 30, 0.5);
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing(isMobile ? 2 : 3)};
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  max-height: ${isMobile ? "60vh" : "70vh"};
  overflow-y: auto;

  @media (max-height: 700px) {
    font-size: ${isMobile ? "0.8rem" : "0.9rem"};
    line-height: 1.5;
    padding: ${theme.spacing(2)};
  }
`;

const QuoteText = styled(motion.div)`
  position: relative;
  padding-left: ${theme.spacing(isMobile ? 1 : 2)};

  &::before {
    content: """;
    position: absolute;
    top: -${isMobile ? "1.5rem" : "2rem"};
    left: -${isMobile ? "0.5rem" : "1rem"};
    font-size: ${isMobile ? "4rem" : "6rem"};
    color: ${theme.colors.primary}40;
    font-family: serif;
    line-height: 1;
  }

  p {
    margin-bottom: ${theme.spacing(2)};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const BackgroundGlow = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${isMobile ? "300px" : "600px"};
  height: ${isMobile ? "300px" : "600px"};
  background: radial-gradient(
    circle,
    rgba(138, 180, 248, 0.12) 0%,
    rgba(187, 134, 252, 0.08) 30%,
    rgba(3, 218, 198, 0.05) 60%,
    rgba(0, 0, 0, 0) 70%
  );
  border-radius: 50%;
  z-index: 0;
  filter: blur(60px);
`;

const KarpathyQuoteSlide: React.FC = () => {
  return (
    <SlideContainer>
      <BackgroundGlow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      />

      <SlideContent>
        <motion.div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: 5,
          }}
        >
          <SlideTitle
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: isMobile ? "2rem" : "clamp(2.2rem, 5vw, 3.5rem)",
              marginBottom: "clamp(16px, 4vh, 32px)",
              textAlign: "center",
              background: `linear-gradient(135deg, ${theme.colors.primary} 15%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 85%)`,
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
            Vibe Coding
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
                boxShadow: `0 0 10px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}40`,
                filter: "brightness(1.1)",
              }}
            />
          </SlideTitle>

          <QuoteContainer
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <ProfileSection>
              <ProfileImage
                src="/img/AndrejKarpathy.jpg"
                alt="Andrej Karpathy"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              />
              <PersonInfo>
                <Name>Andrej Karpathy</Name>
                <Role>Cofundador de OpenAI</Role>
              </PersonInfo>
            </ProfileSection>

            <QuoteSection
              variants={quoteVariants}
              initial="hidden"
              animate="visible"
            >
              <QuoteText>
                <p>
                  Hay un nuevo tipo de programación que yo llamo "programación
                  por vibra", donde simplemente te dejas llevar por el flow,
                  abrazás los exponenciales, y te olvidás de que el código
                  siquiera existe. Es posible porque los modelos de lenguaje
                  (tipo Cursor Composer con Sonnet) ya están demasiado rotos.
                  Encima, yo le hablo al Composer con SuperWhisper, así que casi
                  ni toco el teclado. Le pido cosas ridículamente vagas como
                  "disminuí a la mitad el padding de la barra lateral", porque
                  me da pereza buscarlo yo mismo. Siempre le doy "Aceptar todo",
                  ya ni leo los diffs.
                </p>
                <p>
                  Cuando me tira errores, los copio tal cual y se los pego sin
                  decir nada... y usualmente se arreglan solos. El código
                  empieza a crecer y se vuelve más allá de mi comprensión
                  inmediata, tendría que sentarme a leerlo con calma para
                  entender algo. A veces los modelos no pueden arreglar un bug,
                  así que lo rodeo con un workaround o empiezo a pedir cambios
                  aleatorios hasta que desaparece. Para proyectos de fin de
                  semana que no importan mucho, no está nada mal... pero igual
                  es bastante gracioso.
                </p>
                <p>
                  Estoy construyendo un proyecto o una app web, pero no es
                  realmente "programar". Solo veo cosas, digo cosas, corro
                  cosas, copio y pego cosas... y más o menos funciona.
                </p>
              </QuoteText>
            </QuoteSection>
          </QuoteContainer>
        </motion.div>
      </SlideContent>
    </SlideContainer>
  );
};

export default KarpathyQuoteSlide;
