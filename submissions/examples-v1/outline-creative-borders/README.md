# Outline Creative Borders

### What does this do?
Demonstrates six creative border effects using CSS `outline` and `outline-offset` — offset outlines (gap between edge and ring), double rings (border + outline combined), dashed outlines, animated pulsing outline-width, negative/inset offset, and a live comparison of how outline differs from border in terms of layout impact.

### How is it used?
Open `demo.html` in any browser. Each card uses a distinct CSS class that varies `outline`, `outline-offset`, and `outline-style`. Hover over cards to see interactive transitions. The animated card uses a `@keyframes` loop. To reuse an effect, copy the relevant card's CSS class and apply it to any element.

### Why is it useful?
Developers often overlook `outline` as a styling tool because it is associated with focus rings. This example surfaces the creative potential of outline — effects that border alone cannot achieve (non-layout-shifting rings, negative offsets, independent animation). It provides ready-to-use patterns for decorative rings, hover states, and focus alternatives.
