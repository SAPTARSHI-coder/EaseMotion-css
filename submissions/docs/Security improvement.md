# Security Policy

The EaseMotion-css team takes the security of our framework, components, and users seriously. This document outlines our policy for reporting and handling potential security vulnerabilities responsibly.

---

## Supported Versions

We actively provide security updates and patches for the current major release cycle. Please ensure you are using the latest stable release before filing a report.

| Version | Supported          |
| ------- | ------------------ |
| v1.x    | ✅ Active Support  |
| < v1.0  | ❌ Unsupported     |

---

## Threat Model

EaseMotion CSS is a static CSS-only framework. It does not execute JavaScript, make network requests, or access browser APIs such as cookies or local storage.

Because the framework contains only static stylesheets, its attack surface is intentionally minimal. Most security risks arise from how applications integrate the framework rather than from the framework itself.

EaseMotion CSS itself cannot:

- Execute arbitrary code
- Access cookies or local storage
- Perform HTTP requests
- Execute scripts during installation or runtime

Developers should follow secure coding practices when dynamically applying CSS classes or selectors.

---

## Security Best Practices
To ensure a secure deployment of EaseMotion CSS, we recommend the following:

- Pin your project to a specific EaseMotion CSS version.
- Serve the framework over HTTPS.
- Use Subresource Integrity (SRI) when loading from a CDN.
- Keep the framework updated to the latest supported release.
- Never construct CSS class names or selectors directly from untrusted user input.
- Validate or allowlist any dynamically assigned class names.

Following these recommendations helps reduce the risk of CSS injection and supply-chain related issues.

---

## Out of Scope

The following are generally **not considered security vulnerabilities** in EaseMotion CSS:

- Browser-specific rendering or implementation bugs.
- Vulnerabilities in applications that use EaseMotion CSS.
- Misconfigured Content Security Policies (CSP).
- Issues introduced by modified, forked, or third-party builds of the framework.
- Styling or visual rendering issues that do not have a security impact.

If you are unsure whether an issue falls within scope, please submit a private vulnerability report.

---

## Reporting a Vulnerability

If you discover a security vulnerability or weakness within this repository, **please do not open a public GitHub issue.** Publicly disclosing vulnerabilities can expose projects using this framework to unnecessary risks.

Instead, please report security vulnerabilities responsibly by reaching out directly to the repository maintainers. 

### Guidelines for Submitting a Report:
1. **Description:** Detailed description of the vulnerability and its potential impact.
2. **Steps to Reproduce:** Clear, step-by-step instructions or a minimal proof-of-concept (PoC) to reproduce the behavior.
3. **Environment Details:** Browser version, OS, and any specific configuration details where the bug occurs.

---

## Our Response Process

Upon receiving a valid vulnerability report, the maintainers will prioritize an evaluation and coordinate a fix:

* **Acknowledgment:** We will acknowledge receipt of your report within 48–72 hours.
* **Triage & Patching:** Our team will investigate the scope of the impact and work on a clean, stable patch.
* **Disclosure:** Once a fix is verified and deployed, a security advisory or release update will be publicly logged to protect the community.

Thank you for helping keep EaseMotion-css secure and accessible for everyone!