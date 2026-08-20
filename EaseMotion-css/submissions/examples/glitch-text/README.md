# Cyberpunk Text Glitch Animation Utility

### 1. What does this do?
This utility creates a pure CSS cyberpunk-style text glitch effect by using `::before` and `::after` pseudo-elements duplicated with `attr(data-text)` and horizontal `clip-path` keyframe slicing with chromatic RGB displacement.

### 2. How is it used?
```html
<h1 class="ease-glitch" data-text="CYBERPUNK GLITCH">CYBERPUNK GLITCH</h1>
```

### 3. Why is it useful?
It fits the EaseMotion philosophy of zero-dependency, high-impact CSS animations by delivering a lightweight, highly performant glitch effect entirely driven by standard CSS pseudo-elements and keyframe animations without requiring any JavaScript or external libraries.
