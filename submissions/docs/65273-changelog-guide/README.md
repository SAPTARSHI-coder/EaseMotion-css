# Changelog Contribution Guide

## Overview

This guide explains how contributors can understand and update the
EaseMotion CSS changelog consistently.

A changelog records important changes made to the project between releases.

## Changelog Format

A typical changelog entry uses a version heading followed by categorized
changes.

```md
## [1.2.0] - 2026-08-07

### Added
- Added a new animation utility.

### Changed
- Improved animation documentation.

### Fixed
- Fixed an animation timing issue.
```

## Changelog Categories

### Added

Use `Added` for new features, components, utilities, or documentation
capabilities.

Example:

```md
### Added
- Added a new animation utility.
```

### Changed

Use `Changed` when an existing feature, behavior, or documentation is
modified.

Example:

```md
### Changed
- Updated animation examples for improved clarity.
```

### Fixed

Use `Fixed` for bug fixes, corrections, and resolved documentation issues.

Example:

```md
### Fixed
- Fixed incorrect animation timing information.
```

## Version Headings

Version headings should clearly identify the release version and date.

Recommended format:

```md
## [1.2.0] - 2026-08-07
```

Use the project's existing versioning convention when adding a new release.

## Contributor Entries

Contributors should describe their contribution briefly under the
appropriate category.

Example:

```md
### Added
- Added browser compatibility documentation contributed by @contributor.
```

Keep entries concise and focused on the actual change.

## Breaking Changes

Breaking changes are modifications that may require users to update their
existing code or configuration.

Clearly identify them so users can notice them before upgrading.

Example:

```md
### Breaking Changes

- Renamed an existing utility class. Users should update references to
  the previous class name.
```

## Contribution Guidelines

When updating the changelog:

1. Follow the existing changelog format.
2. Use the correct category.
3. Include the appropriate version heading.
4. Keep descriptions concise.
5. Clearly mark breaking changes.
6. Mention contributor information when required.
7. Avoid unrelated changes.

## Why This Guide Helps

A consistent changelog makes project history easier to understand and helps
contributors and users quickly identify new features, changes, fixes, and
potentially breaking updates.

## Files

- `demo.html` - Interactive visual reference for the changelog format.
- `style.css` - Styling for the documentation example.
- `README.md` - Guide for understanding and contributing to the changelog.