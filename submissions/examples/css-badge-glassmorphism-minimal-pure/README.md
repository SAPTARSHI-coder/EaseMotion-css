# Minimalist Glassmorphism Badge

A clean, modern CSS badge component utilizing a bright, minimalist glassmorphism aesthetic suitable for light-mode SaaS dashboards and web applications.

## Features
- **Light Glassmorphism Engine**: Uses a highly translucent white background (`rgba(255, 255, 255, 0.4)`) combined with `backdrop-filter: blur(12px)` to create a frosted, milky-glass effect.
- **Pill Architecture**: Designed with fully rounded corners (`border-radius: 100px`) and tight padding for a compact, UI-friendly footprint.
- **Status Indicators**: Includes integrated support for colored status dots (Blue/In Progress, Green/Completed, Red/Failed) with subtle, matching drop-shadows to provide context.
- **Micro-interactions**: Features a gentle `:hover` state that increases opacity, elevates the badge (`translateY(-2px)`), and deepens the drop-shadow for a tactile feel.
- **Icon Support**: Easily integrates SVG icons directly inline with the text (demonstrated in the Premium Member variant).

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Inter` font family is loaded via your `<head>`. Note: For the glassmorphism effect to be visible, the badge must be placed over a colored or textured background.
