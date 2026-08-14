# React 19 (RC) Compatibility Report

This document confirms the testing and compatibility of the EaseMotion `<Animate>` React wrapper against the React 19 Release Candidate.

## Testing Environment
- React: `19.0.0-rc.1`
- React DOM: `19.0.0-rc.1`
- Bundler: Vite 5

## Findings

**Status: 100% COMPATIBLE**

### 1. `ref` prop as a standard prop
React 19 deprecates `forwardRef` in favor of passing `ref` as a standard prop. The EaseMotion `<Animate>` component safely spreads `{...props}` to the underlying DOM node (`<Tag>`). Because we are returning a native string tag (e.g. `div`, `span`) or a React component that accepts refs, `ref` passing works seamlessly in React 19 without modification.

### 2. Strict Mode / Concurrent Rendering
EaseMotion relies strictly on CSS for its animations, completely avoiding `useEffect` timers or mutable refs for tweening. As a result, React 19's aggressive Strict Mode (which double-invokes effects on mount) has **zero impact** on the animation logic.

### 3. Server Components (RSC)
The `<Animate>` wrapper relies purely on CSS classes and inline styles (`animation-delay`). It does not use any client-only React APIs like `useState` or `useEffect` internally. Therefore, it is perfectly safe to use within React Server Components in Next.js App Router or Remix without the `"use client"` directive.

*(Note: If you use the `useScrollReveal` hook, that specific file must be marked as `"use client"` since it relies on `IntersectionObserver`).*
