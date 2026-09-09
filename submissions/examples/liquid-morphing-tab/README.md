# Liquid Morphing Tab Indicator

## What does this do?

This is a premium organic tab navigation component where the active indicator background stretches, morphs, and flows like liquid mercury when moving between tabs.

## How is it used?

1. Add the CSS classes to your HTML structure. To ensure crystal-clear text readability on top, we separate the text layers from the gooey background layer:

```html
<div class="ease-liquid-tabs">
  <!-- Background Layer (Gooey environment) -->
  <div class="ease-liquid-bg-layer" id="bg-layer">
    <div class="ease-active-bubble" id="active-bubble"></div>
  </div>

  <!-- Foreground Layer (Tab Text Buttons) -->
  <div class="ease-liquid-fg-layer">
    <button class="ease-liquid-tab ease-active" data-target="tab1">
      Tab 1
    </button>
    <button class="ease-liquid-tab" data-target="tab2">Tab 2</button>
    <button class="ease-liquid-tab" data-target="tab3">Tab 3</button>
  </div>
</div>
```

2. Link the stylesheet to your page:

```html
<link rel="stylesheet" href="style.css" />
```

3. Initialize coordinates and active state shifts using a lightweight JavaScript helper:

```javascript
const tabs = document.querySelectorAll(".ease-liquid-tab");
const activeBubble = document.getElementById("active-bubble");
const bgLayer = document.getElementById("bg-layer");

// Create stationary anchor elements for the bubble to pull from/into
tabs.forEach(() => {
  const anchor = document.createElement("div");
  anchor.classList.add("ease-liquid-anchor");
  bgLayer.appendChild(anchor);
});
const anchors = bgLayer.querySelectorAll(".ease-liquid-anchor");

function updatePositions() {
  const bgRect = bgLayer.getBoundingClientRect();

  tabs.forEach((tab, index) => {
    const tabRect = tab.getBoundingClientRect();
    const left = tabRect.left - bgRect.left;
    const width = tabRect.width;

    // Center the stationary background anchor
    const anchor = anchors[index];
    const anchorLeft = left + (width - 38) / 2;
    anchor.style.left = `${anchorLeft}px`;

    // Slide the active indicator
    if (tab.classList.contains("ease-active")) {
      activeBubble.style.transform = `translateX(${left}px)`;
      activeBubble.style.width = `${width}px`;
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("ease-active"));
    tab.classList.add("ease-active");
    updatePositions();
  });
});

window.addEventListener("resize", updatePositions);
```

## Why is it useful?

Standard tab indicators jump or slide linearly. This component provides an organic "gooey" liquid morphing transition that makes tab shifting feel alive. It achieves this by combining `filter: blur()` and `contrast()` inside an isolated background layer, ensuring that your text buttons on the foreground remain perfectly sharp, readable, and accessible.

## Tech Stack

- HTML
- CSS (filters, transitions, custom properties)
- JavaScript (lightweight position alignment)

## Customization

You can easily customize the viscosity, speed, themes, and dimensions of the liquid indicator by overriding these custom properties:

- `--ease-liquid-bg`: Background color of the tab container (default: `#090d1a`). Should match the container background to isolate gooey filters.
- `--ease-liquid-anchor-bg`: Backdrop circle color under inactive tabs (default: `rgba(30, 41, 59, 0.4)`).
- `--ease-liquid-color`: Gradient/color of the active pill (default: `linear-gradient(...)`).
- `--ease-liquid-blur`: Thickness/melt level of the gooey effect (default: `8px`).
- `--ease-liquid-contrast`: Edge sharp/tension level of the liquid (default: `22`).
- `--ease-liquid-speed`: Shift transition duration (default: `380ms`).

## Preview

Open `demo.html` directly in your browser to see the effect in action.

## Contribution Notes

- Class naming was handled by the contributor (prefixed with `ease-`)
- Maintainer will review and standardize before merging
