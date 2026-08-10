# EaseMotion CSS Cheatsheet

A single-page, printable cheatsheet for the EaseMotion CSS framework.

## What this contains

- Organized reference of commonly used EaseMotion classes grouped by:
  - Layout
  - Animation
  - Buttons
  - Cards
  - Utilities
- For each class: class name, short description, HTML usage snippet, and a live example
- A sticky table of contents for quick navigation and a search/filter box
- Print-friendly styles for PDF export

## How to use

1. Open `cheatsheet.html` in your browser (double-click or use `Invoke-Item`):

```powershell
Invoke-Item submissions\html-cheatsheet\cheatsheet.html
```

2. Use the search box in the side panel or press `/` to focus search.
3. Click any entry in the table of contents to jump to the section.
4. Click "Print / Save PDF" to create a printable version suitable for distribution.

## Printing & Sharing

- Use the browser Print dialog and select "Save as PDF" to export the cheatsheet.
- Print styles hide interactive UI elements (search box, print button) and optimize layout for paper.
- The cheatsheet is designed to fit well on A4 and US Letter sizes when printed.

## Accessibility

- Semantic HTML elements used for headings, navigation, and content
- Focus styles for keyboard navigation
- Keyboard shortcut `/` focuses search box

## Extending the cheatsheet

To add more classes or sections, edit `cheatsheet.html` and add new `<article class="cheat">` blocks under the relevant section. Include:

```html
<article class="cheat" data-keywords="...">
  <h3 class="class-name">.ease-new-class</h3>
  <p class="desc">Short description</p>
  <pre class="code">&lt;div class="ease-new-class"&gt;...&lt;/div&gt;</pre>
  <div class="example">...</div>
</article>
```

## Files

- `cheatsheet.html` — Single-page cheatsheet
- `style.css` — Styles and print rules
- `README.md` — This file

## License & Contribution

Contributions welcome. Please follow the project contribution guidelines in the main repository. This cheatsheet is intended as a living document and can be extended by maintainers and contributors in `submissions/html-cheatsheet/`.
