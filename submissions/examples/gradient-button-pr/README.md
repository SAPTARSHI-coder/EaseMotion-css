# gradient-button-pr

A soft **gradient primary button** with smooth color transition on hover.

## Preview

Open `demo.html` in your browser. No build step required.

## Effect Behavior

| State | Background | Transform | Shadow |
|-------|------------|-----------|--------|
| Default | Gradient (primary → success) | none | none |
| Hover | Gradient shifts position | `translateY(-2px)` | soft glow |
| Focus | Gradient shifts + blue ring | `translateY(-2px)` | glow + outline |
| Active | Gradient holds | `translateY(0)` | reduced shadow |
| Disabled | Gray gradient | none | none |

## Usage

```html
&lt;button class="gradient-button-pr"&gt;Click me&lt;/button&gt;
&lt;button class="gradient-button-pr ease-btn-sm"&gt;Small&lt;/button&gt;
&lt;button class="gradient-button-pr ease-btn-lg ease-btn-pill"&gt;Large Pill&lt;/button&gt;
&lt;button class="gradient-button-pr" disabled&gt;Unavailable&lt;/button&gt;