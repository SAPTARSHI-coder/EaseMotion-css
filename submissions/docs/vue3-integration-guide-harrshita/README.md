# Vue 3 Integration Guide

A comprehensive guide for using EaseMotion CSS inside Vue 3 Single File Components.

## What's covered
- Static class binding with `:class`
- Conditional animations using `:class` object syntax
- `v-if` / `v-show` transitions with Vue's `<Transition>`
- `prefers-reduced-motion` respect

## Usage in Vue 3 SFC

```vue
<template>
  <!-- Static binding -->
  <div :class="['ease-card', 'ease-fade-in']">Hello</div>

  <!-- Conditional binding -->
  <div :class="{ 'ease-slide-up': isVisible }">Animate on mount</div>

  <!-- Vue Transition wrapper -->
  <Transition name="ease-fade">
    <p v-if="isVisible" class="ease-slide-up">Revealed!</p>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';
const isVisible = ref(true);
</script>

<style>
/* Use EaseMotion CDN or local import */
@import url('https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css');
</style>
```

## prefers-reduced-motion

EaseMotion respects user OS preferences automatically. All keyframes
are suppressed when the user has enabled "Reduce Motion" in their system.
