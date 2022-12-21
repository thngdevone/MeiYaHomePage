import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import HeroSection from "../components/Hero/index";
import Nav from "../components/Nav/index";
import ProductCategories from "../components/ProductCategories/index";
import Contact from "../components/Contact/index";
import Footer from "../components/Footer/index";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav />
        <HeroSection />
        <ProductCategories />
        <Contact />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
