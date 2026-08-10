# Liquid Gooey Loader

A mesmerizing loading animation that looks like dripping liquid or merging blobs, achieved entirely with CSS.

## Preview

Open `demo.html` in your browser to see the blobs stretching and merging together organically.

## Implementation Details

- **No JavaScript/SVG:** The entire effect is built using standard HTML `div` elements and CSS.
- **The Filter Trick:** The "gooey" effect is a well-known CSS trick. The parent container has a very high `filter: contrast(20);`, while the child blobs have a `filter: blur(10px);`. 
- **How it works:** The blur spreads the color outwards, making the blobs fuzzy. When they get close to each other, their fuzzy boundaries overlap. The high contrast on the container then sharply cuts off the low-opacity fuzzy edges and solidifies the higher-opacity overlapping areas, creating the illusion that they are physically merging like a liquid.
- **Animation:** The blobs use `@keyframes` with staggered `animation-delay`s to move out from the center and snap back.
