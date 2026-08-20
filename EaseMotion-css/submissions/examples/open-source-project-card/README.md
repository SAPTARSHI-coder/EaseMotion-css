# Open Source Project Card

## What does this do?
Renders a GitHub-style repository/project card that displays the project name, short description, open-source visibility badge, star count, fork count, and a language indicator dot — all styled with pure CSS and no JavaScript.

## How is it used?

```html
<article class="repo-card" aria-label="My Project">
  <div class="repo-card__header">
    <!-- repository icon SVG (aria-hidden) -->
    <a href="#my-project" class="repo-card__name" aria-label="Open My Project repository">
      org / my-project
    </a>
    <span class="repo-card__visibility">Public</span>
  </div>

  <p class="repo-card__description">
    A short description of the project goes here.
  </p>

  <footer class="repo-card__footer">
    <dl class="repo-card__stats">
      <div class="repo-card__stat">
        <!-- star icon SVG (aria-hidden) -->
        <dt class="visually-hidden">Stars</dt>
        <dd><a href="#stars" aria-label="1,234 stars">1.2k</a></dd>
      </div>
      <div class="repo-card__stat">
        <!-- fork icon SVG (aria-hidden) -->
        <dt class="visually-hidden">Forks</dt>
        <dd><a href="#forks" aria-label="89 forks">89</a></dd>
      </div>
    </dl>

    <div class="repo-card__lang">
      <span class="repo-card__lang-dot" style="--lang-color: #f1e05a;" aria-hidden="true"></span>
      <span>JavaScript</span>
    </div>
  </footer>
</article>
```

Place multiple cards inside the `.card-grid` list for a responsive grid layout.

## Why is it useful?
Open-source project cards are a common UI pattern on portfolios, dashboards, and landing pages. This component provides a polished, accessible, zero-dependency alternative that plugs directly into EaseMotion CSS without requiring any JavaScript or external icon fonts.
