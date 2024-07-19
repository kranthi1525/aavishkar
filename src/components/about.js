import React from "react";
import CountdownTimer from "./CountdownTimer";
import "./about.css";

export default function about() {
  return (
    <div>
      <h1>About</h1>
      <div className="total">
        <div className="one">
          <p>
            Join AVISHKAAR Season 2, a National-level hackathon hosted by Aditya
            Institute of Technology And Management, powered by GeeksforGeeks.
            Our mission is to address real-time challenges in India's rural and
            urban communities through innovation in digital empowerment,
            agriculture, healthcare, education, and sustainability. Let's create
            positive societal impact together
          </p>
        </div>
        <div className="two">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
}
