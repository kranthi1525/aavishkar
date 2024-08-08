import React, { useState } from 'react';
import './faq.css';

const faqData = [
    {
        question: "Who can partipate in AVISHKAAR SEASON 2?",
        answer: "AVISHKAAR SEASON 2 welcomes undergraduate and postgraduate students from all years and institutes in India who are currently enrolled as full-time students. Aavishkaar is open to teams with a passion for innovation and a desire to contribute to society. Whether you're a student, professional, entrepreneur, or simply someone with a creative mind, we welcome you to join us in this exciting journey."
     },
    {
        question: "What can be the team size in AVISHKAAR SEASON 2 ?",
        answer: "The team can consist of a Minimum of 1 to a Maximum 4 four members."
    },
    {
        question: "Is there any security provided for our projects ?",
        answer: "As the hackathon will be conducted for 48 hours continuously we can provide a good atmosphere and safety. At least one student must be engaged with the project in the absence of a team members."
    },
    {
        question: "Food & Accommodation provision ?",
        answer: "PSelected teams for the grand finale round will have to pay for food and accommodation for a three-days, two-night stay throughout the hackathon. The details and fees for food and accommodation will be communicated upon selection for the grand finale."
    },
    {
        question: "Can a team consist the students from different domains ?",
        answer: "Certainly! A team has the flexibility to include students from diverse domains collaborating harmoniously to create a unified project."
    },
    {
        question: "Is there any registration fee ?",
        answer: "Absolutely not! Participating in this event comes at no cost, as there is no registration fee required for entry"
    },
    {
        question: "What are the criteria for the evaluation ?",
        answer: "The project evaluations will be based on a comprehensive scoring system, assigning 30 points for the identified problem, 20 points for the proposed solution, and an additional 20 points each for technical feasibility and novelty. Team strength will also be a factor, contributing 10 points to the overall assessment. This multifaceted approach ensures a thorough and balanced evaluation, taking into account the project's relevance, innovation, technical viability, and the strength of the collaborating team."
    },
];

const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
    <div className="accordion-item">
        <button className={`accordion-toggle ${isOpen ? 'active' : ''}`} onClick={onToggle}>
            {question}
        </button>
        <div className="accordion-content" style={{ maxHeight: isOpen ? '200px' : '0' }}>
            <p>{answer}</p>
        </div>
    </div>
);

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = index => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="faq">
            <h1>Frequently Asked Questions</h1>
            <div className="accordion">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={index === openIndex}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Accordion;
