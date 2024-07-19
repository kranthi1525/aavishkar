import React from 'react'
import './cguests.css'
import one from './images/G1.jpeg';


const expertiseTeam = [
    {
        name: "Santosh Chaluvadi",
        role: "CEO , Supraja Technologies",
     
        avatar: one
    },
    {
        name: "Prof. E. Hartley",
        role: "Soil Science Director",
       
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Dr. A. Voss",
        role: "Agricultural Economics Specialist",
        
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
      <h1>GUESTS</h1>
      <main className="expert-grid">
        {expertiseTeam.map((expert, index) => (
          <ExpertProfile key={index} expert={expert} />
        ))}
      </main>
    </>
  )
}