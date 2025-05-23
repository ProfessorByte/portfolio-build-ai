# Portfolio Build AI Slides

![Logo](/public/BuildAILogo.png)

## Descripción del Proyecto

Es una aplicación web interactiva que presenta una presentación sobre cómo potenciar tu marca personal utilizando Inteligencia Artificial para crear un portafolio de nivel profesional. La aplicación está construida con React y TypeScript, utilizando Vite como herramienta de desarrollo.

La presentación incluye diapositivas interactivas que cubren diferentes temas relacionados con la IA y el desarrollo web, incluyendo:

- Modelos de IA populares
- Herramientas de desarrollo web
- SWE Bench
- Gemini (IA de Google)
- Firebase Studio
- Y más

## Tecnologías Utilizadas

- **React 19**: Framework de JavaScript para construir interfaces de usuario
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Herramienta de compilación y desarrollo rápido
- **Framer Motion**: Biblioteca para animaciones
- **Styled Components**: Biblioteca para estilos en componentes
- **React Router**: Navegación entre páginas
- **React Device Detect**: Detección de dispositivos para una experiencia responsiva

## Estructura del Proyecto

```
portfolio-ai-slides/
├── public/                  # Archivos estáticos
│   ├── ai-logos/            # Logos de diferentes modelos de IA
│   ├── fonts/               # Fuentes personalizadas
│   ├── icons/               # Iconos para la aplicación
│   └── img/                 # Imágenes generales
├── src/
│   ├── assets/              # Componentes de assets
│   ├── components/          # Componentes reutilizables
│   │   ├── Icons.tsx        # Iconos personalizados
│   │   ├── Layout.tsx       # Componente de layout principal
│   │   ├── SlideComponents.tsx  # Componentes para diapositivas
│   │   └── SlideNavigation.tsx  # Navegación entre diapositivas
│   ├── hooks/               # Custom hooks
│   │   └── useSwipe.ts      # Hook para detección de gestos
│   ├── slides/              # Componentes de diapositivas individuales
│   └── styles/              # Estilos globales y temas
├── App.tsx                  # Componente principal
└── main.tsx                 # Punto de entrada
```

## Características

- **Diseño Responsivo**: Adaptable a dispositivos móviles y de escritorio
- **Animaciones Fluidas**: Transiciones suaves entre diapositivas y elementos
- **Navegación Intuitiva**: Control deslizante y navegación por teclado
- **Estilos Modernos**: Diseño atractivo con gradientes y efectos visuales
- **Optimizado para Rendimiento**: Carga rápida y transiciones suaves

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (recomendado) o npm

### Pasos para instalar

1. Clonar el repositorio:

   ```bash
   git clone [url-del-repositorio]
   cd portfolio-ai-slides
   ```

2. Instalar dependencias:

   ```bash
   pnpm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

4. Abrir el navegador en:
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo
- `pnpm build`: Compila el proyecto para producción
- `pnpm lint`: Ejecuta el linter para verificar el código
- `pnpm preview`: Previsualiza la versión compilada antes de desplegar

## Compilación para Producción

Para compilar el proyecto para producción:

```bash
pnpm build
```

Los archivos compilados se generarán en el directorio `dist/` y estarán listos para ser desplegados en cualquier servidor web estático.

## Uso de Gestos Táctiles

La aplicación soporta gestos táctiles para la navegación en dispositivos móviles:

- Deslizar hacia la izquierda: Avanzar a la siguiente diapositiva
- Deslizar hacia la derecha: Retroceder a la diapositiva anterior

## Contribución

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`)
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo licencia privada.

## Contacto

Para más información, contáctame a través de [tu información de contacto].

---

Desarrollado con ❤️ por [Tu Nombre/Organización]
