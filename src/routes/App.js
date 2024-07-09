import "../App.css";
import HeaderElement from '../components/HeaderElement'
import HeroSection from "../components/HeroSection";
import Specials from '../components/Specials';
import Footer from '../components/Footer';
import SEO from '../components/SEO'
function App() {
  return (
    <>
      <SEO />
      <HeaderElement />
      <HeroSection />
      <Specials />
      <Footer />
    </>
  );
}

export default App;
