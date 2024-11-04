// In your React component file (e.g., SEOExperience.js)
import React from 'react';
import './SeoExperience.css';

const SEOExperience = () => {
  return (
    <section id="seo-experience">
      <h2>SEO Expertise</h2>
      <p>
        With over 1.5 years of self-taught experience in Search Engine Optimization, I have effectively optimized websites to increase visibility, drive organic traffic, and enhance overall site performance.
      </p>

      <div className="seo-skills">
        <div className="skill">
          <h3>Core Skills</h3>
          <ul>
            <li>Keyword Research & Analysis</li>
            <li>On-Page & Off-Page SEO</li>
            <li>Content Optimization</li>
            <li>Technical SEO</li>
            
          </ul>
        </div>
        <div className="tools">
          <h3>Tools I've Worked With</h3>
          <ul>
            <li>Google Analytics</li>
            <li>Google Search Console</li>
            <li>SEMrush</li>
            <li>UberSuggest</li>
           
          </ul>
        </div>
      </div>

      <div className="achievements">
        <h3>Notable Achievements</h3>
        <ul>
          <li>Increased organic traffic by 40% through focused SEO techniques.</li>
          <li>Achieved first-page rankings for 20+ competitive keywords.</li>
          <li>Improved site speed and structure for better user experience.</li>
        </ul>
      </div>
    </section>
  );
};

export default SEOExperience;
