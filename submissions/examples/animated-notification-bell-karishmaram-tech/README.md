# Animated Notification Bell with Pure CSS Dropdown

Resolves tracking feature requirement #39385. Provides a zero-JavaScript interactive modular dashboard alert layout utilizing modern anchor container nesting.

## ⚙️ Core Architecture Blueprint
* **Kinetic Shake Pivoting**: Sets standard rotational transforms relative to `transform-origin: top center` to mimic real-world hanging physics rather than spinning elements on their geometric box centers.
* **Focus-Driven UI Loops**: Swaps flaky hash-based `:target` hooks with `:focus-within` parameters, preventing index link mutations or history jumping across routing channels.
* **Staggered Interpolations**: Leverages incremental element selector delay bindings (`:nth-child(n)`) triggered asynchronously through active state parameters.
