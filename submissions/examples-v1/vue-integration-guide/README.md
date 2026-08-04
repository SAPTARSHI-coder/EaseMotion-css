# Vue.js & Nuxt.js Integration Guide for EaseMotion CSS

This guide provides step-by-step instructions on integrating EaseMotion CSS animations into Vue 3, Vue 2, and Nuxt.js applications.

---

## 📦 Installation

### Option 1: Via CDN (For Rapid Prototypes)
Add the stylesheet directly to the `<head>` of your public `index.html` file:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.css">
```

### Option 2: Via npm (Recommended for Bundled Apps)
1. Install the package in your project:
   ```bash
   npm install easemotion-css
   ```
2. Import the CSS file in your main entry point file (`src/main.js` or `src/main.ts`):
   ```javascript
   import { createApp } from 'vue'
   import App from './App.vue'
   import 'easemotion-css/easemotion.css'

   createApp(App).mount('#app')
   ```

---

## ⚡ Basic & Conditional Animation Usage

### 1. Static Animations
You can apply EaseMotion utility classes directly to any element in your Vue template blocks:
```html
<template>
  <div class="ease-fade-in ease-slide-up">
    <h1>Welcome to EaseMotion!</h1>
  </div>
</template>
```

### 2. Dynamic Class Binding
Trigger transitions reactively based on component state changes using Vue's `:class` object/array bindings:
```html
<script setup>
import { ref } from 'vue'
const animateElement = ref(false)
</script>

<template>
  <div>
    <button @click="animateElement = !animateElement">Toggle Animation</button>
    <div :class="{ 'ease-fade-in': animateElement }">
      Dynamic Content
    </div>
  </div>
</template>
```

---

## 🧬 Vue `<Transition>` Integration

Vue’s built-in `<Transition>` element makes it extremely easy to animate elements entering and leaving the DOM. Map EaseMotion utility classes directly to transition hooks:

```html
<script setup>
import { ref } from 'vue'
const showElement = ref(true)
</script>

<template>
  <div>
    <button @click="showElement = !showElement">Toggle DOM Element</button>
    
    <Transition
      enter-active-class="ease-fade-in"
      leave-active-class="ease-fade-out"
    >
      <p v-if="showElement" class="alert-box">
        This box animates smoothly when added or removed!
      </p>
    </Transition>
  </div>
</template>

<style scoped>
.alert-box {
  padding: 1rem;
  background-color: #1e293b;
  border-radius: 8px;
}
</style>
```

---

## 🚀 Nuxt.js Integration

To configure EaseMotion CSS globally inside a **Nuxt 3** application:

1. Install the stylesheet package:
   ```bash
   npm install easemotion-css
   ```
2. Open `nuxt.config.ts` and add the import to the global `css` array configuration:
   ```typescript
   // nuxt.config.ts
   export default defineNuxtConfig({
     css: [
       'easemotion-css/easemotion.css'
     ]
   })
   ```

---

## 👁️ Scroll-Triggered Animations (Vue Composable)

Below is a lightweight, reusable Vue 3 composable `useScrollReveal` designed to trigger animations using the browser's native `IntersectionObserver` API.

### 1. Create the Composable
Save this script inside `src/composables/useScrollReveal.js`:

```javascript
import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px' }) {
  const elementRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // Optional: stop observing once animation plays once
        observer.unobserve(entry.target)
      }
    }, options)

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible
  }
}
```

### 2. Implement inside your Vue Component
Use the composable to conditionally bind EaseMotion classes:

```html
<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'

const { elementRef, isVisible } = useScrollReveal({ threshold: 0.2 })
</script>

<template>
  <div class="spacer" style="height: 100vh;">Scroll down...</div>

  <!-- Binds ease-fade-in dynamically when visible in viewport -->
  <div 
    ref="elementRef" 
    class="reveal-card"
    :class="{ 'ease-fade-in': isVisible, 'hidden': !isVisible }"
  >
    <h2>Scroll Revealed Content!</h2>
  </div>
</template>

<style scoped>
.reveal-card {
  padding: 2rem;
  background-color: #1e293b;
  border-radius: 12px;
}
.hidden {
  opacity: 0;
}
</style>
```
