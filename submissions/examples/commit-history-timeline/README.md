# Git Commit History Timeline Component

A developer-focused commit history timeline inspired by GitHub, GitLab, and Linear. Displays commit messages with a vertical connector line, color-coded dots by commit type, hash badges, author names, and relative timestamps. Includes staggered slide-in animation and hover effects.

## Classes

| Class                       | Description                            |
| --------------------------- | -------------------------------------- |
| `ease-commit-timeline`      | Container with vertical connector line |
| `ease-commit`               | Individual commit entry                |
| `ease-commit-dot`           | Colored dot on the timeline            |
| `ease-commit-dot--feat`     | Feature commit (purple)                |
| `ease-commit-dot--fix`      | Bugfix commit (red)                    |
| `ease-commit-dot--docs`     | Documentation commit (blue)            |
| `ease-commit-dot--refactor` | Refactor commit (green)                |
| `ease-commit-dot--chore`    | Chore commit (amber)                   |
| `ease-commit-content`       | Card with title and meta               |
| `ease-commit-title`         | Commit message heading                 |
| `ease-commit-meta`          | Hash, author, and time row             |
| `ease-commit-hash`          | Short hash monospace badge             |
| `ease-commit-author`        | Author name                            |
| `ease-commit-time`          | Relative timestamp                     |

## Usage

```html
<div class="ease-commit-timeline">
  <div class="ease-commit">
    <div class="ease-commit-dot ease-commit-dot--feat"></div>
    <div class="ease-commit-content">
      <div class="ease-commit-title">feat: add authentication module</div>
      <div class="ease-commit-meta">
        <span class="ease-commit-hash">c7a91f2</span>
        <span class="ease-commit-author">Ishita Sharma</span>
        <span class="ease-commit-time">2 hours ago</span>
      </div>
    </div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS commit timeline with staggered slide-in animation, hover scale and translate effects, color-coded dot variants, and monospace hash badges. Responsive by default. Respects `prefers-reduced-motion`.
