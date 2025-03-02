import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import valvImage from "./assets/valv.png";
import heroSideImage from "./assets/image1.png";
import heroSideImage2 from "./assets/image2.png";
import heroSideImage3 from "./assets/image3.png";
import presentationVideo from "./assets/Valv.mp4";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: -100,
      duration: 1,
    });
    gsap.to(".hero-text", {
      opacity: 1,
      y: 0,
      duration: 1,

    });

    gsap.from(".sub-text", {
      opacity: 0,
      y: -50,
      duration: 1,
    });
    gsap.to(".sub-text", {
      opacity: 1,
      y: 0,
      duration: 1,

    })

    gsap.from(".hero-side-image", {
      opacity: 0,
      x: 100,
      duration: 1,
    });
    gsap.to(".hero-side-image", {
      opacity: 1,
      x: -5,
      duration: 1,
    })

    gsap.from(".hero-side-image2", {
      opacity: 0,
      y: -50,
      duration: 1,
    });
    
    gsap.to(".hero-side-image2", {
      opacity: 1,
      y: 10,
      duration: 1,

    })

    gsap.from(".hero-side-image3", {
      opacity: 1,
      x: 100,
      duration: 1,
    });
    gsap.to(".hero-side-image3", {
      opacity: 1,
      x: -5,
      duration: 1,

    })
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Valv</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#app">App</a></li>
          <li><a href="#video">Demo</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero-app-section" id="home">

  {/* Hero Section */}
  <div className="hero">
    <div className="hero-content">
      <h1 className="hero-text">Experience the Future</h1>
      <p className="sub-text">AI-powered app to help college students with campus navigation, academic resources, and student services.</p>
      <a href="#app" className="btn">Explore More</a>
    </div>
    <div className="hero-image-container">
      <img src={heroSideImage} alt="Hero Side" className="hero-side-image" />
      <img src={heroSideImage3} alt="Hero Side" className="hero-side-image2" />
      <img src={heroSideImage2} alt="Hero Side" className="hero-side-image3" />
    </div>
  </div>

  {/* App Showcase Section */}
  <div className="app-showcase">
    <div className="app-info">
      <h2>Valv Mobile App</h2>
      <p>Revolutionizing mobile experiences with cutting-edge technology.</p>
    </div>
    <img src={valvImage} alt="Valv App" className="app-image" />
  </div>
</section>

      {/* Video Section */}
      <section className="video-section" id="video">
        <h2>Watch Our Presentation</h2>
        <video controls className="app-video">
          <source src={presentationVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Get in Touch</h2>
        <p>Have questions? Reach out to us!</p>
        <a href="mailto:info@valv.com" className="btn">Contact Us</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Valv Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
