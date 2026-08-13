# EaseTypewriterTerminal React Component

## Abstract

The `<EaseTypewriterTerminal>` component is a high-performance, interactive code visualizer and terminal emulator built for the EaseMotion design system. It combines React state management with pure CSS keyframe animations to produce fluid character-by-character typing effects with minimal DOM mutations and zero runtime animation libraries.

## Bypassing React Re-render Jank

In conventional React typewriter implementations, character typing is driven by JS timers continuously updating state (e.g., `setState(prev => prev + char)`). 

This traditional pattern introduces significant performance bottlenecks:
1. **Constant DOM Diffing**: Each character insertion triggers a React component re-render, VDOM reconciliation, and browser layout recalculation.
2. **Main-Thread Contention**: Running high-frequency `setInterval` or `requestAnimationFrame` loops on the main thread causes stuttering and frame drops ("jank") during user scrolling or concurrent application activities.

To eliminate this jank, `<EaseTypewriterTerminal>` uses React solely as a high-level **line sequencer**. React manages line completion intervals (`currentLineIndex`), while leaving character-by-character rendering to the browser's hardware-accelerated CSS engine.

## CSS steps() Interpolation

The character typing animation relies on CSS `@keyframes` paired with the `steps()` timing function on a monospaced text element:

```css
.ease-typewriter-line.active {
  border-right: 2px solid #38bdf8;
  animation: 
    ease-typing 1.5s steps(40, end) forwards,
    ease-blink 0.75s step-end infinite;
}

@keyframes ease-typing {
  from { width: 0; }
  to { width: 100%; }
}
```

### Key Technical Advantages:
- **Discreet Character Stepping**: The `steps(40, end)` timing function breaks continuous width interpolation into discrete, fixed intervals matching character widths. This simulates realistic terminal keystrokes without JS intervention.
- **GPU Compositing**: Layout clipping and width expansion are processed natively by the browser graphics pipeline.
- **Accessibility Integration**: Respects `prefers-reduced-motion` media queries by immediately displaying full line text when reduced motion is requested.
