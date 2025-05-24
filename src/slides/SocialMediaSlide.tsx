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
  font-size: ${isMobile ? "2rem" : "4rem"};
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
  text-shadow: 0 0 30px rgba(138, 180, 248, 0.4);
  margin-bottom: ${theme.spacing(isMobile ? 2 : 4)};

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  @media (max-height: 600px) {
    font-size: ${isMobile ? "1.8rem" : "3rem"};
    margin-bottom: ${theme.spacing(1.5)};
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: ${theme.spacing(1.5)};
  }
`;

const SocialMediaGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: ${isMobile ? "1fr" : "repeat(3, 1fr)"};
  gap: ${isMobile ? theme.spacing(1.5) : theme.spacing(2)};
  width: 100%;
  max-width: ${isMobile ? "90%" : "900px"};
  margin: 0 auto;

  @media (max-height: 700px) {
    gap: ${theme.spacing(1)};
  }

  @media (max-width: 480px) {
    gap: ${theme.spacing(1)};
    max-width: 95%;
  }
`;

const SocialIcon = styled.div`
  width: ${isMobile ? "32px" : "60px"};
  height: ${isMobile ? "32px" : "60px"};
  margin-bottom: ${isMobile ? "0" : theme.spacing(1.5)};
  margin-right: ${isMobile ? theme.spacing(1.5) : "0"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.onBackground};
  transition: color 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;

const SocialMediaCard = styled(motion.a)`
  display: flex;
  flex-direction: ${isMobile ? "row" : "column"};
  align-items: center;
  justify-content: center;
  padding: ${isMobile ? theme.spacing(2) : theme.spacing(3)};
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

    ${SocialIcon} {
      color: ${(props) => props.color || theme.colors.primary};
    }
  }

  @media (max-height: 700px) {
    padding: ${theme.spacing(1.5)};
  }

  @media (max-width: 480px) {
    padding: ${theme.spacing(1.5)};
  }

  & > div {
    ${isMobile &&
    `
      flex: 1;
      min-width: 0;
    `}
  }
`;

const SocialName = styled.h3`
  font-size: ${isMobile ? "1rem" : "1.5rem"};
  font-weight: 600;
  margin: 0;
  margin-bottom: ${theme.spacing(0.5)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: ${theme.spacing(0.3)};
  }
`;

const SocialHandle = styled.p`
  font-size: ${isMobile ? "0.8rem" : "1.1rem"};
  opacity: 0.8;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${isMobile ? "300px" : "600px"};
  height: ${isMobile ? "300px" : "600px"};
  background: radial-gradient(
    circle,
    rgba(138, 180, 248, 0.18) 0%,
    rgba(187, 134, 252, 0.12) 30%,
    rgba(3, 218, 198, 0.07) 60%,
    rgba(0, 0, 0, 0) 70%
  );
  border-radius: 50%;
  z-index: 0;
  filter: blur(60px);
`;

// Social media data with requested handles
const socialMedia = [
  {
    platform: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill="currentColor"
      >
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.672.01 2.988.059 4.042.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.747.353.137.882.3 1.857.345 1.054.048 1.37.058 4.042.058 2.672 0 2.988-.01 4.042-.058.975-.045 1.504-.208 1.857-.345.466-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.882.345-1.857.048-1.054.058-1.37.058-4.042 0-2.67-.01-2.986-.058-4.04-.045-.975-.208-1.504-.345-1.857a3.097 3.097 0 00-.747-1.15c-.35-.35-.684-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.059-4.042-.059zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
      </svg>
    ),
    handle: "@angel1102flores",
    url: "https://instagram.com/angel1102flores",
    color: "#E1306C",
  },
  {
    platform: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill="currentColor"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    handle: "@angelcristian.floreslazarte",
    url: "https://facebook.com/angelcristian.floreslazarte",
    color: "#1877F2",
  },
  {
    platform: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill="currentColor"
      >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.4V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
    handle: "@angel-flores-lazarte",
    url: "https://linkedin.com/in/angel-flores-lazarte",
    color: "#0077B5",
  },
];

const SocialMediaSlide: React.FC = () => {
  return (
    <SlideContainer
      style={{
        background: `radial-gradient(circle at center, ${theme.colors.elevation3} 0%, ${theme.colors.background} 60%)`,
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

export default SocialMediaSlide;
