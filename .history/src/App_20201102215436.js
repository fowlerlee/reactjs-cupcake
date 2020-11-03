import './App.css';
// import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CakeCupCake from './components/cakecupcake.jsx';

import styles from '../styles/mystyle.module.css';

import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Contact from '../src/components/Contact';

function App() {
  return (
    <div>
      <Nav className={styles.nav} />
      <About />
      <Contact />
      <CakeCupCake />
      <Footer />
    </div>
  );
}

export default App;
