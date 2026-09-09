# Animation Preset System

## Overview

This submission introduces a reusable animation preset system for common
animation patterns.

Developers can select a predefined animation preset and customize its
duration and easing without manually configuring every animation.

## Available Presets

- Fade In
- Slide Up
- Zoom In
- Bounce
- Rotate

## Features

- Predefined animation presets
- Reusable preset classes
- Duration customization
- Easing customization
- Multiple elements can use the same preset
- Invalid preset values are safely ignored by the preset mapping

## Usage

Apply a preset class to an element:

```html
<div class="ease-preset-fade">
  Content
</div>