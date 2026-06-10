# Sandbox Component Showcase: Animated Dotted Ring Loader

## Overview

A canvas-based loading animation where scattered particles converge into a rotating circular ring before transitioning through a color transformation sequence. The effect combines particle motion, easing functions, continuous rotation, and subtle pulsing behavior to create a clean and modern loader animation.

## 📁 Sandbox Configuration Files

* `demo.html` — Self-contained particle ring animation rendered entirely using the HTML Canvas API.
* `style.css` — Scoped styling layer responsible for layout, canvas positioning, and presentation.

## 🚀 Key Animation Mechanics

### 1. Particle Convergence Sequence

The animation begins with dots distributed randomly across the viewport. Each particle smoothly travels toward a predefined position on a circular path, creating a satisfying assembly effect.

### 2. Circular Formation Mapping

Target positions are calculated using evenly distributed polar coordinates. This ensures all particles align into a balanced circular ring regardless of screen size.

### 3. Smooth Easing Transitions

Particle movement uses an ease-in-out interpolation curve, producing natural acceleration and deceleration during the formation phase.

### 4. Continuous Ring Rotation

After the ring is assembled, all particles rotate around the center point at a constant speed, transforming the static structure into a dynamic loading indicator.

### 5. Progressive Color Transformation

The dots initially appear in a neutral light tone before gradually transitioning to a vibrant accent color. This introduces an additional layer of motion without altering particle positions.

### 6. Subtle Breathing Effect

Following the color transition, particles gently pulse in size over time. This breathing motion helps maintain visual interest during extended loading states.

### 7. Responsive Canvas Rendering

The animation automatically recalculates particle positions and ring dimensions when the viewport changes size, ensuring consistent presentation across devices.

### 8. Lightweight Canvas Architecture

All rendering is performed directly on a single canvas element without external libraries, image assets, SVG files, or framework dependencies.

### 9. Sandbox-Isolated Implementation

The animation is fully self-contained within the sandbox directory and does not modify any EaseMotion CSS core functionality or shared components.

## 🎯 Use Cases

* Loading screens
* Application startup animations
* Dashboard placeholders
* Authentication screens
* Data processing indicators
* Splash screens
* Landing page motion accents
* Product onboarding flows

## ✨ Why It Fits EaseMotion CSS

This submission showcases motion-first design through a clear visual progression: chaos, organization, rotation, and transformation. The animation communicates state changes entirely through movement while remaining lightweight, readable, and easy to customize, aligning closely with EaseMotion CSS principles.
