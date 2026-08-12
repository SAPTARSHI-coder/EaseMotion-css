# CSS CV Timeline Section

## 1. What does this do?
This component renders a responsive CV/Resume timeline layout displaying experience card blocks that alternate sides on desktop and collapse to a left-aligned single-column list on mobile.

## 2. How is it used?
Configure a list container, and map even/odd child item cards inside list wrappers:
```html
<ul class="timeline-wrapper">
  <li class="timeline-item">
    <!-- Circle indicator node -->
    <div class="timeline-node"></div>

    <article class="timeline-card" tabindex="0">
      <span class="timeline-date">2024</span>
      <h2 class="card-title">Title</h2>
    </article>
  </li>
</ul>
```

## 3. Why is it useful?
It provides front-end developers with a lightweight, clean resume roadmap layout natively in CSS, completely avoiding complex Javascript height recalculation or column layout reflow scripts.
