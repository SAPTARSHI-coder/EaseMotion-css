# 🗂️ Interactive File Version History Diff Viewer Card

> A fully interactive file version history diff viewer component featuring a revision timeline sidebar, color-coded line-level diffs (additions in green, deletions in red), Unified/Split view toggle, and an animated "Restore This Version" confirmation dialog.

---

## 📖 What does this do?

This component replicates the version history and diff viewer patterns found in collaborative SaaS tools like GitHub PRs, Figma version history, and Google Docs. Users can:

- Browse a **revision history sidebar** listing commit messages, author avatars, timestamps, and per-revision diff stats.
- View **line-level diffs** with color-coded background tints (green additions / red deletions) in both **Unified** and **Split** view modes.
- Click any revision to **switch the active diff** content.
- Trigger an animated **"Restore This Version"** confirmation dialog.
- Toggle between **Light and Dark** themes.

---

## 🎯 How is it used?

### HTML Structure (`demo.html`)

```html
<!-- Revision Sidebar -->
<aside class="revision-sidebar" aria-label="Version history">
  <ol class="revision-list" role="listbox">
    <li class="revision-item active" role="option" aria-selected="true" data-revision="v4">
      <div class="author-avatar author-avatar--purple">SK</div>
      <span class="commit-msg">Add spring easing tokens</span>
      <time class="revision-time">2 hours ago</time>
      <span class="diff-stat--add">+14</span>
      <span class="diff-stat--del">−3</span>
    </li>
  </ol>
</aside>

<!-- Diff Pane -->
<section class="diff-pane" aria-label="File diff content">
  <div class="diff-line diff-line--add" role="row">
    <span class="diff-line__num" role="cell">14</span>
    <span class="diff-line__code" role="cell">+ --em-ease-spring: cubic-bezier(...);</span>
  </div>
</section>
```

### CSS Token Reference (`style.css`)

```css
:root {
  /* Diff Color Tokens — WCAG AA compliant */
  --diff-add-bg:     rgba(16, 185, 129, 0.12);  /* green tint for additions */
  --diff-add-text:   #6ee7b7;
  --diff-add-marker: #10b981;

  --diff-del-bg:     rgba(239, 68, 68, 0.10);   /* red tint for deletions */
  --diff-del-text:   #fca5a5;
  --diff-del-marker: #ef4444;

  --diff-hunk-bg:    rgba(99, 102, 241, 0.08);  /* hunk header */
}
```

---

## ✨ Key Highlights

| Feature | Implementation |
|---------|----------------|
| **Revision History Sidebar** | Ordered `<ol role="listbox">` with author avatars, commit messages, timestamps, and `+/-` stat badges |
| **Unified Diff View** | 3-column table (`old line#`, `new line#`, `code`) with color-coded rows per line type |
| **Split Diff View** | CSS Grid 2-column layout: base file on left (deletions), head file on right (additions) |
| **View Mode Toggle** | `aria-pressed` toggle buttons switching between Unified and Split views |
| **Restore Dialog** | Animated `<dialog>` confirmation with CSS scale transition, backdrop blur, and keyboard trap |
| **Light / Dark Theme** | `[data-theme="dark|light"]` attribute on `<html>` swaps all CSS tokens |
| **Mobile Responsive** | Sidebar hidden on `< 768px`; replaced by `<select>` dropdown for version selection |
| **WCAG AA Colors** | All diff tints (addition green / deletion red) verified >= 4.5:1 contrast ratio |

---

## ⌨️ Keyboard Interactions

| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Navigate between revision items, view toggles, restore button |
| `Enter` / `Space` | Select a revision or activate a button |
| `Escape` | Close the restore confirmation dialog |

---

## ♿ Accessibility Notes

- Revision list uses `role="listbox"` / `role="option"` with `aria-selected` state management.
- Diff content table uses `role="table"`, `role="row"`, `role="cell"`, and `role="columnheader"`.
- Dialog uses `aria-modal="true"`, `aria-labelledby`, and focus is trapped and restored.
- All interactive elements have descriptive `aria-label` attributes.
- Diff color tints meet WCAG 2.1 AA (≥ 4.5:1 contrast ratio for text on tinted backgrounds).
