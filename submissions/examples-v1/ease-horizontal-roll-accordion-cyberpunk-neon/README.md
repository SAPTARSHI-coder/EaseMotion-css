# CSS Cyberpunk Neon Horizontal Roll Accordion

A retro-futuristic, high-fidelity horizontal roll accordion layout styled with a Cyberpunk Neon aesthetic. Designed for the **EaseMotion CSS** library, this component expands and collapses panels horizontally (side-to-side) without using any JavaScript, featuring glowing borders, scanlines, digital glitch grids, and neon accents.

## Features

- **Pure HTML + CSS** — Powered entirely by the checkbox-hack, zero dependencies, zero runtime scripts.
- **Cyberpunk Neon Aesthetic** — Complete with CRT scanlines, pixel-grid visual filters, text-glow shadows, angular sci-fi corner-cuts, and glowing target HUD animations.
- **Horizontal Roll Animation** — Premium horizontal expansion via CSS width transitions and clipping.
- **Responsive Stack Fallback** — Automatically converts into a vertical expanding accordion on tablets and mobile screens (`≤ 960px`) via responsive CSS Grid (`grid-template-rows 0fr -> 1fr`).
- **Independent States** — Uses independent checkboxes, allowing multiple cyber-deck cards to be open or closed simultaneously.
- **Keyboard Accessible** — Keeps toggle checkboxes in the tab ring; fully focusable and triggers via spacebar. Supports styling triggers via `:focus-visible` outline.
- **Respects Motion Preferences** — Automatically scales transitions down to `0.001s` (instantly snapping open/close) when user has `prefers-reduced-motion: reduce` configured in their OS.

## Customization

You can fully customize the accordion's dimensions, easing, speeds, shadows, and color theme using standard CSS Custom Properties defined under `:root`:

| Custom Property | Default Value | Description |
|---|---|---|
| `--ease-accordion-duration` | `0.5s` | Duration of the roll expand/collapse transitions. |
| `--ease-accordion-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function for mechanical/robotic slide/roll motion. |
| `--ease-accordion-width` | `1100px` | Maximum overall width of the accordion container. |
| `--ease-accordion-trigger-width` | `76px` | The width of the collapsed vertical tab/trigger handle. |
| `--ease-accordion-panel-width` | `330px` | Width of the cyber card content when expanded. |
| `--ease-accordion-border-radius` | `4px` | Corner rounding of the accordion items. |
| `--ease-accordion-spacing` | `20px` | Gap space between individual accordion items. |
| `--ease-glow-intensity` | `1` | Multiplier for neon box-shadow and text-shadow glow strength. |
| `--ease-neon-cyan` | `#00f0ff` | Neon Cyan color hex. |
| `--ease-neon-magenta` | `#ff007f` | Neon Magenta color hex. |
| `--ease-neon-yellow` | `#ffee00` | Neon Yellow color hex. |

---

## File Structure

```
submissions/examples/ease-horizontal-roll-accordion-cyberpunk-neon/
├── demo.html      — Standalone cyberpunk HUD index page
├── style.css      — Cyberpunk layout styles, custom properties, and fonts
└── README.md      — This documentation file
```

---

## Usage

Include the structure below in your layout:

```html
<!-- Main Accordion Container -->
<div class="ease-cyber-accordion-wrapper">
  <div class="ease-cyber-accordion">

    <!-- Accordion Item (Cyan Theme) -->
    <article class="ease-cyber-accordion-item cyber-cyan">
      <!-- Hidden Checkbox input for state tracking -->
      <input type="checkbox" id="node-unique-id" class="ease-cyber-accordion-toggle">
      
      <!-- Trigger (Tab Handle) -->
      <label class="ease-cyber-accordion-trigger" for="node-unique-id">
        <span class="ease-accordion-number">01</span>
        <span class="ease-accordion-title">Node Title</span>
        <span class="ease-sr-only">Toggle node details</span>
        <span class="ease-accordion-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
      </label>

      <!-- Content Panel -->
      <div class="ease-cyber-accordion-panel">
        <div class="ease-cyber-accordion-content">
          <!-- Cyber HUD details card inner layout goes here -->
        </div>
      </div>
    </article>

  </div>
</div>
```

Ensure you link `style.css` in the `<head>` of your page to render the component correctly.
