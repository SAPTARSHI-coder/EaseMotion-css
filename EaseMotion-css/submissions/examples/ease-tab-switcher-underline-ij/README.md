# Tab Switcher Underline

A tab bar with an animated underline indicator that slides between tabs. Active index via `--ts-active`, total tabs via `--ts-count`. CSS handles the underline translation with a bounce cubic-bezier.

## Features

- Sliding underline indicator between tabs
- Active index via `--ts-active` CSS variable
- Tab count via `--ts-count` CSS variable
- Smooth bounce cubic-bezier transition
- Dark card layout with tab labels

## Usage

Set `--ts-active` (0-based index) and `--ts-count` (number of tabs) on `.tabs-bar`. CSS translates the `.ts-underline` element accordingly.
