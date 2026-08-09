# UI Design: AI Ocean Coral Reef Regeneration Monitoring (Phase #742)

A complete, responsive, 60fps HTML/CSS UI design showcase for an AI-powered ecological dashboard. Built strictly with HTML and EaseMotion CSS principles, it features continuous sonar radar sweeps, pulsing geographic data nodes, and staggered widget entrances perfectly suited for a dark-mode "mission control" aesthetic. Zero JavaScript is required.

## 📦 What's included?

- `demo.html`: The complete single-page dashboard layout.
- `style.css`: The custom stylesheet powering the layout, typography, and all keyframe animations.
- `README.md`: This documentation file.

## 🛠 Features & Animations

- **Staggered Widget Entrances**: UI cards enter the screen via a `transform: translateY` and `opacity` fade, powered by a signature `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve. The stagger is controlled via inline CSS custom properties (`--delay`).
- **Live Sonar Radar**: The main visual component utilizes a `conic-gradient` sweep rotating infinitely (`ease-sonar-sweep`), layered over expanding concentric rings (`ease-sonar-ring`) to simulate underwater topographical scanning.
- **Pulsing Data Nodes**: Health markers on the radar throb continuously using a smooth `ease-in-out` scale/opacity animation, drawing attention to active data points.
- **Hardware-Accelerated Progress Bars**: KPI metrics animate their fill level on load using `transform: scaleX(1)` with `transform-origin: left`, preventing layout thrashing.
- **Interactive Navigation**: Sidebar menu items feature subtle `transform: translateX` hover effects to maintain a tactile feel.

## 🚀 How to use

Simply open `demo.html` in any modern web browser. 

The CSS is completely self-contained. To extract specific animations for your own projects, look for the following keyframes in `style.css`:
- `@keyframes slideUp` (Staggered entrance)
- `@keyframes sonarExpand` (Radar rings)
- `@keyframes radarSweep` (Conic gradient rotation)
- `@keyframes nodeThrob` (Pulsing dots)

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A monitoring dashboard shouldn't feel static like a spreadsheet — it should feel alive and constantly updating. By employing continuous, subtle CSS animations (the infinite expanding sonar rings, the throbbing data points, the glowing logo), the UI communicates its "live, scanning" state non-verbally. The spring-based staggered entrance of the cards also ensures that the initial load feels organized and organic rather than rigid.
