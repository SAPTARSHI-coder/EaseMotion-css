# Neumorphic Breadcrumb

A breadcrumb navigation component for EaseMotion CSS with a clean neumorphic visual style.

## Overview

The Breadcrumb component helps users understand their current location within a website or application by displaying the navigation path.

It provides a simple, accessible, and reusable navigation structure for hierarchical content.

## Usage

Use the breadcrumb component to show the user's current location in a hierarchical navigation structure.

### Basic HTML

```html
<nav aria-label="Breadcrumb">
  <ol class="ease-breadcrumb-list">

    <li class="ease-breadcrumb-item">
      <a class="ease-breadcrumb-link" href="#">
        Home
      </a>

      <span
        class="ease-breadcrumb-separator"
        aria-hidden="true"
      >/</span>
    </li>

    <li class="ease-breadcrumb-item">
      <a class="ease-breadcrumb-link" href="#">
        Documentation
      </a>

      <span
        class="ease-breadcrumb-separator"
        aria-hidden="true"
      >/</span>
    </li>

    <li class="ease-breadcrumb-item">
      <span
        class="ease-breadcrumb-active"
        aria-current="page"
      >
        Breadcrumb
      </span>
    </li>

  </ol>
</nav>

## CSS Classes

| Class                         | Description                          |
|-------------------------------|--------------------------------------|
| `.ease-breadcrumb`            | Base breadcrumb styling              |
| `.ease-breadcrumb-list`      | Creates the breadcrumb layout       |
| `.ease-breadcrumb-item`      | Styles individual breadcrumb items  |
| `.ease-breadcrumb-link`      | Styles clickable breadcrumb links   |
| `.ease-breadcrumb-separator` | Styles breadcrumb separators        |
| `.ease-breadcrumb-active`    | Styles the current page             |
| `.ease-breadcrumb-sm`        | Small breadcrumb variant             |
| `.ease-breadcrumb-lg`        | Large breadcrumb variant             |

Variants
Small

Use .ease-breadcrumb-sm for a compact breadcrumb.

<ol class="ease-breadcrumb-list ease-breadcrumb-sm">
  <li class="ease-breadcrumb-item">
    <a class="ease-breadcrumb-link" href="#">Home</a>
    <span class="ease-breadcrumb-separator" aria-hidden="true">/</span>
  </li>

  <li class="ease-breadcrumb-item">
    <span class="ease-breadcrumb-active" aria-current="page">
      Breadcrumb
    </span>
  </li>
</ol>
Large

Use .ease-breadcrumb-lg for a larger breadcrumb.

<ol class="ease-breadcrumb-list ease-breadcrumb-lg">
  <li class="ease-breadcrumb-item">
    <a class="ease-breadcrumb-link" href="#">Home</a>
    <span class="ease-breadcrumb-separator" aria-hidden="true">/</span>
  </li>

  <li class="ease-breadcrumb-item">
    <span class="ease-breadcrumb-active" aria-current="page">
      Breadcrumb
    </span>
  </li>
</ol>
Accessibility
Use <nav aria-label="Breadcrumb"> for breadcrumb navigation.
Use <ol> to represent the navigation hierarchy.
Use aria-current="page" for the current page.
Use aria-hidden="true" for decorative separators.
Demo

See demo.html for usage examples.

Related Files
demo.html — Usage examples
style.css — Demo styles