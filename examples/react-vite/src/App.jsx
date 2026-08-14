import React, { useState } from 'react';
import './App.css';
import Animate from './components/Animate';

function App() {
  const [activeAnimation, setActiveAnimation] = useState('fade-in');
  const [triggerCount, setTriggerCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const animationsList = [
    { value: 'fade-in', label: 'Fade In' },
    { value: 'slide-up', label: 'Slide Up' },
    { value: 'slide-down', label: 'Slide Down' },
    { value: 'zoom-in', label: 'Zoom In' },
    { value: 'zoom-out', label: 'Zoom Out' },
    { value: 'spin', label: 'Spin' },
    { value: 'bounce', label: 'Bounce' }
  ];

  const handleTrigger = () => {
    setTriggerCount(prev => prev + 1);
  };

  return (
    <div className="dashboard-container">
      {/* Pinned Title Header */}
      <Animate type="slide-down" duration="slow" className="glow-header">
        <span className="pill">React Integration</span>
        <h1 className="ease-text-h1" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>
          EaseMotion CSS <span className="gradient-text">React Showcase</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Experience human-readable, animation-first CSS classes wrapped in React.
        </p>
      </Animate>

      {/* Main Grid Content */}
      <div className="dashboard-grid">
        {/* Card 1: Staggered Entry Card */}
        <Animate type="fade-in" delay={100} hover="lift" className="demo-card">
          <span className="pill">01 / Staggered Entry</span>
          <h3>Staggered Animation</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            React wrapper component makes it easy to specify custom delays for list entries.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Animate type="fade-in" delay={200} className="pill" style={{ background: 'rgba(168, 85, 247, 0.15)', color: 'var(--accent-purple)' }}>Item A</Animate>
            <Animate type="fade-in" delay={400} className="pill" style={{ background: 'rgba(168, 85, 247, 0.15)', color: 'var(--accent-purple)' }}>Item B</Animate>
            <Animate type="fade-in" delay={600} className="pill" style={{ background: 'rgba(168, 85, 247, 0.15)', color: 'var(--accent-purple)' }}>Item C</Animate>
          </div>
        </Animate>

        {/* Card 2: Interactive Playground */}
        <Animate type="fade-in" delay={200} hover="lift" className="demo-card">
          <span className="pill">02 / Playground</span>
          <h3>Interactive Playground</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Select an animation class and trigger it interactively using React state.
          </p>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <select 
              value={activeAnimation} 
              onChange={(e) => setActiveAnimation(e.target.value)}
              style={{
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                padding: '0.5rem',
                borderRadius: '6px',
                flexGrow: 1
              }}
            >
              {animationsList.map(a => (
                <option key={a.value} value={a.value}>{a.label}</option>
              ))}
            </select>
            <button className="btn-primary" onClick={handleTrigger} style={{ padding: '0.5rem 1rem' }}>
              Run
            </button>
          </div>

          <div className="interactive-demo">
            {/* key={triggerCount} forces React to remount the component, triggering the animation */}
            <Animate key={`${activeAnimation}-${triggerCount}`} type={activeAnimation} duration="medium">
              <div style={{
                background: 'var(--primary-glow)',
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)'
              }}>
                ⭐
              </div>
            </Animate>
          </div>
        </Animate>

        {/* Card 3: Modal Demo */}
        <Animate type="fade-in" delay={300} hover="lift" className="demo-card">
          <span className="pill">03 / State Toggle</span>
          <h3>Modal Transition</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Animate conditional elements using EaseMotion keyframe classes when they mount.
          </p>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)} style={{ marginTop: '1rem', width: '100%' }}>
            Open Demo Modal
          </button>
        </Animate>
      </div>

      {/* Modal Dialog portal overlay */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(5, 2, 15, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(8px)',
        }}>
          <Animate type="zoom-in" duration={350} className="demo-card" style={{ maxWidth: '450px', width: '90%' }}>
            <h3>Modal Dialog</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              This modal dialog enters the screen smoothly using the <code>ease-animate-zoom-in</code> animation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-outline" onClick={() => setIsModalOpen(false)} style={{ margin: 0 }}>
                Close Modal
              </button>
            </div>
          </Animate>
        </div>
      )}

      {/* Bottom Showcase Info */}
      <Animate type="fade-in" delay={400} className="demo-card" style={{ background: 'rgba(6, 182, 212, 0.05)', borderColor: 'rgba(6, 182, 212, 0.2)' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-cyan)' }}>🚀 Features of EaseMotion CSS in React:</h4>
        <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6' }}>
          <li>Supports clean, declarative JSX syntax with custom <code>Animate</code> helper component.</li>
          <li>Zero React-side bundle overhead — utilizes high-performance hardware-accelerated CSS animations.</li>
          <li>Integrates flawlessly with standard React state switches (modal opening, tab changes, dynamic filters).</li>
        </ul>
      </Animate>
    </div>
  );
}

export default App;
