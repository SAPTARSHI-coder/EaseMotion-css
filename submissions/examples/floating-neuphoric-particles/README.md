# Floating Neomorphic Particles Background

## 1. What does this do?

Provides a resource-efficient, ambient background layer that handles floating layout canvas particles using neomorphic dual-shadow highlights. All movement vectors translate vertically using hardware-optimized steps to run without layout re-flows.

## 2. How is it used?

Developers reference the viewport structure setup as the root backdrop beneath active content containers, managing density levels using separate speed metrics class signatures:

```html
<div class="neomorphic-bg-viewport">
  <div class="neo-particle size-sm position-1 animate-slow"></div>
  <div class="neo-particle size-md position-2 animate-mid"></div>
</div>
```
