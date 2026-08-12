# Fractal Breadcrumb

A visually expressive breadcrumb navigation component that represents nested navigation as a growing branching path.

Instead of displaying a conventional:

Home → Products → Category → Item

breadcrumb, Fractal Breadcrumb treats each navigation level as a node in a small visual hierarchy.

## Features

- Branching breadcrumb visual
- Current-location highlighting
- Hover-based node interaction
- Lightweight CSS animations
- Responsive mobile layout
- Dependency-free implementation
- Semantic breadcrumb navigation
- Works with arbitrary navigation depth
- Dark interface friendly

## Why?

Traditional breadcrumbs are useful, but visually repetitive.

Most breadcrumb implementations rely on simple separators such as:

`/`
`>`
`→`

Fractal Breadcrumb explores a different visual metaphor:

navigation as a growing tree.

Each visited level becomes another node in the structure.

## Structure

```text
Home
 └── Products
      └── Electronics
           └── Audio
                └── Headphones