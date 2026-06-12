# Sandbox Component Showcase: Pure-CSS Dynamic Horizontal Scroll Shadows Utility

## Overview

A performance-focused, zero-dependency horizontal scroll shadow utility isolated within an examples subfolder directory. It uses standard background attachment masks to generate fading edge indicators for dense data tables or overflowing cards without loading scroll monitoring scripts.

## 📁 Sandbox Configuration Files

- `demo.html` — Interactive presentation layout hosting wide horizontal metric streams to verify edge mask convergence.
- `style.css` — Scoped layout sheet setting advanced gradient layering parameters linked back to core global tokens.

## 🚀 Key Layout Mechanics

1. **Background Attachment Interleaving:** Overlaps two distinct attachment properties. `background-attachment: local` moves along with inner row items, while `background-attachment: scroll` stays rigidly anchored to the box frame.
2. **Self-Reversing Gradient Masks:** When resting at zero scroll bounds, the opaque local gradient layer sits on top of and completely hides the left indicator shadow. As the viewport shifts horizontally, the mask moves out of alignment, smoothly revealing the shadow graphic underneath.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/scroll-shadow-fix/`.
