# Swing QR Code Display

## 1. What does this do?
This component presents a high-contrast QR code inside an elegant suspended panel that features a natural, subtle swing animation simulating hanging corporate office signage.

## 2. How is it used?
Wrap the mount and the sign/card inside an `.ease-qr-container` element:

```html
<div class="ease-qr-container">
  <!-- Visual Hook/Bracket -->
  <div class="ease-qr-mount" aria-hidden="true"></div>

  <!-- Suspended Focusable Sign -->
  <a href="#profile" class="ease-qr-sign-wrapper" aria-label="Company directory QR code. Scan to check in.">
    <span class="ease-sr-only">Hanging sign. Press Enter to view profile details.</span>
    
    <!-- Virtual Wire -->
    <div class="ease-qr-wire" aria-hidden="true"></div>

    <!-- Main Card Body -->
    <div class="ease-qr-card">
      <div class="ease-qr-header">
        <div class="ease-qr-logo">
          <div class="ease-qr-logo-icon" aria-hidden="true"></div>
          <span>EaseMotion</span>
        </div>
        <span class="ease-qr-badge">Profile</span>
      </div>

      <!-- High-contrast QR code -->
      <div class="ease-qr-code-area">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <!-- QR Matrix Paths -->
        </svg>
      </div>

      <div class="ease-qr-footer">
        <div class="ease-qr-title">Corporate Directory</div>
        <div class="ease-qr-subtitle">Scan to check in</div>
      </div>
    </div>
  </a>
</div>
```

## 3. Why is it useful?
It fits EaseMotion's philosophy by combining premium corporate aesthetics with stable, micro-animated motion. By using a very subtle rotation pivot (`transform-origin: top center`), the swing movement adds dynamic polished polish to dashboards, contact pages, and check-in portals without making the QR code unstable or unscannable. It automatically respects dark mode, includes keyboard navigation landmarks, and supports `prefers-reduced-motion` safety configurations.
