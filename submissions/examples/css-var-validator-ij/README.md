# Component: CSS Variable Validator

This submission implements a CSS custom property validator for issue **#13655**.

## Description

A Node.js script that scans EaseMotion stylesheets and validates all `--ease-*` custom properties against their expected formats (colors, lengths, durations, keywords). Reports valid, invalid, and warning statuses for each variable found.

## Acceptance Criteria

- Parses `--ease-*` variables from CSS files
- Validates against expected types (color, length, time, keyword)
- Reports status: valid, invalid, or warning
- Displays results in a clean table format

## Files

- `submissions/examples/css-var-validator-ij/demo.html`
- `submissions/examples/css-var-validator-ij/style.css`
- `submissions/examples/css-var-validator-ij/README.md`
