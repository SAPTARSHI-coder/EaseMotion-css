# Sandbox Component Showcase: Hardware-Accelerated Infinite Marquee Text Ticker

## Overview
A zero-dependency, high-performance scroll-driven marquee conveyor element isolated completely inside a sandbox folder. It balances text items dynamically using native keyframe matrices with zero runtime script footprint.

## 📁 Sandbox Configuration Files
* `demo.html` — Dual-conveyor timeline testing view showcasing bi-directional tracking arrays with interactive pause capabilities.
* `style.css` — Scoped styling layer implementing hardware composition triggers linked back to global tokens.

## 🚀 Key Layout Mechanics
1. **Twin Content Hand-Off Matrix:** By placing two structurally identical tracking blocks side-by-side within an outer frame (`display: flex; overflow: hidden;`), the browser streams them synchronously. When the primary row shifts exactly to `translateX(-100%)`, both tracks instantly snap back to zero, creating a seamless loop.
2. **GPU Composition Level Optimization:** Declaring an explicit `will-change: transform` hint tells the browser engine to decouple the marquee text elements from the main layout thread, avoiding heavy CPU text paint updates during tracking intervals.
3. **Interactive Control Chains:** Leverages the standard hover modifier chain to alter properties natively (`animation-play-state: paused`), enabling script-free interactive pauses when users focus on individual ticker tokens.
