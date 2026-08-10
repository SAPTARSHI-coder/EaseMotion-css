# Micro-Animated Contextual Tooltip Component Sandbox

## Overview
A lightweight, zero-dependency, pure-CSS micro-animated tooltip utility built completely within an isolated sandbox workspace directory. It utilizes native string-extraction attributes to supply clean contextual helper micro-copy without codebloat.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive presentation block staging action cards to evaluate element popups.
* `style.css` — Scoped pseudo-selector layouts driving a 3D flip animation (rotateX + scale) linked directly to root variables and exposed via custom properties.
## 🚀 Key Layout Mechanics
1. **Dynamic Text Attribution:** By leveraging the native CSS declaration `content: attr(data-tooltip)`, the interface reads text directly from inline HTML markup, removing the need to spawn empty, performance-heavy nested `<div>` nodes.
2. **3D Flip Reveal:** Displays activate using a perspective + rotateX hinge transform (rotateX(-90deg) scale(0.95) -> rotateX(0deg) scale(1)), running on separate browser composition layers to protect viewport scroll speeds. Flip angle, duration, easing, and scale are all overridable via --tooltip-rotate, --tooltip-duration, --tooltip-easing, and --tooltip-scale.
3. **Decoupled Architecture Freeze:** Keeps global core utility maps clean and unaltered by hosting the entire framework footprint self-contained inside the standalone features path.
4. **Keyboard & Screen Reader Support:** Tooltips trigger on `:hover`, `:focus-within`, and `:focus-visible`, and every trigger carries a `title` attribute (and `aria-label` where destructive) since CSS-generated `content` is invisible to assistive tech.