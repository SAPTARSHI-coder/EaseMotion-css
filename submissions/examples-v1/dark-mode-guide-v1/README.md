# Dark Mode Implementation Guide

## Overview

This guide shows how to implement dark mode
using EaseMotion's CSS variable system.

## Method 1 — Automatic

Uses system dark mode preference automatically.

css
@media (prefers-color-scheme: dark) {
:root {
--ease-bg: #121212;
--ease-text: #ffffff;
}
}

## Method 2 — Manual Toggle

Uses a button to switch dark mode on and off.

css
[data-theme="dark"] {
--ease-bg: #121212;
--ease-text: #ffffff;
}

## Variables Reference

| Variable       | Light   | Dark    |
| -------------- | ------- | ------- |
| --ease-bg      | #ffffff | #121212 |
| --ease-text    | #111111 | #ffffff |
| --ease-primary | #6200ee | #bb86fc |
| --ease-surface | #f5f5f5 | #1e1e1e |

## How to Use

1. Add the CSS variables to your :root
2. Use @media for automatic dark mode
3. Use data-theme attribute for manual toggle
