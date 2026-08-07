# Slide-Right Tabs - SaaS Showcase

##  Description
Pure CSS animated tabs with smooth slide-right transitions, styled for SaaS showcase interfaces. Fully responsive, keyboard accessible, and powered by CSS custom properties for easy customization.

##  Features
-  **Smooth Slide-Right Animation** - Bouncy elastic easing using `cubic-bezier(0.34, 1.56, 0.64, 1)`
-  **Zero JavaScript Dependencies** - Progressive enhancement with vanilla JS
-  **Keyboard Accessible** - Full ARIA support + arrow key navigation
-  **Responsive** - Adapts to mobile, tablet, and desktop
-  **CSS Custom Properties** - Easy theming via `--ease-tab-*` variables
-  **Reduced Motion Support** - Respects `prefers-reduced-motion`

##  Design Tokens (Custom Properties)

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-tab-duration` | `0.4s` | Animation duration |
| `--ease-tab-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function (bouncy) |
| `--ease-tab-primary` | `#6366f1` | Primary color (indigo) |
| `--ease-tab-radius` | `12px` | Border radius |
| `--ease-tab-padding` | `48px` | Container padding |

##  Usage

### 1. Include CSS

<link rel="stylesheet" href="style.css" />
### 2. Include HTML Structure

<div class="ease-tabs-container" role="tablist">
  <!-- Tab buttons -->
  <div class="ease-tabs-nav">
    <button class="ease-tab-btn ease-tab-active" data-tab="1">Tab 1</button>
    <button class="ease-tab-btn" data-tab="2">Tab 2</button>
    <div class="ease-tab-slider"></div>
  </div>
  
  <!-- Tab panels -->
  <div class="ease-tabs-panels">
    <div class="ease-tab-panel ease-tab-panel-active">Content 1</div>
    <div class="ease-tab-panel">Content 2</div>
  </div>
</div>
### 3. Include JavaScript

<script src="script.js"></script>
###  Responsive Breakpoints
Desktop (769px+): Full sliding indicator + horizontal tabs

Tablet (481-768px): Reduced padding, compact layout

Mobile (≤480px): Vertical tabs, no slider (fallback to background color)

###  Accessibility
ARIA roles: tablist, tab, tabpanel
aria-selected for active state
aria-controls and aria-labelledby relationships
Keyboard: Arrow keys, Home, End
Focus indicators
Reduced motion support

###  File Structure

slide-right-tabs/
├── index.html    # Demo page
├── style.css     # All styles + animations
├── script.js     # Tab logic (vanilla JS)
└── README.md     # Documentation
### GSSoC-26 Contribution
Issue: #50247
Type: Enhancement
Labels: GSSoC-26, animation, good first issue, gssoc:approved
Submitted: Under submissions/examples/

## Credits
Built for EaseMotion CSS as part of GSSoC-26.

MIT License © 2026