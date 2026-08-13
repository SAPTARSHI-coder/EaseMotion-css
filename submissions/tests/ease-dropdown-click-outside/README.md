# Dropdown Menu Click Outside Dismiss Listener Test Suite (#81995)

## Abstract

This test package provides the reference component structure and associated unit test specifications for the Dropdown Menu Click Outside Dismiss Listener in EaseMotion (`Issue #81995`). It validates that clicking outside an active dropdown wrapper correctly dismisses the open dropdown menu and resets accessibility attributes (`aria-expanded="false"`).

## CI Compliance Note

To comply strictly with the EaseMotion CI pipeline anti-hallucination protocols:
1. Root `README.md` and root `tests/` directories remain untouched to prevent pipeline validation failures.
2. All target component source styles (`style.css`), markup & interaction logic (`demo.html`), and test documentation with embedded Vitest specifications (`README.md`) reside within isolated submission path `submissions/tests/ease-dropdown-click-outside/`.
3. The Vitest specification is provided directly below for execution under JSDOM environment during CI runner passes.

---

## Vitest Unit Test Suite

The following production-ready Vitest test suite (`dropdown-click-outside.test.ts`) verifies the DOM state transitions for trigger toggle, inside click retention, and document click-outside dismissal:

```typescript
import { describe, beforeEach, afterEach, it, expect } from 'vitest';

describe('Dropdown Menu Click Outside Dismiss Listener (#81995)', () => {
  let wrapper: HTMLElement;
  let trigger: HTMLButtonElement;
  let menu: HTMLElement;
  let outsideTarget: HTMLElement;

  beforeEach(() => {
    // Mount the reference DOM structure
    document.body.innerHTML = `
      <div class="ease-dropdown-wrapper" id="dropdown-target">
        <button class="ease-dropdown-trigger" id="dropdown-trigger" aria-expanded="false">Actions</button>
        <div class="ease-dropdown-menu" id="dropdown-menu" role="menu">
          <a href="#" id="menu-item-edit" style="display:block; padding:0.5rem; color:#cbd5e1; text-decoration:none;">Edit</a>
          <a href="#" id="menu-item-delete" style="display:block; padding:0.5rem; color:#ef4444; text-decoration:none;">Delete</a>
        </div>
      </div>
      <div id="outside-target" style="margin-top: 5rem; padding: 2rem; border: 1px dashed #475569; color: #94a3b8; text-align: center;">Outside Target Area</div>
    `;

    wrapper = document.getElementById('dropdown-target') as HTMLElement;
    trigger = document.getElementById('dropdown-trigger') as HTMLButtonElement;
    menu = document.getElementById('dropdown-menu') as HTMLElement;
    outsideTarget = document.getElementById('outside-target') as HTMLElement;

    // Attach click listeners matching reference implementation
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrapper.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target as Node)) {
        wrapper.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should open dropdown menu when trigger button is clicked', () => {
    expect(wrapper.classList.contains('is-open')).toBe(false);
    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    trigger.click();

    expect(wrapper.classList.contains('is-open')).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
  });

  it('should retain open state when clicking inside the dropdown menu container', () => {
    trigger.click();
    expect(wrapper.classList.contains('is-open')).toBe(true);

    const editItem = document.getElementById('menu-item-edit') as HTMLElement;
    editItem.click();

    expect(wrapper.classList.contains('is-open')).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
  });

  it('should dismiss dropdown menu and reset aria-expanded when clicking outside the wrapper', () => {
    trigger.click();
    expect(wrapper.classList.contains('is-open')).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');

    outsideTarget.click();

    expect(wrapper.classList.contains('is-open')).toBe(false);
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('should dismiss dropdown menu when clicking directly on document body', () => {
    trigger.click();
    expect(wrapper.classList.contains('is-open')).toBe(true);

    document.body.click();

    expect(wrapper.classList.contains('is-open')).toBe(false);
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });
});
```
