# Relative Units (REM) Accessibility Refactor

## What does this do?
Proposes a complete architectural CSS migration away from hardcoded pixel values (`px`) in favor of universally accessible, relative units (`rem`, `em`, `%`, `vh/vw`) across all core framework components.

## How is it used?
Maintainers and open-source contributors must convert all hardcoded physical pixels (e.g., `width: 32px`, `padding: 16px`, `font-size: 14px`) into their exact `rem` equivalents (e.g., `width: 2rem`, `padding: 1rem`, `font-size: 0.875rem`). This simple mathematical conversion (dividing the pixel value by 16) ensures that all UI elements scale completely proportionally with the user's operating system and browser-level text zoom preferences.

To enforce this architecture moving forward and protect the framework's WCAG compliance, we strongly propose adding the `stylelint-declaration-strict-value` plugin to the CI pipeline to automatically reject PRs that use `px` for font sizes, paddings, margins, and widths.

## Why is it useful?
Currently, almost every component inside the `components/` directory (spanning `loaders.css`, `footer.css`, `cards.css`, and 10+ other core layout files) relies heavily on hardcoded pixel sizes. This completely breaks browser-level text zooming and severely degrades WCAG accessibility compliance. Visually impaired users who set their default browser font size to 24px will find the text overlapping, breaking out of rigidly 300px wide cards, or buttons becoming unclickable. Adopting `rem` globally solves this scaling issue natively, ensuring the framework remains robust and universally accessible to all users.
