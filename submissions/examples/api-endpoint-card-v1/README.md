# API Endpoint Documentation Card

A developer-friendly API documentation card for displaying endpoint information including HTTP method badges (GET, POST, PUT, DELETE), endpoint URLs, descriptions, authentication requirements, response status badges, and example response blocks.

## Classes

| Class                     | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `ease-api-card`           | Card container with entrance animation and hover border glow |
| `ease-api-header`         | Header row with method badge and URL                         |
| `ease-api-method`         | HTTP method badge                                            |
| `ease-api-method-get`     | Green badge for GET                                          |
| `ease-api-method-post`    | Blue badge for POST                                          |
| `ease-api-method-put`     | Amber badge for PUT                                          |
| `ease-api-method-delete`  | Red badge for DELETE                                         |
| `ease-api-url`            | Monospace endpoint URL                                       |
| `ease-api-desc`           | Endpoint description                                         |
| `ease-api-meta`           | Row for auth and status badges                               |
| `ease-api-auth`           | Authentication badge                                         |
| `ease-api-auth-required`  | Red auth-required badge                                      |
| `ease-api-status`         | Response status badge                                        |
| `ease-api-status-success` | Green status (2xx) badge                                     |
| `ease-api-status-error`   | Red status (4xx/5xx) badge                                   |
| `ease-api-response`       | Monospace example response block                             |

## Usage

```html
<div class="ease-api-card">
  <div class="ease-api-header">
    <span class="ease-api-method ease-api-method-get">GET</span>
    <code class="ease-api-url">/api/v1/users</code>
  </div>
  <p class="ease-api-desc">Returns a paginated list of all registered users.</p>
  <div class="ease-api-meta">
    <span class="ease-api-auth ease-api-auth-required">Auth Required</span>
    <span class="ease-api-status ease-api-status-success">200 OK</span>
  </div>
  <pre class="ease-api-response">
{
  "success": true,
  "users": [...]
}</pre
  >
</div>
```

## Why it fits EaseMotion CSS

Pure CSS API documentation card with staggered fade-in animations, subtle border glow on hover, and monospace formatting for code elements. Uses design tokens for colors and spacing. Respects `prefers-reduced-motion`.
