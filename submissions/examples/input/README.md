# Responsive Floating Input Field Component

A pure CSS responsive floating-label input field layout with custom breakpoint support, custom CSS property overrides, modifier states, and WCAG accessibility standards.

## Table of Contents
- [Overview](#overview)
- [HTML Markup Example](#html-markup-example)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Modifier Classes](#modifier-classes)
- [Custom CSS Property Overrides](#custom-css-property-overrides)
- [Keyboard Navigation & Accessibility](#keyboard-navigation--accessibility)

---

## Overview

The floating input component pattern uses pure CSS `:placeholder-shown` and `:focus` state triggers to transition field labels into a floating state above the input text without requiring JavaScript.

---

## HTML Markup Example

```html
<div class="floating-group">
  <input 
    type="text" 
    id="user-email" 
    class="floating-input" 
    placeholder=" " 
    required 
    aria-describedby="user-email-help"
  />
  <label for="user-email" class="floating-label">Email Address</label>
  <span id="user-email-help" class="floating-help">Enter your primary account email</span>
</div>
