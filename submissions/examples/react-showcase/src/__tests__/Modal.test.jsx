/**
 * Modal.test.jsx
 *
 * Verifies the Modal component:
 *  - is hidden (not rendered) by default when isOpen=false
 *  - becomes visible when isOpen=true
 *  - renders the provided title and children
 *  - calls onClose when the close (✕) button is clicked
 *  - calls onClose when the confirm ("Got it") button is clicked
 *  - calls onClose when the backdrop overlay is clicked
 *  - calls onClose when the Escape key is pressed
 *  - does NOT call onClose when the modal body is clicked (click stops)
 */
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Modal from '../components/Modal.jsx';

// Helper: controlled wrapper so we can toggle isOpen in tests
function ModalTestHarness({ initialOpen = false, title, children, onCloseSpy }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const handleClose = () => {
    setIsOpen(false);
    onCloseSpy?.();
  };
  return (
    <>
      <button onClick={() => setIsOpen(true)} data-testid="trigger-btn">
        Open
      </button>
      <Modal isOpen={isOpen} onClose={handleClose} title={title}>
        {children}
      </Modal>
    </>
  );
}

describe('Modal — Visibility', () => {
  it('does not render the modal dialog when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={() => {}} title="Test" />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('renders the modal dialog when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={() => {}} title="Test" />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('renders the overlay when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={() => {}} title="Test" />);
    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
  });
});

describe('Modal — Content', () => {
  it('displays the provided title', () => {
    render(<Modal isOpen={true} onClose={() => {}} title="My Dialog" />);
    expect(screen.getByText('My Dialog')).toBeInTheDocument();
  });

  it('renders children inside the modal body', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test">
        <p>Modal body content</p>
      </Modal>,
    );
    expect(screen.getByText('Modal body content')).toBeInTheDocument();
  });

  it('has proper ARIA attributes for accessibility', () => {
    render(<Modal isOpen={true} onClose={() => {}} title="ARIA Test" />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
  });
});

describe('Modal — Close Interactions', () => {
  it('calls onClose when the close (✕) button is clicked', async () => {
    const user = userEvent.setup();
    const onCloseSpy = vi.fn();
    render(<Modal isOpen={true} onClose={onCloseSpy} title="Test" />);

    await user.click(screen.getByTestId('modal-close-btn'));
    expect(onCloseSpy).toHaveBeenCalledOnce();
  });

  it('calls onClose when the confirm ("Got it") button is clicked', async () => {
    const user = userEvent.setup();
    const onCloseSpy = vi.fn();
    render(<Modal isOpen={true} onClose={onCloseSpy} title="Test" />);

    await user.click(screen.getByTestId('modal-confirm-btn'));
    expect(onCloseSpy).toHaveBeenCalledOnce();
  });

  it('calls onClose when the backdrop overlay is clicked', async () => {
    const user = userEvent.setup();
    const onCloseSpy = vi.fn();
    render(<Modal isOpen={true} onClose={onCloseSpy} title="Test" />);

    await user.click(screen.getByTestId('modal-overlay'));
    expect(onCloseSpy).toHaveBeenCalledOnce();
  });

  it('calls onClose when the Escape key is pressed', async () => {
    const user = userEvent.setup();
    const onCloseSpy = vi.fn();
    render(<Modal isOpen={true} onClose={onCloseSpy} title="Test" />);

    await user.keyboard('{Escape}');
    expect(onCloseSpy).toHaveBeenCalledOnce();
  });

  it('does NOT close (call onClose) when clicking inside the modal body', async () => {
    const user = userEvent.setup();
    const onCloseSpy = vi.fn();
    render(
      <Modal isOpen={true} onClose={onCloseSpy} title="Test">
        <p data-testid="inner-content">Do not close</p>
      </Modal>,
    );

    await user.click(screen.getByTestId('inner-content'));
    expect(onCloseSpy).not.toHaveBeenCalled();
  });
});

describe('Modal — Open/Close Toggle', () => {
  it('opens the modal when the trigger button is clicked and then closes via close button', async () => {
    const user = userEvent.setup();
    const onCloseSpy = vi.fn();
    render(
      <ModalTestHarness initialOpen={false} title="Toggle Test" onCloseSpy={onCloseSpy}>
        <p>Modal is open</p>
      </ModalTestHarness>,
    );

    // Modal should not be visible initially
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Open it
    await user.click(screen.getByTestId('trigger-btn'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal is open')).toBeInTheDocument();

    // Close it
    await user.click(screen.getByTestId('modal-close-btn'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(onCloseSpy).toHaveBeenCalledOnce();
  });
});
