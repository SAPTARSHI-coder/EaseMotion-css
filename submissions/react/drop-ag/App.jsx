import React, { useState } from 'react';
import './App.scss';

export default function App() {
  const [trigger, setTrigger] = useState(0);

  // Simple way to force re-render and re-trigger animations for the demo
  const replayAnimations = () => {
    setTrigger(prev => prev + 1);
  };

  return (
    <div className="demo-container" key={trigger}>
      <header className="demo-header">
        <h1>EaseMotion: Drop SCSS Mixin</h1>
        <p>A highly configurable, GPU-accelerated SCSS mixin for drop-in animations.</p>
        <button 
          onClick={replayAnimations}
          style={{ padding: '8px 16px', marginTop: '1rem', cursor: 'pointer' }}
        >
          Replay Animations
        </button>
      </header>

      <div className="demo-grid">
        
        {/* Demo A */}
        <section>
          <h3>Default Notification</h3>
          <p style={{fontSize: '0.8rem', color: '#666'}}>Uses default parameters (24px drop, 0.35s bounce).</p>
          <div className="drop-notification">
            <strong>System Update</strong>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Your application has been updated to v2.0.</p>
          </div>
        </section>

        {/* Demo B */}
        <section>
          <h3>Dropdown Menu</h3>
          <p style={{fontSize: '0.8rem', color: '#666'}}>Configured for a subtle, fast drop (10px, 0.2s, ease-out).</p>
          <div className="drop-menu">
            <ul>
              <li>Account Settings</li>
              <li>Billing</li>
              <li>Logout</li>
            </ul>
          </div>
        </section>

        {/* Demo C */}
        <section>
          <h3>Feature Card</h3>
          <p style={{fontSize: '0.8rem', color: '#666'}}>Configured for a heavy, delayed drop (50px, 0.6s, 0.4s delay).</p>
          <div className="drop-feature">
            <h2 style={{marginTop: 0}}>Premium Tier</h2>
            <p>Unlock all pro features today.</p>
          </div>
        </section>

        {/* Demo D */}
        <section>
          <h3>Staggered List</h3>
          <p style={{fontSize: '0.8rem', color: '#666'}}>Uses SCSS @for loop to generate staggered delays.</p>
          <div className="drop-list">
            <div className="list-item">1. Initializing sequence</div>
            <div className="list-item">2. Validating credentials</div>
            <div className="list-item">3. Access granted</div>
          </div>
        </section>

      </div>
    </div>
  );
}
