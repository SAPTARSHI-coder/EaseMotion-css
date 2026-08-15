# 3D Flip Card on Hover

A card that flips 180° on hover using CSS 3D transforms, revealing content on the back side. Great for team profiles, product showcases, and info cards.

## Demo

Open `demo.html` in your browser to see:
- Horizontal flip (default) — rotates on Y-axis
- Vertical flip — rotates on X-axis
- Product card with features list and buy button

## Usage

```html
&lt;!-- Horizontal flip (default) --&gt;
&lt;div class="flip-card"&gt;
  &lt;div class="flip-card-inner"&gt;
    &lt;div class="flip-card-front"&gt;
      &lt;!-- Front content --&gt;
      &lt;img src="avatar.jpg" alt="Profile"&gt;
      &lt;h3&gt;John Doe&lt;/h3&gt;
      &lt;p&gt;Developer&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="flip-card-back"&gt;
      &lt;!-- Back content --&gt;
      &lt;h3&gt;About&lt;/h3&gt;
      &lt;p&gt;More info here...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Vertical flip --&gt;
&lt;div class="flip-card flip-vertical"&gt;
  &lt;div class="flip-card-inner"&gt;
    &lt;div class="flip-card-front"&gt;...&lt;/div&gt;
    &lt;div class="flip-card-back"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;