# Security Policy

## Supported Versions

EaseMotion CSS is a **pure CSS framework** with zero JavaScript and zero dependencies. The following versions are currently supported with security updates:

| Version | Supported |
|---------|-----------|
| 1.0.x (latest) | ✅ Active |
| < 1.0.0 | ❌ No longer supported |

---

## Scope

EaseMotion CSS ships as plain `.css` files only — no JavaScript, no build scripts, no server-side code, no npm scripts that execute at install time.

The primary security concern for a CSS framework is:

| Concern | Applies? | Notes |
|---------|----------|-------|
| CSS injection via class names | ⚠️ Possible | See below |
| XSS via CSS `content:` values | ⚠️ Possible | See below |
| Malicious `@import` in published files | ✅ Audited | All imports are local-only |
| Supply chain / dependency attack | ✅ Low risk | Zero `npm` runtime dependencies |
| CDN tampering | ✅ Low risk | Use SRI hashes for production (see below) |

---

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

If you discover a security issue — including but not limited to:
- A malicious payload in a published npm version
- A CSS injection vector introduced via a contribution
- A supply chain issue with the jsDelivr CDN distribution
- A `content:` property that could be exploited in certain browser contexts

Please report it privately by **emailing the maintainer directly:**

> 📧 Report to: [@SAPTARSHI-coder](https://github.com/SAPTARSHI-coder) via GitHub's [private vulnerability reporting](https://github.com/SAPTARSHI-coder/EaseMotion-css/security/advisories/new)

### What to include in your report

```
1. Description of the vulnerability
2. Steps to reproduce it
3. Affected version(s)
4. Potential impact
5. Suggested fix (optional but appreciated)
```

### What to expect

| Timeline | Action |
|----------|--------|
| **Within 48 hours** | Acknowledgement of your report |
| **Within 7 days** | Initial assessment and severity classification |
| **Within 30 days** | Patch released (for confirmed vulnerabilities) |
| **After patch** | Public disclosure with credit to reporter |

---

## CSS-Specific Security Notes

### CSS Injection

If your application dynamically constructs EaseMotion CSS class names from user input, sanitize that input first. Example of **unsafe** usage:

```js
// ❌ UNSAFE — never build class names from raw user input
element.className = `ease-${userInput}`;
```

```js
// ✅ SAFE — use an allowlist of valid class names
const allowed = ['ease-fade-in', 'ease-slide-up', 'ease-btn-primary'];
if (allowed.includes(userClass)) {
  element.className = userClass;
}
```

### Subresource Integrity (SRI) for CDN

For production applications loading EaseMotion CSS via CDN, use Subresource Integrity to protect against CDN tampering:

```html
<!-- Generate your SRI hash at: https://www.srihash.org/ -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css@1.1.0/easemotion.css"
  integrity="sha384-<YOUR_HASH_HERE>"
  crossorigin="anonymous"
/>
```

> You can generate the correct SRI hash for any jsDelivr URL at [srihash.org](https://www.srihash.org/) or using:
> ```bash
> curl -s https://cdn.jsdelivr.net/npm/easemotion-css@1.1.0/easemotion.css | openssl dgst -sha384 -binary | openssl base64 -A
> ```

### `@import` Safety

All `@import` statements in `easemotion.css` are **local relative imports only**. They never load from external URLs:

```css
/* ✅ What we ship — all local */
@import "./core/variables.css";
@import "./core/base.css";
@import "./core/animations.css";
@import "./core/utilities.css";
@import "./components/buttons.css";
@import "./components/cards.css";
```

No version of EaseMotion CSS has ever or will ever include remote `@import` URLs in the distributed files.

---

## Contribution Security

All contributions follow a **maintainer-reviewed pipeline** — no code is merged into `core/` or `components/` without explicit review by the maintainer. This significantly reduces supply chain risk from malicious PRs.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full contribution policy.

---

## Acknowledgements

Responsible disclosure is appreciated and rewarded with:
- Public credit in the security advisory
- A mention in [CHANGELOG.md](./CHANGELOG.md) for the release that patches the issue

---

*Maintained by [Saptarshi Sadhu](https://github.com/SAPTARSHI-coder) · MIT License*
