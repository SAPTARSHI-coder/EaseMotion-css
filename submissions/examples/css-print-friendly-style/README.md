# CSS Print-Friendly Style

A pure CSS print optimization utility that improves page readability and layout when printing documents.

## Features

- Uses `@media print`
- Hides navigation, buttons, and non-essential UI
- Displays URLs for printed links
- Optimized typography for paper
- Prevents awkward page breaks
- Supports light and dark themes
- Fully responsive
- No JavaScript required

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Mark elements that should not appear in print:

```html
<div class="no-print">
  Navigation Menu
</div>
```

## How It Works

The component uses CSS `@media print` rules to:

- Remove unnecessary UI elements
- Improve readability
- Preserve important content
- Show destination URLs for links
- Optimize spacing and page margins

## Why It Fits EaseMotion CSS

This utility provides a reusable print-ready styling pattern that developers can apply to reports, documentation, invoices, dashboards, and article pages without requiring JavaScript or external dependencies.