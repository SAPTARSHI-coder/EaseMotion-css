# Animated Avatar Stack

### What does this do?

It shows a row of overlapping avatars that spread apart and lift when the group is hovered, with a trailing chip for the remaining count.

### How is it used?

```html
<div class="avatar-stack" role="group" aria-label="Project collaborators">
  <span class="avatar avatar-a" title="Jane Doe">JD</span>
  <span class="avatar avatar-b" title="Arjun Rao">AR</span>
  <span class="avatar avatar-c" title="Mia Lopez">ML</span>
  <span class="avatar avatar-more" aria-label="3 more collaborators">+3</span>
</div>
```

The avatars overlap by default with a negative margin, and hovering the stack removes the overlap so they fan out. Use `avatar-more` for the overflow count chip.

### Why is it useful?

Avatar stacks show collaborators or participants in a compact space. This spreads them with a margin and transform transition on hover, using only CSS. Avatars use initials so the demo is self contained, the group and the overflow chip carry accessible labels, and motion is disabled under `prefers-reduced-motion: reduce`.
