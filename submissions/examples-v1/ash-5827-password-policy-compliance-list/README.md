# Password Policy Compliance List

Issue: #ISSUE_NUMBER

Built for EaseMotion CSS.

## Overview

A responsive password policy compliance component that displays password requirements with clear accessibility-friendly status indicators. It categorizes requirements as **Met**, **Missing**, **Recommended**, or **Blocked**, making it suitable for security settings, authentication flows, identity management systems, and enterprise administration dashboards.

## Features

- Accessible compliance checklist
- Met, Missing, Recommended, and Blocked states
- Color-coded status badges with text cues
- Summary statistics
- Responsive layout
- Glassmorphism styling
- Pure HTML and CSS
- No JavaScript required

## Usage

```html
<div class="policy met">
  <div class="icon">✓</div>

  <div class="content">
    <h3>Minimum 12 Characters</h3>
  </div>

  <span class="badge success"> Met </span>
</div>
```

## Main Classes

```css
.policy
.met
.missing
.recommended
.blocked
.icon
.content
.badge
.summary
.stat
```

## Files

- demo.html
- style.css
- README.md
