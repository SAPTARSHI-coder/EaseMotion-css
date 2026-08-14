import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="demo-header">
        <h1>EaseMotion CSS - Lift Mixin</h1>
        <p>A reusable, customizable SCSS mixin for smooth GPU-accelerated lift animations.</p>
      </header>

      <div className="demo-grid">
        
        <section className="demo-section">
          <h2>Standard Button</h2>
          <button className="btn-primary">
            Hover to Lift
          </button>
        </section>

        <section className="demo-section">
          <h2>Feature Card (with Scale)</h2>
          <div className="feature-card">
            <h3>Modular Architecture</h3>
            <p>Built with SCSS mixins to keep your CSS DRY and easily maintainable.</p>
          </div>
        </section>

        <section className="demo-section">
          <h2>Media Gallery Item</h2>
          <div className="image-card">
            <div className="img-placeholder">Image</div>
            <div className="img-caption">Abstract Gradient #42</div>
          </div>
        </section>

        <section className="demo-section">
          <h2>Profile Badge (Bouncy Timing)</h2>
          <div className="profile-badge">
            <div className="avatar"></div>
            <div className="info">
              <strong>Alex Developer</strong>
              <span>Frontend Engineer</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
