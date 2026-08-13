# EaseAnimatedTabs - Smooth Layout Shift React Component

## Abstract

`<EaseAnimatedTabs>` is an enterprise-grade, ultra-lightweight React component designed to solve smooth layout-shift animations for sliding tab indicators without relying on heavy JavaScript animation libraries. By combining React's state management with CSS Custom Properties and browser-native GPU transitions, `<EaseAnimatedTabs>` delivers fluid 60+ FPS layout transitions with zero main-thread animation bottleneck.

## Bypassing Physics Engines

Traditional React animation libraries (e.g., Framer Motion, React Spring, Motion) typically inflate JavaScript bundle sizes by 30KB to 100KB+ gzipped. Moreover, physics-based spring solvers compute element positions and velocity frame-by-frame on every tick of `requestAnimationFrame`. When executing on the JavaScript main thread, these calculations risk dropping frames during heavy rendering or garbage collection cycles.

`<EaseAnimatedTabs>` completely bypasses JavaScript physics engines. Instead of calculating intermediate layout frames in JS, JavaScript is only invoked for a single coordinate measurement. The actual interpolation is offloaded entirely to the browser's optimized C++ compositor engine.

## Coordinate Piping via Custom Properties

The component architecture relies on a technique called **Coordinate Piping**:

1. **DOM Measurement**: When `activeTab` changes or a window `resize` event occurs, React executes a single `getBoundingClientRect()` call on the target tab button and its container.
2. **Custom Property Piping**: The relative offset position (`left`) and element dimensions (`width`) are set as inline CSS Custom Properties (`--indicator-left` and `--indicator-width`) on the container element.
3. **CSS Compositor Interpolation**: The `.ease-tab-indicator` element reads these custom properties in CSS and applies `transition: all 0.4s cubic-bezier(0.25, 1, 0.3, 1);`.

```css
.ease-tab-indicator {
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  left: var(--indicator-left, 0px);
  width: var(--indicator-width, 0px);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.3, 1);
}
```

This decoupling ensures that once the CSS variable values are updated, the browser handles smooth layout transitions natively with zero ongoing JS execution overhead.

## Accessibility (a11y)

`<EaseAnimatedTabs>` complies strictly with WAI-ARIA Authoring Practices for the Tab Panel design pattern:

- **ARIA Roles**:
  - `role="tablist"` on the tab list container with descriptive `aria-label`.
  - `role="tab"` on tab button elements with dynamic `aria-selected` boolean states.
  - `role="tabpanel"` on content panels with `aria-labelledby` referencing their controlling tab button ID.
- **Roving Focus Management**: Uses a roving `tabIndex` (`0` for active tab, `-1` for inactive tabs) to maintain clean tab sequence navigation.
- **Keyboard Navigation**: Implements keydown listeners handling keyboard navigation:
  - `ArrowRight`: Selects and moves focus to the next tab (wraps to start).
  - `ArrowLeft`: Selects and moves focus to the previous tab (wraps to end).
  - `Home`: Immediately selects and focuses the first tab.
  - `End`: Immediately selects and focuses the last tab.
