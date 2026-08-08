# Engine Showcase: Dynamic Bezier Token AST Parsing (engine-bezier-viidhii19)

## Overview
This proof-of-concept demonstrates how the EaseMotion v1.2 AST parser can intercept function-like tokens—specifically `cubic(...)`—and compile them dynamically into inline CSS variables. This allows developers to define custom physics curves without writing custom CSS.

## AST Parser Regex Logic

Maintainers can inject the following regex pattern and mapping logic into `easemotion/engine/parser.js`.

### Regex Pattern
```javascript
const cubicRegex = /cubic\(([^)]+)\)/;
```

### AST Mapping Logic
```javascript
function parseEaseMotionTokens(element) {
    const emValue = element.getAttribute('em');
    if (!emValue) return;

    // 1. Intercept custom cubic bezier
    const cubicRegex = /cubic\(([^)]+)\)/;
    const match = emValue.match(cubicRegex);
    
    if (match) {
        // 2. Extract arguments
        const bezierArgs = match[1]; // e.g., "0.175, 0.885, 0.32, 1.275"
        
        // 3. Inject CSS Variable
        element.style.setProperty('--ease-custom-bezier', `cubic-bezier(${bezierArgs})`);
    }
    
    // 4. Proceed with standard token mapping
    const standardTokens = emValue.replace(cubicRegex, '').trim().split(/\s+/);
    standardTokens.forEach(token => {
        if (token) {
            // Map standard tokens to framework classes
            element.classList.add(`ease-kf-${token}`);
        }
    });
}
```
