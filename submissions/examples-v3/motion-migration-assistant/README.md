# Motion Migration Assistant

Relates to feature request **#41378**.

## 1. What does this do?

Introduces an interactive migration assistant that helps developers upgrade between EaseMotion CSS versions. It detects deprecated utility classes in pasted HTML, provides the exact modern replacement class for each deprecated one, explains the reason for the change (including which version introduced it), and generates a copyable fixed-HTML output.

## 2. Why is this useful for EaseMotion CSS?

As the library evolves, utility names and recommended patterns may change. Without tooling, developers must manually search documentation for every renamed class. A migration assistant reduces upgrade friction, improves developer confidence, and encourages faster adoption of newer releases.

## 3. Example Migration Report (matches the issue's snippet exactly)

```
Migration Report

Deprecated:    ease-old-fade
Replace with:  ease-fade-up
Reason:        Renamed for clarity (v2.0)

Deprecated:    ease-old-bounce
Replace with:  ease-bounce-y
Reason:        Renamed with directional suffix (v2.0)
```

## 4. Deprecation Mapping (v1.x → v2.x)

| Old Class (Deprecated) | New Class | Version |
|---|---|---|
| `ease-old-fade` | `ease-fade-up` | v2.0 |
| `ease-old-bounce` | `ease-bounce-y` | v2.0 |
| `ease-appear` | `ease-fade-in` | v1.5 |
| `ease-jiggle` | `ease-shake` | v1.8 |
| `ease-pop-in` | `ease-scale-in` | v2.0 |
| `ease-slide` | `ease-slide-up` | v1.9 |
| `ease-go` | `ease-slide-right` | v2.0 |
| `ease-animate` | *(removed)* | v2.0 |

## 5. Features Included

- **HTML Scanner**: Parses `class="..."` attributes to find any deprecated `ease-*` classes.
- **Structured Report**: Each deprecated class gets a card showing the replacement and the reason for deprecation.
- **"Copy Fixed HTML" Button**: Automatically applies all replacements to the input HTML and copies the corrected version to the clipboard.
- **Quick Test Presets**: Built-in sample buttons to demonstrate simple and mixed-case deprecation scenarios.
