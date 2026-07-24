# Secure Contributor Wall

This guide explains how cross-site scripting (XSS) occurs during dynamic wall building processes and provides visual DOM-based sanitization guidelines.

---

## Technical Details

Unsanitized user profile strings (names, bios, profile images) loaded dynamically via scripts can introduce Cross-Site Scripting (XSS) vectors if assigned directly to layout elements:

```javascript
// VULNERABLE: Direct string mapping allows executing scripts
element.innerHTML = `<strong>${contributor.name}</strong>`;
```

### The Remediation
Avoid rendering inputs with `innerHTML` direct assignments. Instead, build element nodes and assign values using `textContent`, which treats all strings as plain literals:

```javascript
// SECURE: Browser sanitizes values automatically
const nameElement = document.createElement('strong');
nameElement.textContent = contributor.name;
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. In the **Vulnerable Wall** column, click **Render Vulnerable Profiles** — notice that the browser executes the injected script, throwing an alert (if alerts are enabled) or breaking layout parameters.
3. In the **Secure Wall** column, click **Render Secure Profiles** — verify that the malicious HTML markup is outputted safely as plain text code, preventing script execution.
