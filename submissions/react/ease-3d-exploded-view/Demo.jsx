import React from 'react';
import ExplodedView from './ExplodedView';
import './style.css';

/**
 * ============================================================================
 * EaseMotion 3D Exploded View Demo
 * ============================================================================
 * 
 * To demonstrate the exploded view, we pass an array of transparent 2D images.
 * In a real production scenario, these would be high-res renders of a 
 * product (e.g. a smartphone's screen, battery, logic board, and chassis).
 * 
 * For this demo, we use custom-generated geometric SVGs that simulate 
 * mechanical components.
 */

// Generate some futuristic data-URI SVGs to act as the hardware layers!
const generateLayer = (color, path, opacity = 1) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 500"><path fill="${color}" fill-opacity="${opacity}" d="${path}" stroke="rgba(255,255,255,0.3)" stroke-width="2"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Advanced SVG Paths for Demo Data (Adds complexity and lines!)
const paths = {
  chassis: 'M20,20 L280,20 Q300,20 300,40 L300,460 Q300,480 280,480 L20,480 Q0,480 0,460 L0,40 Q0,20 20,20 Z',
  battery: 'M40,300 L260,300 L260,450 L40,450 Z',
  logicBoard: 'M40,50 L260,50 L260,280 L200,280 L200,250 L100,250 L100,280 L40,280 Z',
  cooling: 'M30,40 L270,40 L270,460 L30,460 Z',
  camera: 'M50,60 L120,60 L120,130 L50,130 Z',
  speaker: 'M100,430 L200,430 L200,440 L100,440 Z',
  taptic: 'M50,380 L90,380 L90,440 L50,440 Z',
  display: 'M20,20 L280,20 Q300,20 300,40 L300,460 Q300,480 280,480 L20,480 Q0,480 0,460 L0,40 Q0,20 20,20 Z'
};

const DUMMY_LAYERS = [
  {
    label: 'Camera Module',
    image: generateLayer('#fcd34d', paths.camera)
  },
  {
    label: 'Taptic Engine',
    image: generateLayer('#fb923c', paths.taptic)
  },
  {
    label: 'Speaker Grill',
    image: generateLayer('#94a3b8', paths.speaker)
  },
  {
    // Layer 0 (Bottom/Back Chassis)
    label: 'Titanium Chassis',
    image: generateLayer('#1e293b', 'M20,20 L280,20 Q300,20 300,40 L300,460 Q300,480 280,480 L20,480 Q0,480 0,460 L0,40 Q0,20 20,20 Z')
  },
  {
    // Layer 1 (Battery Pack)
    label: 'Lithium-Ion Cell',
    image: generateLayer('#0f172a', 'M40,300 L260,300 L260,450 L40,450 Z')
  },
  {
    // Layer 2 (Logic Board)
    label: 'A17 Pro Neural Engine',
    image: generateLayer('#064e3b', 'M40,50 L260,50 L260,280 L200,280 L200,250 L100,250 L100,280 L40,280 Z')
  },
  {
    // Layer 3 (Cooling System)
    label: 'Graphene Thermal Pad',
    image: generateLayer('#334155', 'M30,40 L270,40 L270,460 L30,460 Z', 0.8)
  },
  {
    // Layer 4 (Top Glass Screen)
    label: 'Ceramic Shield Display',
    image: generateLayer('#38bdf8', 'M20,20 L280,20 Q300,20 300,40 L300,460 Q300,480 280,480 L20,480 Q0,480 0,460 L0,40 Q0,20 20,20 Z', 0.3)
  }
];

export const Demo = () => {
  return (
    <div className="demo-scroll-track">
      <div className="demo-sticky-viewport">
        
        <div className="demo-overlay-text">
          <h1>Scroll to Disassemble</h1>
          <p>
            This entire 3D mechanical breakdown is achieved using 2D images. 
            There are zero WebGL engines running and zero JavaScript scroll 
            listeners firing. 100% Native CSS.
          </p>
        </div>

        {/* 
          Render the Exploded View. 
          We define a max distance of 600px. The 5 layers will interpolate 
          automatically between 0px and 600px along the Z-axis.
        */}
        <ExplodedView 
          layers={DUMMY_LAYERS} 
          maxExplosionDistance={600} 
          baseRotationX={55} 
          baseRotationZ={-30} 
        />
        
      </div>
    </div>
  );
};

export default Demo;

