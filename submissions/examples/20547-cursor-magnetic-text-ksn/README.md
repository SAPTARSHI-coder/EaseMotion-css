# Text Characters Pull Toward Cursor (ease-cursor-magnetic-text)

### 1. What does this do?
This is an interactive text effect where individual characters in a heading shift slightly towards the cursor when the mouse is nearby, returning to their default positions when the cursor moves away.

### 2. How is it used?
Add the `.magnetic-text` class to any text element, and split characters into spans:
```html
<h1 class="magnetic-text">
  <span class="magnetic-char">H</span>
  <span class="magnetic-char">e</span>
  <span class="magnetic-char">l</span>
  <span class="magnetic-char">l</span>
  <span class="magnetic-char">o</span>
</h1>
```
Alternatively, let JavaScript automatically split headings containing the `.magnetic-text` class into spans, and use a mousemove event listener to set the `--ease-char-offset` CSS property dynamically based on proximity vector math.

### 3. Why is it useful?
It fits the animation-first philosophy of EaseMotion CSS by creating a highly responsive micro-interaction that makes web typography feel alive, lightweight, and engaging.
