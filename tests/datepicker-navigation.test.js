import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('Datepicker Month Year Navigation', () => {
  let dom;
  let document;

  beforeEach(() => {
    const htmlPath = resolve(__dirname, '../submissions/examples/ease-date-range-picker-ij/demo.html');
    const jsPath = resolve(__dirname, '../submissions/examples/ease-date-range-picker-ij/demo.js');
    
    const html = readFileSync(htmlPath, 'utf8');
    const js = readFileSync(jsPath, 'utf8');

    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;

    const script = document.createElement('script');
    script.textContent = js;
    document.body.appendChild(script);
  });

  const getDisplayedMonthsAndYears = () => {
    const label0 = document.getElementById('dpLabel0').textContent;
    const label1 = document.getElementById('dpLabel1').textContent;
    return [label0, label1];
  };

  const clickNav = (selector) => {
    const btn = document.querySelector(selector);
    if (btn) btn.click();
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  it('should navigate forward and backward correctly (happy path)', () => {
    const initial = getDisplayedMonthsAndYears();
    
    clickNav('#dpMonth0 .dp-nav[data-dir="1"]'); // Next
    const forwarded = getDisplayedMonthsAndYears();
    expect(forwarded[0]).not.toBe(initial[0]);
    
    clickNav('#dpMonth0 .dp-nav[data-dir="-1"]'); // Prev
    const backwarded = getDisplayedMonthsAndYears();
    expect(backwarded[0]).toBe(initial[0]);
  });

  it('should handle crossing year boundary forwards (December to January edge case)', () => {
    const [initialText] = getDisplayedMonthsAndYears();
    const [monthName, yearStr] = initialText.split(' ');
    const currentMonthIdx = months.indexOf(monthName);
    const clicksNeeded = 11 - currentMonthIdx; // Clicks to reach December
    
    // Navigate to December
    for (let i = 0; i < clicksNeeded; i++) {
      clickNav('#dpMonth0 .dp-nav[data-dir="1"]');
    }
    
    const [decText] = getDisplayedMonthsAndYears();
    expect(decText.startsWith('December')).toBe(true);
    const decYear = parseInt(decText.split(' ')[1], 10);
    
    // Click once more to cross into January of the next year
    clickNav('#dpMonth0 .dp-nav[data-dir="1"]');
    
    const [janText] = getDisplayedMonthsAndYears();
    expect(janText).toBe(`January ${decYear + 1}`);
  });

  it('should handle crossing year boundary backwards (January to December edge case)', () => {
    const [initialText] = getDisplayedMonthsAndYears();
    const [monthName, yearStr] = initialText.split(' ');
    const currentMonthIdx = months.indexOf(monthName);
    const clicksNeeded = currentMonthIdx; // Clicks to reach January
    
    // Navigate to January
    for (let i = 0; i < clicksNeeded; i++) {
      clickNav('#dpMonth0 .dp-nav[data-dir="-1"]');
    }
    
    const [janText] = getDisplayedMonthsAndYears();
    expect(janText.startsWith('January')).toBe(true);
    const janYear = parseInt(janText.split(' ')[1], 10);
    
    // Click once more to cross into December of the previous year
    clickNav('#dpMonth0 .dp-nav[data-dir="-1"]');
    
    const [decText] = getDisplayedMonthsAndYears();
    expect(decText).toBe(`December ${janYear - 1}`);
  });

  it('should accurately display the adjacent (next) month in the second panel', () => {
    // The second panel should always be one month ahead of the first
    const [label0, label1] = getDisplayedMonthsAndYears();
    
    const idx0 = months.indexOf(label0.split(' ')[0]);
    const idx1 = months.indexOf(label1.split(' ')[0]);
    
    // If panel 0 is December (11), panel 1 should be January (0)
    if (idx0 === 11) {
      expect(idx1).toBe(0);
    } else {
      expect(idx1).toBe(idx0 + 1);
    }
  });

  it('should maintain correctness after a full year (12 months) of forward navigation (invalid inputs / extreme shifts)', () => {
    const [initialText] = getDisplayedMonthsAndYears();
    const initialYear = parseInt(initialText.split(' ')[1], 10);
    const initialMonth = initialText.split(' ')[0];
    
    // Click forward 12 times
    for (let i = 0; i < 12; i++) {
      clickNav('#dpMonth0 .dp-nav[data-dir="1"]');
    }
    
    const [newText] = getDisplayedMonthsAndYears();
    expect(newText).toBe(`${initialMonth} ${initialYear + 1}`);
  });
});
