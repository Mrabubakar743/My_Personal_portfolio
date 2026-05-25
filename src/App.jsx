import About from "./pages/About";
import MainPage from "./pages/MainPage";
import ReadMore from "./pages/ReadMore";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <MainPage />
              <Projects/>
              <Services/>
              <About />
              <Contact/>
              <Footer/>
            </>
          }
        />

        <Route path="/readmore" element={<ReadMore />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;