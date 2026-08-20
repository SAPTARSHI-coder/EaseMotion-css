import React from 'react';
import './style.css';

/**
 * BentoBoxGrid Component (-db)
 * Renders modern bento layouts with Tailwind CSS and EaseMotion styles.
 */
export const BentoBoxGrid = ({ variant = 'asymmetrical' }) => {
  if (variant === 'colorful') {
    return (
      <div className="bento-container-db bento-colorful-grid-db">
        {/* Large Red Tile */}
        <div className="bento-card-db bg-red-db col-span-12 md:col-span-8 row-span-2 p-8 flex flex-col justify-between">
          <div>
            <span className="bg-black/20 text-white text-xs px-2.5 py-1 rounded-full font-medium inline-block mb-3">
              Featured
            </span>
            <h3 className="text-3xl font-extrabold text-white mb-2">Main Feature Hero</h3>
            <p className="text-white/80 max-w-md text-sm">
              Primary highlight container for key metrics, core products, or spotlight items.
            </p>
          </div>
          <div className="text-white/60 text-xs font-mono">#e54d42</div>
        </div>

        {/* Blue Top-Right Tile */}
        <div className="bento-card-db bg-blue-db col-span-12 md:col-span-4 p-6">
          <h4 className="text-xl font-bold text-white mb-1">Secondary Insight</h4>
          <p className="text-white/80 text-sm">Quick analytics preview</p>
        </div>

        {/* Pink Small Square Tile */}
        <div className="bento-card-db bg-pink-db col-span-6 md:col-span-2 p-4 flex flex-col items-center justify-center text-center">
          <span className="text-white font-bold text-2xl">99.9%</span>
          <span class="text-white/80 text-xs mt-1">Uptime</span>
        </div>

        {/* Yellow Tall Vertical Tile */}
        <div className="bento-card-db bg-yellow-db col-span-6 md:col-span-2 row-span-2 p-6 text-gray-900 flex flex-col justify-between">
          <div>
            <h4 className="font-extrabold text-lg mb-2">Vertical Feed</h4>
            <p className="text-xs text-gray-800 leading-relaxed">
              Designed for live updates, notification streams, or extended lists.
            </p>
          </div>
          <span className="text-xs font-bold text-gray-900/60 font-mono">#f3d053</span>
        </div>

        {/* Teal Bottom Wide Tile */}
        <div className="bento-card-db bg-teal-db col-span-12 md:col-span-6 p-6 flex items-center justify-between">
          <div>
            <h4 className="text-xl font-bold text-white">Action Strip</h4>
            <p className="text-white/80 text-xs">Seamless full-width alignment</p>
          </div>
          <button className="bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition">
            Explore
          </button>
        </div>
      </div>
    );
  }

  // Default Asymmetrical Bento Grid
  return (
    <div className="bento-container-db bento-asymmetrical-grid-db">
      {/* Tile 1: Brand / Hero */}
      <div className="bento-card-db col-span-12 md:col-span-4 p-6 flex flex-col justify-between h-56 bg-gray-800 text-white">
        <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
          B
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-white tracking-tight">Bento</h3>
          <p className="text-3xl font-light text-gray-400">Design</p>
        </div>
      </div>

      {/* Tile 2: Wireframe Skeleton */}
      <div className="bento-card-db col-span-12 md:col-span-4 p-6 flex flex-col justify-between h-56 bg-gray-800">
        <div className="space-y-3">
          <div className="h-4 bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded-full w-1/2 animate-pulse"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-indigo-400"></div>
          <span className="text-xs text-gray-400 font-mono">live_preview.sys</span>
        </div>
      </div>

      {/* Tile 3: Description Block */}
      <div className="bento-card-db col-span-12 md:col-span-4 p-6 h-56 bg-gray-800 flex flex-col justify-between">
        <p class="text-sm text-gray-400 leading-relaxed">
          An asymmetrical grid layout built with CSS Grid and Tailwind CSS utility rules.
        </p>
        <div className="text-xs text-indigo-400 font-semibold tracking-wider uppercase">Specs</div>
      </div>

      {/* Tile 4: Cross Wireframe Icon Box */}
      <div className="bento-card-db col-span-12 md:col-span-2 p-4 flex items-center justify-center relative min-h-[160px] bg-gray-800 overflow-hidden">
        <svg className="w-full h-full text-gray-700 absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="relative z-10 text-xs font-mono text-gray-400 bg-gray-900/80 px-2 py-1 rounded">Asset 01</span>
      </div>

      {/* Tile 5: Large Center Hero Block */}
      <div className="bento-card-db col-span-12 md:col-span-6 p-8 flex items-center justify-center min-h-[160px] bg-gray-800">
        <div className="w-2/3 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-400 font-mono">
          System Control Bar
        </div>
      </div>

      {/* Tile 6: Right Side Display Screen */}
      <div className="bento-card-db col-span-12 md:col-span-4 row-span-2 p-5 flex flex-col justify-between min-h-[340px] bg-gray-800">
        <div className="w-full h-52 bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 font-mono text-sm">
          [ Media Frame ]
        </div>
        <div className="w-3/4 h-5 bg-gray-700 rounded-full mx-auto"></div>
      </div>

      {/* Bottom Row Tiles */}
      <div className="bento-card-db col-span-12 md:col-span-4 p-6 h-40 bg-gray-800 flex items-center justify-center text-gray-500 font-mono text-sm">
        Metric Card #A
      </div>
      <div className="bento-card-db col-span-12 md:col-span-4 p-6 h-40 bg-gray-800 flex items-center justify-center text-gray-500 font-mono text-sm">
        Metric Card #B
      </div>
    </div>
  );
};

export default BentoBoxGrid;
