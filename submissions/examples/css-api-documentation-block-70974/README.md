# CSS API Documentation Block

A pure CSS API endpoint documentation block with a responsive parameters table.

## What does this do?
Displays an API endpoint with its HTTP method, description, and a well-formatted table for parameters including badges for required/optional fields.

## How is it used?
```html
<div class="api-doc-block">
  <div class="api-doc-header">
    <span class="api-method api-method-get">GET</span>
    <span class="api-endpoint">/api/v1/users</span>
  </div>
  <div class="api-doc-description">
    Retrieves a list of all users in the system.
  </div>
  <h3 class="api-doc-subtitle">Parameters</h3>
  <div class="api-table-wrapper">
    <table class="api-doc-table">
      <!-- table content -->
    </table>
  </div>
</div>
```

## Why is it useful?
Provides developers with a clean, responsive, and accessible way to document API endpoints directly using CSS, without needing heavy component libraries or JavaScript. Fits perfectly into technical documentation sites built with EaseMotion CSS.
