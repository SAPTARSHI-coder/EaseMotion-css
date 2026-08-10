# CSS Subgrid Cards

## 1. What does this do?
This component renders a responsive card grid using the CSS `subgrid` layout value, aligning inner card headers, body copies, and footer sections perfectly to the parent grid rows across all card columns.

## 2. How is it used?
Configure the parent grid layout and map individual card elements with row span values:
```html
<main class="grid-parent">
  <article class="card-item" tabindex="0">
    <header class="card-header">
      <h2 class="card-title">Title Here</h2>
    </header>
    <div class="card-body">
      <p>Description text goes here.</p>
    </div>
    <footer class="card-footer">
      <a href="#" class="cta-btn">Action</a>
    </footer>
  </article>
</main>
```

## 3. Why is it useful?
It provides front-end developers with an elegant layout pattern that maintains absolute visual alignment of card components natively, removing the need for height recalculation scripts.
