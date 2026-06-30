# Animation Documentation Cleanup Demo

## Overview

This documentation demo illustrates the issue reported in **#1870**, where animation-related documentation is repeated across multiple sections of the project README.

The goal is to demonstrate how duplicate animation documentation can be consolidated into a single, clear reference without changing the documented functionality.

---

## Issue

The project documentation contains repeated animation classes and descriptions in multiple sections, such as:

- Animation
- Animation Reference

Having the same information in more than one location can:

- Make the documentation longer than necessary.
- Increase maintenance effort.
- Cause inconsistencies when one section is updated but another is not.
- Make it harder for contributors and users to find the correct reference.

---

## Proposed Improvement

Instead of documenting the same animation classes multiple times, maintain a single animation reference and allow other sections to link to it when appropriate.

### Current Structure

```text
README
│
├── Animations
│   ├── ease-fade-in
│   ├── ease-slide-up
│   ├── ease-zoom-in
│   └── ...
│
├── Animation Reference
│   ├── ease-fade-in
│   ├── ease-slide-up
│   ├── ease-zoom-in
│   └── ...
```

### Proposed Structure

```text
README
│
├── Animations
│   └── Overview
│
└── Animation Reference
    ├── ease-fade-in
    ├── ease-slide-up
    ├── ease-zoom-in
    └── ...
```

---

## Benefits

- Removes duplicate documentation.
- Improves readability.
- Simplifies future documentation updates.
- Reduces maintenance effort.
- Provides a single source of truth for animation classes.

---

## Demo Files

This documentation demo includes:

```text
animation-reference-cleanup-1870/
├── README.md
├── demo.html
└── style.css
```

- **README.md** explains the duplicated documentation issue and the proposed organization.
- **demo.html** visually compares the current and proposed documentation structures.
- **style.css** styles the comparison page.

---

## Expected Result

- Animation documentation is easier to navigate.
- Duplicate content is removed.
- Contributors maintain a single reference section.
- Users can quickly locate animation documentation without encountering repeated information.

---

## Conclusion

Consolidating repeated animation documentation into one reference section improves clarity, reduces maintenance, and keeps the project documentation easier to navigate without changing any framework functionality.