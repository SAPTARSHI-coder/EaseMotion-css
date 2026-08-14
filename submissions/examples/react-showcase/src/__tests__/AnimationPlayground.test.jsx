/**
 * AnimationPlayground.test.jsx
 *
 * Verifies the AnimationPlayground component:
 *  - renders the animation selector dropdown
 *  - renders the preview box
 *  - applies the default animation class on mount
 *  - updates the preview box class when a new animation is selected
 *  - contains all expected animation options in the dropdown
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import AnimationPlayground, { ANIMATION_OPTIONS } from '../components/AnimationPlayground.jsx';

describe('AnimationPlayground — Rendering', () => {
  it('renders the playground container', () => {
    render(<AnimationPlayground />);
    expect(screen.getByTestId('animation-playground')).toBeInTheDocument();
  });

  it('renders the animation selector (select element)', () => {
    render(<AnimationPlayground />);
    expect(screen.getByTestId('animation-select')).toBeInTheDocument();
  });

  it('renders the animation preview box', () => {
    render(<AnimationPlayground />);
    expect(screen.getByTestId('animation-preview')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    render(<AnimationPlayground />);
    expect(screen.getByRole('heading', { name: /animation playground/i })).toBeInTheDocument();
  });
});

describe('AnimationPlayground — Default State', () => {
  it('applies the default animation class (ease-fade-in) to the preview box on mount', () => {
    render(<AnimationPlayground />);
    const preview = screen.getByTestId('animation-preview');
    expect(preview).toHaveClass('ease-fade-in');
  });

  it('shows the default animation class label inside the preview box', () => {
    render(<AnimationPlayground />);
    expect(screen.getByText('.ease-fade-in')).toBeInTheDocument();
  });

  it('has "ease-fade-in" selected in the dropdown by default', () => {
    render(<AnimationPlayground />);
    const select = screen.getByTestId('animation-select');
    expect(select).toHaveValue('ease-fade-in');
  });
});

describe('AnimationPlayground — Dropdown Options', () => {
  it('renders all animation options in the dropdown', () => {
    render(<AnimationPlayground />);
    const select = screen.getByTestId('animation-select');
    const options = Array.from(select.options).map((o) => o.value);
    const expectedValues = ANIMATION_OPTIONS.map((a) => a.value);
    expect(options).toEqual(expectedValues);
  });

  it(`renders ${ANIMATION_OPTIONS.length} animation options`, () => {
    render(<AnimationPlayground />);
    const select = screen.getByTestId('animation-select');
    expect(select.options).toHaveLength(ANIMATION_OPTIONS.length);
  });
});

describe('AnimationPlayground — Selector Interaction', () => {
  it.each(ANIMATION_OPTIONS.slice(1))(
    'updates preview class to "$value" when "$label" is selected',
    async ({ label: _label, value }) => {
      const user = userEvent.setup();
      render(<AnimationPlayground />);

      const select = screen.getByTestId('animation-select');
      await user.selectOptions(select, value);

      const preview = screen.getByTestId('animation-preview');
      expect(preview).toHaveClass(value);
    },
  );

  it('shows the newly selected class label in the preview box', async () => {
    const user = userEvent.setup();
    render(<AnimationPlayground />);

    await user.selectOptions(screen.getByTestId('animation-select'), 'ease-bounce');
    expect(screen.getByText('.ease-bounce')).toBeInTheDocument();
  });

  it('removes the old animation class when a new one is selected', async () => {
    const user = userEvent.setup();
    render(<AnimationPlayground />);

    // Default is ease-fade-in; switch to ease-shake
    await user.selectOptions(screen.getByTestId('animation-select'), 'ease-shake');
    const preview = screen.getByTestId('animation-preview');

    expect(preview).toHaveClass('ease-shake');
    expect(preview).not.toHaveClass('ease-fade-in');
  });

  it('replays the animation (remounts preview) on each selection change', async () => {
    // The replayKey causes a new DOM node — verify the DOM node reference changes.
    const user = userEvent.setup();
    render(<AnimationPlayground />);

    const previewBefore = screen.getByTestId('animation-preview');
    await user.selectOptions(screen.getByTestId('animation-select'), 'ease-zoom-in');
    const previewAfter = screen.getByTestId('animation-preview');

    // After selection, the preview box is remounted (new DOM node).
    expect(previewAfter).not.toBe(previewBefore);
  });
});
