# CSS Zoom-Out Tabs (Neumorphic)

Pure CSS tabs with a soft-UI (neumorphic) look. Switching tabs plays a zoom-out entrance on the panel content. No JavaScript.

## How it works

Tab state is driven by hidden radio inputs (`name="ease-tabs"`), not JavaScript. Each label toggles its input, and CSS shows the matching panel using a sibling selector:

```css
#ease-tab-overview:checked ~ .ease-tab-panels #panel-overview {
  display: block;
  animation: ease-tabs-zoom-out var(--ease-tabs-duration) var(--ease-tabs-easing);
}
```

Because tab state lives on native radio inputs, arrow-key navigation between tabs and screen reader announcement of the selected tab work automatically, without any added ARIA state management.

## Features

- Pure CSS, no dependencies
- Zoom-out panel transition via `@keyframes`
- Neumorphic soft shadows on tabs and panel container
- Keyboard accessible (native radio group behavior)
- Responsive (tabs wrap on narrow screens)
- Respects `prefers-reduced-motion`

## Usage

To add a tab, you need three pieces kept in sync by `id`/`for`/`name`:

```html
<input type="radio" name="ease-tabs" id="ease-tab-x" class="ease-tab-input">

<label for="ease-tab-x" class="ease-tab-label">Tab X</label>

<section id="panel-x" class="ease-tab-panel">Panel content</section>
```

Then add a matching CSS rule so the panel shows when its radio is checked:

```css
#ease-tab-x:checked ~ .ease-tab-panels #panel-x {
  display: block;
  animation: ease-tabs-zoom-out var(--ease-tabs-duration) var(--ease-tabs-easing);
}
```

## Custom Properties

Set in `:root` in `style.css`:

```css
--ease-tabs-duration      
--ease-tabs-easing        
--ease-tabs-scale         
--ease-tabs-radius        
--ease-tabs-gap           
--ease-tabs-bg            
--ease-tabs-text          
--ease-tabs-accent        
--ease-tabs-shadow-light 
--ease-tabs-shadow-dark   
```

Override to reskin:

```css
:root {
  --ease-tabs-accent: #f97316;
  --ease-tabs-scale: 1.3;
}
```

## Files

- `demo.html` — three-tab example (Overview, Features, Pricing)
- `style.css` — tab switching logic, neumorphic styling, and zoom-out keyframe
- `README.md` — this file