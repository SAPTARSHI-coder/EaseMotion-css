# SCSS Utility: Neumorphic Soft Shadow Elevation Mixin

A reusable SCSS utility that generates soft neumorphic shadow effects using a simple mixin.

---

## Features

- Flat shadow preset
- Pressed (inset) shadow preset
- Raised shadow preset
- Reusable SCSS mixin
- Utility classes included
- Lightweight and easy to customize

---

## Usage

```scss
.card {
  @include neumorphic-shadow(raised);
}
```

```scss
.panel {
  @include neumorphic-shadow(pressed, #edf1f5);
}
```

---

## Utility Classes

```scss
.neu-flat
.neu-pressed
.neu-raised
```

---

## Compilation Result

The mixin generates the appropriate background color along with dual light and dark box-shadow values based on the selected elevation level.