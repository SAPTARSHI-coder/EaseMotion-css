# Accessibility (a11y) Audit: React `<Animate>` Component

This audit reviews the official React `<Animate>` wrapper for EaseMotion CSS to ensure it adheres to WCAG (Web Content Accessibility Guidelines) and respects user-level OS preferences.

## 1. Reduced Motion Preference

**Status: PASS**

The core EaseMotion CSS framework natively utilizes the `@media (prefers-reduced-motion: reduce)` CSS query. When users enable reduced motion at the OS level (e.g., Windows: "Show animations in Windows" -> Off, macOS: "Reduce motion" -> On), all keyframe animations and transition durations are instantly clamped to `0.01ms`.

Because the React wrapper maps props directly to these underlying CSS classes (e.g., `ease-animate-fade-in`), it inherently inherits this rigorous accessibility standard without requiring any explicit React context or `window.matchMedia` hooks on the client thread.

## 2. ARIA Roles & Tab Indexes

**Status: PASS / DELEGATED**

The `<Animate>` component leverages the `tag` prop (defaulting to `div`) and spreads all excess props (`{...props}`) directly onto the rendered DOM node.

This architecture ensures that developers can freely pass critical a11y attributes through the wrapper without impedance:

```jsx
<Animate 
  type="slide-up" 
  tag="button"
  aria-label="Close dialog"
  aria-expanded={false}
  tabIndex={0}
>
  Close
</Animate>
```

## 3. Keyboard Focus Visibility

**Status: PASS**

The wrapper does not apply any inline styles involving `outline: none` or manipulate the focus ring. When developers use hover classes like `ease-hover-glow`, these effects trigger on `:hover`. To fully satisfy WCAG 2.1 Success Criterion 2.4.7 (Focus Visible), developers should ensure that if the element is interactive, it also receives the hover class on `:focus-visible`. 

Currently, the EaseMotion CSS core handles `:hover` and `:focus-visible` in tandem for these utility classes.

## 4. Flash of Unstyled Content (FOUC) Mitigation

**Status: PASS**

When utilizing `useScrollReveal` alongside `<Animate>`, elements are explicitly held in a zero-opacity state (`ease-opacity-0`) before intersection. This prevents jarring flashes that can be disorienting to users with cognitive disabilities.

## Recommendations

No structural changes are required to the `<Animate>` component's source code at this time. It remains highly accessible purely through its architectural delegation to the native DOM and the robust `@media (prefers-reduced-motion)` constraints built into the parent CSS framework.
