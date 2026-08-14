# Portfolio: Cybersecurity Professional (`portfolio-cybersecurity-20917`)

This proposal provides a complete, copy-paste ready portfolio template designed for a Penetration Tester, Security Researcher, or Offensive Security Professional, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A cybersecurity portfolio should evoke a sense of the command line, deep technical skill, and a "hacker" aesthetic. This template achieves a "Dark Terminal" aesthetic using a stark black background, classic terminal green/red text, CRT scanline overlays, matrix-style rain backgrounds, and strict monospace typography (`Fira Code`).

The layout includes:
- A CLI-inspired navigation bar simulating a root user prompt (`root@0xAlex:~#`).
- A Hero section featuring a CSS terminal typing animation and a CSS-only "Radar/Scanner" graphic simulating network target acquisition.
- A "Skills" section presented as a realistic terminal window running an `nmap` scan.
- An "Offensive Projects" grid with cyber-scanline hover effects revealing code-like data.
- A "Writeups / Blog" section styled as a simple text file (`writeups.txt`).
- A Contact form styled as a bash script execution (`./establish_connection.sh`).

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, modified locally via CSS to use aggressive, abrupt `cubic-bezier(0, 1, 0, 1)` and `step-start` timings to simulate the instantaneous rendering of a terminal:
- `.ease-typewriter` (Used on the hero text to simulate typing output using `steps()`).
- `.cursor-blink`, `.border-r-cursor` (Provides classic block cursor blinking).
- `.ease-matrix-scroll` (Animates the repeating gradient background to simulate matrix rain).
- `.ease-radar-spin`, `.ease-radar-ping` (Orchestrates the pure CSS radar scanner graphic in the hero section).
- *Custom Interactions*: The portfolio cards use `.group-hover` utilities to trigger a `.ease-pan-bg-slow` animation on a nested scanline overlay, creating a "scanning" effect when a project is hovered.

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the complete aesthetic overhaul, from the terminal palette and borders to the pure CSS radar animations and precise stepped hover states. The standard `ease-*` interaction classes are attached directly to HTML elements. No JavaScript is required for this template.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/portfolio-cybersecurity-20917/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20917
