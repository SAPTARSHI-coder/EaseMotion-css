# Multi-Layer Box Shadow Elevation Scale (SCSS Mixin)

## What does it do?
This SCSS mixin provides a reusable multi-layer box-shadow elevation system that helps create consistent depth, hierarchy, and modern UI effects across components.

It uses a numeric scale to apply different levels of elevation using layered shadows.

---

## How to use?

```scss
.card {
  @include elevation(3);
}