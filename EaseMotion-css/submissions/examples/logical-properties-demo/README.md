# Logical Properties Demo

## What
Shows CSS logical properties for building layouts that automatically flip between LTR and RTL. A header with navigation, a button, and cards all use logical property values instead of physical ones.

## How
The page uses properties like `margin-inline`, `padding-block`, `border-inline-start`, and `text-align: start` / `end`. JavaScript toggles `dir="rtl"` on the `<html>` element, and all spacing, borders, and alignment flip automatically without touching the stylesheet.

## Why
Logical properties are essential for internationalization. They eliminate the need for separate LTR and RTL stylesheets or complex overrides, making layouts truly direction-agnostic with a single codebase.
