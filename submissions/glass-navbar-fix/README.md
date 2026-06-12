# Sandbox Bug Fix: Navbar Link Accessibility Contrast Patch

## Overview

This directory houses a localized accessibility fix for the glassmorphic navigation bar component to patch a high-severity WCAG 2.1 contrast violation.

## 📁 Sandbox Configuration Files

- `demo.html` — Dual-context validation panel displaying text luminance compliance across light and dark canvas bounds.
- `style.css` — Scoped class modifiers dropping absolute color assignments in favor of framework design tokens.

## 🐛 The Bug Resolved

Previously, menu item links (`.ease-navbar-item`) were hardcoded to an absolute dark charcoal hex token (`rgba(15, 23, 42, 0.92)`). When rendered over dark dashboard canvas layers, text elements became completely invisible, collapsing contrast ratios to a failing $1.1:1$.

## 🛠️ The Solution

The rigid layout properties were dropped. The link element states are updated to run on `var(--ease-color-muted)` and transition smoothly to `var(--ease-color-text)` on hover. This scales color rendering parameters adaptively based on the theme variables, restoring an accessible $4.5:1+$ text contrast threshold.
