import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import FilterAndSort from "./context/FilterAndSortContext";
import DogDetails from "./pages/DogDetails";
import Company from "./pages/Company";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Intro from "./pages/Intro";

function App() {
  // const [count, setCount] = useState(0);
  const { enableSearchFunction } = FilterAndSort();
  const location = useLocation();
  enableSearchFunction(location);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog/:id" element={<DogDetails />} />
        <Route path="/company" element={<Company />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
