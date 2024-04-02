import './App.css';
import SEO from './components/SEO';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {NavComponent} from './components/Nav';

function App() {
  return (
    <>
      <SEO/>
      <NavComponent/>
      <Header/>
      <Main/>
      <Footer/>
    </>

  );
}

export default App;
