# README.md

## 🗺️ Quest Tracker

A beautiful quest tracking system with waypoint markers and progress path. This component captures the satisfying feeling of progressing through a quest — featuring a visual path with waypoint markers, completion states, active waypoint with pulse animation, progress bar, and interactive step completion.

---

## ✨ Features

- **Quest path** – Visual path connecting waypoints
- **Waypoint markers** – Completed, active, and locked states
- **Progress tracking** – Real-time progress bar and step counter
- **Active waypoint** – Pulsing animation on the current step
- **Sub-progress** – Individual waypoint progress indicators
- **Completion animation** – Smooth transitions between steps
- **Quest actions** – Complete step, reset quest, and speed control
- **Interactive** – Click waypoints to complete them
- **Celebration particles** – Particle burst on quest completion
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="qt-container">
  <div class="qt-scene">
    <div class="quest-tracker">
      <!-- Header -->
      <div class="quest-header">
        <div class="quest-title-section">
          <span class="quest-icon">⚔️</span>
          <div>
            <div class="quest-title">The Lost Relic</div>
            <div class="quest-subtitle">Find the ancient artifact</div>
          </div>
        </div>
        <div class="quest-progress">
          <span class="progress-text">3 / 5</span>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 60%"></div>
          </div>
        </div>
      </div>

      <!-- Quest path -->
      <div class="quest-path">
        <!-- Waypoints -->
        <div class="waypoint waypoint-1 completed">
          <div class="waypoint-marker">
            <div class="marker-dot"></div>
            <div class="marker-ring"></div>
            <div class="marker-check">✓</div>
          </div>
          <div class="waypoint-content">
            <div class="waypoint-title">Find the Map</div>
            <div class="waypoint-desc">Locate the ancient map</div>
            <div class="waypoint-status">✅ Completed</div>
          </div>
        </div>
        <!-- ... more waypoints -->
      </div>

      <!-- Path line -->
      <div class="path-line">
        <div class="path-fill" style="width: 60%"></div>
      </div>

      <!-- Actions -->
      <div class="quest-actions">
        <button id="completeBtn">✅ Complete Step</button>
        <button id="resetBtn">⟳ Reset Quest</button>
        <label>Speed <input type="range" id="speedControl" /></label>
      </div>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages waypoints, progress, step completion, controls, and interactions.

🎮 Controls
Complete Step – Mark the current waypoint as complete and advance

Reset Quest – Reset all waypoints to the starting state

Speed – Adjust the speed of animations (0.3× to 3×)

Click Waypoint – Click a waypoint to complete it

🎨 Customization
CSS Variables
Variable	Default	Description
--waypoint-duration	0.6s+	Duration of waypoint animation
--waypoint-delay	0s+	Stagger delay for waypoints
--ring-duration	1.5s	Duration of marker ring pulse
--pulse-duration	1.2s	Duration of marker pulse
Waypoint States
State	Visual	Description
Completed	✓, faded text	Quest step finished
Active	Pulsing ring, glowing	Current quest step
Locked	🔒, dimmed	Not yet available
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .waypoint, .waypoint-marker, .marker-dot, .marker-ring, .marker-check, .marker-pulse, .path-line, .path-fill, and .quest-actions are intuitive and descriptive

Animation‑first — Markers pulse with CSS, paths fill with CSS, and waypoints animate with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Gaming & rewarding — Captures the satisfying progression of quest completion

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations and transitions

📁 File Structure
text
submissions/quest-tracker/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file