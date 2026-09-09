# 🎮🧊 GlassMorph 2048 (EaseMotion CSS Edition)

A modern, cyberpunk-inspired reimagining of the classic 2048 puzzle game. Built entirely with HTML, Vanilla JavaScript, and CSS. 

It fuses **Apple-style Glassmorphism** with **Neon Cyberpunk glows** and smooth custom **EaseMotion** animations.

## ✨ Features
*   **Glass Game Board:** Soft `backdrop-filter` blurring with floating container aesthetics.
*   **Neon Glass Tiles:** Every tier scales up its visual weight.
    *   2 & 4: Soft white & blue glows.
    *   8 to 64: Purple, pink, and deep orange halos.
    *   128+: Vivid neon gradients with intense box-shadows.
*   **EaseMotion Animations:**
    *   `ease-pop`: New tiles pop into existence via cubic-bezier scaling.
    *   `ease-slide`: Moving tiles glide across the grid seamlessly using transform transitions.
*   **Dark Neon Mode:** Deep radial dark background enabled by default for maximum glow contrast.
*   **State Persistence:** Best score is saved locally via `localStorage`.

## 🚀 How to Run
Simply open `demo.html` in any modern web browser. No local server or build tools are required!

## 🧩 Structure
*   `demo.html`: The markup and vanilla JS game engine handling grid math and DOM updates.
*   `style.css`: Contains all visual styling, Glassmorphism UI properties, variables, and EaseMotion `@keyframes`.