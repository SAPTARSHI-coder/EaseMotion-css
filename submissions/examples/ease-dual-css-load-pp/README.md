# Dual Stylesheet Cascade Surprise Lab

An interactive documentation lab highlighting the visual cascade overrides and HTTP download weight duplicates when loading both `easemotion.css` and `easemotion.min.css` on the same page.

---

## 1. What does this do?
This showcase dynamically injects main stylesheet assets into the DOM head to illustrate browser devtools rule crossings, source order priority defeats, and page load telemetry sizes.

---

## 2. How is it used?
Open `demo.html` directly in a browser to switch stylesheet states, inspect the devtools simulated rule strikes, test style-tag positioning overrides, and copy correct link tags:

```html
<!-- Correct production usage: link only the minified stylesheet -->
<link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css" />
```

---

## 3. Why is it useful?
It prevents beginner mistakes related to loading redundant library formats, clarifies how source declaration order overrides custom user variables, and promotes clean dependency configurations in EaseMotion projects.

---

## Technical Features & Suffix

- **Folder Path:** `submissions/examples/ease-dual-css-load-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #46185](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46185)

### Features Included:
1. **Interactive Style Mounter:** Mounts raw source, minified, both, or no CSS assets onto the page dynamically.
2. **DevTools Rule Inspector:** Renders a simulated web inspector displaying strikethroughs on overridden declarations.
3. **Mount Position Tester:** Demonstrates why custom style blocks mounted before framework dependencies fail to execute.
4. **Specificity Quiz:** In-app quiz to verify cascade logic and file sizes.
