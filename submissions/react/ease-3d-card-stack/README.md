# React Scroll-Linked 3D Card Stack (Hardware Accelerated)

As a user scrolls down a page, having a stack of cards smoothly fly into the center of the screen and pile on top of each other with varying depths (like a deck of cards) is a fantastic, premium way to present sequential information.

Historically, this required importing heavy scrolling animation libraries like GSAP ScrollTrigger or Framer Motion. This submission demonstrates how to achieve the exact same effect utilizing a lightweight React component and native CSS `calc()` logic!

---

## 🏛️ The Architecture

### 1. The Sticky Scroll Space
We start by creating an outer wrapper (`.ease-stack-wrapper`) that is extremely tall (e.g., `300vh`). This forces the browser to create a scrollbar so we can "scrub" through the animation. Inside this wrapper, we place a container (`.ease-sticky-container`) with `position: sticky; height: 100vh`. 
As the user scrolls down the `300vh` space, the sticky container locks into the center of the viewport, holding our cards in place!

### 2. Tracking the Scroll Progress (React)
We use a lightweight native JS event listener inside a React `useEffect` to track how far down the user has scrolled within that `300vh` wrapper. We calculate a `progress` variable between `0` (top) and `1` (bottom).
To ensure 60fps performance and decouple the scroll event from React's render cycle, we wrap the calculation in a `requestAnimationFrame`!

### 3. Passing Variables to CSS
Inside the React component's `.map()`, we calculate exactly when each specific card should start "falling" into place based on its index. We map the global scroll progress to a local `--card-progress` variable (0 to 1) for each card, and pass it directly to the DOM node via inline styles!

### 4. The CSS `calc()` Engine
This is where the magic happens. We offload all the heavy animation lifting to the browser's native CSS engine.

We calculate how far back in the stack a card is:
```css
--reverse-index: calc(var(--total-cards) - var(--card-index) - 1);
```

We calculate its target scale (older cards shrink down to create 3D depth):
```css
--target-scale: calc(1 - (var(--reverse-index) * 0.05));
```

Finally, we apply the physical transform based on the React-injected `--card-progress`:
```css
transform: 
    /* If progress is 0, start 100vh off-screen. If 1, sit at 0vh. */
    translateY(calc(-100vh * (1 - var(--card-progress)))) 
    /* If progress is 0, be normal size. If 1, shrink to target scale. */
    scale(calc(1 - ((1 - var(--target-scale)) * var(--card-progress))));
```

---

## 💻 Usage

Drop the component into your React app and pass an array of card data.

```jsx
import { CardStack } from '@easemotion/react';

function App() {
  const cards = [
    { title: "Step 1", description: "First step.", color: "#0f172a" },
    { title: "Step 2", description: "Second step.", color: "#1e1b4b" }
  ];

  return <CardStack cards={cards} />;
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of external scrolling libraries!
- **Main Thread Blocking:** Near `0ms`. We use `requestAnimationFrame` to prevent the scroll event from thrashing the main thread, and we only pass a simple CSS variable to the DOM.
- **GPU Compositor:** By applying `will-change: transform` to the cards, the browser handles the complex `calc()` scaling and translating natively on the GPU Compositor.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that safely strips the `300vh` scroll space and stacks the cards vertically in a standard, static list!
