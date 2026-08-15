# CSS Subgrid Layout Architecture Guide

## Overview

This submission demonstrates how CSS Grid Level 2 `subgrid` can be used
to create consistent layouts where nested components inherit the track
structure of their parent grid.

The example focuses on reusable card layouts with different amounts of
text while keeping headings, content and actions consistently aligned.

## What is CSS Subgrid?

CSS Subgrid allows a nested grid to participate in the grid tracks of
its parent grid.

Instead of defining independent row sizes for every component, a child
can inherit the parent's tracks:

```css
.card {
  display: grid;
  grid-template-rows: subgrid;
}