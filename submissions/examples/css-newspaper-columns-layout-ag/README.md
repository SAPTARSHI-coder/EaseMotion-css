# CSS Newspaper Columns Layout

A pure CSS multi-column text layout reminiscent of traditional broadsheet newspapers, built utilizing the native CSS Multi-column Layout Module.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes native CSS column properties to automatically distribute text.
- **Native Text Flow**: Implements `column-count`, `column-width`, and `column-gap` to create dynamic, fluid columns. Text seamlessly flows from the bottom of one column to the top of the next.
- **Column Spanning**: Utilizes `column-span: all` to allow headlines and sub-headlines to break across the layout grid, breaking up dense text walls.
- **Print Aesthetics**: Features a classic print design with justified text alignment, CSS hyphens (`hyphens: auto`), a bold initial drop cap (`::first-letter`), and distinct column rules (`column-rule`).
- **Responsive & Accessible**: The grid gracefully degrades from 3 columns down to 2, and finally to a single column on mobile devices using simple media queries.

## Usage

Drop the HTML structure into your layout. The content inside the `.newspaper-article` container will automatically flow into the calculated columns.

```html
<article class="newspaper-article">
  <h2 class="article-headline">Article Title Spanning All Columns</h2>
  
  <p class="first-paragraph">This text will automatically flow across the columns...</p>
  
  <div class="pull-quote">
    "A featured quote spanning a single column."
  </div>
  
  <p>More text continuing the article...</p>
</article>
```

## CSS Custom Properties
Easily customize the layout using the root variables in `style.css`:
- `--bg-color`: Page background color (default: `#fcfcfc`)
- `--text-color`: Primary text color (default: `#111827`)
- `--heading-color`: Headline and drop-cap color (default: `#000000`)
- `--border-color`: Column rule and border color (default: `#d1d5db`)
- `--accent-color`: Accent color for pull quotes (default: `#b91c1c`)
- `--font-serif`: Font stack for headings and body text
- `--font-sans`: Font stack for dates and pull quotes

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
