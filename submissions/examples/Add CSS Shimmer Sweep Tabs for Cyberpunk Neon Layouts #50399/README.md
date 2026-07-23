# Shimmer Sweep Tabs - Cyberpunk Neon Layouts

A pure CSS animated tab component featuring a high-octane "Shimmer Sweep" interaction transition. This component adapts the sweeping effect into a futuristic "Laser Scanline", perfectly styled for Cyberpunk, Sci-Fi, and Web3 interfaces.

## Features

- **Pure CSS Interaction:** Harnesses the CSS invisible radio button pattern (`:checked` combined with the general sibling combinator `~`) for robust state management. Zero JavaScript required.
- **Laser Scanline Shimmer Sweep:** When a tab is activated, a transparent cyan background sweeps in rapidly with a slight "glitchy" bounce ease. Simultaneously, a bright magenta laser beam (using `mix-blend-mode: screen`) sweeps across the tab. The active tab maintains a periodic 3-second laser scan, simulating a live HUD hologram.
- **Cyberpunk Aesthetics:** Styled with a stark dark theme (`#050508`) overlaid on a cyan targeting grid. The component uses angled clip-paths, glowing inset shadows, glitch text effects, and the blocky `Rajdhani` / `Share Tech Mono` typefaces to nail the dystopian future vibe.
- **HUD Mockup Panels:** The HTML demo provides a highly immersive context by wrapping the tabs in a futuristic "Mech Override Protocol" HUD. The mock panels include CSS-only targeting reticles, temperature bar charts, system logs, and engine output graphs.
- **Fully Responsive & Accessible:** The tabs stack gracefully on mobile devices. Hidden `sr-only` inputs ensure that the component remains fully keyboard accessible, complete with dashed magenta focus outlines.

## Customization

You can effortlessly tune the component's neon aesthetics by editing the CSS variables found at the top of `style.css`:

```css
:root {
  /* Cyberpunk Palette */
  --bg-base: #050508;
  --grid-line: rgba(0, 255, 255, 0.07);
  
  --neon-cyan: #00ffff;
  --neon-cyan-dim: rgba(0, 255, 255, 0.2);
  --neon-magenta: #ff00ff;
  
  /* Typography */
  --font-display: 'Rajdhani', sans-serif;
  --font-mono: 'Share Tech Mono', monospace;
  
  /* Component Variables */
  --tab-padding: 0.75rem 2rem;
  --sweep-speed: 0.3s;
  
  /* Aggressive bounce ease for a glitchy snap */
  --sweep-ease: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, ensuring the radio inputs (`.tab-input`) remain on the same level as `.tabs-nav` and `.tabs-content`.
2. Include the `style.css` stylesheet in your project.
3. Replace the mock HUD content within the `.tab-panel` containers with your actual application views or game UI.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <input type="radio" id="tab-weapons" name="cyber-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab-shields" name="cyber-tabs" class="tab-input sr-only">
    
    <nav class="tabs-nav" aria-label="System Modules">
        <label for="tab-weapons" class="tab-label">WEAPONRY</label>
        <label for="tab-shields" class="tab-label">SHIELDING</label>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-weapons">...</div>
        <div class="tab-panel panel-shields">...</div>
    </div>
</div>
```
