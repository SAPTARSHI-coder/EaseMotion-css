# [SCSS] Add stylelint SCSS plugin to linting pipeline

## What does this do?
Documents and configures the integration of the `stylelint-scss` plugin into the EaseMotion CSS static analysis pipeline. This prevents default CSS linters from throwing errors on Sass-specific directives (like `@use`, `@forward`, or nested dollar variables) and enforces standardized SCSS patterns.

## How is it used?

### 1. Installation
Install the necessary developer dependencies in `package.json`:

```bash
npm install --save-dev stylelint stylelint-scss stylelint-config-standard-scss
```

### 2. Configuration (`.stylelintrc.json`)
Integrate the plugin and standard SCSS rules into your `.stylelintrc.json` configuration file:

```json
{
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/dollar-variable-pattern": "^[a-z]+(-[a-z0-9]+)*$",
    "scss/at-mixin-pattern": "^[a-z]+(-[a-z0-9]+)*$"
  }
}
```

## Why is it useful?
Without `stylelint-scss`, standard CSS linters raise false-positive errors on Sass syntax. Integrating this plugin ensures SCSS mixins, variables, and nesting patterns are validated correctly and maintain style uniformity throughout GSSoC-26 contributions.
