import React from 'react';
import { BentoGrid, BentoItem } from './BentoGrid';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Bento Grid Demo
 * ============================================================================
 * 
 * Demonstrates a complex, production-ready Bento dashboard.
 * Notice how items span multiple columns and rows seamlessly. Because the 
 * underlying architecture relies on native CSS Grid, the browser perfectly 
 * handles the layout reflows automatically without complex JavaScript math libraries.
 */

export const BentoDemo = () => {
  return (
    <div className="bento-demo-container">
      
      <header className="demo-header">
        <h1>Interactive Bento Grid</h1>
        <p>
          Grab the handles in the top-right corner of any widget to drag and drop it. 
          Notice how the drag is butter-smooth (60fps) because the positional updates 
          completely bypass the React render cycle, operating entirely on the GPU.
        </p>
      </header>

      {/* 
        A 4-Column Grid. 
        Each row is exactly 200px tall. 
      */}
      <BentoGrid columns={4} rowHeight={200} gap={20}>
        
        {/* WIDGET 1: 2x2 Hero Block */}
        <BentoItem id="hero" colSpan={2} rowSpan={2} defaultCol={1} defaultRow={1}>
          <div className="demo-widget theme-purple">
            <h2>Revenue Growth</h2>
            <div className="massive-stat">$1.4M</div>
            <p>+24.5% from last quarter</p>
            <div className="chart-placeholder">
              <div className="line-chart"></div>
            </div>
          </div>
        </BentoItem>

        {/* WIDGET 2: 1x1 Standard Block */}
        <BentoItem id="stat1" colSpan={1} rowSpan={1} defaultCol={3} defaultRow={1}>
          <div className="demo-widget theme-dark">
            <h3>Active Users</h3>
            <div className="stat">42,501</div>
          </div>
        </BentoItem>

        {/* WIDGET 3: 1x1 Standard Block */}
        <BentoItem id="stat2" colSpan={1} rowSpan={1} defaultCol={4} defaultRow={1}>
          <div className="demo-widget theme-dark">
            <h3>Bounce Rate</h3>
            <div className="stat">12.4%</div>
          </div>
        </BentoItem>

        {/* WIDGET 4: 2x1 Horizontal Spanner */}
        <BentoItem id="banner" colSpan={2} rowSpan={1} defaultCol={3} defaultRow={2}>
          <div className="demo-widget theme-blue horizontal-layout">
            <div>
              <h3>Server Status</h3>
              <p>All clusters operational.</p>
            </div>
            <div className="status-indicator"></div>
          </div>
        </BentoItem>

        {/* WIDGET 5: 1x2 Vertical Spanner */}
        <BentoItem id="vertical" colSpan={1} rowSpan={2} defaultCol={1} defaultRow={3}>
          <div className="demo-widget theme-dark vertical-layout">
            <h3>Recent Activity</h3>
            <ul>
              <li>User #491 logged in</li>
              <li>Database backed up</li>
              <li>API Key rotated</li>
              <li>New ticket #1024</li>
            </ul>
          </div>
        </BentoItem>

        {/* WIDGET 6: 3x1 Horizontal Spanner */}
        <BentoItem id="footer" colSpan={3} rowSpan={1} defaultCol={2} defaultRow={3}>
          <div className="demo-widget theme-dark">
            <h3>Live Node Map</h3>
            <div className="map-placeholder">
              <div className="node n1"></div>
              <div className="node n2"></div>
              <div className="node n3"></div>
            </div>
          </div>
        </BentoItem>

      </BentoGrid>

    </div>
  );
};

export default BentoDemo;
