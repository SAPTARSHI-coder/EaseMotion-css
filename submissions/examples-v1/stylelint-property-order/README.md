# Stylelint Property Order Configuration

## Overview

Adds `stylelint-order` to the project and enforces a consistent CSS property ordering strategy to improve maintainability and code review quality.

## Features

- Adds `stylelint-order` plugin
- Configures CSS property ordering rules
- Applies linting to core CSS files
- Documents the convention in `CONTRIBUTING.md`
- Improves consistency across contributors

## Tech Stack

- Stylelint
- stylelint-order
- JSON configuration
- CSS

## Usage

1. Install dependencies:

```bash
npm install


2. Run Stylelint:

```bash
npm run lint:css

3. Fix ordering issues automatically if supported:

``bash
npm run lint:css -- --fix


4. Browser Support
Not browser-dependent. This is a development tooling enhancement.