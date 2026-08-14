# Tabs Beyond 20 Limit Stress Test Demo

An interactive documentation lab demonstrating how EaseMotion's **`tabs.js`** handles tab components **beyond the native 20-tab CSS limit** by injecting dynamic CSS rules at runtime.

> Submission track: `submissions/docs/ease-tabs-20plus-lab-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43647

---

## What does this do?

EaseMotion CSS includes a tabs component that works natively for up to **20 tabs** through `components/tabs.css`. When more tabs are needed, `core/tabs.js` injects runtime CSS rules for tabs 21+.

This lab lets you interact with **10 tabs (CSS only)** and **28 tabs (JS enhanced)** side by side to see exactly when dynamic injection happens.

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Switch tabs in both demos and watch the **live diagnostics panel**.
3. Use **Jump to tab** buttons — especially **Tab 21** and **Tab 28** (beyond CSS limit).
4. Read the **dynamic CSS injection preview** showing rules from `#ease-tabs-dynamic-rules`.
5. Resize the window to see underline width/position recalculate.
6. Review educational notes and copy the example markup snippet.

---

## Features

- Interactive tabs demo with 10 and 28 tab items
- Live tab switching with active state and underline animation
- Visual explanation of 20-tab CSS limit vs dynamic JS fallback
- Live diagnostics: active tab, injection status, rule count, underline size
- Quick-jump buttons to tabs 1, 10, 20, 21, and 28
- Dynamic CSS injection preview inspector
- Educational notes on `tabs.js` runtime behavior
- Example markup using `.ease-tabs`, `.ease-tab-input`, `.ease-tab-label`
- Resize-safe underline behavior demonstration
- Comparison panel: 10 tabs vs 28 tabs
- Responsive, accessible UI with keyboard-friendly tab navigation

---

## How tabs.js works

| Tab count | Behavior |
|-----------|----------|
| 1–20 | Native CSS rules in `tabs.css` handle focus, checked, underline, and panels |
| 21+ | `tabs.js` sets `data-tabs-id` and injects 4 rules per extra tab |
| All | `updateUnderlineWidth()` sets pixel width/left; recalculates on resize |

Injected rules are added to `<style id="ease-tabs-dynamic-rules">` in the document head.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Tabs helper | jsDelivr CDN (`core/tabs.js`) |
| Lab UI | `style.css` + inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive 10 vs 28 tab demos, diagnostics, markup |
| `style.css` | Lab layout, scrollable nav, status panels |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-tabs-20plus-lab-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
