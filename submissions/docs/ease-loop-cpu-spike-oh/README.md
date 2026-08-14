# Guide: Multiple Looping Animations CPU Spike

This submission provides a documentation showcase for GSSoC issue **#44495**.

## Description

A comprehensive guide demonstrating CPU performance impact when a page contains multiple simultaneous looping animations (.ease-ping, .ease-pulse) with live performance monitoring and safer alternatives.

## Problem

EaseMotion CSS makes it easy to add expressive looping animations like .ease-ping and .ease-pulse, but stacking many infinite loops on one page can cause noticeable CPU spikes and jank on low-end mobile devices.

## What's Included

### Live Performance Monitor
- Active loop count tracker
- Estimated paint load percentage
- Severity indicator (Low/Medium/High)
- Real-time warning messages

### Heavy Loop Demo
- 12 simultaneous .ease-ping animations
- Demonstrates performance impact
- Warning panel shows CPU strain

### Optimized Alternatives
- **One-Shot Animations**: Use ease-fade-in with animation-fill-mode: forwards
- **Capped Iterations**: Use --ease-animation-iterations: 3 for limited loops
- **Static Indicators**: Use CSS opacity instead of animation for status

### Copy-Ready Snippets
- Performance-safe status badge (static)
- Capped pulse animation (3 iterations only)

### Best Practices
- Limit infinite loops to 3-5 per page
- Use `prefers-reduced-motion` to disable animations
- Consider static indicators for non-critical status
- Test on low-end devices
- Use `will-change` sparingly
- Prefer one-shot entrance animations

## Usage

Open `demo.html` in a browser to see:
1. Performance monitoring panel
2. Heavy loop demo with 12 simultaneous animations
3. Optimized alternative patterns
4. Copy-ready code snippets
5. Best practices list

## Key Takeaways

| Pattern | Loops | Performance |
|---------|-------|-------------|
| Infinite .ease-ping | ∞ | High CPU |
| Capped pulse (3x) | 3 | Low CPU |
| One-shot fade-in | 1 | Minimal |
| Static indicator | 0 | None |

## Acceptance Criteria

- ✅ Live performance warning panel
- ✅ Demo with 10+ looping animations
- ✅ Side-by-side heavy vs optimized comparison
- ✅ Copy-ready HTML snippets
- ✅ prefers-reduced-motion support
- ✅ Educational notes on CPU/paint cost
- ✅ Responsive and accessible design
