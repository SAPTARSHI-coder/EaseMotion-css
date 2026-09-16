# CSS-only Badge Documentation

Documentation showcase demonstrating how to use the existing EaseMotion CSS-only Badge component.

## What does this document?

This documentation demonstrates the usage of the `ease-badge` component, including its semantic variants, available sizes, and pulse modifier.

## Basic Usage

Use the base `ease-badge` class for a simple badge:

    <span class="ease-badge">Default</span>

## Variants

Semantic variants can be added to communicate different states:

    <span class="ease-badge ease-badge-info">Info</span>
    <span class="ease-badge ease-badge-success">Success</span>
    <span class="ease-badge ease-badge-warning">Warning</span>
    <span class="ease-badge ease-badge-danger">Danger</span>

## Sizes

The Badge component provides small and large size modifiers:

    <span class="ease-badge ease-badge-sm">Small</span>
    <span class="ease-badge">Default</span>
    <span class="ease-badge ease-badge-lg">Large</span>

## Pulse Modifier

Use `ease-badge-pulse` when the badge needs an animated attention effect:

    <span class="ease-badge ease-badge-success ease-badge-pulse">
      Live
    </span>

## Combining Modifiers

Modifiers can be combined with the base badge class:

    <span class="ease-badge ease-badge-danger ease-badge-lg">
      Critical
    </span>

## Component Classes

- `ease-badge` — Base badge
- `ease-badge-info` — Informational variant
- `ease-badge-success` — Success variant
- `ease-badge-warning` — Warning variant
- `ease-badge-danger` — Danger variant
- `ease-badge-sm` — Small size
- `ease-badge-lg` — Large size
- `ease-badge-pulse` — Animated pulse effect

## Why is it useful?

Badges provide compact visual context for statuses, categories, labels, and notifications without requiring custom component code.

The EaseMotion Badge keeps this interaction lightweight and reusable through CSS classes that can be combined according to the needs of the interface.

## Accessibility

Use meaningful text inside badges and avoid relying on color alone to communicate important information. When a badge communicates a status, include descriptive text so the meaning remains understandable without visual color cues.