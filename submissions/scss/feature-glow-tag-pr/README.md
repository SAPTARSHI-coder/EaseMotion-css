# Glow Tag Mixin

**What does this do?**
This SCSS mixin applies a continuous, smooth, pulsating glow effect to an element, serving as an idle animation to draw user attention.

**How is it used?**
```scss
@use 'ease-motion' as *;

.my-status-tag {
  @include glow-tag-ds(1.5s);
}