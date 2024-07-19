import React from 'react';
import './Fourth.css';

const expertiseTeam = [
    {
        name: "Dr. J. Blackwood",
        role: "Chief Agronomist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Prof. E. Hartley",
        role: "Soil Science Director",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Dr. A. Voss",
        role: "Agricultural Economics Specialist",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Dr. S. Chen",
        role: "Biotechnology Research Lead",
        avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
];

const ExpertProfile = ({ expert }) => (
    <div className="expert-card1">
        <div className="avatar-wrapper1">
            <img className="expert-avatar1" src={expert.avatar} alt={expert.name} />
        </div>
        <div className="expert-info1">
            <h2 className="expert-name1">{expert.name}</h2>
            <p className="expert-role1">{expert.role}</p>
        </div>
    </div>
);

export default function Fourth() {
    return (
        <>
            <h1 className="team-heading1">Organizing Team</h1>
            <main className="expert-grid1">
                {expertiseTeam.map((expert, index) => (
                    <ExpertProfile key={index} expert={expert} />
                ))}
            </main>
        </>
    );
}
