# Fade-In Accordion for Gaming Hub Layouts

1. **What does this do?**
   Provides a pure HTML/CSS **Fade-In Accordion** system styled for modern gaming hubs and information portals. It implements a **Two-Layer Motion Architecture**: the container panel physically expands vertically via CSS grid height transition (`grid-template-rows: 0fr → 1fr`), while inner panel content smoothly fades into the expanding surface (`opacity: 0 → 1` with a subtle `8px` upward reveal).

2. **How is it used?**
   Use native HTML `<details>` and `<summary>` elements with EaseMotion CSS integration and section index wrappers:

   ```html
   <link rel="stylesheet" href="path/to/easemotion.css">
   <link rel="stylesheet" href="style.css">

   <section class="gaming-accordion-wrapper">
     <details class="gaming-accordion-item" open>
       <summary class="gaming-accordion-header">
         <div class="header-left">
           <span class="panel-index">01</span>
           <div class="header-title-group">
             <span class="header-title">GAME OVERVIEW</span>
             <span class="header-subtitle">Patch 2.4 Cyberpunk Overhaul</span>
           </div>
         </div>
         <div class="header-right">
           <span class="badge badge-cyan">UPDATED</span>
           <span class="accordion-icon" aria-hidden="true"></span>
         </div>
       </summary>
       <div class="accordion-content-wrapper">
         <div class="accordion-content">
           <div class="content-inner">
             <!-- Accordion Panel Content -->
           </div>
         </div>
       </div>
     </details>
   </section>
   ```

3. **Why is it useful?**
   It presents dense gaming information (patch notes, hardware specs, live server telemetry, battle pass rewards, anti-cheat FAQ) within a unified, interactive accordion structure without relying on JavaScript state handlers or third-party libraries.

---

### Two-Layer Motion Architecture & Accordion Affordances
- **Layer A (Panel Height Expansion)**: When expanded (`details[open]`), `.accordion-content-wrapper` transitions `grid-template-rows: 0fr → 1fr` over `350ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Layer B (Content Fade-In)**: Delayed by `60ms`, `.content-inner` triggers `@keyframes ease-accordion-fade-in` (`400ms var(--ease-ease-out)`), materializing from `opacity: 0` to `opacity: 1` with a subtle `translateY(8px) → translateY(0)` entrance.
- **Accordion Affordances**: Each panel features a numbered index (`01`, `02`, `03`, `04`, `05`) and a CSS `+` icon that smoothly morphs/rotates 45° into `×` upon activation.

### EaseMotion CSS Integration
- Leverages EaseMotion design tokens:
  - `--ease-speed-fast` (150ms) & `--ease-speed-medium` (300ms)
  - `--ease-ease-out` (`cubic-bezier(0, 0, 0.2, 1)`)
  - `--ease-radius-sm`, `--ease-radius-md`, `--ease-radius-lg`, `--ease-radius-full`
  - `--ease-space-1` through `--ease-space-8`

### Accessibility & Reduced Motion
- **Keyboard Navigation**: Fully operable using native <kbd>Tab</kbd>, <kbd>Space</kbd>, and <kbd>Enter</kbd> key interactions.
- **Focus Indicators**: Includes high-contrast `:focus-visible` outline rings on summary elements.
- **Reduced Motion**: Disables height transitions, keyframe entrance animations, and icon morphing under `@media (prefers-reduced-motion: reduce)` while preserving full state toggle functionality.

### Responsiveness
- Fully responsive across mobile (320px), tablet (768px), and desktop (1024px+) viewports. Subtitles adapt cleanly on narrow screens to prevent text overflow.
