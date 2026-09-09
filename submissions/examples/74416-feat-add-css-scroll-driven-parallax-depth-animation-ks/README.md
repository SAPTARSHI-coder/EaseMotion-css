# CSS Scroll-Driven Parallax Depth Animation

A modern, pure-CSS scroll-driven parallax experience that creates a layered
sense of depth as the user moves through the page.

## Issue

- Issue: #74416
- Component: CSS Scroll-Driven Parallax Depth Animation
- Category: Advanced CSS Animation
- Implementation: HTML + CSS
- JavaScript: None
- Dependencies: None

## Overview

This component demonstrates how modern CSS Scroll-Driven Animations can be
used to create a realistic depth effect without JavaScript.

The experience presents a layered landscape where visual elements move at
different speeds according to the user's scroll position.

The different movement speeds create the perception that some elements are
farther away while others are closer to the viewer.

The component focuses on demonstrating modern CSS animation capabilities
while maintaining a polished and responsive visual design.

## Core Concept

The scene is divided into three primary depth layers:

1. Background
2. Middle Ground
3. Foreground

Each layer has an independent scroll-driven animation.

The background moves slowly.

The middle ground moves at a moderate speed.

The foreground moves faster.

This difference in movement creates the visual parallax effect.

## Background Layer

The background layer represents distant elements in the scene.

It contains:

- Sky
- Stars
- Sun
- Clouds
- Distant mountains

The background uses slower movement to create the impression of distance.

The sky gradually shifts vertically as the page is scrolled.

The sun changes position, scale, and opacity during the scroll.

The stars move subtly to enhance the sense of depth.

The distant mountains also move at a slower rate than the foreground.

## Middle-Ground Layer

The middle-ground layer provides the visual transition between the distant
background and the nearby foreground.

It contains:

- Atmospheric mist
- Forest elements
- Middle-distance landscape details

The middle-ground layer moves faster than the background.

It moves slower than the foreground.

This creates a clear visual separation between the three depth levels.

## Foreground Layer

The foreground represents elements closest to the viewer.

It contains:

- Foreground terrain
- Large rocks
- Grass elements
- Hill shapes

The foreground moves more quickly during scrolling.

The increased movement speed makes these elements appear closer to the viewer.

## Parallax Speed Model

The visual depth relationship is represented by three movement speeds.

```text
Background      → 0.35×
Middle Ground   → 0.70×
Foreground      → 1.00×