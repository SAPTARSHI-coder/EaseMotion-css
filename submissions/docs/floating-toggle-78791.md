# Floating Toggle

## Overview

Issue #78791 documents the usage of the Floating Toggle component.

## Basic usage

A floating toggle can be represented with a native checkbox and a label. Keeping the native control in the markup preserves keyboard and assistive technology behavior.

```html
<label class="floating-toggle">
  <input type="checkbox">
  <span class="floating-toggle__track" aria-hidden="true"></span>
  <span class="floating-toggle__label">Notifications</span>
</label>
```

## Interaction

Use the checked state to change the visual position of the thumb and the surface treatment. The label should remain clickable so the full control is easy to operate on touch screens.

## Accessibility

Do not remove the native checkbox semantics. Provide a visible label and ensure the focus state remains clear against the floating surface.

## Responsive behavior

The component can sit inside a fixed action area or a fluid toolbar. Keep the touch target comfortably sized when the viewport becomes narrow.

## Customization

Adjust the floating shadow, track radius, active surface, and transition duration to match the visual language of the parent interface.

## Issue

EaseMotion CSS issue #78791.
