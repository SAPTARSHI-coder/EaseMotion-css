# Specifications List

### What does this do?

It shows a product specifications list where each row has a label on the left and a value on the right, joined by a dotted leader line and grouped under section headings.

### How is it used?

```html
<dl class="specs">
  <div class="spec-group">Display</div>
  <div class="spec-row"><dt>Size</dt><span class="lead"></span><dd>6.1 inch</dd></div>
  <div class="spec-row"><dt>Resolution</dt><span class="lead"></span><dd>2532 x 1170</dd></div>
</dl>
```

Each row is a flex line with the label, a stretchy `lead` span that draws the dotted line, and the value aligned right. Use `spec-group` rows to label sections.

### Why is it useful?

Product and spec pages list technical details as label and value pairs. This lays out a grouped specifications list with aligned values and a dotted leader, using only CSS, on semantic `dl`, `dt`, and `dd` elements.
