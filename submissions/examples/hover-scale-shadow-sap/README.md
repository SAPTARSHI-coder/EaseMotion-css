# hover-scale-shadow-sap

A combined **scale-up + soft shadow** hover effect for cards, buttons, and feature tiles.

## Preview

Open `demo.html` in your browser. No build step required.

## Effect Behavior

| State | Transform | Shadow |
|-------|-----------|--------|
| Default | `scale(1)` | inherited from parent |
| Hover | `scale(1.05)` | `0 12px 32px rgba(0,0,0,0.15)` |
| Focus | `scale(1.05)` | shadow + blue outline ring |
| Active/Press | `scale(0.98)` | `0 4px 12px rgba(0,0,0,0.1)` |
| Reduced Motion | none | minimal static shadow |

## Usage

```html
&lt;!-- On a card --&gt;
&lt;div class="ease-card hover-scale-shadow-sap"&gt;
  ...
&lt;/div&gt;

&lt;!-- On a button --&gt;
&lt;button class="ease-btn ease-btn-primary hover-scale-shadow-sap"&gt;
  Click me
&lt;/button&gt;