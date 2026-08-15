# Sandbox Layout Fix: High-DPI Fractional Display Scaling Shadow Bleed and Edge Jaggedness Resolution

## Overview
A high-performance rendering patch for tactile extruded card components to completely eliminate sub-pixel color bleeding, stop anti-aliasing edge jaggedness, and protect alpha-blended dual shadow vectors across fractional scaling screens (e.g., 125%, 150%).

## 📁 Sandbox Configuration Files
* `demo.html` — Precision multi-axis display matrix canvas to verify edge clipping paths across multiple zoom layouts.
* `style.css` — Scoped layout modifier asset layer introducing native padding-box background clip constraints linked back to shared tokens.

## 🐛 The Bug Resolved
Previously, implementing tactile card components styled with dual directional soft shadows and tokenized borders triggered critical rendering flaws on high-DPI monitors running fractional scaling ratios. Because logical CSS sub-pixels do not map evenly onto the monitor's physical pixel grid under fractional zooms, the browser engine's default rendering path (`background-clip: border-box;`) allows background color matrices to overflow the border boundary track. This results in jagged, uneven lines and pixel artifacts bleeding directly into the drop-shadow spectrum.

## 🛠️ The Solution
The canvas rasterization channels are optimized. By injecting `background-clip: padding-box;` straight onto the component layer, you force the browser painter thread to terminate background color tracking exactly along the inside margin edge of the border line. This establishes a crisp sub-pixel isolation grid that completely eliminates jagged artifacts and contrast bleed flaws natively across all breakpoints.
