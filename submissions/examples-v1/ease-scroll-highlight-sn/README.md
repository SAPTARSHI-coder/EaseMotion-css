# Scroll-Driven Text Highlight Sweep (`ease-scroll-highlight-sn`)

## What does this do?

An animated inline text highlight component that dynamically draws a marker sweep line across key phrases as you scroll down the page, utilizing CSS Scroll-Driven Animations.

## How is it used?

Add standard `<mark>` elements with the class `ease-scroll-highlight` and a custom background color:

```html
<p class="ease-highlight-paragraph">
  This is a paragraph where we highlight
  <mark
    class="ease-scroll-highlight"
    style="--hl-color: rgba(99, 102, 241, 0.25);"
    >important text</mark
  >
  on scroll.
</p>
```

## Why is it useful?

It provides a premium editorial design feel for landing pages, blogs, and documentation sites. The sweep line is drawn dynamically corresponding to the scroll location entirely in pure CSS, requiring zero JavaScript and degrading cleanly to static highlights in Safari, Firefox, or when motion is reduced.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effect.
