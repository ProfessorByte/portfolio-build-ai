import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

// Slide container that will be used for all slides
export const SlideContainer = styled(motion.div)`
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
  padding: ${theme.spacing(6)};
  overflow: hidden;
`;

// Title component with Google-like styling
export const SlideTitle = styled(motion.h1)`
  font-size: ${theme.typography.h1.fontSize};
  font-weight: ${theme.typography.h1.fontWeight};
  color: ${theme.colors.onBackground};
  margin-bottom: ${theme.spacing(3)};
  text-align: center;
  max-width: 90%;
`;

// Subtitle component
export const SlideSubtitle = styled(motion.h2)`
  font-size: ${theme.typography.h2.fontSize};
  font-weight: ${theme.typography.h2.fontWeight};
  color: ${theme.colors.onBackground};
  margin-bottom: ${theme.spacing(2)};
  text-align: center;
  max-width: 80%;
`;

// Content container for slide content
export const SlideContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
`;

// Footer component with branding
export const SlideFooter = styled(motion.footer)`
  position: absolute;
  bottom: ${theme.spacing(2)};
  left: ${theme.spacing(2)};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  font-size: ${theme.typography.body2.fontSize};
  color: ${theme.colors.onBackground};
  opacity: 0.8;
`;

// Logo image in the footer
export const LogoImage = styled.img`
  height: 30px;
  width: auto;
`;

// Navigation arrows
export const NavArrow = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${theme.colors.elevation3};
  color: ${theme.colors.onBackground};
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.circle};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${theme.shadows[2]};
  border: none;
  z-index: ${theme.zIndex.appBar};

  &:hover {
    background-color: ${theme.colors.elevation4};
  }

  &:active {
    background-color: ${theme.colors.elevation2};
  }
`;

export const LeftArrow = styled(NavArrow)`
  left: ${theme.spacing(2)};
`;

export const RightArrow = styled(NavArrow)`
  right: ${theme.spacing(2)};
`;

// Progress indicator for slides
export const SlideProgress = styled.div`
  position: absolute;
  bottom: ${theme.spacing(2)};
  right: ${theme.spacing(2)};
  display: flex;
  gap: ${theme.spacing(0.5)};
`;

export const ProgressDot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: ${theme.borderRadius.circle};
  background-color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.elevation4};
  transition: ${theme.transitions.fast};
`;
