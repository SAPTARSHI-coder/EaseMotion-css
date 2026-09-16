# Enhanced KPI Stat Cards

## Description
Upgrades the previous full-width, plain stat blocks into a modern, responsive grid-based KPI card system. Designed to improve dashboard interfaces with trend indicators, modern icon slots, and subtle interactive hover-lift animations.

## Features
- **Responsive Grid**: Automatically reflows columns based on screen real estate.
- **Micro-interactions**: Hardware-accelerated smooth hover lift (`translateY`) to feel interactive and alive.
- **KPI-focused layout**: Clean metric display combined with top-right icons and trend badges.

## Usage
Simply drop the following structure into your dashboard grid container:
```html
<div class="ease-kpi-card">
    <div class="kpi-header">
        <span class="kpi-title">Metric Name</span>
        <div class="kpi-icon-wrapper">🚀</div>
    </div>
    <div class="kpi-body">
        <h3 class="kpi-value">0</h3>
        <span class="kpi-trend positive">Trend indicator here</span>
    </div>
</div>