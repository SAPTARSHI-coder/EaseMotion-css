# Offline Class Search Cheatsheet (No Backend)

A client-side searchable cheatsheet of common EaseMotion `ease-*` classes with plain-English blurbs and one-click copy — powered by static JSON embedded in the page.

> Submission track: `submissions/docs/ease-class-search-cheatsheet-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47638

---

## What does this do?

Beginners often need to find the right EaseMotion class quickly without opening the full docs site. This cheatsheet lets you search and filter common `ease-*` classes offline (after the page loads) and copy any class name with one click.

## How is it used?

1. Open `demo.html` in a browser (works offline after first load).
2. Type in the search box to filter classes instantly.
3. Use category chips (utilities, animations, hover, components, timing).
4. Click **Copy** on any row to copy the class name.
5. Read the plain-English blurb to understand what each class does.

## Features

- Client-side search/filter for common `ease-*` classes
- Plain-English blurbs for each class (what it does + when to use it)
- One-click copy button for class names
- Static JSON dataset embedded in the page (no backend, no API calls)
- Category/group filters (utilities, animations, hover, components, timing)
- Empty state when no matches are found
- Responsive and clean UI

## Why is it useful?

- **Offline-friendly** — no server required after the page loads.
- **Beginner-friendly** — plain-English descriptions, not just class names.
- **Fast lookup** — search and filter without leaving the page.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Class dataset | Static JSON embedded in `demo.html` |
| Search & copy logic | Inline JS in `demo.html` |
| Layout styles | `style.css` |

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Cheatsheet UI, embedded JSON, search/filter/copy logic |
| `style.css` | Layout, cards, filters, and responsive styling |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-class-search-cheatsheet-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
