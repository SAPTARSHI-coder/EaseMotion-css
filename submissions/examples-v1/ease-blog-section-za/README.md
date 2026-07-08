# CSS Blog Section Component

## What does this do?
A complete blog layout with featured post, article cards grid, category filter navigation, sidebar with search widget, categories list, tag cloud, recent posts list, newsletter signup, and pagination controls.

## How is it used?
```html
<article class="bl-post">
  <div class="bl-post-img" style="background:linear-gradient(135deg,#667eea,#764ba2)">
    <div class="bl-post-cat">Category</div>
  </div>
  <div class="bl-post-body">
    <div class="bl-post-meta">
      <span class="bl-post-date">Date</span>
      <span class="bl-post-author">By Author</span>
    </div>
    <h2>Post Title</h2>
    <p>Post excerpt description content goes here.</p>
    <a href="#" class="bl-read-more">Read More</a>
  </div>
</article>
```

## Why is it useful?
Creates a professional blog section for content-driven websites. Features include category filtering with six categories, featured post highlighting with accent border, search widget, category list with post counts, tag cloud navigation, recent posts sidebar, newsletter signup conversion widget, and numbered pagination. Uses CSS Grid layout for responsive two-column design that collapses to single column below 860px. The component is fully themeable via CSS custom properties with dark mode as default. Each blog post card includes image area, category badge, metadata line, title, excerpt, and read more link with animated arrow.
