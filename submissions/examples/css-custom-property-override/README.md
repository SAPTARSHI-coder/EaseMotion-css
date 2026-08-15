# Documentation: CSS Custom Property Override Runtime (#86357)

Comprehensive guide, API reference, and Vitest unit test suite for the EaseMotion **CSS Custom Property Override Runtime** component (`#86357`), placed inside the required `submissions/examples/` folder.

## 🚀 Overview & Features

- **Runtime Custom Property Management:** Programmatically set, retrieve, and reset CSS custom properties on any DOM element with robust input validation.
- **Automated Vitest Suite:** Full test coverage covering happy paths, multi-hyphen edge cases, and invalid inputs.

## 🛠️ Usage Example

```typescript
import { CSSPropertyOverrideRuntime } from "./css-property-override";

const element = document.getElementById("my-card")!;
const runtime = new CSSPropertyOverrideRuntime(element);

runtime.setProperty("--em-speed", "0.4s");
console.log(runtime.getProperty("--em-speed")); // "0.4s"
runtime.resetProperty("--em-speed");
