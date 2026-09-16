# Design Tokens API Export Proposal

## Description
This documentation package serves as an official architectural proposal and implementation guide for Issue #56795. Because the GSSoC bot restricts contributors from modifying core framework build scripts directly, this structural proposal is submitted via the `submissions/docs/` directory.

## Implementation Guide for Core Maintainers

To dramatically improve Developer Experience (DX) for users of React, Next.js, Styled Components, Emotion, and Tailwind, EaseMotion should automatically extract its CSS variables and export them as a JS/JSON design token API.

### 1. Create `scripts/export-tokens.mjs`
Copy and paste this Node script into your `scripts/` directory. This script uses a regex parser to extract all `--ease-*` variables from `core/variables.css` and exports them into a clean JSON structure.

```javascript
import fs from 'fs';
import path from 'path';

// Adjust path based on where variables are stored
const CSS_FILE = path.resolve('core/variables.css'); 
const OUTPUT_FILE = path.resolve('tokens.json');

if (!fs.existsSync(CSS_FILE)) {
  console.error('❌ Error: core/variables.css not found.');
  process.exit(1);
}

const css = fs.readFileSync(CSS_FILE, 'utf8');
const tokens = {};

// Regex to match CSS variables inside :root
const regex = /--ease-([a-zA-Z0-9-]+):\s*([^;]+);/g;
let match;

while ((match = regex.exec(css)) !== null) {
  const key = match[1].trim();
  const value = match[2].trim();
  tokens[key] = value;
}

// Write the parsed tokens to a JSON file
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(tokens, null, 2));
console.log('✅ Success: Design tokens exported to tokens.json');
```

### 2. Update `package.json`
Run this script automatically after the CSS build step:
```json
"scripts": {
  "build:tokens": "node scripts/export-tokens.mjs",
  "build": "npm run build:css && npm run build:tokens"
}
```

Ensure `tokens.json` is included in your `files` array inside `package.json` so it gets published to NPM.

### How End-Users Will Consume It
Developers using modern CSS-in-JS libraries can now effortlessly import EaseMotion tokens:

```javascript
import tokens from 'easemotion-css/tokens.json';
import styled from 'styled-components';

const EaseButton = styled.button`
  background-color: ${tokens['color-primary']};
  border-radius: ${tokens['radius-lg']};
  padding: ${tokens['spacing-4']};
`;
```

## Files Provided
- `demo.html` - A visual presentation of this proposal.
- `style.css` - Custom styling for the proposal documentation.
- `README.md` - This guide.
