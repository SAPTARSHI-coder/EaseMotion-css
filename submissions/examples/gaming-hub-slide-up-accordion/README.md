# Gaming Hub Slide-Up Accordion

## Overview
A premium, production-ready CSS-only "Slide-Up" Accordion component designed specifically for AAA gaming hubs, esports tournament information panels, and SaaS FAQ sections. It utilizes standard EaseMotion utility classes for seamless page load entrances, combined with highly performant pure CSS transitions for the interactive accordion revealing effect.

## Features
- **Pure CSS Accordion Logic**: Uses the `<input type="radio">` hack combined with CSS Grid (`grid-template-rows: 0fr` to `1fr`) to achieve flawless height transitions without a single line of JavaScript.
- **Slide-Up Reveal Effect**: As the accordion expands, the inner content smoothly fades in and translates upward, creating a highly polished, staggered motion feel.
- **Glassmorphism Aesthetics**: Deep cyber-gaming colors, blurred backdrops, glowing neon borders, and precise modern spacing.
- **EaseMotion Integration**: Leverages EaseMotion's declarative entrance utilities (`ease-fade-in`, `ease-slide-up`) for the initial component mount.
- **Accessibility Built-in**: Features screen-reader-only (`sr-only`) visually hidden inputs, robust `:focus-visible` states for keyboard navigation, and `prefers-reduced-motion` support.

## Folder Structure
```
gaming-hub-slide-up-accordion/
├── demo.html    # The semantic HTML markup and accessibility structure
├── style.css    # Layout, variables, interactive transitions, and EaseMotion simulation
└── README.md    # Component documentation
```

## How to Run
1. Open `demo.html` in any modern web browser.
2. Watch the EaseMotion utility classes stagger the entrance of the header and the accordion items.
3. Click or use `Tab` and `Space/Enter` on the accordion headers to reveal the content.
4. Observe the smooth grid expansion and the synchronized slide-up entrance of the inner text.

## EaseMotion Classes Used
The following declarative utility classes handle the initial page load entrances:
- `ease-fade-in`
- `ease-slide-up`
- `ease-delay-100`
- `ease-delay-200`
- `ease-delay-300`
- `ease-delay-400`
- `ease-delay-500`

## Responsive Behaviour
The component is wrapped in a fluid container that spans up to `768px`. It naturally collapses to fit smaller viewports. The typography, padding, and interactive touch targets remain accessible and easy to tap on mobile devices.

## Accessibility
- **Semantic Labeling**: The interactive elements utilize standard `<label>` tags explicitly linked via `for` attributes to hidden `<input>` radios, ensuring total screen reader support.
- **Keyboard Navigation**: Pressing `Tab` focuses the hidden radio input, which triggers a highly visible neon outline on its adjacent `<label>` using the `:focus-visible` pseudo-class.
- **Graceful Degradation**: Users with `prefers-reduced-motion: reduce` enabled at the OS level will bypass the animations and sliding transitions entirely, instantly revealing the content.

## Why it fits EaseMotion CSS
This showcase demonstrates how developers can pair EaseMotion’s straightforward entrance animations (`ease-slide-up`) with advanced pure CSS interactive techniques (Grid-based height transitions). It proves that complex, interactive, and high-fidelity gaming UI patterns can be achieved gracefully without resorting to heavy JavaScript frameworks.
