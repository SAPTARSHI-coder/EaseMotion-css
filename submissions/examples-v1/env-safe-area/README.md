# 09 — env(safe-area-inset) for Notched Devices

## Overview
Demonstrates `env(safe-area-inset-*)` variables to handle notched, rounded, and home-indicator areas on modern devices. Includes fixed header and footer with safe-area-aware padding, a simulated notch display, landscape vs portrait orientation handling, and live safe area value readout.

## How It Works
Custom properties capture each safe area inset with a fallback: `--safe-t: env(safe-area-inset-top, 0px)`. The fixed header adds `padding-top: var(--safe-t)` and the footer `padding-bottom: var(--safe-b)`. The main content area uses all four insets for padding. A CSS notch simulator and orientation-aware styling show how layouts adapt across device configurations.

## Usage
Open `demo.html` with `viewport-fit=cover` in the meta tag. On a non-notched device, safe area values read as 0px. On an iPhone X+ or similar device, the header and footer automatically avoid the notch and home indicator. Use Safari's Web Inspector with a simulated iPhone to see live values.
