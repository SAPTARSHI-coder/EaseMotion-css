# CSS Loader: Solar Flare Radial

An energetic, glowing loader utilizing staggered radial gradients, extreme blurring, and infinite scale animations to simulate coronal mass ejections from a star.

## Features
- Pure CSS and HTML implementation without any SVG filters or canvas rendering.
- **Component Architecture**: 
  - **The Solar Core**: The `.solar-core` represents the star itself. A solid yellow circle given an extreme, multi-layered `box-shadow` (yellow -> orange -> red) to simulate the intense local corona and heat glow. It pulses slightly using `@keyframes core-pulse`.
  - **The Coronal Flares**: Three `.flare` divs sit behind the core. They are styled with a `radial-gradient` that fades from bright orange to deep red, and then to `transparent` at the edges.
  - **The Ejection Animation**: The core energy effect is powered by `@keyframes flare-explode`. This animation starts the flares small (`scale(0.5)`) and highly visible (`opacity: 0.8`), and massively expands them outwards (`scale(3.5)`) while dissolving them to `opacity: 0`. 
  - **Staggered Heat Waves**: The three flares share the exact same explosion animation but utilize staggered `animation-delay` values (0s, 1s, 2s). This creates a continuous, infinite loop of energy waves radiating outward.
  - **Screen Blend Mode**: Applying `mix-blend-mode: screen` to the flares ensures that when the staggered energy waves overlap each other, their colors combine additively, making the overlapping areas appear hotter and brighter, just like real light/energy.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. This effect is designed for dark themes (`--loader-bg: #0f172a;`). The vibrant yellow, orange, and red palette requires a dark background to sell the illusion of glowing light.
- Fully accessible semantic structure. The decorative flares are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all explosions and pulses, locking the loader into a beautiful, static glowing sun for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the solar flare radial loading animation.

## Files
- `demo.html`: The HTML structure defining the solar core and the three expanding flares.
- `style.css`: The styling, the `radial-gradient` setup, the `mix-blend-mode` logic, and the explosive `scale()` keyframes.
