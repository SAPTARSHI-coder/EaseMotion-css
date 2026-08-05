# Reduced Motion Support

## What does this do?
Ensures all EaseMotion CSS animations respect the user's prefers-reduced-motion system preference.

## How is it used?
```html
<div class="ease-fade-in ease-bounce">Content</div>

<body class="motion-reduced">
  <!-- All animations disabled -->
</body>
```

## Why is it useful?
- Accessibility for users with vestibular disorders
- WCAG 2.1 Level A compliance
- User control via system preference and manual class

## WCAG References
- WCAG 2.1 2.3.1 (Level A)
- WCAG 2.1 2.3.2 (Level AAA)
