# Thesaurus Lookup Tool

A small, dependency-free word lookup tool styled like a library card catalog.
Type a word, and it returns synonym "index cards" plus a rail of antonyms.

## What it does

- Looks up synonyms and related words for anything you type, using the free
  [Datamuse API](https://www.datamuse.com/api/) (`ml=` "means like" query —
  no API key or signup required).
- Also fetches antonyms (`rel_ant=`) and shows them in a separate "see also"
  rail when available.
- Ships five quick-pick example words (happy, difficult, beautiful, quick,
  honest) so a reviewer can test it with one click.
- Shows a friendly empty state when a word has no matches, and a clear error
  state if the network request fails.

## Files

- `demo.html` — markup + logic (vanilla JS, no build step, no frameworks)
- `style.css` — all styling, card-catalog visual theme
- `README.md` — this file

## Running it

Just open `demo.html` in any modern browser. It calls the Datamuse API over
HTTPS directly from the browser, so an internet connection is required; no
server, build step, or API key is needed.

## Design notes

The visual concept is a library reference drawer at night: an ink-navy page,
warm parchment-colored index cards for each synonym, and a rubber-stamp red
accent used for the search field and the small decorative "call number" in
the corner of each card. Typography pairs a serif display face (Libre Caslon
Text) for headwords with a monospace face (IBM Plex Mono) for labels and
metadata, echoing typewritten catalog cards.

## Accessibility

- The search input and button both have visible focus outlines.
- Status updates (loading, result count, errors) are announced via an
  `aria-live="polite"` region.
- Respects `prefers-reduced-motion` by disabling the card entrance animation.
- Fully responsive down to narrow mobile widths.

## Known limitations

- Datamuse's `ml=` endpoint returns "related words" rather than a strictly
  curated thesaurus, so results occasionally include loosely related terms
  alongside true synonyms. This is a reasonable trade-off for a free,
  keyless API and is called out in the footer of the demo itself.
- No offline/cached mode — every lookup is a live network request.
