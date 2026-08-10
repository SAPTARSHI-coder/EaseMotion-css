# docs-vue-guide

A Vue 3 integration guide for **EaseMotion CSS** — how to bind classes dynamically and pair EaseMotion keyframes with Vue's `<Transition>` component.

## Static & dynamic classes

```html
<div :class="['ease-card', 'ease-card-hover', { 'ease-fade-in': isVisible }]">