# Bug 3: Missing Eyebrow Em-Dash (Advanced Fix)

## Overview
Adds the missing em-dash (`—`) before eyebrow headings across the documentation site. 

## Advanced Implementation Details
Instead of hardcoding the `&mdash;` HTML entity into the `index.html` file, this fix utilizes a scalable CSS architecture. 

1. **CSS `::before` Pseudo-element**: The em-dash is injected globally to any element with the `.docs-eyebrow` class via the `content` property. 
2. **Semantic HTML**: This keeps the HTML structure clean and strictly semantic. Screen readers and content scrapers will read "Introduction" rather than "Dash Introduction".
3. **`user-select: none`**: The injected dash cannot be highlighted by the cursor, ensuring that if a user double-clicks to copy the section title, they only copy the actual text.
4. **CSS Custom Properties**: The dash string and its spacing are stored in `:root` variables, allowing for instantaneous global updates if the brand design changes in the future.

## Testing
Open `demo.html`. You will see the em-dashes rendered perfectly before both section headers, despite not existing in the DOM tree's text nodes.