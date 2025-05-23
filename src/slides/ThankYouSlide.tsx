import React from "react";
import { SlideContainer, SlideContent } from "../components/SlideComponents";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import styled from "styled-components";
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
      delay: 0.4,
    },
  },
};

const socialItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Styled components for the thank you slide
const ThankYouContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const GlowingTitle = styled(motion.h1)`
  font-size: ${isMobile ? "2.5rem" : "4rem"};
  font-weight: 700;
  background: linear-gradient(
    90deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 50%,
    ${theme.colors.accent} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shine 3s linear infinite;
  text-shadow: 0 0 20px rgba(138, 180, 248, 0.5);
  margin-bottom: ${theme.spacing(3)};

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  @media (max-height: 600px) {
    font-size: ${isMobile ? "2rem" : "3rem"};
    margin-bottom: ${theme.spacing(2)};
  }
`;

const SocialMediaGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: ${isMobile ? "1fr" : "repeat(3, 1fr)"};
  gap: ${theme.spacing(2)};
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (max-height: 700px) {
    gap: ${theme.spacing(1.5)};
  }
`;

const SocialMediaCard = styled(motion.a)`
  display: flex;
  flex-direction: ${isMobile ? "row" : "column"};
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(3)};
  background: rgba(30, 30, 30, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  text-decoration: none;
  color: ${theme.colors.onBackground};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${(props) => props.color || theme.colors.primary} 0%,
      ${(props) => props.color || theme.colors.secondary} 100%
    );
    opacity: 0.8;
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media (max-height: 700px) {
    padding: ${theme.spacing(2)};
  }
`;

const SocialIcon = styled.div`
  font-size: ${isMobile ? "2rem" : "3rem"};
  margin-bottom: ${isMobile ? "0" : theme.spacing(1.5)};
  margin-right: ${isMobile ? theme.spacing(1.5) : "0"};
`;

const SocialName = styled.h3`
  font-size: ${isMobile ? "1.2rem" : "1.5rem"};
  font-weight: 600;
  margin: 0;
  margin-bottom: ${theme.spacing(0.5)};
`;

const SocialHandle = styled.p`
  font-size: ${isMobile ? "0.9rem" : "1.1rem"};
  opacity: 0.8;
  margin: 0;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${isMobile ? "300px" : "500px"};
  height: ${isMobile ? "300px" : "500px"};
  background: radial-gradient(
    circle,
    rgba(138, 180, 248, 0.15) 0%,
    rgba(187, 134, 252, 0.1) 30%,
    rgba(3, 218, 198, 0.05) 60%,
    rgba(0, 0, 0, 0) 70%
  );
  border-radius: 50%;
  z-index: 0;
  filter: blur(40px);
`;

// Social media data
const socialMedia = [
  {
    platform: "Twitter",
    icon: "𝕏",
    handle: "@PablouxDarkmind",
    url: "https://twitter.com/PablouxDarkmind",
    color: "#1DA1F2",
  },
  {
    platform: "Instagram",
    icon: "📸",
    handle: "@pabloux_darkmind",
    url: "https://instagram.com/pabloux_darkmind",
    color: "#E1306C",
  },
  {
    platform: "LinkedIn",
    icon: "🔗",
    handle: "@pablopardoalcocer",
    url: "https://linkedin.com/in/pablopardoalcocer",
    color: "#0077B5",
  },
];

const ThankYouSlide: React.FC = () => {
  return (
    <SlideContainer
      style={{
        background: `radial-gradient(circle at center, ${theme.colors.elevation3} 0%, ${theme.colors.background} 70%)`,
      }}
    >
      <BackgroundGlow />

      <SlideContent>
        <ThankYouContainer
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <GlowingTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            ¡Gracias por tu atención!
          </GlowingTitle>

          <SocialMediaGrid>
            {socialMedia.map((social, index) => (
              <SocialMediaCard
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                color={social.color}
                custom={index}
                variants={socialItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <SocialIcon>{social.icon}</SocialIcon>
                <div>
                  <SocialName>{social.platform}</SocialName>
                  <SocialHandle>{social.handle}</SocialHandle>
                </div>
              </SocialMediaCard>
            ))}
          </SocialMediaGrid>
        </ThankYouContainer>
      </SlideContent>
    </SlideContainer>
  );
};

export default ThankYouSlide;
