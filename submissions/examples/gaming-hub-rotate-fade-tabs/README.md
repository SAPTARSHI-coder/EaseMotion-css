# Gaming Hub Rotate-Fade Tabs

## Overview
A production-ready, pure CSS tab navigation system designed for a futuristic AAA gaming dashboard. This component showcases a seamless "Rotate-Fade" interaction where both the active tab navigation markers and the corresponding content panels utilize complex 3D CSS transforms to achieve a high-end, immersive application feel—all without JavaScript.

## Features
- **Pure CSS Tab State Logic**: Employs the `input[type="radio"]` checked hack with sibling combinators (`~`) to toggle states, completely bypassing the need for JavaScript frameworks.
- **Rotate-Fade Transitions**: Content panels transition via `opacity` and 3D transforms (`rotateX`, `rotateY`, `translateZ`) in CSS Grid overlapping areas, providing a holographic presentation effect.
- **Dynamic Tab Indicators**: The active tab label features a neon gradient background that rotates into perspective from a `-90deg` angle upon selection.
- **EaseMotion Integration**: Utilizes declarative EaseMotion utility classes for staggered entrance animations upon the initial page load.
- **Glassmorphism & Cyber Aesthetics**: Implements blurred backdrops, holographic gradient accents, and precise neon drop-shadows typical of modern gaming clients (e.g., Riot Games, Discord, Steam).
- **Responsive Navigation**: The tab headers are placed in a horizontal, swipeable scroll container, gracefully degrading on mobile devices while maintaining visual integrity.

## Folder Structure
```
gaming-hub-rotate-fade-tabs/
├── demo.html    # Layout, radio inputs, and content panels
├── style.css    # 3D transforms, glassmorphism, and responsive styling
└── README.md    # Documentation
```

## How to Run
1. Open `demo.html` in any modern web browser.
2. Watch the dashboard elegantly mount using the EaseMotion `ease-slide-up` utilities.
3. Click on the different tabs (Match Overview, Team Rankings, Inventory Core, Achievements).
4. Observe the smooth Rotate-Fade transitions as the content panels swap in a 3D perspective space, and notice the neon active-tab marker rotating into position.

## EaseMotion Classes Used
The following declarative utility classes handle the initial dashboard mount:
- `ease-fade-in`
- `ease-slide-up`
- `ease-slide-down`
- `ease-delay-100`
- `ease-delay-200`
- `ease-delay-300`

## Responsive Behaviour
The main dashboard scales fluidly. On viewports that are narrower than the tab list, the navigation bar switches to an invisible horizontal scroll (`overflow-x: auto` with scrollbars hidden), ensuring players can easily swipe through navigation items without breaking the layout. 

## Accessibility
- **Semantic HTML**: Features explicit `nav`, `article`, and `section` tags for structural hierarchy.
- **ARIA Labeling**: Includes `aria-controls`, `aria-labelledby`, and `role="tabpanel"` attributes to bridge the gap between the CSS radio hack and screen readers.
- **Keyboard Navigation**: Uses `:focus-visible` to draw bright neon outlines around the active tab when navigating via the `Tab` key.
- **Reduced Motion**: Disables all 3D rotations, fades, and EaseMotion entrance effects if the user's OS has `prefers-reduced-motion` enabled.

## Why it fits EaseMotion CSS
This showcase demonstrates how to bridge static layout transitions (Rotate-Fade) with declarative entrance logic (EaseMotion). It proves that you do not need heavy JavaScript libraries like React-Motion or Framer Motion to build complex, state-driven, immersive 3D gaming interfaces.
