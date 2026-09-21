# Glowing Search Bar Input

A responsive, accessible search bar component featuring smooth focus-glow animations and CSS custom property theme capabilities.

---

## HTML Markup Examples

### Default Layout
```html
<div class="search-container">
  <label for="doc-search" class="sr-only">Search documentation</label>
  <input 
    type="search" 
    id="doc-search" 
    class="glowing-search-input" 
    placeholder="Search documentation..."
    aria-label="Search documentation"
  >
  <button type="submit" class="search-btn" aria-label="Submit Search">
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  </button>
</div>
