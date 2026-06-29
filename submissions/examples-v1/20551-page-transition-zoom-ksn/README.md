# Page Transition Zoom (ease-page-transition-zoom)

### 1. What does this do?
This component integrates the modern **View Transitions API** to animate transitions between page views. During a transition, the active/outgoing view zooms out and fades away, while the incoming view scales up from a smaller size and fades in from the center.

### 2. How is it used?
Link the component styles:
```html
<link rel="stylesheet" href="./style.css">
```

Implement your view switching function wrapped inside `document.startViewTransition()`:
```javascript
function switchPageContent(targetPageId) {
  const container = document.getElementById('content-container');
  
  if (!document.startViewTransition) {
    // Immediate swap fallback if browser does not support the API
    container.innerHTML = getPageTemplate(targetPageId);
    return;
  }

  // Trigger smooth page transition zoom
  document.startViewTransition(() => {
    container.innerHTML = getPageTemplate(targetPageId);
  });
}
```

Adjust duration using the root custom CSS property (defaulting to 300ms):
```css
:root {
  --ease-page-transition-duration: 300ms;
}
```

### 3. Why is it useful?
It brings native, native-app-quality page transition physics to web environments using a single JavaScript API hook and pure declarative CSS overrides. Since the View Transitions API leverages browser screenshot buffers under the hood, transitions run at hardware-accelerated speeds. In addition, the component respects accessibility preferences (`prefers-reduced-motion: reduce`) by disabling scale transforms and falling back to a lightweight, zero-motion crossfade.
