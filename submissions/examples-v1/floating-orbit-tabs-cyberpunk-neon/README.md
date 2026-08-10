# CSS Floating Orbit Tabs – Cyberpunk Neon

A responsive, accessible **Floating Orbit Tabs** component built using pure HTML and CSS, styled with glowing cyberpunk elements and zero JavaScript requirements.

## Features

- **Pure HTML & CSS:** Tab page selector based on standard CSS general sibling selector state mappings.
- **Floating Orbit Animation:** Dynamic active indicator dot executing a circular translation orbit around the active tab center.
- **Glowing Neon Aesthetic:** Stylized HUD visuals customized for terminal dashboards.
- **Accessibility Friendly:** Full keyboard tracking states (`:focus-visible`), aria controls role descriptions, and a motion safety `prefers-reduced-motion` override.

## CSS Variables

Visual, sizing, and timing characteristics are parameterized via CSS properties:

```css
.cyber-tabs-wrapper {
  --orbit-radius: 42px;         /* Orbit circle track radius scale */
  --orbit-duration: 4s;         /* Duration time of the orbit loop */
  --orbit-easing: linear;       /* Easing pattern */
  --glow-intensity: 15px;       /* Shadow blur size for glowing effects */
  --tab-size: 110px;            /* Width and height of circular tab labels */
  --tab-spacing: 1.5rem;        /* Space gap between tabs */
  --primary-color: #ff007f;     /* Neon Pink primary theme accent */
  --accent-color: #00f0ff;      /* Neon Cyan secondary theme accent */
}
```

## Folder Structure

```text
floating-orbit-tabs-cyberpunk-neon/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in your browser. Focus the tabs bar structure using **Tab**, and switch sections using either Arrow keys or direct selection.

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

Created for **EaseMotion CSS – GSSoC 2026**.
