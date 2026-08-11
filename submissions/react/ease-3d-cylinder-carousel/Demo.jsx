import React from 'react';
import { CylinderCarousel, CylinderPanel } from './CylinderCarousel';
import './style.css';

/**
 * ============================================================================
 * EaseMotion 3D Cylinder Demo
 * ============================================================================
 * 
 * To truly test the hardware acceleration and math, we generate a massive 
 * 12-sided polygon (Dodecagon). 
 * 
 * Scroll your mouse wheel down the page to physically rotate the 3D cylinder!
 */

export const CylinderDemo = () => {
  return (
    <div className="demo-page-wrapper">
      
      {/* 
        We enforce a massive scroll height on the wrapper.
        The cylinder itself remains `position: sticky` on the screen, while 
        the user physically scrolls down the page to drive the animation.
      */}
      <div className="scroll-timeline-driver">
        
        <div className="sticky-viewport">
          
          <header className="demo-header">
            <h1>Scroll to Rotate</h1>
            <p>
              A perfect 3D mathematical cylinder composed of 12 DOM nodes. 
              Rotation is tied exclusively to the window's scroll-timeline.
              Zero JS is executing right now.
            </p>
          </header>

          <CylinderCarousel itemWidth={260} itemHeight={380}>
            
            <CylinderPanel bgImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>01</h2>
                <h3>Retro Arcade</h3>
                <p>Nostalgic 8-bit experiences</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>02</h2>
                <h3>Cyberpunk City</h3>
                <p>Neon-soaked dystopian streets</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>03</h2>
                <h3>Next-Gen Console</h3>
                <p>4K 120FPS HDR Gaming</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>04</h2>
                <h3>VR Headset</h3>
                <p>Immersive digital realities</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>05</h2>
                <h3>Esports Arena</h3>
                <p>Competitive multiplayer tournaments</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>06</h2>
                <h3>Mechanical Keyboard</h3>
                <p>Tactile cherry-mx switches</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>07</h2>
                <h3>High-End GPU</h3>
                <p>Ray-tracing architecture</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>08</h2>
                <h3>Motherboard</h3>
                <p>Advanced circuitry nodes</p>
              </div>
            </CylinderPanel>
            
            <CylinderPanel bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>09</h2>
                <h3>Server Rack</h3>
                <p>Enterprise cloud computing</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>10</h2>
                <h3>Code Matrix</h3>
                <p>Backend infrastructure</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>11</h2>
                <h3>Deep Space</h3>
                <p>Cosmic exploration</p>
              </div>
            </CylinderPanel>

            <CylinderPanel bgImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800">
              <div className="panel-text">
                <h2>12</h2>
                <h3>AI Core</h3>
                <p>Generative neural networks</p>
              </div>
            </CylinderPanel>

          </CylinderCarousel>
          
        </div>
      </div>
      
    </div>
  );
};

export default CylinderDemo;
