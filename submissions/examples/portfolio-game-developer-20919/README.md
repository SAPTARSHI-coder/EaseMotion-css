# Portfolio: Game Developer (`portfolio-game-developer-20919`)

This proposal provides a complete, copy-paste ready portfolio template designed for an Indie Game Developer, Programmer, or Technical Artist, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A game developer portfolio needs to immediately communicate technical skill and a passion for gaming. This template achieves a "Retro / Arcade" aesthetic using a vibrant 8-bit color palette, sharp pixel-art style borders, hard drop shadows, CRT screen overlays, and technical typography (the 8-bit `Press Start 2P` font combined with the clean `Outfit` sans-serif).

The layout includes:
- A pixel-art inspired navigation bar.
- A striking Hero section featuring a pure CSS-animated "screenshot carousel". Instead of using actual images, the carousel builds fake game environments (a platformer and a space shooter) using CSS geometry, and animates them with stepped keyframes to simulate retro gameplay loops.
- A "Featured Games" grid using CSS geometry to simulate thumbnail graphics with deep, interactive hover overlays mimicking arcade "INSERT COIN" / "PLAY NOW" blink states.
- A "Character Stats" (Skills) section that uses expanding progress bars.
- A "Completed Quests" (Game Jams) section.
- A stylized testimonial box simulating a game dialogue window.
- A terminal-inspired "Join the Party" contact form.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, modified locally via CSS to use snappy, bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timings and `steps()` timing functions for a retro, low-framerate feel:
- `.ease-infinite-scroll` (Used on the hero carousel for a continuous scrolling layout using stepped animation).
- `.ease-jump-loop`, `.ease-laser-shoot`, `.ease-stars-scroll` (Custom CSS environment animations playing inside the hero carousel).
- `.ease-hover-push` (Used on buttons and cards to create a tactile, "physical button" press effect by manipulating transforms and hard box-shadows).
- `.ease-fill-bar` (Used on the skill meters to animate width dynamically on load).
- *Custom Interactions*: The portfolio cards use nested `.group-hover` utilities to trigger sprite-like animations (spinning, flying, pulsing) within the CSS-drawn game thumbnails when the user hovers over a project.

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the complete aesthetic overhaul, from the retro palette and pixel borders to the pure CSS game simulations and bouncy hover interactions. The standard `ease-*` interaction classes are attached directly to HTML elements to provide the animated states. No JavaScript is required for this template.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/portfolio-game-developer-20919/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20919
