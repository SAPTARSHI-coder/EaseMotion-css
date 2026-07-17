# user-valid-user-invalid

Uses `:user-valid` and `:user-invalid` pseudo-classes for form validation that activates after user interaction, unlike `:valid`/`:invalid` which apply immediately.

## Usage

Apply `class="user-validated"` to form inputs. `:user-valid` shows green styling only after the user has interacted with the field. `:user-invalid` shows red styling after interaction. Compare with `:valid`/`:invalid` which show feedback on page load.

## Browser Support

`:user-valid` and `:user-invalid` are supported in Chrome 119+, Firefox 120+, Edge 119+, Safari 18+. In older browsers, fall back to `:valid`/`:invalid`.
