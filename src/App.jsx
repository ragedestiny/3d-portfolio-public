import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useInView } from "react-intersection-observer";

const App = () => {
  const { ref: aboutRef, inView: inViewAbout } = useInView();
  const { ref: workRef, inView: inViewWork } = useInView();
  const { ref: contactRef, inView: inViewContact } = useInView();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center mb-16 sm:mb-12">
          <Navbar
            inViewAbout={inViewAbout}
            inViewWork={inViewWork}
            inViewContact={inViewContact}
          />
          <Hero />
        </div>
        <div ref={aboutRef} className="mb-16 md:mb-24 lg:mb-56">
          <About />
        </div>
        <div ref={workRef} className="mb-36 md:mb-28 lg:mb-36">
          <Experience />
          <div className="relative z-0">
            <StarsCanvas />
            <Tech />
          </div>
          <Works />
        </div>
        {/* <Feedbacks /> */}
        <div className="relative z-0" ref={contactRef}>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
