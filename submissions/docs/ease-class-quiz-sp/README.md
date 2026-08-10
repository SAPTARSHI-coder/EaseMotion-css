# EaseMotion Class → English Decoder Quiz

A gamified documentation showcase where beginners **match `ease-*` class names to plain-English motion descriptions**, earn points, build streaks, and watch each class animate live after answering.

> Submission track: `submissions/docs/ease-class-quiz-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43341

---

## What does this do?

EaseMotion CSS is built on the idea that **the class name is the documentation**. This quiz turns that philosophy into a learning game:

1. You see a class name like `ease-slide-in-from-bottom-left`
2. You pick the correct plain-English description from four options
3. The animation plays live so you connect the name to the motion
4. Your score and streak update instantly

## How is it used?

1. Open `demo.html` in a browser (EaseMotion CSS loads from jsDelivr CDN).
2. Read the class name shown in the question card.
3. Click the description you think is correct.
4. See instant feedback — green for correct, red for wrong — plus a live animation preview.
5. Press **Next question →** to continue.
6. Track your **score** (+10 per correct answer), **streak**, and **best streak** in the sidebar.
7. Press **Reset quiz** to start over.

## Question categories

| Category | Example classes |
|----------|----------------|
| **animation** | `ease-fade-in`, `ease-slide-up`, `ease-bounce`, `ease-zoom-in` |
| **layout** | `ease-center`, `ease-flex-col`, `ease-grid-auto` |
| **hover** | `ease-hover-grow`, `ease-hover-lift` |
| **timing** | `ease-delay-200`, `ease-duration-slow` |

15 questions are included, shuffled randomly without repeats until all have been shown.

## Features

- Multiple-choice rounds with 4 options each
- Live animation preview after every answer
- Score counter (+10 per correct) and streak tracking
- Best streak record persisted for the session
- Progress bar showing how many of 15 questions you've answered
- Instant right/wrong feedback with full explanations
- Covers animation, hover, layout, and timing utility classes
- No backend or external data source required
- `prefers-reduced-motion` respected

## Why is it useful?

- **Reinforces the naming philosophy** through play, not just reading docs.
- **Connects names to motion** — seeing the animation after answering builds muscle memory.
- **Beginner-friendly** — wrong answers explain the correct meaning immediately.
- **Self-contained** — no build step, no changes to `core/` or `components/`.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Quiz UI, 15-question bank, scoring logic |
| `style.css` | Quiz layout and feedback styles |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- Uses official CDN bundle (`easemotion.min.css`).
- Folder name carries the unique contributor suffix `-sp`.
