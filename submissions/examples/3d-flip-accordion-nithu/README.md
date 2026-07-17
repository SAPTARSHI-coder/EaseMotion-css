# 3D Flip Accordion

**What does this do?**
A pure CSS accordion component that reveals its content with a smooth 3D flip animation instead of a simple expand/collapse.

**How is it used?**
```html
<div class="accordion-item">
  <button class="accordion-trigger" aria-expanded="false">
    What is EaseMotion CSS?
  </button>
  <div class="accordion-inner">
    <div class="accordion-front">Click to flip</div>
    <div class="accordion-back">A pure CSS animation-first framework.</div>
  </div>
</div>
```
Clicking anywhere on the card toggles the `.active` class on `.accordion-item`, which triggers a `rotateX(180deg)` flip on `.accordion-inner` to reveal the back face. Timing and easing are customizable via the `--flip-duration` and `--flip-easing` CSS custom properties.

**Why is it useful?**
It adds a modern, eye-catching interaction pattern (3D flip) to a familiar UI element (accordion), fitting EaseMotion CSS's philosophy of animation-first components with zero JavaScript overhead for the actual animation — JS here is used only for toggling state, not for the motion itself.