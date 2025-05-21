import Layout from "./components/Layout.tsx";
import { SlideNavigation } from "./components/SlideNavigation.tsx";
import TitleSlide from "./slides/TitleSlide.tsx";
import TestSlide from "./slides/TestSlide.tsx";
import "./App.css";

function App() {
  return (
    <Layout>
      <SlideNavigation>
        <TitleSlide />
        <TestSlide />
      </SlideNavigation>
    </Layout>
  );
}

export default App;
