# Architectural Blueprint: Node Compatibility Audit (#40062)

### What this demonstrates
This submission provides a tracking sandbox and isolated environment testing blueprint for issue #40062, where the root `package.json` specifies Node `>=18` but underlying locked dev dependencies require Node `20+`.

### Impact Matrix
- **Root Target:** Node >=18
- **Locked Reality:** Node ^20.19.0 || ^22.12.0 || >=24.0.0
- **Problem Packages:** `@asamuzakjp/css-color`, `@asamuzakjp/dom-selector`, `data-urls`, and `@rolldown/binding-*`.

### The Blueprint Fix
To align the runtime and development environments cleanly, the repository needs to update the root configuration layout to:
```json
"engines": {
  "node": ">=20.19.0"
}