# Class Discovery Assistant

## Overview

Class Discovery Assistant is an interactive documentation-style interface for EaseMotion CSS. It helps users discover utility classes by typing natural language queries such as “button glow” or “fade animation.”

## Problem Statement

As EaseMotion CSS grows, finding the right utility class can become harder for beginners and for developers who think in plain language rather than exact class names.

## Proposed Solution

This submission introduces a class discovery assistant that maps search phrases to EaseMotion CSS utility classes. It improves discoverability by letting users search the framework using human language and see immediate suggestions.

## Component List

- Search input for natural language queries
- Result cards with class name suggestions
- Copy button for quick usage
- Live preview card showing the selected class effect
- Search examples to guide user queries

## Usage Examples

Type a query such as:

```text
button glow
fade animation
slide up
card lift
```

Suggested output:

```text
ease-hover-glow
ease-fade-in
ease-slide-up
ease-card-lift
```

You can then copy the class name and paste it into your markup.

## Benefits

- Makes EaseMotion CSS more beginner-friendly
- Reduces friction when discovering utility classes
- Reinforces the human-readable class naming philosophy
- Demonstrates how documentation can be interactive

## Screenshots

Add screenshots here once the demo is published.

## Future Improvements

- Add fuzzy matching and synonyms for more robust search
- Add class category filters (animation, hover, layout)
- Expand the dataset to include more EaseMotion utility classes
- Add a dedicated documentation page for class discovery
