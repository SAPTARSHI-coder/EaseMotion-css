# Validate Pack – Missing Required Component List

## Overview

This documentation highlights a packaging validation issue in `scripts/validate-pack.mjs`.

The validation script currently relies on a hardcoded `required` array to verify that essential CSS components are included in the package. As the framework has grown, several newer component stylesheets were added to the `components/` directory but were never included in this list.

As a result, `npm run validate:pack` can still pass even if these shipped component files are accidentally omitted from the package.

---

## Problem

The validator only checks components explicitly listed inside:

```
scripts/validate-pack.mjs
```

Because the list is manually maintained, it has become outdated.

The following component files currently exist in `components/` but are **not** validated:

- announce-bar.css
- avatar.css
- breadcrumb.css
- btn-magnetic.css
- command-palette.css
- compare-table.css
- connection-status.css
- fab.css
- forms.css
- kbd.css
- pagination.css
- password-strength.css
- progress.css
- read-more.css
- scroll-gallery.css
- skeleton.css
- tag.css
- toast.css
- view-transitions.css

This creates a packaging blind spot where missing files are not detected during validation.

---

## Expected Behavior

The package validation should fail whenever any framework component CSS file intended for distribution is missing.

This ensures:

- Complete package integrity
- Reliable release validation
- No accidental omission of framework components
- Better long-term maintainability

---

## Suggested Fix

### Option 1 (Simple)

Update the `required` array by adding every missing component file.

Pros:

- Minimal code changes
- Keeps existing validation logic

Cons:

- Requires manual updates whenever new components are added.

---

### Option 2 (Recommended)

Generate the required component list dynamically by scanning the `components/` directory instead of maintaining a hardcoded array.

Benefits:

- Automatically detects newly added components
- Eliminates maintenance overhead
- Prevents future validation gaps
- Scales with framework growth

---

## Why This Matters

Packaging validation should accurately reflect the actual framework contents.

Keeping the validator synchronized with the component directory ensures every released package contains the complete set of framework components and prevents silent packaging mistakes.

---

## Testing

Validation should confirm that:

- Every CSS file inside `components/` is validated.
- Missing component files cause `npm run validate:pack` to fail.
- Newly added components are automatically covered (if dynamic discovery is implemented).
- Existing validation behavior remains unchanged for valid packages.

---

## Files Included

- `demo.html` — Visual explanation of the validation issue
- `style.css` — Styling for the documentation demo
- `README.md` — Complete documentation and implementation notes

---

## Compatibility

- No breaking changes
- Documentation-only submission
- Compatible with existing EaseMotion CSS project structure