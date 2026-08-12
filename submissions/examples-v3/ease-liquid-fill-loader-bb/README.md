# Liquid Fill Circular Progress Loader

A premium dashboard progress indicator featuring circular SVG masking, double-layer wave transformations, and fluid liquid filling states.

## What does this do?
This demo displays a circular progress loader. The inner fill resembles a liquid wave that sloshes side-to-side and climbs up from 0% to 100% using CSS keyframe translations.

## How is it used?
1. Reference `style.css` inside your HTML page.
2. Setup the circular liquid container and wave layer classes:
   ```html
   <div class="liquid-loader">
     <div class="wave"></div>
     <div class="wave wave-back"></div>
   </div>
   ```
3. Use custom variables to adjust loading height, wave speeds, and colors.

## Why is it useful?
Liquid wave progress animations are highly engaging, offering visually pleasing alternatives to traditional linear load bars for loading screens, dashboard metrics, and file-upload states.
