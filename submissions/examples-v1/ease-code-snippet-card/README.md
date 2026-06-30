# Code Snippet Preview Card

A developer-friendly code snippet card for displaying code examples, API responses, configuration snippets, and documentation samples in an elegant editor-inspired layout.

## Features

- **Window control dots** — macOS-style traffic light dots in the header bar
- **Language badge** — uppercase label identifying the programming language
- **Copy button** — copies code to clipboard with "Copied!" feedback and a toast notification
- **Syntax highlighting** — token-level colorization using semantic CSS classes (`kw`, `fn`, `str`, etc.)
- **Dark theme** — seamless dark editor aesthetic matching EaseMotion's design language
- **Hover effect** — card border glows with the accent color on hover
- **Responsive** — adapts to small screens with adjusted font sizes

## Languages Demonstrated

- JavaScript (default on first card)
- HTML (second card)
- CSS (third card)

## Usage

Copy the `ease-snippet-card` block and customize:

1. Replace the language badge text in `.ease-snippet-lang`
2. Update the code inside `<pre><code>` with token-level span classes
3. Wire the copy button to the actual snippet text in JavaScript

## File Structure

```
ease-code-snippet-card/
├── demo.html       # Demo page with 3 language examples
├── style.css       # All card and syntax styles
└── README.md       # This file
```

## Classes

| Class                  | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `.ease-snippet-card`   | Outer card container                         |
| `.ease-snippet-header` | Top bar with dots, language, and copy button |
| `.ease-snippet-dots`   | Container for window control dots            |
| `.ease-snippet-dot`    | Individual colored dot                       |
| `.ease-snippet-lang`   | Language badge text                          |
| `.ease-snippet-copy`   | Copy-to-clipboard button                     |
| `.ease-snippet-pre`    | `<pre>` wrapper for the code block           |
| `.ease-toast`          | Toast notification for copy confirmation     |
