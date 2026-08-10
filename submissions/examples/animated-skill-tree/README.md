# Animated Developer Skill Tree

## What does this do?
A visual skill tree component inspired by game progression systems that displays interconnected developer skills with animated connection paths and completed / active / locked states.

## How is it used?
```html
<div class="skill-tree">
  <div class="skill-node completed">HTML</div>
  <div class="skill-connector completed">
    <span class="connector-dot"></span>
  </div>
  <div class="skill-node active">JavaScript</div>
  <div class="skill-connector active">
    <span class="connector-dot"></span>
  </div>
  <div class="skill-node locked">React</div>
</div>
```
Add the classes `completed`, `active`, or `locked` to `.skill-node` elements. Connectors between nodes use `.skill-connector` with the matching state class and `.connector-dot` children for animated flow indicators.

## Why is it useful for EaseMotion CSS?
It demonstrates meaningful animation applied to a developer-focused UI pattern — skill roadmaps, learning paths, and dashboards — aligning with EaseMotion CSS's animation-first philosophy while providing a reusable component for portfolios, course platforms, and documentation sites.
