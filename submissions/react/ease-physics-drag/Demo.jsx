import React from 'react';
import PhysicsDraggable from './PhysicsDraggable';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Advanced Physics Draggable Demo Environment
 * ============================================================================
 * 
 * This exhaustive demonstration environment illustrates how to implement the 
 * <PhysicsDraggable /> wrapper in a realistic, complex dashboard setting. 
 * 
 * It includes multiple widgets with varying mass and friction parameters to 
 * demonstrate the flexibility of the physics engine. It also provides a robust
 * structural layout showcasing how absolute positioning and z-index contexts
 * interact with hardware-accelerated 3D transforms.
 */

export const PhysicsDragDemo = () => {
  return (
    <div className="demo-dashboard-container" style={{ padding: '40px', minHeight: '100vh', backgroundColor: '#0f172a' }}>
      
      <header style={{ marginBottom: '60px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>Dashboard Physics</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
          Grab and drag the widgets below. Notice how they lean into the drag based on your cursor's velocity.
        </p>
      </header>

      <div className="widget-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '40px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>

        {/* 
          Widget 1: Standard Physics
          Demonstrates the default smooth pendulum physics.
        */}
        <PhysicsDraggable>
          <div className="demo-widget standard-widget" style={widgetStyle('#1e293b')}>
            <div style={headerStyle}>
              <h3 style={{ margin: 0, color: 'white' }}>Revenue Analytics</h3>
              <span style={badgeStyle('#3b82f6')}>Default Physics</span>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div style={skeletonLine('100%')} />
              <div style={skeletonLine('80%')} />
              <div style={skeletonLine('90%')} />
            </div>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '30px' }}>
              mass: 0.15 | friction: 0.85
            </p>
          </div>
        </PhysicsDraggable>

        {/* 
          Widget 2: Heavy Physics
          Requires much more force (cursor velocity) to tilt, and snaps back rigidly.
        */}
        <PhysicsDraggable mass={0.05} friction={0.5} maxTilt={15}>
          <div className="demo-widget heavy-widget" style={widgetStyle('#27272a')}>
            <div style={headerStyle}>
              <h3 style={{ margin: 0, color: 'white' }}>Database Cluster</h3>
              <span style={badgeStyle('#ef4444')}>Heavy Object</span>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <div style={boxSkeleton} />
              <div style={boxSkeleton} />
              <div style={boxSkeleton} />
            </div>
            <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginTop: '30px' }}>
              mass: 0.05 | friction: 0.50
            </p>
          </div>
        </PhysicsDraggable>

        {/* 
          Widget 3: Light & Loose Physics
          Tilts wildly with the slightest movement and swings for a long time before settling.
        */}
        <PhysicsDraggable mass={0.4} friction={0.95} maxTilt={45}>
          <div className="demo-widget light-widget" style={widgetStyle('#172554')}>
            <div style={headerStyle}>
              <h3 style={{ margin: 0, color: 'white' }}>Live Feed</h3>
              <span style={badgeStyle('#10b981')}>Light & Loose</span>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div style={{...skeletonLine('100%'), backgroundColor: 'rgba(255,255,255,0.1)'}} />
              <div style={{...skeletonLine('60%'), backgroundColor: 'rgba(255,255,255,0.1)'}} />
            </div>
            <p style={{ color: '#93c5fd', fontSize: '0.9rem', marginTop: '30px' }}>
              mass: 0.40 | friction: 0.95
            </p>
          </div>
        </PhysicsDraggable>

      </div>
    </div>
  );
};

// Inline styles for the demo to prevent bloating the main style.css with unrelated presentation logic
const widgetStyle = (bg) => ({
  backgroundColor: bg,
  padding: '30px',
  borderRadius: '24px',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 30px rgba(0,0,0,0.5)',
  border: '1px solid rgba(255,255,255,0.05)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
});

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const badgeStyle = (color) => ({
  backgroundColor: `${color}33`,
  color: color,
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
});

const skeletonLine = (width) => ({
  height: '12px',
  backgroundColor: 'rgba(255,255,255,0.05)',
  borderRadius: '6px',
  width: width,
  marginBottom: '15px'
});

const boxSkeleton = {
  flex: 1,
  height: '80px',
  backgroundColor: 'rgba(255,255,255,0.05)',
  borderRadius: '12px'
};

export default PhysicsDragDemo;
