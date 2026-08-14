# EaseMotion CSS — Animation Fill Mode Utilities

This directory implements core utility classes for configuring the CSS `animation-fill-mode` property in EaseMotion CSS.

---

## What is Animation Fill Mode?

The `animation-fill-mode` CSS property controls how styles are applied to an element before and after an animation plays. By default (`none`), when an animation finishes, the element instantly snaps back to its default state. This causes visual jumps in entrance animations (which should stay visible) or exit transitions.

By using appropriate fill-mode classes, you can specify that styles from the keyframes are retained after finishing, or applied immediately during the delay phase.

---

## Utility Classes Reference

EaseMotion CSS provides clean and intuitive utility prefixes for configuring animation fill modes.

| Utility Class          | Standard Class         | CSS Rule                          | Description                                                                                                     |
| :--------------------- | :--------------------- | :-------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `.anim-fill-none`      | `.fill-mode-none`      | `animation-fill-mode: none;`      | Default: Keyframe styles are only active while the animation plays. Snaps back to start styles upon completion. |
| `.anim-fill-forwards`  | `.fill-mode-forwards`  | `animation-fill-mode: forwards;`  | Hold end state: Retains style values defined in the last keyframe (100% or to).                                 |
| `.anim-fill-backwards` | `.fill-mode-backwards` | `animation-fill-mode: backwards;` | Hold start state: Applies style values defined in the first keyframe (0% or from) during delay.                 |
| `.anim-fill-both`      | `.fill-mode-both`      | `animation-fill-mode: both;`      | Dual retention: Applies 0% style during delay and holds 100% style upon completion.                             |

---

## Lifecycle Phase States

Here is how each fill mode affects an element across different phases of the animation lifecycle:

| Phase                              | `none`          | `forwards`               | `backwards`            | `both`                   |
| :--------------------------------- | :-------------- | :----------------------- | :--------------------- | :----------------------- |
| **1. Idle Phase** (Unplayed)       | Default styles  | Default styles           | Default styles         | Default styles           |
| **2. Delay Phase** (Waiting)       | Default styles  | Default styles           | **0% Keyframe styles** | **0% Keyframe styles**   |
| **3. Running Phase** (Playing)     | Keyframe values | Keyframe values          | Keyframe values        | Keyframe values          |
| **4. Completion Phase** (Finished) | Default styles  | **100% Keyframe styles** | Default styles         | **100% Keyframe styles** |

---

## Usage Examples

### 1. Simple Entrance Fade-in (Forwards)

Entrance animations should remain visible once they complete. Without `.anim-fill-forwards`, a faded element would instantly snap back to its invisible default state:

```html
<!-- The item slides up, fades in, and stays fully visible -->
<div class="trigger-slide-fade anim-duration-2s anim-fill-forwards">
  Welcome Content
</div>
```

### 2. Staggered Delay List (Both)

When stacking elements that fade in sequentially using animation delays, elements with delays must start invisible. By using `.anim-fill-both`, the first keyframe (opacity: 0) is applied immediately during the delay phase, and the element stays visible at the end:

```html
<div class="list-container">
  <!-- Item 1 starts immediately, fades, and holds -->
  <div class="trigger-slide-fade anim-duration-1s anim-fill-both">Item 1</div>
  <!-- Item 2 waits 1s (invisible during delay), fades, and holds -->
  <div class="trigger-slide-fade anim-duration-1s anim-delay-1s anim-fill-both">
    Item 2
  </div>
  <!-- Item 3 waits 2s (invisible during delay), fades, and holds -->
  <div class="trigger-slide-fade anim-duration-1s anim-delay-2s anim-fill-both">
    Item 3
  </div>
</div>
```

---

## Typography & Design Best Practices

1. **Entrance Animations**: Always combine entrance animations (fading, sliding, zooming in) with `forwards` or `both` fill modes so they do not snap back.
2. **Exit Animations**: Exit animations (fading, sliding out) usually benefit from `forwards` so that elements remain in their final hidden state (e.g., opacity: 0) before being removed from the DOM.
3. **Flashing Prevention**: A common animation bug is a quick flash of the default element styling before the animation starts. Applying `.anim-fill-both` guarantees that the starting styles of the keyframes are painted immediately, eliminating the pre-animation flash.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox sliders apply CSS values dynamically. Run standard smoke tests to confirm build compliance:

```bash
npm test
```
