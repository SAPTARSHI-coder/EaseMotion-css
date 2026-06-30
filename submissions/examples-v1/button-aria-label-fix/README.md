# Button Accessibility: aria-label Fix

## Problem

Icon-only buttons in README examples lack `aria-label` attributes. Screen readers announce them as generic "button" with no context.

## Solution

Add `aria-label` to all icon-only buttons:

```html
&lt;button class="ease-btn ease-btn-primary" aria-label="Search"&gt;
&lt;span&gt;🔍&lt;/span&gt; &lt;/button&gt;
```
