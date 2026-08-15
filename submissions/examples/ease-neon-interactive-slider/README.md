@'
# Ease Neon Interactive Slider

## Description
A range slider styled with a glowing neon aesthetic - animated fill track, glowing thumb, and hover/active glow intensification. Includes pink and lime tinted variants alongside the default cyan.

## Usage
```html
<div class="ease-neon-slider">
  <div class="slider-label-row">
    <span class="slider-name">Brightness</span>
    <span class="slider-value" data-value>50%</span>
  </div>
  <input type="range" min="0" max="100" value="50" style="--slider-percent: 50%;" />
</div>
<script>
  // update --slider-percent and the label text on input, see demo.html
</script>
```

## Customization (CSS custom properties)
- --slider-fill-color: #00f0ff
- --slider-glow: rgba(0, 240, 255, 0.6)
- --slider-thumb-size: 22px
- --slider-height: 8px

Add tint-pink or tint-lime classes for alternate color schemes.

## Accessibility
Built on a native input type="range", so keyboard arrow-key control works out of the box. Respects prefers-reduced-motion.

## Files
- demo.html
- style.css
- README.md
'@ | Set-Content -Path submissions\examples\ease-neon-interactive-slider\README.md