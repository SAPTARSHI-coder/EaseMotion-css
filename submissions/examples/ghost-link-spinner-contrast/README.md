# Spinner Contrast Fix on Ghost & Link Buttons

An interactive repair patch targeting the inner loading spinner components nested inside secondary button actions (`.ease-btn-ghost`, `.ease-btn-link`). This ensures complete contrast compliance during async processing cycles.

## Bug Resolution Analysis

- **The Problem:** The loading spinner asset previously carried hardcoded semi-transparent border color definitions built for solid primary color surfaces. When embedded within white or transparent background elements, the spinner lacked sufficient contrast against the layout background, violating WCAG 2.1 AA contrast thresholds.
- **The Solution:** Modifies `.ease-spinner` border channels to leverage CSS `currentColor`. This causes the spinner tracking lines to dynamically inherit the precise color of the active parent element text across all structural interactions (default state values, hover elevations, and muted disabled paths).

## Usage Layout Structure
```html

<button class="ease-btn ease-btn-ghost">
  <span class="ease-spinner"></span>
  Loading Data
</button>
```

Closes #13260
