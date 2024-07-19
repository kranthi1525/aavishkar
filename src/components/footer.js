import React, { useEffect } from 'react';
import anime from 'animejs';

export default function Footer() {
  useEffect(() => {
    const footerLinks = document.querySelectorAll('.quick-links ul li a');

    footerLinks.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        anime({
          targets: e.target,
          scale: [1, 1.1],
          color: ['#ffffff', '#39ff14'],
          duration: 300,
          easing: 'easeInOutQuad'
        });
        anime({
          targets: e.target.parentNode.querySelector('::before'),
          opacity: [0, 1],
          translateX: [-10, 0],
          duration: 300,
          easing: 'easeOutQuad'
        });
      });

      link.addEventListener('mouseleave', (e) => {
        anime({
          targets: e.target,
          scale: [1.1, 1],
          color: ['#39ff14', '#ffffff'],
          duration: 300,
          easing: 'easeInOutQuad'
        });
        anime({
          targets: e.target.parentNode.querySelector('::before'),
          opacity: [1, 0],
          translateX: [0, -10],
          duration: 300,
          easing: 'easeInQuad'
        });
      });
    });

    anime({
      targets: '.footer-section',
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(100),
      duration: 1000,
      easing: 'easeOutQuad'
    });
  }, []);

  return (
    <footer className="site-footer">
      <style jsx>{`
        .site-footer {
          background-color: #2E733A;
          color: #ffffff;
          padding: 2rem 0;
          font-family: Arial, sans-serif;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
         width: 80%;
         position:relative;
          margin: 0 auto;
        }
        .footer-section {
          flex: 1;
          min-width: 250px;
          margin: 1rem;
        }
        .footer-section h3 {
          color: #ffffff;
          border-bottom: 2px solid #ffffff;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }
        .organizer img {
          max-width: 150px;
          margin-bottom: 1rem;
        }
        .quick-links ul {
          list-style-type: none;
          padding: 0;
        }
        .quick-links ul li {
          margin-bottom: 0.5rem;
          position: relative;
        }
        .quick-links ul li a {
          color: #ffffff;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
          padding-left: 25px;
        }
        .quick-links ul li a:hover {
          color: #39ff14;
          transform: scale(1.1);
        }
        .quick-links ul li::before {
          content: '🌾';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .quick-links ul li:hover::before {
          opacity: 1;
          left: 5px;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icon {
          color: #ffffff;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: #39ff14;
          transform: scale(1.2);
        }
          .linkedin{
            color:white;
            text-decoration:none;
          }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #ffffff;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
          }
        }
      `}</style>
      <div className="footer-content">
        <div className="footer-section organizer">
          <h3>Organised by</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0ZAqeOMxbsFy1qNsVCV0B4Bv3T2M94fG2A&s" alt="AITAM Logo" />
          <p>ADITYA INSTITUTE OF TECHNOLOGY AND MANAGEMENT</p>
          <p>An Autonomous Institution</p>
          <p>Address: K.Kotturu, Tekkali, Srikakulam</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Timeline</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">FAQS</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>avishkaar2024@adityatekkali.edu.in</p>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Developed and designed by SAC Members  <a className='linkedin' target='_blank' href='https://www.linkedin.com/in/krishna-raghavan-69a068263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '> M.A.V.K.RAGHAVAN </a> and<a className='linkedin' target='_blank'  href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'> K.KRANTHI KIRAN</a></p>
        <p>&copy; AVISHKAAR 2024 | ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}