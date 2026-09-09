const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let startDate = null;
let endDate = null;
let selecting = true;

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const dpDays0 = document.getElementById('dpDays0');
const dpDays1 = document.getElementById('dpDays1');
const dpLabel0 = document.getElementById('dpLabel0');
const dpLabel1 = document.getElementById('dpLabel1');
const dpRangeDisplay = document.getElementById('dpRangeDisplay');

function getMonthData(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  return { firstDay, daysInMonth, daysInPrev };
}

function isSameDay(a, b) {
  return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isInRange(d) {
  if (!startDate || !endDate) return false;
  const ts = d.getTime();
  return ts > startDate.getTime() && ts < endDate.getTime();
}

function renderMonth(container, label, year, month, offset) {
  const { firstDay, daysInMonth, daysInPrev } = getMonthData(year, month);
  label.textContent = `${months[month]} ${year}`;

  let html = '';
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  for (let i = 0; i < totalCells; i++) {
    let day, isOther = false;
    if (i < firstDay) {
      day = daysInPrev - firstDay + i + 1;
      isOther = true;
    } else if (i >= firstDay + daysInMonth) {
      day = i - firstDay - daysInMonth + 1;
      isOther = true;
    } else {
      day = i - firstDay + 1;
    }

    const date = isOther
      ? (i < firstDay
          ? new Date(year, month - 1, day)
          : new Date(year, month + 1, day))
      : new Date(year, month, day);

    let cls = 'dp-day';
    if (isOther) cls += ' dp-empty dp-other';
    if (isSameDay(date, today) && !isOther) cls += ' dp-today';

    if (startDate && isSameDay(date, startDate)) cls += ' dp-start';
    if (endDate && isSameDay(date, endDate)) cls += ' dp-end';
    if (isInRange(date)) cls += ' dp-range';
    if (startDate && endDate && isSameDay(startDate, endDate) && isSameDay(date, startDate)) cls += ' dp-range';

    html += `<div class="${cls}" data-y="${date.getFullYear()}" data-m="${date.getMonth()}" data-d="${date.getDate()}">${day}</div>`;
  }

  container.innerHTML = html;
}

function renderAll() {
  renderMonth(dpDays0, dpLabel0, currentYear, currentMonth, 0);
  const nextMonth = (currentMonth + 1) % 12;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  renderMonth(dpDays1, dpLabel1, nextYear, nextMonth, 1);
  updateDisplay();
}

function updateDisplay() {
  if (startDate && endDate) {
    dpRangeDisplay.textContent = `${startDate.toLocaleDateString()} — ${endDate.toLocaleDateString()}`;
  } else if (startDate) {
    dpRangeDisplay.textContent = `From ${startDate.toLocaleDateString()} — select end date`;
  } else {
    dpRangeDisplay.textContent = 'Select a date range';
  }
}

document.querySelectorAll('.dp-nav').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dir = parseInt(btn.dataset.dir, 10);
    currentMonth += dir;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderAll();
  });
});

document.getElementById('dpMonths').addEventListener('click', (e) => {
  const dayEl = e.target.closest('.dp-day:not(.dp-empty)');
  if (!dayEl) return;

  const y = parseInt(dayEl.dataset.y, 10);
  const m = parseInt(dayEl.dataset.m, 10);
  const d = parseInt(dayEl.dataset.d, 10);
  const clicked = new Date(y, m, d);

  if (selecting) {
    startDate = clicked;
    endDate = null;
    selecting = false;
  } else {
    if (clicked < startDate) {
      endDate = startDate;
      startDate = clicked;
    } else {
      endDate = clicked;
    }
    selecting = true;
  }

  renderAll();
});

document.getElementById('dpClear').addEventListener('click', () => {
  startDate = null;
  endDate = null;
  selecting = true;
  renderAll();
});

renderAll();
