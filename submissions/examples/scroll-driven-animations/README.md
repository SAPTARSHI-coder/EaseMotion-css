# Scroll-Driven Animation Utilities

This feature introduces native CSS Scroll-Driven Animation utilities to `easemotion-css`, removing the dependency on external JS engines like GSAP for basic scroll-based styling.

## 🚀 Utilities Included

| Class | CSS Property | Use Case |
| :--- | :--- | :--- |
| `.timeline-scroll` | `animation-timeline: scroll();` | Mapping animations to the structural scroll distance of a container. |
| `.timeline-view` | `animation-timeline: view();` | Triggering / tracking animations as elements enter and cross the viewport. |

## 💻 How to Use

Combine any standard layout/motion keyframe class with a timeline utility:

```html
<div class="motion-fade-in timeline-view">
  <p>Look, Ma! No Javascript!</p>
</div>