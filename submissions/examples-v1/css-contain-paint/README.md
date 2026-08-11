# CSS contain: paint Isolation Example

## Description
This example demonstrates the performance benefits of `contain: paint`. It treats the element as a contained canvas, ensuring that children cannot paint outside its bounds.

## How it works
1. **Clipping:** Elements positioned outside the parent container are not painted on screen.
2. **Performance Optimization:** If the container is off-screen, the browser skips painting its contents entirely.
