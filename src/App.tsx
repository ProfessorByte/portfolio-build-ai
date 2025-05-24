import Layout from "./components/Layout.tsx";
import { SlideNavigation } from "./components/SlideNavigation.tsx";
import TitleSlide from "./slides/TitleSlide.tsx";
import AIModelsSlide from "./slides/AIModelsSlide.tsx";
import WebDevArenaSlide from "./slides/WebDevArenaSlide.tsx";
import SWEBenchSlide from "./slides/SWEBenchSlide.tsx";
import GeminiSlide from "./slides/GeminiSlide.tsx";
import FirebaseStudioSlide from "./slides/FirebaseStudioSlide.tsx";
import FormSlide from "./slides/FormSlide.tsx";
import ThankYouSlide from "./slides/ThankYouSlide.tsx";
import SocialMediaSlide from "./slides/SocialMediaSlide.tsx";
import "./App.css";

function App() {
  return (
    <Layout>
      <SlideNavigation>
        <TitleSlide />
        <AIModelsSlide />
        <WebDevArenaSlide />
        <SWEBenchSlide />
        <GeminiSlide />
        <FirebaseStudioSlide />
        <FormSlide />
        <ThankYouSlide />
        <SocialMediaSlide />
      </SlideNavigation>
    </Layout>
  );
}

export default App;
