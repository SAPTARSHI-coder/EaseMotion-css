# CSS Slide-Up Carousel – Accessible Web

A responsive, accessible **Slide-Up Carousel** built using pure HTML and CSS, designed to meet accessibility standards with zero JavaScript requirements.

## Features

- **Pure HTML & CSS:** Leveraging sibling input state bindings for tabbed control.
- **Slide-up Transition:** Smooth vertical glide layout change for active slides.
- **Accessible Design:** Features full keyboard focus states (`:focus-visible`), aria descriptions, semantic roles, and a `prefers-reduced-motion` safety guard.
- **Responsive Layout:** Responsive sizing and flex-stretching for desktop grids and stacked mobile viewports.
- **Aesthetic Customization:** Fully responsive accent styling configuration via CSS custom variables.

## CSS Variables

Exposes customization of visual and timing properties on the root component element:

```css
.su-carousel {
  --su-duration: 650ms;       /* Transition timing of the slide-up sweep */
  --su-easing: cubic-bezier;  /* Easing function curve */
  --su-distance: 4.5rem;      /* Rising vertical translate path distance */
  --su-delay: 60ms;           /* Entrance delay */
  --su-item-spacing: 1.5rem;  /* Spacing gap inside slide panels */
  --su-radius: 20px;          /* Corner radius profile */
}
```

## Folder Structure

```text
slide-up-carousel-accessible-web/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in your browser. Focus the carousel structure using **Tab**, and interact or select next/prev items using either Arrow keys or direct selection dots/labels.

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

Created for **EaseMotion CSS – GSSoC 2026**.
