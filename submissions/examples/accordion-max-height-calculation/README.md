# Accordion Max-Height Calculation Example

A lightweight, accessible accordion implementation using vanilla JavaScript to dynamic compute element `scrollHeight` for CSS transitions.

## 🚀 Overview

Standard CSS cannot smoothly animate `height: auto`. Common workarounds (such as setting `max-height: 1000px`) result in jerky or delayed animations when the content height doesn't match the hardcoded ceiling.

This approach solves the issue by:
1. Reading the exact pixel height (`element.scrollHeight`) on trigger.
2. Dynamically assigning `max-height` in inline styles.
3. Allowing pure CSS hardware-accelerated transitions to handle the frame rendering.

## 📁 File Structure
