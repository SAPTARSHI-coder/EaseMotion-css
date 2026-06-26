import React, { useState } from 'react';
import Preview from './components/Preview';
import Controls from './components/Controls';
import CodeGenerator from './components/CodeGenerator';
import './App.css';

function App() {
  const [config, setConfig] = useState({
    type: 'fade-in',
    duration: 500, // 100ms - 3000ms
    timingCurve: 'ease',
    hoverLift: false,
    hoverScale: false,
    hoverGlow: false,
  });

  // Unique key to force re-render/re-trigger animation on change
  const previewKey = JSON.stringify(config);

  return (
    <div className="playground-container">
      <header className="playground-header">
        <h1>EaseMotion <span className="text-gradient">Interactive Playground</span></h1>
        <p>Fine-tune your animations and copy the React code instantly.</p>
      </header>

      <main className="playground-grid">
        {/* Left Column: Preview & Code */}
        <div className="main-panel">
          <section className="glass-panel preview-section">
            <h2>Live Preview</h2>
            <div className="preview-canvas">
              <Preview key={previewKey} config={config} />
            </div>
          </section>

          <section className="glass-panel code-section">
            <h2>Generated JSX</h2>
            <CodeGenerator config={config} />
          </section>
        </div>

        {/* Right Column: Controls */}
        <aside className="glass-panel controls-section">
          <h2>Configuration</h2>
          <Controls config={config} setConfig={setConfig} />
        </aside>
      </main>
    </div>
  );
}

export default App;
