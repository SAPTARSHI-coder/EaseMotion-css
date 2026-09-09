# Vue.js Integration Guide for EaseMotion CSS

A comprehensive guide covering all essential patterns for using EaseMotion CSS in Vue 3 and Nuxt.js projects — from static class usage to dynamic binding, Vue transitions, and scroll-triggered animations.

## Contents
- **Installation:** CDN and npm setup for Vue / Vite / Nuxt
- **Static classes:** using ease-fade-in directly in templates
- **Dynamic binding:** reactive classes with :class
- **Vue <Transition>:** combining EaseMotion with enter/leave hooks
- **Nuxt.js:** importing the CSS globally in 
uxt.config.ts
- **IntersectionObserver:** scroll‑triggered animation via a Vue composable

## EaseMotion classes used in the demo
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-p-6, ease-py-12, ease-max-w-3xl
- **Background:** ease-bg-gray-50, ease-bg-white
- **Typography:** ease-text-4xl, ease-font-bold, ease-text-lg, ease-text-gray-500, ease-text-2xl, ease-font-semibold, ease-text-gray-600, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-10, ease-mt-2, ease-mt-12, ease-p-6
- **Components:** ease-card
- **Animation:** ease-fade-in, ease-delay-500

## How to use
1. Open demo.html in a browser to see the full guide with code examples.
2. Copy the relevant snippets into your Vue project.
3. Ensure EaseMotion CSS is loaded before any custom styles.
