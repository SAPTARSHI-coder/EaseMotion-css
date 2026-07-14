# Divider With Label

### What does this do?

It shows a horizontal divider with a centered label, with plain and accent variants.

### How is it used?

```html
<div class="divider"><span>or continue with</span></div>
<div class="divider is-accent"><span>Featured</span></div>
```

The line is drawn by `::before` and `::after` pseudo elements that flex to fill the space on each side of the label.

### Why is it useful?

Labelled dividers separate sections and options in forms and layouts, such as an "or" between sign in choices. This centers the label over the line with flex and pseudo elements, using only CSS with no images or JavaScript.
