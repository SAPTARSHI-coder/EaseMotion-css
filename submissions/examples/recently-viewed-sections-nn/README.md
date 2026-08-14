# recently-viewed-sections-nn

### 1. What does this do?
A self-contained sidebar/panel component for documentation systems that dynamically tracks the last 5 visited articles, stores them locally, and allows instant navigation history recall.

### 2. How is it used?
Incorporate the HTML layout structure with the `-nn` class suffix:

```html
<!-- Main container splitting sidebar, article content, and history panel -->
<div class="main-layout-nn">
  <!-- Navigation Sidebar -->
  <aside class="sidebar-nn">
    <ul class="sidebar-menu-nn">
      <li class="sidebar-item-nn"><a href="#getting-started">Getting Started</a></li>
      <!-- ... other sections ... -->
    </ul>
  </aside>

  <!-- Article view container -->
  <main class="content-area-nn">
    <article class="article-card-nn">
      <!-- Article content -->
    </article>
  </main>

  <!-- Recently Viewed History Panel -->
  <aside class="recent-panel-nn">
    <div class="recent-header-nn">
      <h2 class="recent-title-nn">Recently Visited</h2>
      <button class="clear-recent-btn-nn">Clear</button>
    </div>
    <ul class="recent-list-nn">
      <!-- Recent visited item rows -->
      <li class="recent-item-nn">
        <div class="recent-item-meta-nn">
          <span class="recent-item-title-nn">Getting Started</span>
          <span class="recent-item-category-nn">Guide</span>
        </div>
        <div class="recent-item-excerpt-nn">Learn core concepts...</div>
      </li>
    </ul>
  </aside>
</div>
```

### 3. Why is it useful?
It aligns with the EaseMotion CSS philosophy by providing a responsive, premium user experience with smooth hover animations and entrance effects while respecting the system's color scheme preferences and reduced-motion media queries without the need for large external scripts or frameworks.
