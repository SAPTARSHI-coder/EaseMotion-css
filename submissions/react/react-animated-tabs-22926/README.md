# React Animated Tabs / Pill Switcher (#22926)

This submission fulfills Issue **#22926** by delivering a polished, animated tabs / pill switcher component built with React and EaseMotion CSS.

## Key Animation Techniques

### 1. Sliding Pill Indicator
A `<SlidingIndicator>` sub-component sits behind all tab buttons using `position: absolute`. On every tab change it reads the active button's `offsetLeft` and `offsetWidth` via React's `useRef`, then updates CSS `left` and `width` inline styles. A `cubic-bezier` CSS transition makes the pill glide fluidly between tabs — **zero JavaScript animation loop required**.

### 2. EaseMotion Content Panel Transition
Each `<TabPanel>` conditionally applies `ease-fade-in ease-slide-up ease-duration-normal` every time it becomes the active tab. To guarantee a fresh keyframe animation fires on each switch (even when toggling back to the same tab), the component clears the class in one frame and re-applies it in the next using `requestAnimationFrame`. The result: every panel entry feels snappy and alive.

### 3. Accessibility
- Buttons carry `role="tab"` and `aria-selected` attributes.
- The tab bar carries `role="tablist"`.

## How to View
Double-click `demo.html` directly in your file system. It uses React 18 + Babel via CDN so there is **no build step or Node server needed**.
