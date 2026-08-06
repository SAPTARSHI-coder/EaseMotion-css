import React from 'react';
import './style.css';

export default function ThreeDCharacterPortfolio({ title = "3D Character Showcase", characters = [] }) {
  const defaultCharacters = [
    {
      id: 1,
      name: "Coraline",
      theme: "theme-olive",
      embedId: "8a36759408a649839776c5a3d1cf6aa2"
    },
    {
      id: 2,
      name: "Elsa",
      theme: "theme-yellow",
      embedId: "9ea3f3fcbf7d404d8f2306af6973077d"
    },
    {
      id: 3,
      name: "Daenerys",
      theme: "theme-purple",
      embedId: "daa0697e1f384e2e858f1cb921653523"
    }
  ];

  const characterList = characters.length > 0 ? characters : defaultCharacters;

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">{title}</h1>
      <div className="cards-wrapper">
        {characterList.map((char) => (
          <div key={char.id} className={`avatar-card ${char.theme || 'theme-purple'}`}>
            <div className="window-header">
              <span className="character-title">{char.name}</span>
              <div className="window-dots">
                <span className="window-dot dot-purple"></span>
                <span className="window-dot dot-yellow"></span>
                <span className="window-dot dot-yellow"></span>
              </div>
            </div>
            <div className="card-viewport">
              <iframe 
                title={char.name} 
                src={`https://sketchfab.com/models/${char.embedId}/embed?autostart=1&ui_controls=0&ui_infos=0`}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                className="sketchfab-iframe"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}