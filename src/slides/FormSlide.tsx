import React, { useState } from "react";
import {
  SlideContainer,
  SlideTitle,
  SlideContent,
} from "../components/SlideComponents";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

// Styled components for the form
const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  width: 100%;
  max-width: ${isMobile ? "100%" : "600px"};
  margin: 0 auto;
  overflow-y: auto;
  padding: ${theme.spacing(2)};
  max-height: ${isMobile ? "calc(100vh - 170px)" : "calc(100vh - 240px)"};

  /* Ensure content fits without scrolling on mobile devices */
  @media (max-height: 700px) {
    gap: ${theme.spacing(1.5)};
  }

  @media (max-height: 600px) {
    gap: ${theme.spacing(1)};
  }
`;

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.75)};
`;

const FormLabel = styled.label`
  font-size: ${isMobile ? "0.9rem" : "1rem"};
  color: ${theme.colors.onBackground};
  font-weight: 500;
`;

const FormInput = styled.input`
  background-color: ${theme.colors.elevation2};
  border: 1px solid ${theme.colors.elevationBorder};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.onBackground};
  padding: ${isMobile ? theme.spacing(1) : theme.spacing(1.5)};
  font-size: ${isMobile ? "0.9rem" : "1rem"};
  outline: none;
  transition: ${theme.transitions.default};

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primary}40;
  }
`;

const FormTextarea = styled.textarea`
  background-color: ${theme.colors.elevation2};
  border: 1px solid ${theme.colors.elevationBorder};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.onBackground};
  padding: ${theme.spacing(1.5)};
  font-size: ${isMobile ? "0.9rem" : "1rem"};
  min-height: ${isMobile ? "60px" : "80px"};
  resize: none;
  outline: none;
  transition: ${theme.transitions.default};

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primary}40;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.secondary}
  );
  color: ${theme.colors.onPrimary};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  padding: ${isMobile ? theme.spacing(1.25) : theme.spacing(1.5)};
  font-size: ${isMobile ? "0.9rem" : "1rem"};
  font-weight: 600;
  cursor: pointer;
  transition: ${theme.transitions.default};
  margin-top: ${theme.spacing(1)};
  box-shadow: ${theme.shadows[2]};

  &:hover {
    box-shadow: ${theme.shadows[3]};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${theme.shadows[1]};
  }
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  gap: ${theme.spacing(1.5)};
  width: 100%;
  margin-top: ${theme.spacing(2)};
`;

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing(0.75)};
  background-color: ${theme.colors.elevation3};
  color: ${theme.colors.onBackground};
  border: 1px solid ${theme.colors.elevationBorder};
  border-radius: ${theme.borderRadius.medium};
  padding: ${isMobile ? theme.spacing(1.25) : theme.spacing(1.5)};
  font-size: ${isMobile ? "0.9rem" : "1rem"};
  font-weight: 600;
  cursor: pointer;
  transition: ${theme.transitions.default};
  box-shadow: ${theme.shadows[1]};
  text-decoration: none;
  text-align: center;
  flex: 1;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    box-shadow: ${theme.shadows[2]};
    transform: translateY(-2px);
    background-color: ${theme.colors.elevation4};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${theme.shadows[1]};
  }
`;

const Notification = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${theme.colors.elevation3};
  color: ${theme.colors.onBackground};
  padding: ${theme.spacing(2)};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows[3]};
  z-index: ${theme.zIndex.snackbar};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  font-weight: 500;

  &::before {
    content: "✓";
    color: ${theme.colors.accent};
    font-size: 1.2rem;
  }
`;

