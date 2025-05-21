import Layout from "./components/Layout.tsx";
import { SlideNavigation } from "./components/SlideNavigation.tsx";
import TitleSlide from "./slides/TitleSlide.tsx";
import AIModelsSlide from "./slides/AIModelsSlide.tsx";
import "./App.css";

function App() {
  return (
    <Layout>
      <SlideNavigation>
        <TitleSlide />
        <AIModelsSlide />
      </SlideNavigation>
    </Layout>
  );
}

export default App;
