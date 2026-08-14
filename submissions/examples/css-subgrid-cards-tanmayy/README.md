# CSS Subgrid Cards

A pure-CSS implementation of perfectly aligned card layouts using modern CSS `subgrid`. This component ensures that the headers, bodies, and footers of adjacent cards in a row will always perfectly align horizontally, regardless of how much varying text is contained within them.

## 📋 Mandatory Questions

### 1. What does this do?

This component solves one of the oldest web design layout problems: varying card content heights. Normally, if Card A has a 3-line title and Card B has a 1-line title, their body text and footer buttons become misaligned. By using CSS `subgrid`, the internal elements of each card are bound to the tracks of the *parent* container, forcing the row height to expand for all adjacent cards simultaneously. 

### 2. How is it used?

The implementation requires a specific relationship between the parent grid and the child card. 

The parent grid defines a repeating 3-row pattern (`auto 1fr auto`) that corresponds to the Header, Body, and Footer. 
The card uses `grid-row: span 3` to tell the parent it wants to occupy three rows. The card then applies `grid-template-rows: subgrid` to pass those three parent rows down into its own layout.

```css
/* 1. Parent Container */
.subgrid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: auto 1fr auto; /* Header, Body, Footer */
  gap: 24px;
}

/* 2. The Card */
.subgrid-card {
  grid-row: span 3; /* Occupy 3 rows of the parent */
  display: grid;
  grid-template-rows: subgrid; /* Inherit those 3 rows */
}
```

*Note: Because subgrid tracks ignore internal wrapper padding, the standard approach is to apply the padding directly to the internal `.card-header`, `.card-body`, and `.card-footer` elements.*

### 3. Why is it useful?

Historically, developers relied on JavaScript (e.g., `matchHeight.js`) to scan the DOM, find the tallest title, and explicitly set the heights of all other titles in that row to match. This caused Layout Thrashing, degraded performance, and resulted in jarring UI jumps as the page loaded. CSS `subgrid` natively solves this on the rendering engine level, resulting in an infinitely scalable, instantly calculated, perfectly aligned layout with zero JavaScript. An `@supports` fallback to standard flexbox is included for older browser support.
