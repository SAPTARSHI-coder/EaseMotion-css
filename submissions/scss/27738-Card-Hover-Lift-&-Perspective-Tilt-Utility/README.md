# Card Hover Lift & Perspective Tilt Utility

A high-performance, customizable Sass mixin that applies a modern 3D perspective tilt, vertical lift, and shadow deepening effect to elements (like cards) upon hover.

---

## Features

* **3D Perspective:** Utilizes CSS 3D transforms to create a realistic spatial tilt on the X and Y axes.
* **Hardware Accelerated:** Uses `will-change` and layer-promoting properties (`transform`, `box-shadow`) to ensure buttery-smooth 60fps animations without triggering layout repaints.
* **Highly Customizable:** Fully parameterized defaults allow you to easily tweak the lift distance, rotation intensity, animation speed, and shadow depth.

---

## Parameters

| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `$lift-amount` | Length | `10px` | How far the card moves upward on hover (`translateY`). |
| `$rotate-x` | Angle | `6deg` | The rotation angle around the X-axis (tilts backward/forward). |
| `$rotate-y` | Angle | `-6deg` | The rotation angle around the Y-axis (tilts left/right). |
| `$perspective` | Length | `1000px` | Defines the 3D space depth. Lower numbers create a more intense, dramatic 3D tilt. |
| `$transition-duration`| Time | `0.35s` | The speed of the transition using a smooth `cubic-bezier` curve. |
| `$base-shadow` | List | *(Light multi-layered shadow)* | The initial box-shadow of the card at rest. |
| `$hover-shadow` | List | *(Deep multi-layered shadow)* | The expanded box-shadow applied on hover to simulate height. |

---

## Usage

### 1. Using the Global Utility Class
Simply apply the pre-generated utility class directly to your HTML element:

```html
<div class="card u-card-hover-tilt">
  </div>

### 2. Including the Mixin with Custom Values
You can @include the mixin inside any custom class or component selector to override the defaults for a specific use case:

@import "card-hover-lift-perspective-tilt-utility";

.article-card {
  // Apply custom values for a subtler, faster effect
  @include card-hover-tilt(
    $lift-amount: 6px,
    $rotate-x: 4deg,
    $rotate-y: -4deg,
    $transition-duration: 0.2s
  );
  
  // Additional card styling
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
}