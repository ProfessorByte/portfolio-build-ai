import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

// Responsive breakpoints
const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

// Slide container that will be used for all slides
export const SlideContainer = styled(motion.div).attrs({
  className: "slide-container",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing(2)};
  overflow: hidden;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${theme.spacing(3)};
  }

  @media (min-width: ${breakpoints.laptop}) {
    padding: ${theme.spacing(6)};
  }
`;

// Title component with Google-like styling
export const SlideTitle = styled(motion.h1)`
  font-size: 2.2rem;
  font-weight: ${theme.typography.h1.fontWeight};
  color: ${theme.colors.onBackground};
  margin-bottom: ${theme.spacing(2)};
  text-align: center;
  max-width: 100%;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 3rem;
    margin-bottom: ${theme.spacing(2.5)};
    max-width: 90%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${theme.typography.h1.fontSize};
    margin-bottom: ${theme.spacing(3)};
    letter-spacing: ${theme.typography.h1.letterSpacing};
  }
`;

// Subtitle component
export const SlideSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: ${theme.typography.h2.fontWeight};
  color: ${theme.colors.onBackground};
  margin-bottom: ${theme.spacing(1.5)};
  text-align: center;
  max-width: 100%;
  line-height: 1.3;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
    margin-bottom: ${theme.spacing(2)};
    max-width: 85%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${theme.typography.h2.fontSize};
    letter-spacing: ${theme.typography.h2.letterSpacing};
    max-width: 80%;
  }
`;

// Content container for slide content
export const SlideContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 900px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-width: 1200px;
  }
`;

// Footer component with branding
export const SlideFooter = styled(motion.footer).attrs({
  className: "slide-footer",
})`
  position: absolute;
  bottom: ${theme.spacing(1)};
  left: ${theme.spacing(1)};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(0.5)};
  font-size: 0.7rem;
  color: ${theme.colors.onBackground};
  opacity: 0.8;

  @media (min-width: ${breakpoints.tablet}) {
    bottom: ${theme.spacing(1.5)};
    left: ${theme.spacing(1.5)};
    gap: ${theme.spacing(0.75)};
    font-size: 0.75rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    bottom: ${theme.spacing(2)};
    left: ${theme.spacing(2)};
    gap: ${theme.spacing(1)};
    font-size: ${theme.typography.body2.fontSize};
  }
`;

// Logo image in the footer
export const LogoImage = styled.img`
  height: 20px;
  width: auto;

  @media (min-width: ${breakpoints.tablet}) {
    height: 24px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    height: 30px;
  }
`;

// Navigation arrows
export const NavArrow = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${theme.colors.elevation3};
  color: ${theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${theme.shadows[2]};
  border: none;
  z-index: ${theme.zIndex.appBar};
  transition: ${theme.transitions.fast};

  svg {
    width: 24px;
    height: 24px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 50px;
    height: 50px;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 60px;
    height: 60px;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  &:hover {
    background-color: ${theme.colors.elevation4};
    box-shadow: ${theme.shadows[3]};
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    background-color: ${theme.colors.elevation2};
    transform: translateY(-50%) scale(0.95);
  }
`;

export const LeftArrow = styled(NavArrow)`
  left: ${theme.spacing(1)};

  @media (min-width: ${breakpoints.tablet}) {
    left: ${theme.spacing(2)};
  }

  @media (min-width: ${breakpoints.laptop}) {
    left: ${theme.spacing(3)};
  }
`;

export const RightArrow = styled(NavArrow)`
  right: ${theme.spacing(1)};

  @media (min-width: ${breakpoints.tablet}) {
    right: ${theme.spacing(2)};
  }

  @media (min-width: ${breakpoints.laptop}) {
    right: ${theme.spacing(3)};
  }
`;

// Progress indicator for slides
export const SlideProgress = styled(motion.div)`
  position: fixed;
  bottom: ${theme.spacing(1)};
  right: ${theme.spacing(1)};
  display: flex;
  gap: ${theme.spacing(0.5)};
  z-index: 101;

  @media (min-width: ${breakpoints.tablet}) {
    bottom: ${theme.spacing(1.5)};
    right: ${theme.spacing(1.5)};
  }

  @media (min-width: ${breakpoints.laptop}) {
    bottom: ${theme.spacing(2)};
    right: ${theme.spacing(2)};
    gap: ${theme.spacing(0.75)};
  }

  @media (max-width: 480px) {
    bottom: ${theme.spacing(3)};
    right: ${theme.spacing(1)};
  }
`;

export const ProgressDot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: ${theme.borderRadius.circle};
  background-color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.elevation4};
  transition: ${theme.transitions.fast};
  margin: 0 2px;
  box-shadow: ${(props) =>
    props.active ? `0 0 8px ${theme.colors.primary}` : "none"};

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 9px;
    height: 9px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 10px;
    height: 10px;
  }
`;
