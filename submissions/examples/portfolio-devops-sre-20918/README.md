# Portfolio: DevOps / SRE Engineer (`portfolio-devops-sre-20918`)

This proposal provides a complete, copy-paste ready portfolio template designed for a DevOps Engineer, Site Reliability Engineer (SRE), or Cloud Architect, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

An infrastructure professional's portfolio should reflect their core competencies: automation, reliability, and code. This template achieves a "Clean Infrastructure / Terminal" aesthetic using a deep dark mode palette (grays and deep blacks), functional accent colors (status green, info blue, active cyan), terminal-inspired layouts, and highly legible technical typography (the `Fira Code` monospace combined with `Inter`).

The layout includes:
- A CLI/Terminal inspired navigation bar with a blinking cursor effect.
- A Hero section featuring a pure CSS animation of a "Server Rack / Network Node" setup. The servers gently float, display blinking status LEDs, and feature an animated data-flow packet.
- A "Skills" section presented as an integrated terminal window, utilizing a CSS typewriter effect to print a JSON object of technical competencies.
- An "Infrastructure Projects" grid with subtle neon-glow hover states and tag badges for cloud providers and tools.
- A combined "Certifications & Logs" section displaying industry certs alongside a blog roll.
- A functional-looking Contact section styled as an SSH terminal prompt.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, modified locally via CSS to use precise, snappy `cubic-bezier(0.4, 0, 0.2, 1)` timings tailored for a technical UI:
- `.ease-typewriter` (Used on the JSON skills block to simulate text printing to a terminal using `steps()`).
- `.cursor-blink`, `.ease-blink` (Used for terminal cursors and server status lights).
- `.ease-float-1`, `.ease-float-2`, etc. (Used on the CSS server units to give them a subtle, independent suspension effect).
- `.ease-data-flow` (Animates a tiny CSS dot along a border path to simulate data packets traveling through infrastructure).
- *Custom Interactions*: The portfolio cards use `.group-hover` utilities to trigger a soft, blurred radial background reveal (simulating an active state or server glow) and color transitions on icons and text.

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the complete aesthetic overhaul, from the terminal palette and borders to the pure CSS infrastructure animations and precise hover states. The standard `ease-*` interaction classes are attached directly to HTML elements. No JavaScript is required for this template.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/portfolio-devops-sre-20918/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20918
