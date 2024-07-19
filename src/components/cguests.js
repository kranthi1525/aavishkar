import React from 'react'
import './cguests.css'
import one from './images/CG1.jpeg';
import two from './images/CG2.jpg';
import three from './images/CG3.jpeg';

const expertiseTeam = [
    
    {
        name: "Bala Prasad Peddigari",
        role: "CIO, Tata Consultancy Services",
       
        avatar: two
    },
    {
      name: "Shikhar Goel",
      role: "GeeksforGeeks-CTO",
   
      avatar: one
  },
    {
        name: "Anil Tentu",
        role: "CEO, AP Innovation Society",
        
        avatar: three
    },
];

const ExpertProfile = ({ expert }) => (
    <div className="expert-card">
        <div className="avatar-wrapper">
            <img className="expert-avatar" src={expert.avatar} alt={expert.name} />
        </div>
        <div className="expert-info">
            <h2 className="expert-name">{expert.name}</h2>
            <p className="expert-role">{expert.role}</p>
            
        </div>
    </div>
);

export default function fourth() {
  return (
    <>
      <h2>CHIEF GUESTS</h2>
      <main className="expert-grid">
        {expertiseTeam.map((expert, index) => (
          <ExpertProfile key={index} expert={expert} />
        ))}
      </main>
    </>
  )
}