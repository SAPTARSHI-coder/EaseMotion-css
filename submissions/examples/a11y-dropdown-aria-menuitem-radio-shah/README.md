# A11y Dropdown ARIA Menuitem Radio Focus

1. What does this do? Provides a fully WCAG 2.1 AA compliant dropdown menu implementing the W3C `menuitemradio` pattern. It includes a keyboard focus trap, Arrow key navigation, Space/Enter selection, Esc to dismiss, and explicit high-contrast support via `forced-colors: active`.
2. How is it used? This is a reference implementation. Copy the HTML structure (with exact `aria-*` and `role` attributes), the vanilla JavaScript keyboard handlers, and the `.menu-item:focus` / `forced-colors` CSS rules into your project.
3. Why is it useful? Accessibility is critical. Automated tools like axe-core cannot test keyboard navigation logic. This component serves as an audit-proven template for building custom styled dropdowns that behave exactly like native OS select menus for screen readers and keyboard users.
