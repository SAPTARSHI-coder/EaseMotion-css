# CSS Terminal Window

A pure CSS styled terminal window component featuring window control buttons, path prompts, sequential typing animations, and output logs. Built without JavaScript dependencies.

## How it works

The terminal frame (`.ease-terminal-card`) utilizes dark theme variables and monospace typography. Command inputs (`.ease-typing-text`) use CSS `steps()` character keyframe sequences (`@keyframes ease-type-cmd1`, `@keyframes ease-type-cmd2`) to simulate typing. Command execution logs fade into view sequentially via `@keyframes ease-fade-output`.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-term-bg`: Terminal interior backdrop (`#090a0f`)
- `--ease-term-card-bg`: Card surface background (`#0f172a`)
- `--ease-term-header-bg`: Window control bar background (`#1e293b`)
- `--ease-term-border`: Boundary line color (`#334155`)
- `--ease-term-text`: Command input text color (`#f8fafc`)
- `--ease-term-muted`: Output log text color (`#94a3b8`)
- `--ease-term-accent`: Symbol accent color (`#38bdf8`)
- `--ease-term-path`: Terminal directory path color (`#a855f7`)

## Accessibility & Performance

- Accessible using semantic tags (`role="region"`, `aria-label`), clean contrast ratios, and screen-reader accessible command lines.
- Full support for `@media (prefers-reduced-motion: reduce)` which bypasses typing steps and fade-in animations, immediately displaying full terminal output logs.