# Ease Rotate on Hover Utility

1. **What does this do?** Adds CSS utility classes that rotate elements on hover with configurable angles, directions, speed, and easing — pure CSS, zero JavaScript.

2. **How is it used?**
```html
   <!-- Basic rotate -->
   <div class="ease-rotate-hover">⚙️</div>

   <!-- Left rotate -->
   <div class="ease-rotate-hover-left">⚙️</div>

   <!-- Full 360 spin -->
   <div class="ease-rotate-hover-full">🔄</div>

   <!-- 180 flip -->
   <div class="ease-rotate-hover-flip">🔃</div>

   <!-- Angle variants -->
   <div class="ease-rotate-45">↗️</div>
   <div class="ease-rotate-90">➡️</div>

   <!-- Speed + easing -->
   <div class="ease-rotate-hover ease-rotate-fast ease-rotate-bounce">🏀</div>

   <!-- Custom angle via CSS variable -->
   <div class="ease-rotate-hover" style="--ease-rotate-angle: 30deg;">✨</div>
```

3. **Why is it useful?** Lightweight hover rotation utilities with CSS variable support, speed variants, and bounce easing — zero JavaScript, prefers-reduced-motion safe, fits EaseMotion CSS's animation-first, utility-first philosophy perfectly.