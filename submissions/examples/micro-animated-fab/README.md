# Micro-Animated Floating Action Button (FAB)

## Overview
This submission provides a sleek, modern **Micro-Animated Floating Action Button (FAB)** component anchored to the bottom-right corner of the interface. Upon hovering or interacting with the primary action trigger, it smoothly expands into a vertical stack of sub-actions using fluid cubic-bezier easing and hardware-accelerated transforms.

## Usage
Add the following HTML structure to your project, accompanied by the corresponding CSS rules:

```html
<div class="fab-container">
    <div class="fab-menu">
        <button class="fab-action-btn">Share</button>
        <button class="fab-action-btn">Edit</button>
        <button class="fab-action-btn">Add</button>
    </div>
    <button class="fab-main-btn">+</button>
</div>
```

## Why it fits EaseMotion CSS
Animation-First: Integrates smooth physical spring-like transitions and scale-rotation effects natively into user interactions.
Zero Dependencies: Pure, lightweight HTML and CSS architecture requiring no external JavaScript libraries or complex build setups.
Composability: Can be seamlessly placed over any dashboard or layout without causing specificity or style leakage issues.