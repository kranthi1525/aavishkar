import React, { useEffect, useRef } from 'react';
import './gallery.css';

// Import all images individually
import one from './lastyear/one.JPG';
import two from './lastyear/two.JPG';
import three from './lastyear/three.JPG';
import four from './lastyear/four.JPG';
import five from './lastyear/five.JPG';
import six from './lastyear/six.JPG';
import seven from './lastyear/seven.JPG';
import eight from './lastyear/eight.JPG';
import nine from './lastyear/nine.JPG';
import ten from './lastyear/ten.JPG';
import eleven from './lastyear/eleven.JPG';
import twelve from './lastyear/twelve.JPG';
import thirteen from './lastyear/thirteen.JPG';
import fourteen from './lastyear/fourteen.JPG';
import fifteen from './lastyear/fifteen.JPG';
import sixteen from './lastyear/sixteen.JPG';
import seventeen from './lastyear/seventeen.JPG';

const Marquee = () => {
  const marqueeRef = useRef(null);

  const images = [
    { src: one, alt: "Image 1" },
    { src: two, alt: "Image 2" },
    { src: three, alt: "Image 3" },
    { src: four, alt: "Image 4" },
    { src: five, alt: "Image 5" },
    { src: six, alt: "Image 6" },
    { src: seven, alt: "Image 7" },
    { src: eight, alt: "Image 8" },
    { src: nine, alt: "Image 9" },
    { src: ten, alt: "Image 10" },
    { src: eleven, alt: "Image 11" },
    { src: twelve, alt: "Image 12" },
    { src: thirteen, alt: "Image 13" },
    { src: fourteen, alt: "Image 14" },
    { src: fifteen, alt: "Image 15" },
    { src: sixteen, alt: "Image 16" },
    { src: seventeen, alt: "Image 17" },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    const firstChild = marquee.firstChild;
    marquee.appendChild(firstChild.cloneNode(true));
  }, []);

  return (
    <main>
      
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-content">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Marquee;