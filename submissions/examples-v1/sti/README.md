# EaseMotion — Safe Animation Chaining (Double-Animation-Fix)

A robust CSS architecture enhancement for the EaseMotion framework that allows developers to seamlessly chain multiple animation utility classes on a single element without conflict. 

## 🛑 The Problem

In standard utility-first CSS frameworks, chaining animations often fails due to CSS specificity and property overriding. If an element has both `.ease-fade-in` (which defines an animation) and `.ease-slide-up` (which also defines an animation), the last class declared in the stylesheet "wins." The element will either only fade or only slide, but rarely both.

## 💡 The Solution: CSS Variable Composition Engine

This submission introduces a **Variable Composition Engine**. Instead of writing separate `@keyframes` for every single animation type, we use a single, universal, hardware-accelerated keyframe. 

The utility classes (`.ease-fade-in`, `.ease-slide-up`, `.ease-zoom-in`) no longer define animations directly. Instead, they update underlying CSS Custom Properties (Variables) that feed into the universal keyframe. This allows transformations and opacities to stack mathematically without breaking.

## 🚀 Features

* **Infinite Chaining:** Combine fades, slides, zooms, and spins safely on a single DOM node.
* **Universal Hardware Keyframe:** Uses `translate3d` and `will-change` to guarantee GPU acceleration for all combined animations.
* **Modular Timing:** Independent utility classes for adjusting duration and delays (`.ease-fast`, `.ease-delay-100`) without writing custom CSS.
* **Zero JavaScript:** Pure CSS implementation.

## 🛠️ Usage

To use the new engine, simply apply the base trigger class `.ease-animate` to your element, and then chain as many modifier utilities as you need.

```html
<div class="ease-animate ease-fade-in ease-slide-up ease-zoom-in">
  I will animate all three properties at once!
</div>

<div class="ease-animate ease-spin-in ease-slide-left ease-fast">
  I spin and slide quickly!
</div>
