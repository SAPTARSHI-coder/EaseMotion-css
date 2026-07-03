import React, { useMemo, useState } from 'react';
import './style.css';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startWeekday; i++) {
    cells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }
  return cells;
}

function isSameDate(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/**
 * CalendarMonthView
 * A month-view calendar grid with an animated highlight that glides
 * to the selected date.
 */
export default function CalendarMonthView({ defaultDate = new Date(), onSelect }) {
  const [viewDate, setViewDate] = useState(
    new Date(defaultDate.getFullYear(), defaultDate.getMonth(), 1)
  );
  const [selected, setSelected] = useState(defaultDate);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const cells = useMemo(() => getMonthGrid(year, month), [year, month]);

  const today = new Date();

  const goToPrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleSelect = (day) => {
    if (!day) return;
    const newDate = new Date(year, month, day);
    setSelected(newDate);
    onSelect?.(newDate);
  };

  return (
    <div className="ease-calendar">
      <div className="ease-calendar__header">
        <button
          type="button"
          className="ease-calendar__nav"
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="ease-calendar__title">
          {MONTH_NAMES[month]} {year}
        </span>
        <button
          type="button"
          className="ease-calendar__nav"
          onClick={goToNextMonth}
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="ease-calendar__weekdays">
        {WEEKDAYS.map((wd) => (
          <span key={wd} className="ease-calendar__weekday">
            {wd}
          </span>
        ))}
      </div>

      <div className="ease-calendar__grid">
        {cells.map((day, index) => {
          if (!day) {
            return <span key={`empty-${index}`} className="ease-calendar__cell ease-calendar__cell--empty" />;
          }
          const cellDate = new Date(year, month, day);
          const isSelected = isSameDate(cellDate, selected);
          const isToday = isSameDate(cellDate, today);

          return (
            <button
              key={day}
              type="button"
              className={`ease-calendar__cell ${isSelected ? 'ease-calendar__cell--selected' : ''} ${
                isToday ? 'ease-calendar__cell--today' : ''
              }`}
              onClick={() => handleSelect(day)}
            >
              <span className="ease-calendar__cell-highlight" />
              <span className="ease-calendar__cell-label">{day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
