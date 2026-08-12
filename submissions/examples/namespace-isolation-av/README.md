# Namespace Validation Architecture

## What does this do?
Proposes a strict namespace enforcement policy (e.g., via a Stylelint regex rule) to prevent user submissions from polluting the global CSS scope with generic class names like `.card`, `.todo`, or `.button`.

## How is it used?
By integrating a Stylelint rule into the CI pipeline:
```json
"rules": {
  "selector-class-pattern": [
    "^ease-[a-z0-9-]+$",
    {
      "message": "Expected class selector to prefix with .ease- (e.g., .ease-card)"
    }
  ]
}
```
All contributors will be automatically blocked by GitHub Actions from submitting PRs that contain non-prefixed CSS classes.

## Why is it useful?
Currently, almost all files within the `submissions/` directory (spanning 10+ folders) suffer from massive global namespace pollution. Because contributors frequently submit generic classes (like `.todo` or `.container`), these styles uncontrollably bleed out and conflict with other elements on the page if multiple examples are loaded simultaneously. 

Manually tracking down and renaming generic classes across 10+ existing folders is an endless game of whack-a-mole that creates massive git merge conflicts for open PRs. By implementing a strict namespace validation check in the pipeline, the framework becomes infinitely scalable and completely insulated against global CSS overrides moving forward.
