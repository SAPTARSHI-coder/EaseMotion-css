# Hover Shimmer Sweep Utility (`.ease-btn-shimmer`)

An animation-first, highly responsive design utility that introduces a fluid, metallic glare effect sweeping diagonally across buttons on hover. 

Built specifically for **EaseMotion CSS**, this utility relies on zero dependencies, zero JavaScript, and uses advanced CSS blending modes to seamlessly match any underlying background context (primary, success, or custom theme variants).

---

## ✨ Features

- **Context-Aware Blending:** Uses `mix-blend-mode: overlay` to dynamically tint the shimmer light streak based on the button's background color.
- **Cinematic Easing:** Utilizes a custom `cubic-bezier` timing function ($cubic-bezier(0.25, 1, 0.5, 1)$) rather than a linear transition for a snappy, premium acceleration feel.
- **Composable Architecture:** Fully stackable. Can be combined with core EaseMotion utility modifiers such as sizes, shape utilities (`ease-btn-pill`), and baseline component states.
- **Hardware Accelerated:** Built with isolated stacking contexts to guarantee silky-smooth 60fps translation across all modern evergreen browsers.

---

## 🚀 How To Use

Simply append the utility class `ease-btn-shimmer` directly onto your standard button elements:

```html
<button class="ease-btn ease-btn-primary ease-btn-shimmer">
  Launch Console
</button>

<button class="ease-btn ease-btn-success ease-btn-pill ease-btn-shimmer">
  Upgrade to Pro ✨
</button>