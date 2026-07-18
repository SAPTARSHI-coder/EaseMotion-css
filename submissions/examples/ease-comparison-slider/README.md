# ease-comparison-slider Component

## What does it do?
A before/after image comparison slider using CSS `clip-path` and
a range input. Drag to reveal the difference between two states.

## How is it used?
```html
<div class="ease-comparison" id="comp">
  <img class="ease-comparison-before" src="before.jpg" alt="Before">
  <img class="ease-comparison-after"  src="after.jpg"  alt="After">
  <div class="ease-comparison-divider" id="divider"></div>
  <span class="ease-comparison-label-before">Before</span>
  <span class="ease-comparison-label-after">After</span>
  <input type="range" class="ease-comparison-range"
         min="0" max="100" value="50" id="slider">
</div>

<script>
  const slider  = document.getElementById('slider');
  const comp    = document.getElementById('comp');
  const divider = document.getElementById('divider');
  slider.addEventListener('input', () => {
    const val = slider.value + '%';
    comp.style.setProperty('--ease-comparison-value', val);
    divider.style.left = val;
  });
</script>
```

## CSS Variables
- `--ease-comparison-width` — max width (default: 600px)
- `--ease-comparison-ratio` — aspect ratio (default: 16/9)
- `--ease-comparison-value` — slider position (default: 50%)

## Classes
- `.ease-comparison` — wrapper
- `.ease-comparison-before` — bottom image
- `.ease-comparison-after` — top image with clip-path
- `.ease-comparison-divider` — visual divider line + handle
- `.ease-comparison-range` — invisible range input overlay
- `.ease-comparison-label-before/after` — optional labels

## Tech Stack
- HTML + CSS + minimal JS (only for updating CSS variable)

## Preview
Open `demo.html` directly in browser.