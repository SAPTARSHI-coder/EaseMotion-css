# Advanced 3D Flip Dashboard Cards with Perspective Lighting

A modern dashboard card showcase built with **pure HTML and CSS**, featuring interactive 3D flip animations, perspective lighting, glassmorphism styling, and responsive layouts. This example demonstrates how EaseMotion CSS utility classes can be combined with custom component styling to create polished analytics interfaces without JavaScript.

## Features

- Pure HTML5 and CSS3
- Interactive 3D flip animation
- Perspective depth and lighting effects
- Glassmorphism-inspired card design
- Gradient analytics styling
- Dashboard analytics layout
- Hover and keyboard focus interactions
- Fully responsive design
- Accessible keyboard navigation
- Supports `prefers-reduced-motion`
- Compatible with EaseMotion animation utility classes

## Usage

Include the EaseMotion stylesheet followed by the component stylesheet.

```html
<link rel="stylesheet" href="../../../easemotion.min.css">
<link rel="stylesheet" href="style.css">
```

Use the dashboard card structure shown in `demo.html`.

```html
<article class="card-afdc308" tabindex="0">
    <div class="card-inner-afdc308">

        <div class="card-face-afdc308 front-afdc308">
            <!-- Front content -->
        </div>

        <div class="card-face-afdc308 back-afdc308">
            <!-- Back content -->
        </div>

    </div>
</article>
```

## Accessibility
This example includes accessibility best practices:
- Semantic HTML structure
- Keyboard-focusable cards
- Visible focus styles
- Skip link for keyboard users
- Responsive layout
- Motion reduction support through `prefers-reduced-motion`
- No JavaScript required for interaction

## Notes
This example is intended as a showcase component for the EaseMotion CSS examples library. It combines EaseMotion animation utilities with scoped custom styles while keeping all implementation self-contained within the submission directory.