# Documentation: Duplicated Sections in VISION.md

## What does this do?

Identifies duplicated and stale content in `VISION.md` (lines 188-242) that repeats content already covered in the first half of the file (lines 110-187).

## The Problem

`VISION.md` contains two sets of nearly identical sections that overlap in purpose and content:

| Section | First occurrence | Duplicate occurrence |
|---------|:---:|:---:|
| Short-Term Roadmap | Line 112 (detailed) | Line 188 (month-by-month, stale) |
| Scope Boundaries / "What Will NOT Be Added" | Line 153 | Line 213 |
| Community Vision | Line 170 | Line 228 |

The duplicate at line 188 starts with a missing `#` heading:
```
 ## Short-Term Roadmap (Next 3 Months)
```
This is spaced as a level-2 heading but reads as a continuation of the previous text, not a proper section break.

## Why is it useful?

- The month-by-month roadmap (lines 190-209) was written for a "Next 3 Months" plan that has already passed — v1.2 shipped on 2026-07-08 and v1.3 is in progress
- The duplicate Scope Boundaries section (lines 213-224) rephrases the same content as lines 153-166
- The duplicate Community Vision (lines 228-242) rephrases content from lines 170-187
- Reduces ambiguity for contributors — one clear roadmap vs. two contradictory timelines
- Reduces file size by ~55 lines (23% reduction)

## Suggested Fix

Remove lines 188-242 (from "Short-Term Roadmap" duplicate through the end), keeping the first occurrence of each section which is:
- More detailed (specific v1.2/v1.3 items vs. generic month breakdown)
- More up-to-date (references specific shipped versions)
- Better structured (proper `#` headings)

## Visual Comparison

**First occurrence (keep):** Specific v1.2/v1.3 feature items with version numbers and dates.

**Duplicate (remove):** Generic month-by-month breakdown without version references, incompatible with the versioned roadmap above.

## Files to update in core:

- `VISION.md` — remove duplicate sections lines 188-242
