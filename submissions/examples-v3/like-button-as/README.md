# Like Button

### What does this do?

It shows a heart like button that fills red and pops with a small burst when toggled on, with a like count beside it. It works with no JavaScript by using a checkbox, so the liked state is real and keyboard operable.

### How is it used?

```html
<label class="like">
  <input type="checkbox" aria-label="Like this post" />
  <span class="like-heart"><svg>...</svg></span>
  <span class="like-count">128</span>
</label>
```

The hidden checkbox drives the heart fill and the burst ring through sibling selectors. Give the input an `aria-label` so its purpose is announced.

### Why is it useful?

Posts and cards need a like control with clear on and off states. This animates a heart fill and a burst on toggle and pairs it with a count, using only a checkbox and CSS. The control is keyboard operable with a focus ring and the animations are disabled under reduced motion.
