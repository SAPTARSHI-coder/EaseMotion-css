# README Contribution Guidance Consistency Showcase

## Overview

This documentation showcase proposes updates to the repository's README to ensure it remains consistent with the contribution guidelines defined in CONTRIBUTING.md.

## Problem Statement

The current README omits `submissions/docs/` from several sections describing valid contribution tracks. However, `CONTRIBUTING.md` recognizes `submissions/docs/` as a valid directory for documentation showcase submissions.

This inconsistency may cause contributors to overlook documentation contributions or submit them using an incorrect structure.

| Section                      | Current               | Proposed                    |
| ---------------------------- | --------------------- | --------------------------- |
| Temporary Restriction Notice | examples, react, scss | examples, react, scss, docs |
| Submission Guide             | examples, react, scss | examples, react, scss, docs |
| Contributor Checklist        | examples, react, scss | examples, react, scss, docs |

## Benefits

- Keeps README aligned with CONTRIBUTING.md.
- Clearly documents all supported contribution tracks.
- Reduces confusion for new contributors.
- Improves consistency across repository documentation.

## Folder Structure

```text
submissions/docs/readme-contribution-guidance-docs-track/
├── demo.html
├── style.css
└── README.md

## How to Preview

Open `demo.html` in any modern web browser to view the documentation showcase demonstrating the proposed README updates.