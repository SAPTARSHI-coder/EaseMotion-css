# Version Compatibility Matrix

This document provides a compatibility reference for EaseMotion CSS across supported frameworks, browsers, and runtime environments. It helps developers verify compatibility before integrating or upgrading the library.

---

## Framework Compatibility

| Framework | Compatibility | Notes |
|-----------|--------------|------|
| React | Supported | Import the stylesheet once in the application entry file. |
| Next.js | Supported | Import global styles from the application entry. |
| Vue | Supported | Import before component-specific styles. |
| Svelte | Supported | Import in the root component or global stylesheet. |
| Astro | Supported | Import as a global stylesheet. |

---

## Browser Support

| Browser | Status |
|----------|--------|
| Chrome (Latest) | ✅ Fully Supported |
| Firefox (Latest) | ✅ Fully Supported |
| Edge (Latest) | ✅ Fully Supported |
| Safari (Latest) | ✅ Supported |
| Legacy Browsers | ⚠ Limited Support |

---

## Node.js & npm Requirements

| Tool | Recommended Version |
|------|---------------------|
| Node.js | 18+ |
| npm | 9+ |

---

## Compatibility Notes

- Use the latest stable version of EaseMotion CSS whenever possible.
- Keep your framework dependencies updated.
- Clear browser cache after upgrading.
- Test animations after version changes.

---

## Upgrade Recommendations

- Review release notes before upgrading.
- Verify framework compatibility.
- Test in a development environment.
- Replace deprecated APIs or classes if future releases introduce them.

---

## Quick Checklist

- ✔ Framework supported
- ✔ Browser supported
- ✔ Node.js version verified
- ✔ npm version verified
- ✔ Stylesheet imported correctly

This compatibility matrix serves as a quick reference for integrating and upgrading EaseMotion CSS.