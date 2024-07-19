import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faClipboardCheck, faChalkboardTeacher, faChartLine, faTrophy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need
import './Roadmap.css';

export default function Roadmap() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Delay the line animation
          setTimeout(() => {
            entry.target.classList.add('animate-lines');
          }, 500);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    const timelineEvents = document.querySelectorAll('.timeline__event');
    timelineEvents.forEach(event => {
      observer.observe(event);
    });

    // Parallax effect for background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      document.body.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineEvents = [
    {
      date: "01-01-2024",
      title: "PHASE-1: Problem Statement Submission",
      description: "Avishkaar Season 2 invites early submissions of 1-minute video pitches and abstracts of innovative solutions for problem statements, promising mentorship and theme alignment for your solutions. Click here for guidelines.",
      icon: faVideo,
      delayClass: "delay-3s",
      typeClass: "timeline__event--type1"
    },
    {
      date: "15-02-2024",
      title: "PHASE-2: Evaluation",
      description: "Two-phase evaluation process is designed for fair and insightful assessment, focusing on assessing innovative solutions to determine their quality and potential impact.",
      icon: faClipboardCheck,
      delayClass: "delay-2s",
      typeClass: "timeline__event--type2"
    },
    {
      date: "01-04-2024",
      title: "PHASE-3: Mentorship",
      description: "Mentorship is central to Avishkaar Season 2, with the first 100 participants paired with dedicated mentors from various fields, offering guidance tailored to mentors' participants will be offered suggestions that impact the final assessment to ensure support for innovation.",
      icon: faChalkboardTeacher,
      delayClass: "delay-1s",
      typeClass: "timeline__event--type3"
    },
    {
      date: "15-06-2024",
      title: "PHASE-4: Progress Review",
      description: "Teams adhere to a well-defined presentation format, utilizing review meetings as a platform for clarifications. The feedback and suggestions offered during the third phase are systematically evaluated. Recognizing its pivotal role, progress reviews are deemed essential not only for informed project selection but also for ensuring the overall success of the endeavor.",
      icon: faChartLine,
      delayClass: "",
      typeClass: "timeline__event--type1"
    },
    {
      date: "01-08-2024",
      title: "PHASE-5: Grand Finale",
      description: "The Grand Finale at Aditya Institute of Technology and Management signifies the impressive conclusion of Avishkaar Season 2. During this event, finalist teams present innovative concepts and solutions to a panel of judges and industry experts. Thorough project assessments result in recognizing and rewarding the most outstanding teams with cutting-edge ideas.",
      icon: faTrophy,
      delayClass: "delay-3s",
      typeClass: "timeline__event--type1"
    },
    {
      date: "15-09-2024",
      title: "Declarations of Results",
      description: "The official results announcement for Avishkaar Season 2, celebrating the success and innovative achievements of the participants.",
      icon: faCheckCircle,
      delayClass: "",
      typeClass: "timeline__event--type1"
    }
  ];

  return (
    <div>
      <h1>TIMELINE</h1>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div 
            key={index}
            className={`timeline__event animated fadeInUp ${event.delayClass} ${event.typeClass}`}
            style={index === timelineEvents.length - 1 ? { '::after': { display: 'none' } } : {}}
          >
            <div className="timeline__event__icon">
              <FontAwesomeIcon icon={event.icon} className="icon" />
            </div>
            <div className="timeline__event__date">{event.date}</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">{event.title}</div>
              <div className="timeline__event__description">
                <p className='desc'>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
