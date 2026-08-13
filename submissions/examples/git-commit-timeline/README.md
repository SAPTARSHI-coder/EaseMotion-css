# Git Commit Timeline Component

A developer-focused timeline component that visually represents commit history, merges, and release milestones. Each node shows a branch badge, commit hash, title, description, and date with a connecting vertical line and color-coded dot indicators.

## Classes

| Class | Description |
|---|---|
| `ease-git-timeline` | Vertical timeline container with connecting line |
| `ease-git-node` | Individual commit node with staggered reveal |
| `ease-git-node-release` | Green dot and border for release/tag nodes |
| `ease-git-node-merge` | Purple dot with diamond icon for merge nodes |
| `ease-git-dot` | Circular indicator dot |
| `ease-git-head` | Row for branch badge and commit hash |
| `ease-git-branch` | Branch name badge |
| `ease-git-branch-main` | Green badge for main branch |
| `ease-git-branch-feat` | Purple badge for feature branches |
| `ease-git-hash` | Monospace commit hash |
| `ease-git-content` | Content card with hover lift |
| `ease-git-title` | Commit message title |
| `ease-git-desc` | Commit description |
| `ease-git-meta` | Date metadata |

## Usage

```html
<div class="ease-git-timeline">
  <div class="ease-git-node ease-git-node-release">
    <span class="ease-git-dot"></span>
    <div class="ease-git-content">
      <div class="ease-git-head">
        <span class="ease-git-branch ease-git-branch-main">main</span>
        <span class="ease-git-hash">a1b2c3d</span>
      </div>
      <h4 class="ease-git-title">v2.0.0 — Production Deployment</h4>
      <p class="ease-git-desc">Stable release with authentication and dashboard features.</p>
      <span class="ease-git-meta">Jun 4, 2026</span>
    </div>
  </div>

  <div class="ease-git-node ease-git-node-merge">
    <span class="ease-git-dot"></span>
    <div class="ease-git-content">
      <div class="ease-git-head">
        <span class="ease-git-branch ease-git-branch-feat">feat/auth</span>
        <span class="ease-git-hash">e4f5g6h</span>
      </div>
      <h4 class="ease-git-title">Merge pull request #42</h4>
      <p class="ease-git-desc">Add user authentication system with JWT support.</p>
      <span class="ease-git-meta">Jun 2, 2026</span>
    </div>
  </div>

  <div class="ease-git-node">
    <span class="ease-git-dot"></span>
    <div class="ease-git-content">
      <div class="ease-git-head">
        <span class="ease-git-branch ease-git-branch-main">main</span>
        <span class="ease-git-hash">m0n1o2p</span>
      </div>
      <h4 class="ease-git-title">Initial Commit</h4>
      <p class="ease-git-desc">Project structure created with core framework setup.</p>
      <span class="ease-git-meta">May 28, 2026</span>
    </div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS Git timeline with staggered reveal animations, color-coded node variants (commit, merge, release), branch badges, monospace commit hashes, and hover lift on content cards. Uses design tokens for colors and spacing. Respects `prefers-reduced-motion`.
