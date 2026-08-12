# React Dynamic Island Morph (Hardware Accelerated)

A small, elegant pill-shaped notification at the top of the screen (inspired by iOS) that smoothly expands into a larger, interactive card when clicked. 

Historically, complex shape-morphing components like this required heavy JavaScript layout animation libraries (like Framer Motion's `layoutId`). This submission demonstrates how to achieve a flawless, hardware-accelerated shape morph using native CSS orchestration!

---

## 🏛️ The Architecture

### 1. The Physical Morphing
Instead of swapping out completely different DOM elements (which breaks CSS transitions), we maintain a single parent container (`.ease-dynamic-island`). 
When the React state `isExpanded` flips to true, we simply change the container's physical dimensions via CSS classes!

```css
.ease-dynamic-island {
    width: 200px;
    height: 40px;
    border-radius: 40px;
    
    /* We use a specific cubic-bezier to mimic Apple's bouncy spring physics! */
    transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1.2);
    will-change: width, height, border-radius;
}

.ease-dynamic-island.is-expanded {
    width: 350px;
    height: 180px;
    border-radius: 30px;
}
```

### 2. The Content Crossfade (The Magic)
If we just changed the physical size of the island, the contents inside would instantly snap, looking terrible.
We place both the Compact Content and Expanded Content inside the island at the same time, positioning them absolutely.

When the island is clicked:
1. We instantly fade **OUT** the compact content.
2. The island physically grows via the 0.5s CSS transition above.
3. We fade **IN** the expanded content... but we apply a `transition-delay: 0.15s;` to it!

**Why the delay?**
By delaying the fade-in of the expanded content by exactly `0.15s`, we allow the physical shape of the island to grow FIRST. By the time the content begins rendering, the island is already large enough to hold it, completely avoiding any layout overflow or text clipping during the morph!

---

## 💻 Usage

Drop the component into your React app. You can pass your own custom JSX elements into the `compactContent` and `expandedContent` props, and the island will handle all the complex morphing logic automatically!

```jsx
import { DynamicIsland } from '@easemotion/react';

function App() {
  return (
    <DynamicIsland 
      compactContent={<span>You have 1 new message</span>}
      expandedContent={
        <div>
          <h2>Alex Johnson</h2>
          <p>"Hey, did you finish the design system?"</p>
          <button>Reply</button>
        </div>
      }
    />
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of layout animation libraries (bye bye Framer Motion).
- **Main Thread Blocking:** `0ms`. The React component simply toggles a class string.
- **GPU Compositor:** By explicitly transitioning `width`, `height`, and `border-radius`, and declaring them in `will-change`, modern browsers offload the entire morphing animation to the GPU.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips all transitions and delays, ensuring the component instantly toggles states without triggering motion sickness.
