# Architectural Proposal: `.ease-reveal` GPU Memory Fix (`ease-reveal-memory-fix-proposal`)

This submission provides a concrete architectural fix for the GPU memory bloat issue caused by permanent `will-change` declarations.

## 🚀 The Problem & Solution

- **The Problem**: Currently, `core/animations.css` applies `will-change: transform, opacity` directly to `.ease-reveal`. Because `will-change` forces the browser to pre-allocate a GPU compositor layer, a page with hundreds of reveal elements will consume massive amounts of VRAM immediately on load, causing crashes on lower-end mobile devices (Safari on iOS is notoriously strict about this).
- **The Fix**: We must remove `will-change` from the base `.ease-reveal` class. Instead, we introduce a `.ease-reveal-pending` utility class. The intersection observer script should attach this class slightly before the element enters the viewport, and remove it once the transition completes.

## 🛠️ Proposed Core Changes

If approved, the maintainer should manually apply the following diff to `core/animations.css`:

```diff
 .ease-reveal {
   opacity: 0;
   transform: translateY(30px);
-  will-change: transform, opacity;
   transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
 }
 
+.ease-reveal-pending {
+  will-change: transform, opacity;
+}
