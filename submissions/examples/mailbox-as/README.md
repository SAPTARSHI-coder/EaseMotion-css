# Mailbox

### What does this do?

It shows a classic curbside mailbox on a post. Hovering or focusing the mailbox raises the little red flag and slides a letter up out of the slot, just like getting new mail. It works with no JavaScript. Under reduced motion the flag and letter snap without transitions.

### How is it used?

```html
<div class="mailbox" tabindex="0">
  <span class="flag"></span>
  <div class="box"><span class="slot"></span><span class="door"></span><span class="letter"></span></div>
  <span class="post"></span>
</div>
```

The box is a dome-topped rounded rectangle with a mail slot and a front door. The side flag is anchored at its base and rests pointing down; a `:hover` or `:focus` on the mailbox rotates it up and, at the same time, slides the hidden `letter` up through the slot, both with a springy easing.

### Why is it useful?

Contact forms, newsletters, and notification states use a mailbox. This builds an interactive mailbox with pure CSS shapes and transitions, no images or JavaScript, with a reduced motion fallback.
