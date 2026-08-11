# Echo Chamber

An interactive UI component that visually translates user interactions (clicks, keyboard) into expanding, soundless ripples that reflect off boundaries, simulating an acoustic echo chamber.

## How is it used?

Include the CSS and JS files, and structure your HTML like this:

```html
<div class="echo-app-container">
    <header class="echo-header">
        <!-- Add your controls here or keep the provided ones -->
    </header>
    
    <main class="echo-chamber" id="chamber">
        <!-- Echoes are dynamically injected here -->
        <div class="chamber-boundary"></div>
    </main>
</div>
```

The script listens for `mousedown` and `keydown` (Space) events inside the `.echo-chamber` element to generate the `.echo-ripple` elements dynamically.

## Why is it useful?

It provides a highly interactive and visually engaging element that creates a dynamic sense of responsiveness. It aligns with EaseMotion's philosophy of bringing fluid, performant, and emotionally resonant motion to interfaces, making it perfect for audio-themed apps, landing pages, or experimental UI designs where user engagement is key.
