# EaseMotion SCSS Motion Curves Partial (`ease-motion-curves-bundle-ik`)

A comprehensive Sass/SCSS partial providing canonical timing functions, responsive motion mixins, and component glow utilities for EaseMotion CSS.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. Description

This SCSS module exports reusable cubic-bezier variables and powerful `@include` mixins (`@include ease-transition`, `@include ease-animate`, and `@include ease-glow`) designed for seamless integration with SCSS pipelines.

All mixins automatically incorporate `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion)` accessibility standards.

---

## 2. Usage Examples

Import the partial into your project SCSS stylesheet:

```scss
@use 'ease-motion-curves-bundle-ik' as ease;

.card-component {
  background-color: #1e293b;
  border-radius: 12px;

  // Apply smooth spring hover transition
  @include ease.ease-transition(transform, 300ms, ease.$ease-spring-bounce);

  &:hover {
    transform: translateY(-6px);
    @include ease.ease-glow(rgba(56, 189, 248, 0.4), 24px);
  }
}

.modal-dialog {
  // Apply keyframe animation
  @include ease.ease-animate(ease-kf-fade-in, 400ms, ease.$ease-cubic-out);
}
```

---

## 3. Mixin Reference & Parameters

| Mixin | Parameters | Default Value | Description |
|-------|------------|---------------|-------------|
| `ease-transition` | `$properties, $duration, $easing, $delay` | `all, 300ms, $ease-cubic-default, 0ms` | Configures element transition properties with reduced-motion support. |
| `ease-animate` | `$name, $duration, $easing, $iterations, $fill` | `-, 500ms, $ease-cubic-out, 1, both` | Configures keyframe animation parameters with accessibility fallbacks. |
| `ease-glow` | `$color, $radius` | `rgba(56, 189, 248, 0.35), 20px` | Adds dynamic elevated box-shadow glow. |
