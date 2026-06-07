Bug Fix #2084

Fixes CSS custom property inconsistency in EaseMotion CSS framework.

Changes:
- core/variables.css: removed duplicate --ease-glass-bg declarations
- components/cards.css: fixed .ease-card fallback to #ffffff light default
- components/navbar.css: replaced hardcoded rgba() with var(--ease-glass-bg) tokens

Usage: use ease-card and ease-navbar-glass classes as normal.

Issue: #2084
Labels: type:bug level:beginner GSSoC-26
