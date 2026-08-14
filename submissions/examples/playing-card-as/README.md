# Playing Card

### What does this do?

It shows an Ace of Spades on top of a small fan of face down cards. The ace has the A and spade indices in opposite corners and a large center pip, and it lifts and tilts when hovered or focused. The back cards use a striped pattern with a white border.

### How is it used?

```html
<div class="deck">
  <div class="card back b1"></div>
  <div class="card ace" tabindex="0">
    <span class="idx tl"><b>A</b><i>&#9824;</i></span>
    <span class="pip">&#9824;</span>
  </div>
</div>
```

The ace is a white rounded card with corner `idx` blocks (the bottom one rotated 180 degrees) and a big `pip` in the center. Back cards are offset and rotated behind it, and a hover lifts the ace.

### Why is it useful?

Card games, prize reveals, and playful UIs use playing cards. This builds an Ace of Spades and a card fan with pure CSS and Unicode suit marks, no images, with a hover lift.
