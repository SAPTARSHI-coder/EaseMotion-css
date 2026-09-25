## Mixins

### `em-font-size-adjust($aspect-ratio, $fallback-font-family)`

Adjusts aspect ratio across fallback fonts to maintain consistent visual x-height sizing within the EaseMotion token system.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$aspect-ratio` | `Number \| String` | `0.5` | Target aspect ratio (x-height to font-size ratio) or token name. |
| `$fallback-font-family` | `List \| String` | `null` | Optional font stack to apply alongside adjustment. |

#### Usage Example

```scss
@import 'mixins';

.heading {
  @include em-font-size-adjust(0.52, ('Helvetica Neue', Arial, sans-serif));
}
