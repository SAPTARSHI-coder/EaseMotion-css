# Hover Badge with Neon Styling Component

A responsive UI badge collection featuring multi-tiered neon ambient glow effects, live status radar pulse dots, border shimmer sweeps, cyberpunk typography, and accessibility features.

---

### 1. What does this do?
This component renders interactive badges that illuminate with high-intensity neon bloom lighting on hover, accompanied by animated live status indicator rings and shimmer sweeps.

---

### 2. How is it used?
Place the HTML badge elements in your application layout:

```html
<!-- Status Badge with Live Pulsing Dot -->
<span class="neon-badge badge-cyan" tabindex="0" role="status" aria-label="Status: System Online">
  <span class="pulse-dot"></span>
  <span>SYSTEM ONLINE</span>
</span>

<!-- Interactive Feature Badge with Icon & Counter -->
<a href="#" class="neon-badge badge-purple badge-interactive">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path></svg>
  <span>NOTIFICATIONS</span>
  <span class="badge-count">12</span>
</a>
```

Include `style.css` in your project stylesheet.

---

### 3. Why is it useful?
- **High-Impact Visual Feedback:** Vibrant neon ambient glow on hover (`box-shadow` layers) attracts user focus for status tags, system metrics, and CTAs.
- **Multiple Cyber Neon Themes:** Pre-built color modifiers (`.badge-cyan`, `.badge-purple`, `.badge-green`, `.badge-pink`, `.badge-gold`).
- **Live Status Animations:** Pulse keyframe indicators communicate real-time activity (e.g., active server, AI core status, live telemetry).
- **Accessible & Responsive:** Features keyboard focus rings (`:focus-visible`), ARIA `role="status"`, mobile responsive layouts, and `prefers-reduced-motion` compliance.
