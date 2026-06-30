# CSS Specificity & Override Guide

This guide explains how to override EaseMotion CSS styles safely without relying on `!important`.

## Features

- CSS custom property override pattern
- Scoping and specificity best practices
- Common override mistakes and solutions

## Example

Global override:

```css
:root {
  --ease-duration: 2s;
}
```
