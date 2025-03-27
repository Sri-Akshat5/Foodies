
import './App.css';
import Home from './Components/Home';
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";

import Navbar from "./Components/Navbar";
import FooterBar from './Components/FooterBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id='Home'>
        <Home />
      </section>
      <section id='About'>
        <About />

      </section>
      <section id='Testimonial'>
        <Testimonial />

      </section>
      <section id='Work'>

        <Work />
      </section>
      <section id='Contact'>
      <FooterBar/>

      </section>
    </div>
  );
}

export default App;
