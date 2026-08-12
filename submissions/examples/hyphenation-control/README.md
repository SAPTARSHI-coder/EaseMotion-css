# Hyphenation &amp; Breaking Control

## Feature Overview
This demo covers three CSS properties that control how text breaks across lines:
- **hyphens** (`auto`, `manual`, `none`) — dictionary-based hyphenation at syllable boundaries, requires the `lang` attribute to work properly
- **word-break** (`normal`, `break-all`, `keep-all`) — controls whether lines may break at character boundaries, useful for long unbroken strings
- **overflow-wrap** (`normal`, `break-word`, `anywhere`) — emergency word breaking when content would otherwise overflow

The demo includes English, German, and French samples to show language-specific hyphenation differences.

## Usage
Open `demo.html` in any browser. Each card applies one CSS value to identical text so the visual difference is clear. Narrow the viewport to trigger more line breaks. The German text (`Donaudampfschifffahrtsgesellschaft...`) is intentionally long to stress-test hyphenation dictionaries. Language-specific hyphenation uses the `lang` attribute on individual elements.

## Browser Support
- `hyphens: none|manual` — supported everywhere
- `hyphens: auto` — Chrome 55+, Firefox 43+, Safari 5.1+ (Edge requires Windows language pack)
- `word-break: normal|break-all` — supported everywhere
- `word-break: keep-all` — Chrome 44+, Firefox 15+, Safari 9+
- `overflow-wrap: normal|break-word` — supported everywhere
- `overflow-wrap: anywhere` — Chrome 80+, Firefox 80+, Safari 15.4+
- Language-specific hyphenation requires OS hyphenation dictionaries to be installed
