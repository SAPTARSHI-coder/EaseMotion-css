# CSS Zoom-In Tooltip

A pure CSS tooltip for portfolio "find me online" icons, with a zoom-in animation on hover or keyboard focus. No JavaScript required.

## Features

- Pure CSS, no dependencies
- Zoom-in entrance via `@keyframes`
- Keyboard accessible (`:focus-visible` + `aria-describedby`)
- Fully responsive (breakpoints at 768px and 480px)
- Respects `prefers-reduced-motion`

## Usage

Drop `demo.html` and `style.css` into your page. Copy a `.ease-tooltip-wrapper` block to add more icons — just update the glyph, tooltip text, and matching `id`/`aria-describedby` pair.

## Custom Properties

Set in `:root` in `style.css`:

```css
--ease-tooltip-duration     
--ease-tooltip-easing      
--ease-tooltip-radius      
--ease-tooltip-gap          
--ease-tooltip-bg          
--ease-tooltip-border       
--ease-tooltip-text        
--ease-tooltip-popup-bg    
--ease-tooltip-popup-text  
```

Override to reskin:

```css
:root {
  --ease-tooltip-popup-bg: #f97316;
  --ease-tooltip-duration: 0.15s;
}
```

## Files

- `demo.html` — four icon triggers with tooltips
- `style.css` — styles, custom properties, and zoom-in keyframe
- `README.md` — this file