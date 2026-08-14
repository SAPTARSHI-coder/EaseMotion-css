/**
 * EaseMotion CSS — Datepicker Calendar Grid Keyboard Navigation
 * ============================================================
 * A calendar grid that supports WAI-ARIA Date Picker Dialog keyboard nav:
 *   ArrowRight/ArrowLeft  — next/previous day
 *   ArrowDown/ArrowUp     — next/previous week
 *   Home/End              — first/last day of the week
 *   PageDown/PageUp       — next/previous month
 *   Enter/Space           — select the focused day
 *
 * The grid uses role="grid" with role="row" and role="gridcell" entries.
 * Each cell has aria-selected reflecting selection and tabindex roving
 * so only the focused cell is in the tab order.
 *
 * API:
 *   const d = new DatePicker(rootEl, { date });
 *   d.move(key); d.selectFocused(); d.getFocused(); d.destroy();
 * ============================================================ */

const DAYS_IN_WEEK = 7;

function ymd(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

export class DatePicker {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('DatePicker requires a root element');
    }
    this.root = root;
    this.view = new Date(options.date ? options.date : Date.now());
    if (Number.isNaN(this.view.getTime())) {
      throw new TypeError('DatePicker received an invalid date');
    }
    this.focused = new Date(this.view);
    this.selected = options.selected ? new Date(options.selected) : null;

    this.root.setAttribute('role', 'grid');
    this.root.setAttribute('aria-readonly', 'false');
    this.root.classList.add('ease-datepicker');

    this._onKeydown = this._onKeydown.bind(this);
    this.root.addEventListener('keydown', this._onKeydown);

    this.render();
  }

  render() {
    this.root.innerHTML = '';
    const year = this.view.getFullYear();
    const month = this.view.getMonth();
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() + DAYS_IN_WEEK) % DAYS_IN_WEEK;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrev = new Date(year, month, 0).getDate();

    const cells = [];
    for (let i = startOffset - 1; i >= 0; i--) {
      cells.push({ day: daysInPrev - i, month: month - 1, out: true });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ day: d, month, out: false });
    }
    while (cells.length % DAYS_IN_WEEK !== 0) {
      cells.push({ day: cells.length - (startOffset + daysInMonth) + 1, month: month + 1, out: true });
    }

    let cellIndex = 0;
    for (let r = 0; r < cells.length / DAYS_IN_WEEK; r++) {
      const row = document.createElement('div');
      row.setAttribute('role', 'row');
      for (let c = 0; c < DAYS_IN_WEEK; c++) {
        const cell = cells[cellIndex++];
        const gc = document.createElement('div');
        gc.setAttribute('role', 'gridcell');
        const cellDate = new Date(year, cell.month, cell.day);
        if (Number.isNaN(cellDate.getTime())) {
          gc.setAttribute('aria-disabled', 'true');
          gc.textContent = '';
          row.appendChild(gc);
          continue;
        }
        gc.textContent = String(cell.day);
        gc.setAttribute('data-date', ymd(year, cell.month, cell.day));
        gc.setAttribute('tabindex', sameDay(cellDate, this.focused) ? '0' : '-1');
        if (cell.out) gc.classList.add('is-outside');
        if (this.selected && sameDay(cellDate, this.selected)) {
          gc.setAttribute('aria-selected', 'true');
          gc.classList.add('is-selected');
        } else {
          gc.setAttribute('aria-selected', 'false');
        }
        if (sameDay(cellDate, this.focused)) gc.classList.add('is-focused');
        row.appendChild(gc);
      }
      this.root.appendChild(row);
    }
  }

  _cellByDate(date) {
    return this.root.querySelector(
      '[data-date="' + ymd(date.getFullYear(), date.getMonth(), date.getDate()) + '"]',
    );
  }

  _clampToMonth(date) {
    const y = date.getFullYear();
    const m = date.getMonth();
    const dim = new Date(y, m + 1, 0).getDate();
    const d = Math.min(Math.max(1, date.getDate()), dim);
    return new Date(y, m, d);
  }

  move(key) {
    let f = new Date(this.focused);
    switch (key) {
      case 'ArrowRight': f.setDate(f.getDate() + 1); break;
      case 'ArrowLeft': f.setDate(f.getDate() - 1); break;
      case 'ArrowDown': f.setDate(f.getDate() + DAYS_IN_WEEK); break;
      case 'ArrowUp': f.setDate(f.getDate() - DAYS_IN_WEEK); break;
      case 'Home': f.setDate(f.getDate() - f.getDay()); break;
      case 'End': f.setDate(f.getDate() + (DAYS_IN_WEEK - 1 - f.getDay())); break;
      case 'PageUp': {
        const ty = f.getMonth() === 0 ? f.getFullYear() - 1 : f.getFullYear();
        const tm = (f.getMonth() - 1 + 12) % 12;
        const dim = new Date(ty, tm + 1, 0).getDate();
        f = new Date(ty, tm, Math.min(f.getDate(), dim));
        break;
      }
      case 'PageDown': {
        const ty = f.getMonth() === 11 ? f.getFullYear() + 1 : f.getFullYear();
        const tm = (f.getMonth() + 1) % 12;
        const dim = new Date(ty, tm + 1, 0).getDate();
        f = new Date(ty, tm, Math.min(f.getDate(), dim));
        break;
      }
      default: return false;
    }
    // If the move crossed a month boundary, shift the view month.
    if (f.getMonth() !== this.view.getMonth() || f.getFullYear() !== this.view.getFullYear()) {
      this.view = new Date(f.getFullYear(), f.getMonth(), 1);
    }
    this.focused = this._clampToMonth(f);
    this.render();
    const cell = this._cellByDate(this.focused);
    if (cell && typeof cell.focus === 'function') cell.focus();
    return true;
  }

  selectFocused() {
    this.selected = new Date(this.focused);
    this.render();
    return ymd(this.selected.getFullYear(), this.selected.getMonth(), this.selected.getDate());
  }

  getFocused() {
    return ymd(this.focused.getFullYear(), this.focused.getMonth(), this.focused.getDate());
  }

  _onKeydown(event) {
    if (this.move(event.key)) {
      event.preventDefault();
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectFocused();
    }
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
  }
}

export default DatePicker;
