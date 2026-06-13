# Using EaseMotion CSS with Vue

## Installation

```bash
npm install easemotion-css
```

## Global Import

Import the stylesheet in your entry point:

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'easemotion-css/easemotion.min.css';

createApp(App).mount('#app');
```

## Component Example

```vue
<template>
  <section class="ease-center ease-padding-16">
    <h1 class="ease-fade-in">Build faster.</h1>
    <button class="ease-btn ease-btn-primary ease-hover-grow">
      Get Started
    </button>
  </section>
</template>
```

## Card Component

```vue
<template>
  <div class="ease-card ease-hover-lift" style="max-width: 320px">
    <h2 class="ease-text-lg">{{ name }}</h2>
    <p class="ease-text-sm ease-muted">{{ role }}</p>
    <button class="ease-btn ease-btn-outline ease-btn-sm">
      View Profile
    </button>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
});
</script>
```

## Nuxt / SSR

For **Nuxt 3**, import in `nuxt.config.js` using the `css` option:

```js
// nuxt.config.js
export default defineNuxtConfig({
  css: ['easemotion-css/easemotion.min.css'],
});
```

Styles will be injected globally and available during server-side rendering.

## Scoped Styles

EaseMotion CSS global classes work alongside Vue's scoped styles without conflicts:

```vue
<template>
  <div class="ease-card custom-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.custom-wrapper {
  background: var(--ease-color-surface);
}
</style>
```
