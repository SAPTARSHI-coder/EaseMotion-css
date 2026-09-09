# Language Selector Dropdown

Language/country selector with emoji flags, staggered dropdown animation, and search/filter. Options slide in with translateY + opacity, each with a cascading delay.

## Features

- Flag icons + language labels in dropdown
- Staggered entrance animation via `--lsd-stagger`
- Search/filter for quick language lookup
- Arrow rotation on open/close
- Selected option highlighted with accent color

## Usage

Set `--lsd-open` to `1` on `.lsd-dropdown` to open. Options animate in with staggered delay. JS manages toggle, outside close, search filtering, and selection.
