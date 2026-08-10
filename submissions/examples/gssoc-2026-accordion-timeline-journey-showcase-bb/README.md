# Accordion Timeline Journey Showcase

An accessible HTML5 `<details>` and `<summary>` based vertical timeline component featuring connected roadmap nodes and expandable details.

## 1. What does this do?
This component renders an interactive vertical milestone timeline where clicking or focusing each item smoothly expands detailed descriptions and project metadata tags.

## 2. How is it used?
Include `style.css` in your webpage and structure your timeline items using semantic `<details>` tags:

```html
<link rel="stylesheet" href="style.css">

<div class="timeline-container">
  <div class="timeline-line"></div>
  <details class="timeline-item">
    <summary class="timeline-summary">
      <div class="timeline-node">🚀</div>
    </summary>
    <div class="timeline-details">Milestone description</div>
  </details>
</div>
```

## 3. Why is it useful?
It provides product roadmaps, company histories, and portfolio timeline sections with semantic HTML accessibility and responsive mobile design without JavaScript event dependencies.
