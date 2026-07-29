# ease-highlighter-tool

An animated text highlighter effect.

## Usage
Open demo.html in a browser. Wrap the text you want to highlight in an inline element with the class `ease-highlight`. The effect triggers on hover, or by adding the `active` class.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --highlight-color | #fef08a | The color of the highlighter ink |
| --highlight-height | 40% | The thickness of the highlight line |
| --highlight-speed | 0.6s | The duration of the animation |

## Notes
CSS linear gradients and `background-size` transitions are used to create the drawing effect.
