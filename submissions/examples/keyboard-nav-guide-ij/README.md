# Keyboard Navigation Testing Guide

1. What does this do? A practical interactive demo showing how to test tabs, dropdowns, and modals with keyboard-only navigation — covering tab order, focus trapping, Escape key handling, and arrow key navigation.

2. How is it used? Open `demo.html` and navigate with Tab, Enter/Space, Escape, and Arrow keys:
   - **Tabs**: Arrow Left/Right to switch, Enter to activate
   - **Dropdown**: Enter to open, Escape to close, Tab to move between items
   - **Modal**: Enter to open, Escape to close, Tab cycles within modal (focus trap)
   - Focus-visible outlines show the current focus position

3. Why is it useful? Provides a clear, reproducible testing guide for contributors to verify keyboard accessibility on interactive EaseMotion components before submitting PRs.
