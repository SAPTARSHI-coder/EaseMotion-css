# Cinematic Depth-of-Field Parallax

> Issue: [#74082](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/74082)

An ultra-premium, GPU-accelerated multi-layer depth-of-field (DoF) camera parallax effect powered natively by CSS `animation-timeline: scroll()`.

---

## ✨ Features & Architectural Highlights

- **Native CSS Scroll-Driven Rack Focus:** Mathematically maps `translateY` velocity and dynamic `filter: blur()` focus depth directly to the scrollbar without a single line of JavaScript.
- **Physical Camera Lens Simulation:** Emulates an 85mm f/1.2 prime lens focal plane shift from foreground bokeh to primary subject clarity, receding into deep background horizon focus.
- **Pure CSS Focal Plane Controls:** Interactive focal plane preview selector built with CSS pseudo-class radio inputs (`:checked`).
- **Zero-JS Runtime Overhead:** Runs 100% on the GPU compositor thread for silky smooth 60 FPS performance without main-thread scroll listeners.
- **Progressive Enhancement & Fallback:** Includes `@supports not (animation-timeline: scroll())` ambient floating fallback for legacy browsers.
- **Accessible Design:** Full `@media (prefers-reduced-motion: reduce)` overrides to flatten 3D perspective and disable motion/blur for users with motion sensitivity.

---

## 🎨 CSS Custom Properties (Design Tokens)

```css
:root {
  --dof-bg-base: #04060c;
  --dof-bg-card: rgba(18, 24, 43, 0.65);
  --dof-primary: #00f0ff;
  --dof-secondary: #7000ff;
  --dof-accent: #ff0055;

  /* Focal Plane Depth Parameters */
  --dof-blur-far: 16px;
  --dof-blur-mid: 8px;
  --dof-blur-sharp: 0px;
  --dof-blur-foreground: 22px;
}
```

---

## 🚀 Usage & Integration

1. Copy `ease-cinematic-parallax/` into your project under `submissions/examples/`.
2. Link `style.css` in your HTML document `<head>`:
   ```html
   <link rel="stylesheet" href="style.css" />
   ```
3. Use the multi-layer HTML structure provided in `demo.html`:
   ```html
   <main class="dof-scene">
     <div class="dof-stage">
       <div class="dof-layer dof-layer-far-bg">...</div>
       <div class="dof-layer dof-layer-midground">...</div>
       <div class="dof-layer dof-layer-subject">...</div>
       <div class="dof-layer dof-layer-foreground">...</div>
     </div>
   </main>
   ```

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with multi-layer stage, interactive pure-CSS lens controls, and technical feature grid.
- `style.css` — Complete stylesheet featuring scroll-driven animation keyframe timelines, design tokens, fallback rules, and accessibility overrides.
- `README.md` — Technical documentation manual.
