# Fix: Trim Whitespace in Search Field

## Description

This pull request improves the search functionality by trimming unnecessary leading and trailing whitespace from the search input before filtering animations.

Previously, if a user entered extra spaces before or after an animation name (e.g., `"  fadeIn  "`), the search could fail to return the expected results. With this update, the input is sanitized using JavaScript's `trim()` method before the search is performed.

## Changes Made

- Added whitespace trimming to the search input.
- Search now ignores leading and trailing spaces.
- Improved the overall user experience without affecting existing functionality.

## Before

| User Input | Result |
|------------|--------|
| `fadeIn` | ✅ Found |
| ` fadeIn` | ❌ Not Found |
| `fadeIn ` | ❌ Not Found |
| `  fadeIn  ` | ❌ Not Found |

## After

| User Input | Result |
|------------|--------|
| `fadeIn` | ✅ Found |
| ` fadeIn` | ✅ Found |
| `fadeIn ` | ✅ Found |
| `  fadeIn  ` | ✅ Found |

## Implementation

The search query is now trimmed before processing.

```javascript
const query = animSearch.value.trim().toLowerCase();
```

## Benefits

- Improves search accuracy.
- Provides a better user experience.
- Handles accidental whitespace gracefully.
- Does not introduce any breaking changes.
- Lightweight and efficient implementation.

## Testing

Tested with the following inputs:

- `fadeIn`
- ` fadeIn`
- `fadeIn `
- `  fadeIn  `
- Empty input
- Input containing only spaces
- Mixed uppercase and lowercase input

All tests passed successfully.

## Type of Change

- [x] Bug Fix
- [ ] New Feature
- [ ] Documentation
- [ ] Refactoring
- [ ] Performance Improvement

## Screenshots

### Before

_Search failed when leading or trailing whitespace was present._

### After

_Search works correctly regardless of surrounding whitespace._

## Checklist

- [x] Code follows the project's coding style.
- [x] Tested locally.
- [x] Existing functionality remains unaffected.
- [x] No console errors introduced.
- [x] Ready for review.

---

Thank you for reviewing this pull request!