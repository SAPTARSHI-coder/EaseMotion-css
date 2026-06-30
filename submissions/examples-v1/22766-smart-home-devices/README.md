# Issue #22766 - Advanced: E-commerce - Smart Home Devices

## Overview

This submission adds a premium responsive smart home devices landing page at `submissions/examples/22766-smart-home-devices/`.

It is built with:

- Semantic HTML
- Scoped local CSS
- Existing EaseMotion CSS utility, card, badge, button, navbar, form, and animation classes
- Inline SVG and CSS-generated illustrations only

## Files

The folder contains exactly these three files:

- `demo.html`
- `style.css`
- `README.md`

## Features

- Futuristic but restrained smart home storefront aesthetic with soft whites, slate tones, navy depth, electric blue accents, and mint highlights
- Premium hero section with a fully inline SVG smart home interior illustration
- Products by room section for Bedroom, Kitchen, and Living Room
- Featured product cards for Smart Hub, Smart Bulb, Indoor Camera, Video Doorbell, Smart Lock, and Smart Plug
- Compatibility badge row for Alexa, Google Home, Apple HomeKit, Matter, Wi-Fi, and Bluetooth
- Four-step "How It Works" timeline: Connect, Configure, Automate, Enjoy
- Customer review cards with inline SVG avatars
- Bundle pricing cards for Starter Kit, Family Pack, and Ultimate Smart Home
- Newsletter signup section with accessible form controls
- Responsive layout tuned for desktop, tablet, and mobile

## EaseMotion Classes Used

- `ease-navbar-glass`
- `ease-navbar-glass-blur`
- `ease-fade-in`
- `ease-slide-down`
- `ease-slide-up`
- `ease-slide-in-from-right`
- `ease-float`
- `ease-hover-underline`
- `ease-hover-glow`
- `ease-card`
- `ease-card-hover`
- `ease-card-shadow`
- `ease-card-glass`
- `ease-card-glow`
- `ease-btn`
- `ease-btn-primary`
- `ease-btn-outline`
- `ease-btn-ghost`
- `ease-btn-hover`
- `ease-btn-lg`
- `ease-btn-sm`
- `ease-btn-pill`
- `ease-badge`
- `ease-badge-lg`
- `ease-badge-pulse`
- `ease-field`
- `ease-field-label`
- `ease-input`
- `ease-input-lg`

## Responsive Support

- Desktop: two-column hero, multi-column product and bundle grids
- Tablet: balanced two-column content grids with stacked newsletter layout
- Mobile: single-column flow, stacked navigation actions, and full-width CTAs

## Accessibility

- Semantic sectioning with `header`, `main`, `section`, `nav`, and `footer`
- Proper heading hierarchy
- Keyboard-focusable navigation and call-to-action controls
- Skip link for keyboard users
- High-contrast text and button states
- Labeled email input for the newsletter section
- Accessible SVG hero with `title` and `desc`

## Browser Compatibility

- Chrome
- Edge
- Firefox
- Safari

The page includes graceful fallback styling if glass blur effects are reduced by browser support or user motion preferences.

## No External Dependencies

- No JavaScript
- No frameworks
- No build tools
- No external images
- No external SVG files
- No icon libraries

## How To Open

Open `demo.html` directly in a browser from this folder. It links to the repository root `easemotion.css` file using a relative path, so no server or build step is required.
