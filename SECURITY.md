# Security Policy

## Supported Versions

EaseMotion CSS is a CSS-only framework. Security fixes are provided for the latest published release line only.

| Version | Supported |
|---------|-----------|
| Latest `1.x` release | Yes |
| Older releases | No |
| Unreleased forks or local modifications | Best effort only |

---

## Reporting a Vulnerability

Please report suspected vulnerabilities responsibly and privately.

Do not open a public GitHub issue, discussion, or pull request for a security report.

Preferred reporting channel:

- GitHub private vulnerability reporting: <https://github.com/SAPTARSHI-coder/EaseMotion-css/security/advisories/new>

Maintainer profile for coordination if needed:

- <https://github.com/SAPTARSHI-coder>

### What to include

Please include as much of the following as you can:

1. A clear description of the issue
2. Steps to reproduce it
3. Affected version, tag, CDN URL, or commit
4. Expected impact
5. Any suggested remediation or mitigation

### Response expectations

| Timeline | Action |
|----------|--------|
| Within 72 hours | Initial acknowledgement |
| Within 7 days | Triage and severity assessment |
| As soon as practical | Fix, mitigation, or follow-up questions |
| After a fix ships | Coordinated public disclosure when appropriate |

---

## Scope

EaseMotion CSS ships as static CSS assets, including:

- `easemotion.css` as the readable source entry point
- `easemotion.min.css` as the production bundle

The project does not ship application JavaScript, backend code, or runtime package dependencies.

Areas most relevant to security review:

| Concern | Applies? | Notes |
|---------|----------|-------|
| CSS injection via dynamically built class names | Possible | Consumer-side misuse risk |
| Dangerous `content:` usage patterns | Possible | Context-dependent |
| Malicious remote imports in distributed CSS | Audited against | Published assets should not contain remote CSS imports beyond explicit font imports |
| Supply-chain dependency attacks | Lower risk | No runtime dependencies |
| CDN tampering | Possible | Use pinned versions and SRI where possible |

---

## CSS-Specific Guidance

### Avoid dynamic class-name injection

Do not construct EaseMotion class names directly from raw user input.

```js
// Unsafe
element.className = `ease-${userInput}`;
```

Use an allowlist instead:

```js
// Safer
const allowed = ["ease-fade-in", "ease-slide-up", "ease-btn-primary"];
if (allowed.includes(userClass)) {
  element.className = userClass;
}
```

### Use pinned CDN URLs and SRI

For production CDN usage, prefer pinned versions and an integrity hash:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css@1.0.0/easemotion.min.css"
  integrity="sha384-<YOUR_HASH_HERE>"
  crossorigin="anonymous"
/>
```

You can generate an SRI hash for a specific release artifact with:

```bash
curl -s https://cdn.jsdelivr.net/npm/easemotion-css@1.0.0/easemotion.min.css | openssl dgst -sha384 -binary | openssl base64 -A
```

### Import safety

The readable source entry file uses local relative imports for framework modules:

```css
@import "./core/variables.css";
@import "./core/base.css";
@import "./core/animations.css";
@import "./core/utilities.css";
@import "./components/buttons.css";
@import "./components/cards.css";
```

Any unexpected remote import, obfuscated payload, or suspicious distributed CSS should be reported privately.

---

## Contribution Security

All framework changes are maintainer-reviewed before release. That review process helps reduce the chance of malicious CSS, unsafe distributed assets, or accidental supply-chain regressions.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the broader contribution policy.

---

## Acknowledgements

Responsible disclosure is appreciated. When appropriate, reporters may be credited in the related advisory or release notes after a fix is available.
