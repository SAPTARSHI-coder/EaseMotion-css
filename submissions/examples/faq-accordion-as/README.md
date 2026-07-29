# Animated FAQ Accordion

### What does this do?

It shows an accessible FAQ list where each question expands to reveal its answer, with a chevron that rotates and an answer that fades in, using only HTML and CSS.

### How is it used?

```html
<details class="faq-item">
  <summary class="faq-question">
    How do I install it?
    <span class="faq-chevron" aria-hidden="true"></span>
  </summary>
  <div class="faq-answer">Link one CSS file and start using the classes.</div>
</details>
```

Each item is a native `<details>` element, so opening and closing, keyboard support, and screen reader semantics come for free. Add the `open` attribute to any item you want expanded by default.

### Why is it useful?

FAQ sections are common on landing and support pages. Building on `<details>` keeps the disclosure accessible by default, and this adds a chevron rotation and a reveal animation with only transitions and a keyframe, so it needs no JavaScript. The chevron is drawn with CSS borders, the summary shows a focus ring, and the reveal animation is disabled under `prefers-reduced-motion: reduce`.
