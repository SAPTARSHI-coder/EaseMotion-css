# Coding Bootcamp Landing Page

Closes #14836 — Full EdTech landing page for a coding bootcamp built
with EaseMotion CSS utility classes. Bold, outcomes-focused aesthetic.

## Sections

| Section          | Description                                 |
| ---------------- | ------------------------------------------- |
| Hero             | Bold headline + count-up job outcome stats  |
| Curriculum       | 6-step week-by-week timeline with tech tags |
| Career Outcomes  | 4 stat cards + 8 hired-at company logos     |
| Instructors      | 4 mentor profile cards with background bios |
| Success Stories  | 3 student testimonials with salary bumps    |
| Application Form | Full apply form with ISA/payment mention    |
| FAQ              | 5-question animated accordion               |
| Footer           | Links and copyright                         |

## EaseMotion Classes Used

| Class             | Where Used                      |
| ----------------- | ------------------------------- |
| ease-fade-in      | Hero badge, buttons, stats row  |
| ease-slide-up     | Hero headline and subheading    |
| ease-zoom-in      | Hero section entrance           |
| ease-on-scroll    | Every below-fold element        |
| ease-delay-1 to 6 | Stagger timing across all grids |
| ease-hover-lift   | Cards, logos, timeline items    |
| ease-hover-scale  | CTA buttons and nav CTA         |
| ease-hover-glow   | Input focus states              |

## Interactive Features

- Count-up animation on job placement stats (IntersectionObserver)
- FAQ accordion with smooth max-height transition
- Scroll-triggered entrance animations via IntersectionObserver
- All inputs have focus border-color transitions

## Files

- demo.html - self-contained bootcamp landing page
- style.css - EaseMotion utilities + all page styles
- README.md - this file

## Requirements Met

- Single file, no build step, opens directly in browser
- Fully responsive (mobile, tablet, desktop)
- Realistic copy, no lorem ipsum
- prefers-reduced-motion respected
