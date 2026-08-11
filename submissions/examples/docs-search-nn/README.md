# Docs Search NN

## 1. What does this do?

This is a responsive, dark-themed documentation search bar component positioned full-width below the navigation header, enabling real-time client-side filtering of documentation entries with animated transitions.

## 2. How is it used?

Include the stylesheet and apply thenamespaced `*-nn` structure inside your layout:

```html
<!-- Full-width Search Bar Section -->
<section class="docs-search-section-nn">
  <div class="docs-search-container-nn">
    <div class="docs-search-input-wrapper-nn">
      <!-- Search Icon -->
      <svg
        class="docs-search-icon-nn"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <!-- Search Input -->
      <input
        type="text"
        class="docs-search-input-nn"
        id="docs-search-input-nn"
        placeholder="Search docs, components, animations..."
        autocomplete="off"
      />
      <!-- Clear Button -->
      <button
        class="docs-search-clear-nn"
        id="docs-search-clear-nn"
        aria-label="Clear search"
        style="display: none;"
      >
        &times;
      </button>
    </div>
  </div>
</section>

<!-- Content Grid to Filter -->
<div class="docs-list-nn" id="docs-list-nn">
  <article class="doc-card-nn" data-search-terms="fade in animations core">
    <span class="doc-badge-nn">Animations</span>
    <h3 class="doc-title-nn">Fade In Animation</h3>
    <p class="doc-description-nn">A core animation utility...</p>
  </article>
</div>

<!-- No Results Alert -->
<div class="no-results-nn" id="no-results-nn">
  <div class="no-results-icon-nn">🔍</div>
  <h3 class="no-results-title-nn">No results found</h3>
  <p class="no-results-text-nn">
    We couldn't find anything matching "<span id="no-results-query-nn"></span>".
  </p>
</div>
```

## 3. Why is it useful and how does it fit EaseMotion CSS philosophy?

It provides a lightweight, performance-first documentation navigation utility. In alignment with EaseMotion CSS:

- It relies entirely on native browser features and vanilla JavaScript, resulting in zero external assets or runtime overhead.
- It enhances user experience through subtle micro-animations, such as smooth wrapper focus expands, glowing border transitions, and a scale/fade-in entrance effect (`@keyframes card-fade-in-nn`) for filtered elements.
