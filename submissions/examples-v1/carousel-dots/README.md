# Animated Carousel Indicator Dots — EaseMotion CSS

Fluid, highly dynamic pagination tracker indicator chains. Features smooth morphological scaling mechanics alongside active linear timers.

## 🛠 Features & Active Selectors

| Selectors             | Variant Family        | Operational Behavior                                                                   |
| --------------------- | --------------------- | -------------------------------------------------------------------------------------- |
| `.ease-carousel-dots` | Unordered Base Track  | Sets inline flex constraints, accessibility mappings, and layout spacing.              |
| `.ease-carousel-dot`  | Interactive Core Node | Native responsive button providing keyboard focus loops and smooth scaling properties. |
| `.ease-dots-morph`    | Visual Modifier       | Morphically shifts active circle configurations into wider pill vectors.               |
| `.ease-dots-progress` | Visual Modifier       | Deploys an inner pseudoelement linear filling clip tracking slide duration cycles.     |

## 📦 Basic Integration Mapping

```html
<div class="ease-carousel-dots ease-dots-morph" role="tablist">
  <button
    class="ease-carousel-dot is-active"
    role="tab"
    aria-selected="true"
  ></button>
  <button class="ease-carousel-dot" role="tab" aria-selected="false"></button>
</div>
```
