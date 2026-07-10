# Image Component - Fixed Version

## Overview
This component adds proper alt text for flag images with fade-in animation.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | Required | Image source URL |
| alt | string | 'Flag image' | Alt text for accessibility |
| className | string | '' | Additional CSS classes |

## Usage

```jsx
import ImageFixed from './Image-Fixed';

<ImageFixed 
  src="/flags/us.png" 
  alt="United States flag" 
/>
