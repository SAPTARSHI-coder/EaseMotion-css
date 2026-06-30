# Queue Backlog Aging Bands

Issue: #ISSUE_NUMBER

Built for EaseMotion CSS.

## Overview

A responsive backlog aging dashboard that visualizes pending work items across aging buckets using animated progress bars. Suitable for support dashboards, ticket management systems, processing queues, operations centers, and workflow monitoring applications.

## Features

- Aging band progress bars
- Color-coded backlog buckets
- Queue summary statistics
- Responsive layout
- Glassmorphism styling
- Pure HTML and CSS
- No JavaScript required

## Usage

```html
<div class="band">
  <div class="label">
    <span>0–2 Days</span>

    <strong>54</strong>
  </div>

  <div class="bar">
    <div class="fill fresh"></div>
  </div>
</div>
```

## Main Classes

```css
.band
.label
.bar
.fill
.fresh
.warning
.attention
.critical
.summary
.stat
```

## Files

- demo.html
- style.css
- README.md
