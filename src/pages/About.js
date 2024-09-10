// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background: linear-gradient(to bottom, #7B261D, #AB4823);
  padding: 20px;
  color: white;
  text-align: center;
`;

function About() {
  return (
    <AboutSection>
      <h2>À propos</h2>
      <p>Bienvenue sur notre site de cinéma. Ici, vous pouvez trouver des informations sur les derniers films et les horaires des séances.</p>
    </AboutSection>
  );
}

export default About;
