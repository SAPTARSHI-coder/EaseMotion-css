# Portfolio: 3D Artist (`portfolio-3d-artist-20924`)

This proposal provides a complete, copy-paste ready portfolio template designed for a 3D Artist, Environment Designer, or CGI Generalist, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A 3D artist portfolio requires a highly digital, technical aesthetic. This template achieves a "Cyberpunk / CGI" aesthetic using a deep dark mode, high-contrast neon accents (cyan, magenta, yellow), wireframe elements, glowing effects, and technical typography (the structured `Rajdhani` and terminal-like `Share Tech Mono`).

The layout includes:
- A HUD-style navigation bar with neon hover glows.
- A striking Hero section featuring an animated CSS 3D cube structure with an inner glowing core, rotating in full 3D space (`perspective-1000`), demonstrating pure CSS 3D capabilities.
- A "Render Cache" portfolio gallery with deep perspective hover interactions that manipulate abstract geometry to simulate 3D environments and hard-surface props.
- A "Toolkit" software grid highlighting skills with neon indicator lines.
- A "Network Log" client section with a prominent testimonial.
- A terminal-inspired commission/contact form.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, modified locally via CSS to use snappy, mechanical `cubic-bezier(0.1, 1, 0, 1)` timings tailored for a digital brand:
- `.ease-rotate-3d` (Used on the hero's custom CSS wireframe object for infinite 3-axis rotation).
- `.ease-pulse-glow` (Used on the inner core and status indicators for a breathing neon effect).
- `.ease-pan-bg-slow` (Used on the background grid to simulate forward movement through cyberspace).
- *Custom Interactions*: The portfolio cards extensively use CSS `perspective`, blending `bg-scanline` overlays with `.group-hover` transformations on nested elements (e.g., scaling geometry, skewing shapes, rotating intersecting borders) to mimic 3D depth and parallax without WebGL or images.

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the complete aesthetic overhaul, from the deep neon palette and text glows to the pure CSS 3D transformations and complex spatial hover interactions. The standard `ease-*` interaction classes are attached directly to HTML elements to provide snappy, digital animations. No JavaScript is required for this template.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/portfolio-3d-artist-20924/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20924
