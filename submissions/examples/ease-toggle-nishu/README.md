# Animated Theme Toggle (ease-toggle-nishu)

## What does this do?
A custom, accessible checkbox styled as a theme toggle switch featuring a satisfying "spring" slide animation and smooth sun/moon icon morphing transitions.

## How is it used?
```html
<label class="ease-toggle" aria-label="Toggle Dark Mode">
    <input type="checkbox" class="ease-toggle-input">
    <div class="ease-toggle-track">
        <div class="ease-toggle-thumb">
            <!-- SVG icons inside thumb -->
        </div>
    </div>
</label>
```
The component is fully driven by the `:checked` state of the hidden `<input type="checkbox">`, meaning absolutely zero JavaScript is required for the animations.

## Why is it useful?
Theme toggles are ubiquitous, but often feel stiff or require heavy JS animation libraries. This component uses a customized `cubic-bezier` timing function to give the toggle thumb a highly tactile, bouncy "spring" feel. The icons simultaneously rotate, fade, and scale during the transition, providing a premium micro-interaction that perfectly aligns with EaseMotion CSS's goal of fluid, beautiful interactions.
