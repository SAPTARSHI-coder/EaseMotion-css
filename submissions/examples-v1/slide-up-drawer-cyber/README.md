# Slide Up Drawer

An ultra-premium, Cyberpunk-themed slide-up command drawer featuring an elastic slide entrance transition, system target radios, and responsive grid panels.

## 1. What does this do?
This component renders an interactive command deck drawer that slides up dynamically from the bottom of the viewport when triggered, dimming the main layout underneath.

## 2. How is it used?

Place the toggle checkbox at the root of your HTML layout, then configure the drawer overlay and container:
```html
<!-- Root inputs bindings -->
<input type="checkbox" id="drawer-toggle" class="ctrl-drawer-toggle" />
<input type="radio" id="target-mainframe" name="cyber-target" class="ctrl-target-mainframe" checked />

<!-- Drawer Overlay -->
<div class="drawer-overlay">
  <label for="drawer-toggle" class="drawer-backdrop-close"></label>
  
  <div class="drawer-container" role="dialog" aria-labelledby="drawer-title" aria-modal="true">
    <div class="drawer-header">
      <h3 id="drawer-title">SYSTEM INTRUSION PROTOCOLS</h3>
      <label for="drawer-toggle" class="btn-drawer-close">CLOSE ⨉</label>
    </div>

    <!-- Drawer Columns -->
    <div class="drawer-content">
      <section class="drawer-panel">
        <label for="target-mainframe" class="target-tab-btn lbl-target-mainframe">
          Corporate Mainframe
        </label>
      </section>
    </div>
  </div>
</div>
```

To bind a trigger button anywhere in your cockpit to slide up the drawer, use a label:
```html
<label for="drawer-toggle" class="btn-drawer-trigger">
  OPEN SYSTEM DECK
</label>
```

## 3. Why is it useful?
Slide-up drawers are highly valuable for mobile-first configurations and deep telemetry inspection sub-consoles.

This component fits EaseMotion's philosophy by:
- **Pure CSS Interactive States:** Coordinates drawer container transforms (`translateY(100%)` to `translateY(0)`) and target navigation details without JavaScript, maximizing responsiveness.
- **Cyberpunk Aesthetics:** Incorporates warning tape stripe fills, neon pink/cyan glows, flickering blink indicators, and CSS glitch text displacements.
- **Accessible Design:** Implements high-contrast indicators, clear role dialog blocks, and a prefers-reduced-motion media grid to satisfy accessibility expectations.

## 4. Customization Variables API

You can configure color accents and transitions directly inside parent container scopes:

| Property | Description | Default Preset |
|---|---|---|
| `--cyber-neon-cyan` | Principal cyan glow highlight | `#00f0ff` |
| `--cyber-neon-pink` | Secondary pink warning tape color | `#ff007f` |
| `--cyber-neon-yellow` | Alert warning yellow stripes | `#ffee00` |

---
*Created as a submission for GSSOC-26  under submissions/examples/slide-up-drawer-cyber/*
