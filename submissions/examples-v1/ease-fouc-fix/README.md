# FOUC Prevention Fix for EaseMotion CSS

**Fixes:** FOUC (Flash of Unstyled Content) bug on page load  
**Type:** Bug Fix  

## What was broken

On slow connections or low-end devices, elements with EaseMotion 
entrance animation classes (`ease-fade-in`, `ease-slide-up`, etc.) 
flash fully visible before the CSS is parsed, then abruptly 
disappear and re-animate — breaking the entire entrance effect.

## The Fix (2 steps)

### Step 1 — Critical inline CSS in `<head>`
Hides all animated elements immediately before any stylesheet loads:

```css
body:not(.ease-ready) [class*="ease-fade"],
body:not(.ease-ready) [class*="ease-slide"],
body:not(.ease-ready) [class*="ease-zoom"] {
  opacity: 0;
  animation: none !important;
}
```

### Step 2 — JS adds `.ease-ready` after DOM loads
This unlocks all animations at the right moment:

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('ease-ready');
  });
</script>
```

## How to use in your project

```html
<!DOCTYPE html>
<html>
<head>
  <!-- 1. Critical CSS first (inline) -->
  <style>
    body:not(.ease-ready) [class*="ease-fade"] { opacity: 0; animation: none !important; }
    body:not(.ease-ready) [class*="ease-slide"] { opacity: 0; animation: none !important; }
    body:not(.ease-ready) [class*="ease-zoom"]  { opacity: 0; animation: none !important; }
  </style>

  <!-- 2. Then load EaseMotion -->
  <link rel="stylesheet" href="easemotion.css" />
</head>
<body>
  <!-- 3. JS unlock -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.body.classList.add('ease-ready');
    });
  </script>

  <div class="ease-fade-in">I won't flash! ✅</div>
</body>
</html>
```

## Files
| File | Purpose |
|---|---|
| `style.css` | FOUC guard CSS using body:not(.ease-ready) selector |
| `demo.html` | Visual demo with reload button to simulate page load |
| `README.md` | This file |