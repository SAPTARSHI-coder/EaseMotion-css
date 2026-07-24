# CSS Slide-Up Popover

A pure CSS animated popover component featuring a smooth slide-up interaction transition, designed specifically for modern e-commerce checkout interfaces.

This component allows developers to create elegant contextual popovers for discounts, product information, checkout messages, and offers without using any JavaScript.

## ✨ Features

- Pure CSS implementation (Zero JavaScript)
- Smooth slide-up entrance animation
- Fully responsive design
- Keyboard accessible interaction
- Customizable animation parameters using CSS variables
- Modern e-commerce checkout aesthetic
- Lightweight and easy to integrate
- Supports reduced motion accessibility preferences

## 🎯 Motivation

Popovers are commonly used in modern checkout experiences to display important information such as:

- Discount offers
- Coupon details
- Product recommendations
- Payment-related messages

This component provides a reusable animation pattern for the EaseMotion library while maintaining performance and simplicity through CSS-only techniques.

## 🚀 Usage

Include the stylesheet in your HTML file:

html-
<button class="popover-trigger">
    View Offer
</button>

<div class="popover" role="dialog">
    <div class="popover-content">
        <h3>Special Discount</h3>
        <p>Get 20% off on your first order.</p>
    </div>
</div>

## Project Structure

slide-up-popover/
│
├── demo.html
├── style.css
└── README.md

Demo Interaction

The popover appears with a smooth slide-up animation when:

User hovers over the trigger button
User focuses the trigger button using the keyboard

No JavaScript is required.