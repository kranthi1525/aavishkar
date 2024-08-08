import React, { useEffect } from 'react';
import styled from 'styled-components';
import "./sponsers.css"

const Container = styled.div`
  .prize-card {
    
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;
  }
  .sponsor {
    
    transform: scale(0.8);
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1) rotate(5deg);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

export default function Sponsors() {
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const cards = document.querySelectorAll('.prize-card');
      const sponsors = document.querySelectorAll('.sponsor');

      // Prize cards entrance animation
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 300 * index);
      });

      // Sponsor logos entrance animation
      sponsors.forEach((sponsor, index) => {
        setTimeout(() => {
          sponsor.style.opacity = '1';
          sponsor.style.transform = 'scale(1)';
        }, 200 * index);
      });

      // Floating animation for sponsor logos
      sponsors.forEach((sponsor, index) => {
        sponsor.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
      });

      // Sponsor logo click animation
      sponsors.forEach(sponsor => {
        sponsor.addEventListener('click', () => {
          sponsor.style.transform = 'scale(0.9)';
          setTimeout(() => {
            sponsor.style.transform = 'scale(1.1)';
          }, 150);
          setTimeout(() => {
            sponsor.style.transform = 'scale(1)';
          }, 300);
        });
      });
    };

    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  return (
    <Container>
      <div className="container">
        <h1>PRIZE POOL</h1>
        <div className="prize-container">
        <div className="prize-card" id="first">
                <h2>1st Prize</h2>
                <div className="prize-icon">🏆</div>
                <p className="prize-amount">₹1,25,000</p>
                <p className="prize-description">Golden Harvest Award</p>
                <p className="prize-details">Recognizing outstanding achievement in agricultural innovation.</p>
            </div>
            <div className="prize-card" id="second">
                <h2>2nd Prize</h2>
                <div className="prize-icon">🌾</div>
                <p className="prize-amount">₹1,00,000</p>
                <p className="prize-description">Silver Silo Award</p>
                <p className="prize-details">Celebrating significant contributions to sustainable farming practices.</p>
            </div>
            <div className="prize-card" id="third">
                <h2>3rd Prize</h2>
                <div className="prize-icon">🚜</div>
                <p className="prize-amount">₹75,000</p>
                <p className="prize-description">Bronze Barn Award</p>
                <p className="prize-details">Recognizing notable advancements in agricultural technology and efficiency.</p>
            </div>

        </div>

        <h1>Our Sponsors</h1>
        <div className="sponsor-container">
          <div className="sponsor" data-name="Geeks for Geeks">
            <img src="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" alt="Geeks for Geeks" />
          </div>
          <div className="sponsor" data-name="...">
            <img src="https://avishkaar2024.adityatekkali.edu.in/static/media/logo-small-1-1.ed1aabc80744d972ab2a.png" alt="AgriCorp" />
          </div>
          <div className="sponsor" data-name="...">
            <img src="https://avishkaar2024.adityatekkali.edu.in/static/media/319404445_1324961484944842_7733330898332491332_n.54c5b6822871eb121e25.png" alt="FarmFuture" />
          </div>
          <div className="sponsor" data-name="...">
            <img src="https://avishkaar2024.adityatekkali.edu.in/static/media/TCSiON_Badge%20(1).ee19556ebd401d52a338.png" alt="EcoHarvest" />
          </div>
          <div className="sponsor" data-name="....">
            <img src="https://via.placeholder.com/150?text=SeedInnovate" alt="SeedInnovate" />
          </div>
          <div className="sponsor" data-name="....">
            <img src="https://avishkaar2024.adityatekkali.edu.in/static/media/iiclogo.d9ac219ca1b182b0d299.png" alt="CropBoost" />
          </div>
        </div>
      </div>
    </Container>
  );
}
