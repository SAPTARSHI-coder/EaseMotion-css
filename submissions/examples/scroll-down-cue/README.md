# Scroll Down Cue

A self-contained, animated **"scroll down"** hint for hero sections and
full-height landing pages. It invites the user to keep scrolling with a subtle
looping animation.

> This is distinct from `ease-scroll-indicator`, which is a *reading-progress
> bar* fixed at the top of the page. This example is the bottom-of-hero prompt
> that nudges the user to scroll **down**.

## Preview

Open `demo.html` in any browser and scroll through the three sections. Each
hero shows a different cue variant.

## Variants

| Variant | Class | Motion |
| ------- | ----- | ------ |
| Mouse   | `scroll-cue--mouse`   | A wheel-dot drifts down inside a mouse outline and fades |
| Chevron | `scroll-cue--chevron` | A stack of three chevrons bounces downward in sequence |

## Usage

Place the cue at the bottom of a position-relative hero. It is an anchor, so it
also acts as a "jump to next section" link:

```html
<section class="hero">
  <!-- hero content -->

  <a class="scroll-cue scroll-cue--mouse" href="#next-section">
    <span class="scroll-cue__mouse" aria-hidden="true">
      <span class="scroll-cue__wheel"></span>
    </span>
    <span class="scroll-cue__label">Scroll down</span>
  </a>
</section>
```

Chevron variant:

```html
<a class="scroll-cue scroll-cue--chevron" href="#next-section">
  <span class="scroll-cue__chevrons" aria-hidden="true">
    <span class="scroll-cue__chevron"></span>
    <span class="scroll-cue__chevron"></span>
    <span class="scroll-cue__chevron"></span>
  </span>
  <span class="scroll-cue__label">Keep scrolling</span>
</a>
```

## Files

```
scroll-down-cue/
├── demo.html   ← Hero sections showing both cue variants
├── style.css   ← Self-contained styles and keyframes
└── README.md   ← This file
```

## Accessibility

- The decorative shapes are marked `aria-hidden="true"`, while the
  `scroll-cue__label` provides a real text label for screen readers.
- The cue is a focusable anchor with a visible focus ring.
- Honours `prefers-reduced-motion: reduce`: the looping animation is disabled
  and the cue is shown in a clean static state.

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅ |
| Firefox | ✅ |
| Safari  | ✅ |
| Edge    | ✅ |

## Why it's useful

The hero scroll-down prompt is one of the most common landing-page patterns and
was not represented in the examples. This adds it as a lightweight, pure-CSS,
accessible drop-in with two ready-made styles.

---

**Closes:** #3031
**Status:** Ready for review
