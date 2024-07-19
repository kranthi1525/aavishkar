import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const headings = [
    "AVISHKAAR", // English
    "अविष्कार", // Hindi
    "আবিশ্কার", // Bengali
    "అవిష్కార్", // Telugu
    "அவிஷ்கார்", // Tamil
    "ಅವಿಷ್ಕಾರ", // Kannada
    "അവിഷ്കാരം", // Malayalam
    "અવિષ્કાર", // Gujarati
    "ਅਵਿਸ਼ਕਾਰ", // Punjabi
    "ଅବିଷ୍କାର", // Odia
    "अविष्कार", // Marathi
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    let timeoutId;
    const currentHeading = headings[currentHeadingIndex];
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < currentHeading.length) {
        setDisplayText(currentHeading.slice(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(typeText, 150);
      } else {
        timeoutId = setTimeout(eraseText, 3000); // Wait for 3 seconds before erasing
      }
    };

    const eraseText = () => {
      if (charIndex > 0) {
        setDisplayText(currentHeading.slice(0, charIndex - 1));
        charIndex--;
        timeoutId = setTimeout(eraseText, 50);
      } else {
        setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
      }
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, [currentHeadingIndex]);

  function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
  }

  return (
    <div className="root">
      <div className="container">
        <header>
          <div className="logo">AVISHKAAR</div>
          <div className="lllll">
            <div className="menu-icon" onClick={toggleMenu}>☰</div>
            <a href="#" className="register-btn">Register</a>
          </div>
          <nav id="nav-menu">
            <a href="#A">Home</a>
            <a href="#V">About</a>
            <a href="#I">Themes</a>
            <a href="#S">Timeline</a>
            <a href="#H">Price Pool</a>
            <a href="#H">Sponsors</a>
            <a href="#l">SEASON 1 HIGHLIGHTS</a>
            <a href="#K">Team</a>
            <a href="#f">FAQs</a>
            <a href="#foot">Contact</a>
            
          </nav>
        </header>
        <main className="hero">
          <h1 className="neon-heading">{displayText}</h1>
          <h2 className="neon-tagline">Season 2</h2>
        </main>
        <div className="content2">
          <p>powered by</p>
          <div className="logos">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPREBeb-lgXLfU0u0JhWrWxeF-dnLbZsFzfM77SKvmEXzJQ44o-OqvIfTsx_WHfECZrao&usqp=CAU" alt="" className="logo2" />
            <img src="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" alt="" className="logo1" />
          </div>
          <h3>Hackathon 2024</h3>
          <p>Grand Finale on 27,28, 29 Feb 2024</p>
          <a href="#" className="neonb">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
