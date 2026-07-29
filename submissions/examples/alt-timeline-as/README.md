# Alternating Vertical Timeline

### What does this do?

It lays out a vertical timeline where entries alternate to the left and right of a center spine. Each entry has a dot marker on the line and a card with a date, title, and description. On narrow screens it collapses to a single column.

### How is it used?

```html
<ol class="timeline">
  <li>
    <div class="tl-card">
      <time>Jan 2024</time>
      <h3>Kickoff</h3>
      <p>Set the goals.</p>
    </div>
  </li>
  <li><div class="tl-card">...</div></li>
</ol>
```

Odd items sit on the left and even items on the right. A dot is placed on the center line for each entry.

### Why is it useful?

Timelines are common for roadmaps, histories, and changelogs. This lays out an alternating timeline with a center spine using only CSS, and it reflows to one column below 560px so it stays readable on phones.
