# Validate Pack Forms

A demo showing a validation pack that's missing `components/forms.css` from its required files list — and the impact of that omission.

---

## What does this show?

Issue [#5744](https://github.com/anomalyco/easemotion/issues/5744) identified that the validation state pack (`form-warning-state`) includes form validation styles but does not list `components/forms.css` as a required dependency. This means users who import just the validation pack get broken form layouts.

### The problem

The validation pack's `README.md` and metadata list:

```
Required: components/validation.css
```

But NOT:

```
Required: components/forms.css
```

Without `forms.css`, form fields lack base styling — no border, padding, or layout — making validation styles appear broken.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Shows form with validation without forms.css dependency |
| `style.css` | Form and validation styles |
| `README.md` | This file |
