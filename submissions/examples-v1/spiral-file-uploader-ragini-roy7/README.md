# Spiral File Uploader

## What does this do?
A drag-and-drop file upload dropzone whose border spins as a rotating conic-gradient "spiral" ring, speeding up on hover/focus to invite interaction — inspired by finance dashboard patterns for uploading statements, receipts, and KYC documents.

## How is it used?

**Idle / interactive dropzone:**
```html
<label class="ease-spiral-uploader" tabindex="0">
  <input type="file" aria-label="Upload a bank statement" />
  <span class="ease-spiral-uploader-icon" aria-hidden="true">
    <!-- your upload icon SVG -->
  </span>
  <p class="ease-spiral-uploader-title">Drop your statement here</p>
  <p class="ease-spiral-uploader-hint">or click to browse — PDF, CSV up to 10MB</p>
</label>
```

**Success state** (after a file is chosen — toggle the modifier class with your own JS/framework logic):
```html
<div class="ease-spiral-uploader ease-spiral-uploader--success">
  <span class="ease-spiral-uploader-icon" aria-hidden="true">✓</span>
  <p class="ease-spiral-uploader-title">Upload complete</p>
  <p class="ease-spiral-uploader-hint">1 file ready for review</p>
  <span class="ease-spiral-uploader-file">📄 statement-june.pdf</span>
</div>
```

**Error state:**
```html
<div class="ease-spiral-uploader ease-spiral-uploader--error">
  <span class="ease-spiral-uploader-icon" aria-hidden="true">!</span>
  <p class="ease-spiral-uploader-title">Upload failed</p>
  <p class="ease-spiral-uploader-hint">File exceeds 10MB limit</p>
</div>
```

## Why is it useful?
File uploaders are a near-universal UI need, and finance/dashboard products in particular rely on them constantly (statement imports, receipt scanning, document verification). The spiral border turns an otherwise static dropzone into something that visibly "comes alive" on hover/focus — motion communicating affordance, in line with EaseMotion CSS's animation-first philosophy — while the underlying structure stays pure CSS and framework-agnostic: pair it with any JS (or none) to swap in the `--success`/`--error` modifier classes once a real upload happens. The spinning ring is built from a single `conic-gradient` + `mask` trick, so no extra markup or pseudo-elements beyond what's already in the component are required.

## Accessibility notes
- The dropzone is a `<label>` wrapping a real `<input type="file">`, so it's natively keyboard-operable and works with screen readers without any extra ARIA beyond the input's own `aria-label`.
- `:focus-within` mirrors the hover treatment, so keyboard users get the same "spiral speeds up" feedback as mouse users.
- `prefers-reduced-motion: reduce` disables both the spinning border and the icon's entrance/bob animations, leaving a clean static dropzone with full functionality intact.
- Success/error states rely on icon shape *and* color together (not color alone) to communicate status.