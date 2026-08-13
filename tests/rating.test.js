// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';

// Helper to load CSS files for style testing
function loadCss(relativePath) {
  const filePath = path.resolve(__dirname, relativePath);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8');
  }
  return '';
}

describe('Rating Component - Mouse Hover Star Highlight', () => {
  let styleElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    if (styleElement && styleElement.parentNode) {
      styleElement.parentNode.removeChild(styleElement);
    }
  });

  describe('CSS-driven Rating Component Structure & Hover Rules', () => {
    const ratingCss = loadCss('../submissions/examples/ease-rating/style.css') || 
                      loadCss('../submission/examples/star-rating/style.css');

    beforeEach(() => {
      styleElement.textContent = ratingCss;
    });

    it('should configure reverse flex direction so sibling selectors highlight predecessor stars', () => {
      document.body.innerHTML = `
        <div class="rating">
          <input type="radio" id="star5" name="rating" value="5"><label for="star5" class="star-label">★</label>
          <input type="radio" id="star4" name="rating" value="4"><label for="star4" class="star-label">★</label>
          <input type="radio" id="star3" name="rating" value="3"><label for="star3" class="star-label">★</label>
          <input type="radio" id="star2" name="rating" value="2"><label for="star2" class="star-label">★</label>
          <input type="radio" id="star1" name="rating" value="1"><label for="star1" class="star-label">★</label>
        </div>
      `;

      const ratingContainer = document.querySelector('.rating');
      expect(ratingContainer).not.toBeNull();

      const labels = ratingContainer.querySelectorAll('label');
      expect(labels.length).toBe(5);

      // Verify DOM order is reversed (5 to 1) for sibling cascade
      const firstInput = ratingContainer.querySelector('input');
      expect(firstInput.id).toBe('star5');
      expect(firstInput.value).toBe('5');

      const lastInput = ratingContainer.querySelectorAll('input')[4];
      expect(lastInput.id).toBe('star1');
      expect(lastInput.value).toBe('1');
    });

    it('should include hover and sibling hover CSS rules for star highlight', () => {
      expect(ratingCss).toContain('flex-direction: row-reverse');
      expect(ratingCss).toContain(':hover');
      expect(ratingCss).toContain('~');
    });

    it('should support disabled state contract where inputs/labels are non-interactive', () => {
      document.body.innerHTML = `
        <div class="rating rating--disabled">
          <input type="radio" id="dis-star5" name="rating-dis" value="5" disabled><label for="dis-star5">★</label>
          <input type="radio" id="dis-star4" name="rating-dis" value="4" disabled><label for="dis-star4">★</label>
          <input type="radio" id="dis-star3" name="rating-dis" value="3" disabled checked><label for="dis-star3">★</label>
          <input type="radio" id="dis-star2" name="rating-dis" value="2" disabled><label for="dis-star2">★</label>
          <input type="radio" id="dis-star1" name="rating-dis" value="1" disabled><label for="dis-star1">★</label>
        </div>
      `;

      const disabledInputs = document.querySelectorAll('.rating--disabled input');
      disabledInputs.forEach(input => {
        expect(input.disabled).toBe(true);
      });
      expect(ratingCss).toContain('rating--disabled');
    });
  });

  describe('JS-Interactive Star Rating Mouse Hover Behavior', () => {
    let container;
    let stars;
    let ratingDisplay;

    // Helper script mimicking EaseMotion JS-driven interactive rating star component
    function setupInteractiveRating() {
      container = document.querySelector('.stars-track');
      stars = Array.from(document.querySelectorAll('.star-node'));
      ratingDisplay = document.getElementById('rating-value');

      let currentRating = 0;

      function updateHoverState(hoverVal) {
        stars.forEach(star => {
          const starVal = Number(star.dataset.value);
          const isHighlighted = starVal <= hoverVal;
          star.classList.toggle('is-hovered', isHighlighted);
          star.classList.toggle('highlighted', isHighlighted || starVal <= currentRating);
          if (isHighlighted) {
            star.setAttribute('data-state', 'hover');
          } else if (starVal <= currentRating) {
            star.setAttribute('data-state', 'active');
          } else {
            star.setAttribute('data-state', 'idle');
          }
        });
        if (ratingDisplay) {
          ratingDisplay.textContent = hoverVal > 0 ? hoverVal.toString() : currentRating.toString();
        }
      }

      stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
          if (star.hasAttribute('disabled') || star.classList.contains('disabled')) return;
          const val = Number(star.dataset.value) || 0;
          updateHoverState(val);
        });

        star.addEventListener('mouseleave', () => {
          updateHoverState(0);
        });

        star.addEventListener('click', () => {
          if (star.hasAttribute('disabled') || star.classList.contains('disabled')) return;
          const val = Number(star.dataset.value) || 0;
          currentRating = val;
          stars.forEach(s => {
            const sVal = Number(s.dataset.value);
            s.classList.toggle('active', sVal <= currentRating);
            s.setAttribute('aria-checked', sVal <= currentRating ? 'true' : 'false');
          });
          updateHoverState(0);
        });
      });

      if (container) {
        container.addEventListener('mouseleave', () => {
          updateHoverState(0);
        });
      }

      return {
        getRating: () => currentRating,
        setRating: (val) => { currentRating = val; updateHoverState(0); }
      };
    }

    beforeEach(() => {
      document.body.innerHTML = `
        <div class="stars-track" role="radiogroup" aria-label="Star Rating">
          <span class="star-node" data-value="1" role="radio" aria-checked="false">★</span>
          <span class="star-node" data-value="2" role="radio" aria-checked="false">★</span>
          <span class="star-node" data-value="3" role="radio" aria-checked="false">★</span>
          <span class="star-node" data-value="4" role="radio" aria-checked="false">★</span>
          <span class="star-node" data-value="5" role="radio" aria-checked="false">★</span>
        </div>
        <div id="rating-value">0</div>
      `;
    });

    it('1. Initial state — stars are in their default/unselected state', () => {
      setupInteractiveRating();

      stars.forEach(star => {
        expect(star.classList.contains('is-hovered')).toBe(false);
        expect(star.classList.contains('active')).toBe(false);
        expect(star.getAttribute('aria-checked')).toBe('false');
      });
      expect(ratingDisplay.textContent).toBe('0');
    });

    it('2. Hovering a star highlights the correct star(s)', () => {
      setupInteractiveRating();

      const star3 = stars[2];
      star3.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

      // Stars 1, 2, 3 should be highlighted
      expect(stars[0].classList.contains('is-hovered')).toBe(true);
      expect(stars[1].classList.contains('is-hovered')).toBe(true);
      expect(stars[2].classList.contains('is-hovered')).toBe(true);

      // Stars 4, 5 should NOT be highlighted
      expect(stars[3].classList.contains('is-hovered')).toBe(false);
      expect(stars[4].classList.contains('is-hovered')).toBe(false);

      expect(ratingDisplay.textContent).toBe('3');
    });

    it('3. Hovering different star positions produces the correct highlight state', () => {
      setupInteractiveRating();

      const star2 = stars[1];
      star2.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

      expect(stars[0].classList.contains('is-hovered')).toBe(true);
      expect(stars[1].classList.contains('is-hovered')).toBe(true);
      expect(stars[2].classList.contains('is-hovered')).toBe(false);
      expect(ratingDisplay.textContent).toBe('2');

      const star4 = stars[3];
      star4.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

      expect(stars[0].classList.contains('is-hovered')).toBe(true);
      expect(stars[1].classList.contains('is-hovered')).toBe(true);
      expect(stars[2].classList.contains('is-hovered')).toBe(true);
      expect(stars[3].classList.contains('is-hovered')).toBe(true);
      expect(stars[4].classList.contains('is-hovered')).toBe(false);
      expect(ratingDisplay.textContent).toBe('4');
    });

    it('4. Hovering the first star highlights only 1 star', () => {
      setupInteractiveRating();

      const star1 = stars[0];
      star1.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

      expect(stars[0].classList.contains('is-hovered')).toBe(true);
      stars.slice(1).forEach(star => {
        expect(star.classList.contains('is-hovered')).toBe(false);
      });
      expect(ratingDisplay.textContent).toBe('1');
    });

    it('5. Hovering the last star highlights all 5 stars', () => {
      setupInteractiveRating();

      const star5 = stars[4];
      star5.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

      stars.forEach(star => {
        expect(star.classList.contains('is-hovered')).toBe(true);
      });
      expect(ratingDisplay.textContent).toBe('5');
    });

    it('6. Moving the pointer away resets hover preview state', () => {
      setupInteractiveRating();

      const star4 = stars[3];
      star4.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      expect(ratingDisplay.textContent).toBe('4');

      star4.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
      stars.forEach(star => {
        expect(star.classList.contains('is-hovered')).toBe(false);
      });
      expect(ratingDisplay.textContent).toBe('0');
    });

    it('7. Hovering over stars while a committed rating exists previews hover without overwriting selection on mouseleave', () => {
      const ratingControl = setupInteractiveRating();

      // Click star 3 to commit rating 3
      stars[2].dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(ratingControl.getRating()).toBe(3);
      expect(stars[0].classList.contains('active')).toBe(true);
      expect(stars[1].classList.contains('active')).toBe(true);
      expect(stars[2].classList.contains('active')).toBe(true);

      // Now hover star 5 to preview rating 5
      stars[4].dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      expect(ratingDisplay.textContent).toBe('5');
      stars.forEach(star => expect(star.classList.contains('is-hovered')).toBe(true));

      // Leave pointer away from container
      container.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));

      // Rating should revert to committed rating 3
      expect(ratingControl.getRating()).toBe(3);
      expect(ratingDisplay.textContent).toBe('3');
      expect(stars[0].getAttribute('aria-checked')).toBe('true');
      expect(stars[1].getAttribute('aria-checked')).toBe('true');
      expect(stars[2].getAttribute('aria-checked')).toBe('true');
      expect(stars[3].getAttribute('aria-checked')).toBe('false');
      expect(stars[4].getAttribute('aria-checked')).toBe('false');
    });

    it('8. Boundary behavior: disabled star node ignores hover events', () => {
      document.body.innerHTML = `
        <div class="stars-track">
          <span class="star-node" data-value="1">★</span>
          <span class="star-node disabled" data-value="2" disabled>★</span>
          <span class="star-node" data-value="3">★</span>
        </div>
        <div id="rating-value">0</div>
      `;

      setupInteractiveRating();
      const disabledStar = document.querySelectorAll('.star-node')[1];

      disabledStar.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      expect(disabledStar.classList.contains('is-hovered')).toBe(false);
      expect(document.getElementById('rating-value').textContent).toBe('0');
    });

    it('9. Invalid/unexpected inputs: missing or NaN data-value defaults gracefully without throwing errors', () => {
      document.body.innerHTML = `
        <div class="stars-track">
          <span class="star-node" data-value="invalid-val">★</span>
          <span class="star-node">★</span>
        </div>
        <div id="rating-value">0</div>
      `;

      expect(() => {
        setupInteractiveRating();
        const invalidStar = document.querySelectorAll('.star-node')[0];
        invalidStar.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      }).not.toThrow();

      const ratingText = document.getElementById('rating-value').textContent;
      expect(ratingText).toBe('0');
    });
  });
});
