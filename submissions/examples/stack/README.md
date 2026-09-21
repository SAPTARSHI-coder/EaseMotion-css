# Glassmorphism Avatar Stack Documentation

The **Glassmorphism Avatar Stack** displays a grouped cluster of user profiles or images with a frosted glass backdrop-filter aesthetic. It is engineered with strict WCAG 2.1 AA accessibility compliance and full keyboard interaction support.

---

## 1. Markup Architecture & HTML Examples

### Basic Implementation

```html
<div 
  class="avatar-stack" 
  role="group" 
  aria-label="Project contributors"
  data-avatar-stack
>
  <ul class="avatar-stack__list" role="list">
    <li class="avatar-stack__item">
      <a href="#profile-1" class="avatar-stack__link" aria-label="Alex Morgan, Lead Designer">
        <img class="avatar-stack__img" src="avatar1.jpg" alt="" width="48" height="48">
        <span class="avatar-stack__tooltip" role="tooltip">Alex Morgan</span>
      </a>
    </li>
    <li class="avatar-stack__item">
      <button type="button" class="avatar-stack__link avatar-stack__overflow" aria-label="View 4 additional contributors">
        <span class="avatar-stack__overflow-text">+4</span>
      </button>
    </li>
  </ul>
</div>
