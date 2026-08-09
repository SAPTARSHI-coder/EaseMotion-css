# Native RTL Support via CSS Logical Properties

## What does this do?
Proposes a massive internationalization (i18n) accessibility refactor to natively support Right-To-Left (RTL) languages (such as Arabic and Hebrew) by actively ripping out all physical layout properties and replacing them with modern CSS Logical Properties.

## How is it used?
Maintainers and core contributors must systemically audit all core component files (spanning all 15+ files entirely across the `components/*.css` directory). 

Currently, developers are dangerously hardcoding physical box dimensions that strictly lock components into a Left-to-Right orientation:
```css
/* ❌ BAD: Completely destroys layouts on RTL Arabic websites */
.ease-card {
  padding-left: 20px;
  margin-right: 10px;
  border-left: 4px solid blue;
}
```

These rules must be aggressively replaced with dynamic, text-direction-aware logical properties:
```css
/* ✅ GOOD: Natively mirrors the layout based on the <html dir="rtl"> tag */
.ease-card {
  padding-inline-start: 20px;
  margin-inline-end: 10px;
  border-inline-start: 4px solid blue;
}
```

## Why is it useful?
Currently, if an enterprise developer utilizes EaseMotion to build a website that requires localization in Arabic or Hebrew, the framework visually falls apart. Because legacy physical properties like `margin-left` and `padding-right` are rigidly hardcoded across the entire `components/` directory, icons push text in the completely wrong direction, status borders incorrectly appear on the wrong side of cards, and flexbox alignments severely shatter. 

Historically, large UI frameworks forcefully solved this by generating a second, massively bloated `easemotion-rtl.css` file that manually overrode every single layout rule on the page. By migrating to native CSS Logical Properties (`margin-inline-start`, `padding-block`, etc.), the browser handles the RTL mirroring entirely natively via the `dir="rtl"` HTML attribute. This instantly unlocks global internationalization for the framework while actively reducing the final CSS bundle size.
