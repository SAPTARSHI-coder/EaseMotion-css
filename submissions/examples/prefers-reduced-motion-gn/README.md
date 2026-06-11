# Prefers Reduced Motion Support

1. **What does this do?** Adds `@media (prefers-reduced-motion: reduce)` support to EaseMotion CSS animation classes, disabling or simplifying animations for users who have enabled the OS "Reduce Motion" accessibility setting.

2. **How is it used?**
```html
   <!-- Animations play normally by default -->
   <div class="ease-fade-in">Fades in</div>
   <div class="ease-slide-in">Slides in</div>
   <div class="ease-spin">Spins</div>

   <!-- When OS Reduce Motion is enabled, animations are automatically disabled -->
```

3. **Why is it useful?** Improves accessibility for users with motion sensitivity — pure CSS media query solution with zero JavaScript, aligns EaseMotion CSS with modern web accessibility standards (WCAG 2.1).