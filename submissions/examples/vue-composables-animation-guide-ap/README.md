# Vue 3 Composable Animation Pattern Guide

Welcome to the **Vue 3 Composable Animation Pattern Guide**! This comprehensive tutorial explains how to bind, trigger, and manage EaseMotion CSS transition classes inside Vue 3 and Nuxt applications.

---

## 📋 Table of Contents
1. [Vue's Reactive Animation Pipeline](#1-vues-reactive-animation-pipeline)
2. [Conditional class bindings (`:class`)](#2-conditional-class-bindings-class)
3. [The Custom `useAnimation` Composable](#3-the-custom-useanimation-composable)
4. [Orchestrating with Vue `<Transition>`](#4-orchestrating-with-vue-transition)
5. [Nuxt SSR Hydration Safety](#5-nuxt-ssr-hydration-safety)

---

## 1. Vue's Reactive Animation Pipeline

Vue 3 leverages a reactive model using proxies (`ref` and `reactive`). When you update state, Vue recalculates the virtual DOM and updates class bindings automatically.

This guide covers three primary integration patterns:
1. **Dynamic Class Bindings**: Toggling class name strings in templates based on component state.
2. **Custom Composables**: Creating reusable logic that manages element references and reflow triggers.
3. **Built-in Transition Components**: Utilizing Vue's `<Transition>` component to manage enter and leave hooks using EaseMotion transitions.

---

## 2. Conditional Class Bindings (`:class`)

The most common approach is conditional class bindings. The presence of the animation class is determined by the truthiness of a reactive state variable:

```html
<template>
  <div class="card-container">
    <button @click="isVisible = !isVisible">Toggle state</button>
    
    <!-- Conditionally applies the ease-slide-in animation class -->
    <div :class="['vue-card', isVisible ? 'ease-slide-in' : '']">
      <h3>Reactive Card Component</h3>
      <p>This card animates when isVisible changes.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isVisible = ref(true);
</script>
```

---

## 3. The Custom `useAnimation` Composable

For animations triggered on user events (like form submissions or notification dismissals), you need a reusable pattern to trigger CSS animations.

This composable returns a template reference object and a trigger method to manage CSS reflows:

### 1. Composable Definition (`composables/useAnimation.js`)
```javascript
import { ref } from 'vue';

export function useAnimation(className) {
  const elementRef = ref(null);

  const trigger = () => {
    if (elementRef.value) {
      // Remove class, trigger reflow, and re-add class
      elementRef.value.classList.remove(className);
      void elementRef.value.offsetWidth; // forces reflow
      elementRef.value.classList.add(className);
    }
  };

  return { elementRef, trigger };
}
```

### 2. Component Usage
```html
<template>
  <!-- Bind ref element target -->
  <div ref="cardRef" class="vue-card">
    <h3>Dynamic Composable Component</h3>
    <button @click="triggerAnimation">Trigger Composable Animation</button>
  </div>
</template>

<script setup>
import { useAnimation } from './composables/useAnimation';

const { elementRef: cardRef, trigger: triggerAnimation } = useAnimation('ease-zoom-in');
</script>
```

---

## 4. Orchestrating with Vue `<Transition>`

Vue's built-in `<Transition>` component handles the mounting and unmounting of elements by applying transition classes automatically at key points in their lifecycle.

### Vue Transition Class Names
* `v-enter-from`: Initial state before the element is inserted.
* `v-enter-active`: Applied during the entire entering phase. Binds transition parameters.
* `v-enter-to`: End state of the entering phase.
* `v-leave-from`: Initial state before the element leaves.
* `v-leave-active`: Applied during the entire leaving phase. Binds transition parameters.
* `v-leave-to`: End state of the leaving phase.

### Implementation Example
```html
<template>
  <button @click="show = !show">Toggle Card</button>
  
  <Transition name="ease-fade">
    <div v-if="show" class="vue-card">
      <h3>Transition Element</h3>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<style>
/* Transition styling classes */
.ease-fade-enter-active,
.ease-fade-leave-active {
  transition: opacity 0.5s ease;
}

.ease-fade-enter-from,
.ease-fade-leave-to {
  opacity: 0;
}
</style>
```

---

## 5. Nuxt SSR Hydration Safety

In Nuxt universal rendering, pages pre-render on the server. If your animation classes run client-specific logic (like window size queries), they can cause hydration errors when the client-side markup mismatches the server-rendered HTML.

### Solutions for Nuxt SSR

1. **ClientOnly Wrapper Component**:
   Wrap client-only animations inside the `<ClientOnly>` component:
   ```html
   <ClientOnly>
     <div class="vue-card ease-slide-in">
       <p>Client-only animation card.</p>
     </div>
   </ClientOnly>
   ```

2. **onMounted Hook**:
   Apply client-only properties inside the `onMounted` hook:
   ```javascript
   import { ref, onMounted } from 'vue';
   const isMounted = ref(false);
   
   onMounted(() => {
     isMounted.value = true;
   });
   ```
