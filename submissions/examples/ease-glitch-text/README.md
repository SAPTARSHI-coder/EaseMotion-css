# Glitch Text Reveal

An edgy, high-impact typography animation that simulates a digital "screen tear" or glitch when hovered. This is a highly requested effect for gaming hubs, Web3 landing pages, and cyberpunk-themed portfolios.

### Usage
```html
<h1 class="ease-glitch-text" data-text="CYBERPUNK">CYBERPUNK</h1>
```
*Note: The `data-text` attribute must exactly match the inner HTML of the element for the pseudo-elements to duplicate the text properly.*

### Why is it useful?
Historically, glitch effects were either pre-rendered as GIFs/videos or generated via canvas/WebGL plugins. This component brings the effect directly into the DOM using pure CSS. By leveraging `clip-path` to rapidly slice overlapping pseudo-elements colored in cyan and magenta, it achieves a highly performant, authentic digital tear effect with zero JavaScript overhead.