// Form component
const FormSlide: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    profession: "",
    skills: "",
    socialMedia: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create prompt template
    const promptTemplate = `
**Rol Principal Asignado:** Eres un Ingeniero de Software Full-Stack y Diseñador Web UI/UX de élite, con especialización en la creación de portafolios web vanguardistas, interactivos y visualmente impactantes. Tu misión es traducir la identidad profesional de un individuo en una experiencia digital memorable y altamente profesional. Te inspiras en los portafolios más innovadores de ingenieros de software de empresas como Google, pero siempre buscas la originalidad y la personalización.

**Contexto del Proyecto:**
Voy a proporcionarte tres datos clave sobre una persona para la cual necesito que desarrolles un portafolio web completo. El objetivo es que este portafolio no solo muestre su información, sino que la presente de una manera que deslumbre, demuestre un alto nivel técnico y una estética única y moderna.

**Entradas del Usuario (a rellenar por el usuario final):**
1.  **Nombre Completo:** \`${formData.fullName}\`
2.  **Profesión/Dedicación Principal:** \`${formData.profession}\`
3.  **Habilidades Principales (Main Skills):** \`${formData.skills}\`

**Tarea Fundamental: Generar un Portafolio Web Excepcional**

Basándote en las entradas proporcionadas, tu tarea es diseñar y generar el código completo para un portafolio web personal. Este portafolio debe cumplir con los siguientes criterios rigurosos:

**1. Diseño y Estética (Prioridad Alta):**
    *   **Visualmente Alucinante y Único:** Cada vez que se utilice este prompt, incluso con los mismos datos de entrada, esfuérzate por generar un diseño RADICALMENTE DIFERENTE y original. Evita cualquier plantilla genérica. Sorpréndeme con conceptos visuales atrevidos, modernos y memorables. Piensa en interactividad sutil pero impactante, micro-animaciones elegantes, y una paleta de colores y tipografía que reflejen profesionalismo y modernidad.
    *   **Inspiración de Élite, No Copia:** Inspírate en la creatividad y complejidad de portafolios como los de Bruno Simon, Brittany Chiang, y otros ingenieros de software destacados a nivel mundial. Busca elementos como:
        *   Navegación innovadora.
        *   Uso creativo del espacio y layout.
        *   Efectos visuales que respondan a la interacción del usuario (scroll, hover, clics).
        *   Integración de elementos gráficos o abstractos que complementen el contenido.
    *   **Profesionalismo y Modernidad Tecnológica:** El diseño debe transmitir que se ha dedicado tiempo y esfuerzo, reflejando un trabajo de alta calidad, sofisticado y tecnológicamente avanzado. Debe sentirse fresco, actual y relevante para la industria tecnológica.

**2. Contenido y Estructura:**
    *   **Sección de Inicio (Hero Section):** Impactante y concisa. Debe presentar a \`${formData.fullName}\` y su \`${formData.profession}\` de forma clara y atractiva. Considera un eslogan o frase corta que resuma su propuesta de valor.
    *   **Sección Sobre Mí (About Me):** Un espacio para una breve biografía profesional, destacando pasión, enfoque y experiencia general.
    *   **Sección de Habilidades (Skills):** Presenta las \`${formData.skills}\` de forma visualmente atractiva. No te limites a una lista; considera barras de progreso, nubes de tags interactivas, o categorización visual.
    *   **Sección de Proyectos (Placeholder Estratégico):**
        *   **MUY IMPORTANTE:** Diseña y implementa una sección de "Proyectos" que esté claramente definida y estructurada, lista para ser poblada con detalles de proyectos específicos en interacciones futuras.
        *   Debe ser visualmente atractiva incluso vacía, quizás con un mensaje como "Próximamente: una muestra de mis proyectos más destacados" o un diseño gráfico que invite a la curiosidad.
        *   La estructura de cada "tarjeta" o "entrada" de proyecto (que se añadirá después) debe prever espacio para: título del proyecto, descripción corta, tecnologías usadas, y un enlace (o botón) a más detalles o al proyecto en vivo.
        *   Asegúrate de que esta sección sea flexible para acomodar múltiples proyectos con descripciones de longitud variable e imágenes/videos.
    *   **Sección de Contacto:** Links de contacto a redes sociales, las cuales son \`${formData.socialMedia}\`. Considera enlaces directos a plataformas como LinkedIn, Twitter, etc. Esta sección debe ser clara y accesible, no quiero que hagas un formulario de contacto, sino enlaces directos a mis redes sociales, eso es muy importante.

**3. Requisitos Técnicos Fundamentales:**
    *   **Stack Tecnológico:**
        *   **Framework Principal:** React con Vite (para un entorno de desarrollo rápido y moderno).
        *   **Estilos:** Tailwind CSS (utiliza sus clases de utilidad para un diseño eficiente y personalizable).
    *   **Calidad del Código:**
        *   **Modularidad:** Estructura el proyecto en componentes de React bien definidos y reutilizables. Cada sección principal del portafolio debería ser su propio componente.
        *   **Mejores Prácticas:** Aplica las mejores prácticas de desarrollo para React, JavaScript (ES6+), y Tailwind CSS. Código limpio, legible y mantenible.
        *   **Semántica HTML:** Utiliza etiquetas HTML semánticas ( \`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<footer>\`, etc.) para mejorar la accesibilidad y el SEO.
        *   **Estructura de Archivos Clara:** Organiza los archivos del proyecto de manera lógica (ej: \`src/components/\`, \`src/assets/\`, \`src/pages/\` o \`src/sections/\`).
    *   **Responsividad Absoluta:** El portafolio DEBE ser completamente responsive y verse impecable en todos los tamaños de pantalla: móviles, tablets y desktops (pequeños y grandes). Presta especial atención a la navegación y la legibilidad en dispositivos pequeños.

**4. Estrategia de Generación (Para la IA):**
    *   **Piensa Paso a Paso:** Antes de generar el código, considera internamente un plan de diseño y estructura.
    *   **Complejidad y Detalle:** No generes un portafolio simple o minimalista a menos que el concepto de diseño específico que elijas lo justifique y aun así sea sofisticado. Prioriza elementos que demuestren habilidad técnica y atención al detalle.
    *   **Variabilidad Extrema:** Te instruyo explícitamente para que, en cada ejecución de este prompt, explores rutas de diseño completamente nuevas. No te repitas. El objetivo es la diversidad de resultados de alta calidad.

**Formato de Salida Esperado:**
Proporciona el código completo del proyecto. Idealmente, presenta la estructura de archivos y el contenido de cada archivo principal (ej: \`index.html\`, \`vite.config.js\`, \`src/main.jsx\`, \`src/App.jsx\`, \`src/components/Header.jsx\`, \`src/components/Hero.jsx\`, \`src/components/About.jsx\`, \`src/components/Skills.jsx\`, \`src/components/ProjectsSection.jsx\`, \`src/components/Contact.jsx\`, \`tailwind.config.js\`, \`postcss.config.js\`, \`src/index.css\` o \`src/App.css\` para los estilos base de Tailwind).
Recuerda que debes hacerlo completamente en Vite+React+Tailwind CSS, y que el código debe ser completamente funcional y listo para ser ejecutado.

**¡Adelante! Crea una obra maestra digital que sirva como un portafolio profesional excepcional para \`${formData.fullName}\`.**

    `.trim();

    // Copy to clipboard
    navigator.clipboard
      .writeText(promptTemplate)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles:", err);
      });
  };

  return (
    <SlideContainer>
      <SlideContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SlideTitle
            style={{
              fontSize: isMobile ? "1.8rem" : "2.5rem",
              marginBottom: theme.spacing(isMobile ? 2 : 3),
              background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ¡Personaliza tu portafolio con IA!
          </SlideTitle>

          <StyledForm variants={containerVariants} onSubmit={handleSubmit}>
            <FormGroup variants={itemVariants}>
              <FormLabel>¿Cómo te llamas? 😊</FormLabel>
              <FormInput
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ej. María Rodríguez"
                required
              />
            </FormGroup>
            <FormGroup variants={itemVariants}>
              <FormLabel>¿A qué te dedicas? 💼</FormLabel>
              <FormInput
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Ej. Diseñadora UX/UI"
                required
              />
            </FormGroup>
            <FormGroup variants={itemVariants}>
              <FormLabel>¿Cuáles son tus habilidades principales? 🚀</FormLabel>
              <FormTextarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Ej. Diseño de interfaces, prototipado, investigación de usuarios, HTML/CSS"
                required
              />
            </FormGroup>
            <FormGroup variants={itemVariants}>
              <FormLabel>¿Dónde te pueden encontrar? 🌐</FormLabel>
              <FormTextarea
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
                placeholder="Ej. LinkedIn: /mariadesign, Twitter: @mariauxui, Behance: mariadesigns"
                required
              />
            </FormGroup>{" "}
            <SubmitButton
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Generar prompt para mi portafolio ✨
            </SubmitButton>
            <ButtonsContainer variants={itemVariants}>
              {" "}
              <LinkButton
                href="https://ai.dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src="/icons/ai-studio-icon.png"
                  alt="AI Studio Icon"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                Google AI Studio
              </LinkButton>
              <LinkButton
                href="https://studio.firebase.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src="/icons/firebase-studio-icon.png"
                  alt="Firebase Studio Icon"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                Firebase Studio
              </LinkButton>
            </ButtonsContainer>
          </StyledForm>

          {showNotification && (
            <Notification
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              ¡Prompt copiado al portapapeles! Pégalo en tu IA favorita.
            </Notification>
          )}
        </motion.div>
      </SlideContent>
    </SlideContainer>
  );
};

export default FormSlide;
