# Need to Know More? · Community & Knowledge Discovery Hub

An interactive, pure-CSS knowledge discovery and community gateway addressing GitHub Issue [#89165](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/89165), featuring a live Discord hub interface, multi-level pure CSS interactive FAQ accordions, motion physics visualizers, and zero-JavaScript theme/drawer state controllers.

## 1. What does this do?

This component provides a complete interactive community support and knowledge discovery portal built entirely with pure HTML5 and CSS3, demonstrating zero-JS tab switching, multi-level FAQ accordions, live audio visualizer simulations, real-time easing curve testers, slide-out cheat sheet drawers, and multi-theme atmosphere palette cascades using pure CSS `:checked` state mechanics.

## 2. How is it used?

Include `style.css` in your project and structure the component with semantic HTML elements and CSS state-controller inputs:

```html
<!-- Theme Palette Controllers (Pure CSS) -->
<input type="radio" name="portal-theme" id="theme-aurora" class="portal-controller" checked>
<input type="radio" name="portal-theme" id="theme-cyber" class="portal-controller">
<input type="radio" name="portal-theme" id="theme-emerald" class="portal-controller">
<input type="radio" name="portal-theme" id="theme-sunset" class="portal-controller">

<!-- Quick Reference Drawer Controller -->
<input type="checkbox" id="drawer-toggle" class="portal-controller">

<div class="portal-wrapper">
  <!-- Tab Navigation Radio Controllers -->
  <input type="radio" name="main-tab" id="tab-discord" class="portal-controller" checked>
  <input type="radio" name="main-tab" id="tab-faq" class="portal-controller">
  <input type="radio" name="main-tab" id="tab-knowledge" class="portal-controller">
  <input type="radio" name="main-tab" id="tab-dispatcher" class="portal-controller">

  <nav class="portal-tab-nav" role="tablist">
    <label for="tab-discord" class="tab-pill" id="nav-btn-discord">Discord Community</label>
    <label for="tab-faq" class="tab-pill" id="nav-btn-faq">Interactive FAQs</label>
    <label for="tab-knowledge" class="tab-pill" id="nav-btn-knowledge">Motion Knowledge Base</label>
    <label for="tab-dispatcher" class="tab-pill" id="nav-btn-dispatcher">Community Triage</label>
  </nav>

  <main class="portal-content">
    <!-- Panel 1: Discord Hub & Community Perks -->
    <section class="portal-panel panel-discord">
      <div class="discord-hero-grid">...</div>
    </section>

    <!-- Panel 2: Interactive Pure CSS FAQ Accordion -->
    <section class="portal-panel panel-faq">
      <div class="accordion-item">
        <input type="checkbox" id="faq-1" class="accordion-toggle" checked>
        <label for="faq-1" class="accordion-trigger">
          <span class="faq-number">01</span>
          <span class="faq-title">What is the curated contribution model?</span>
          <span class="faq-chevron"></span>
        </label>
        <div class="accordion-body">
          <div class="accordion-content">...</div>
        </div>
      </div>
    </section>
  </main>
</div>
```

## 3. Why is it useful?

In alignment with EaseMotion CSS's core philosophy of zero-dependency, animation-first, accessible web design, this component provides newcomer contributors and community members with an immediate, self-guided exploration hub. It clarifies the GSSoC 2026 curated submission pipeline, links directly to the official [Discord Server](https://discord.gg/hWSdGrccBU), teaches GPU compositing rules, and proves that complex interactive applications can achieve 120 FPS performance with zero JavaScript execution overhead and complete `prefers-reduced-motion` compliance.

## Key Features

- **100% Pure CSS Zero-JS State Engine**: Tab switching, expandable FAQ accordions, theme switching, and slide-out cheat sheet drawer powered exclusively by CSS `:checked` and sibling combinators.
- **Discord Community Gateway**: Interactive Discord server showcase with live member count bubbles, active channels preview, and simulated equalizer stage audio waves.
- **Interactive Multi-Level FAQ Accordions**: Smooth grid-template-rows expansion animations with rotating indicator chevrons.
- **Motion Physics & GPU Lab**: Visual live easing runner and GPU hardware layer vs CPU layout reflow comparisons.
- **Atmosphere Theme Switcher**: 4 distinct color palettes (Aurora Violet, Cyberpunk Neon, Emerald Matrix, and Solar Flare Sunset) cascading via CSS variables.
- **Slide-Out Quick Cheat Sheet**: Overlay drawer with submission checklist and standard easing tokens.
- **Accessibility (A11y)**: Automatic fallback disabling continuous animations when `prefers-reduced-motion: reduce` is detected.

## Files Included

- `demo.html` — Interactive component structure, semantic markup, and state controllers.
- `style.css` — Complete stylesheet including custom properties, keyframes, layout grids, and media queries.
- `README.md` — Technical documentation and usage specifications.

## License

Contributed to EaseMotion CSS for Issue [#89165](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/89165) under the MIT License.
