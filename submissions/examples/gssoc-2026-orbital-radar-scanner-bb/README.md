# Orbital Radar Sonar Visualizer Scanner

A sci-fi circular radar screen display component featuring revolving conic-gradient sonar beams and expanding blip target pings.

## 1. What does this do?
This component renders an interactive tactical sonar radar map with rotating sweep beams, target detection blips, coordinate overlays, and concentric grid line axis marks using pure CSS animations.

## 2. How is it used?
Wrap elements inside `.radar-display` and position target blips `.target-blip` using CSS custom properties `--top` and `--left`:

```html
<div class="radar-display">
  <div class="sonar-sweep"></div>
  <div class="target-blip" style="--top: 30%; --left: 70%;"></div>
</div>
```

## 3. Why is it useful?
- **Tactical UI Visualizer**: Perfect for aerospace monitoring dashboards, gaming HUD interfaces, and IoT sensor trackers.
- **Zero Heavy Canvas Dependencies**: Built entirely with pure CSS keyframes, conic gradients, and radial gradients.
- **Accessible Design**: Includes accessible reduced-motion fallbacks to lock beam rotation for users sensitive to motion.
