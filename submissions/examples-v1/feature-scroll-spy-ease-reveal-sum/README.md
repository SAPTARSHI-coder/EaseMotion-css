# Scroll-Spy Section Dots with Ease Reveal

## 1. What does this do?

A multi-section page demo where vertical scroll-spy dots highlight the active section while each panel reveals with staggered entrance motion.

## 2. How is it used?

Open `demo.html` in a browser. Scroll or click the dots to move between sections. Watch the active dot update and content children stagger in on reveal.

```html
<nav class="spy-nav" aria-label="Section dots">
  <a href="#intro" class="spy-dot is-active" data-target="intro"></a>
</nav>

<section id="intro" class="panel reveal is-visible" data-section>
  <h1 class="reveal-child">Section title</h1>
</section>
```

## 3. Why is it useful?

Scroll-spy and reveal-on-scroll are usually taught separately. This demo shows one cohesive EaseMotion-style pattern newcomers can copy for long landing pages.

## Issue

Resolves #51864
