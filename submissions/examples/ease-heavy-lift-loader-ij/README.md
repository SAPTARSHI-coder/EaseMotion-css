# ease-heavy-lift-loader

A CSS loading animation that mimics a heavy lifting motion, characterized by a slow, strained upward movement followed by a fast drop and bounce.

## Usage
Open demo.html in a browser. Use the `.ease-heavy-lift-loader` container and three `.ease-lift-bar` elements.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --loader-color | #3f3f46 | Bar color |
| --loader-bg | #f4f4f5 | Page background |
| --loader-shadow| rgba(0,0,0,0.2) | Bar shadow |

## Notes
The animation relies on complex keyframes modifying `height` and `transform: translateY`, changing `animation-timing-function` within the keyframes to simulate the physics of lifting a heavy object.
