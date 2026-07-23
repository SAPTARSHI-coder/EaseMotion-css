/**
 * Ease Date Range Picker
 * Minimal vanilla JS handling calendar rendering and range selection state.
 * All visual transitions (popover open/close, selected-day pop) are CSS-driven
 * via the `.is-open`, `.is-start`, `.is-end`, `.is-in-range` classes.
 */
(function () {
  const container = document.querySelector(".ease-date-range");
  if (!container) return;

  const input = container.querySelector(".range-input");
  const popover = container.querySelector(".range-popover");
  const monthEls = container.querySelectorAll(".range-month");

  let viewDate = new Date();
  let rangeStart = null;
  let rangeEnd = null;

  const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const WEEKDAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

  function sameDay(a, b) {
    return a && b && a.toDateString() === b.toDateString();
  }

  function renderMonth(monthEl, monthOffset) {
    const date = new Date(viewDate.getFullYear(), viewDate.getMonth() + monthOffset, 1);
    const year = date.getFullYear();
    const month = date.getMonth();

    monthEl.querySelector(".range-month-header .month-label").textContent =
      `${MONTH_NAMES[month]} ${year}`;

    const daysGrid = monthEl.querySelector(".range-days");
    daysGrid.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // leading muted days
    for (let i = firstDay - 1; i >= 0; i--) {
      daysGrid.appendChild(makeDayBtn(daysInPrevMonth - i, true, null));
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(year, month, d);
      daysGrid.appendChild(makeDayBtn(d, false, cellDate));
    }

    // trailing muted days to fill grid
    const totalCells = daysGrid.children.length;
    const remainder = totalCells % 7;
    if (remainder !== 0) {
      for (let d = 1; d <= 7 - remainder; d++) {
        daysGrid.appendChild(makeDayBtn(d, true, null));
      }
    }
  }

  function makeDayBtn(dayNum, muted, cellDate) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "range-day";
    btn.textContent = dayNum;

    if (muted || !cellDate) {
      btn.classList.add("is-muted");
      return btn;
    }

    if (sameDay(cellDate, rangeStart)) btn.classList.add("is-start");
    if (sameDay(cellDate, rangeEnd)) btn.classList.add("is-end");
    if (rangeStart && rangeEnd && cellDate > rangeStart && cellDate < rangeEnd) {
      btn.classList.add("is-in-range");
    }

    btn.addEventListener("click", () => handleDayClick(cellDate));
    return btn;
  }

  function handleDayClick(date) {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      rangeStart = date;
      rangeEnd = null;
    } else if (date < rangeStart) {
      rangeEnd = rangeStart;
      rangeStart = date;
    } else {
      rangeEnd = date;
    }
    updateInputLabel();
    renderAll();
  }

  function updateInputLabel() {
    if (rangeStart && rangeEnd) {
      input.value = `${rangeStart.toLocaleDateString()} — ${rangeEnd.toLocaleDateString()}`;
    } else if (rangeStart) {
      input.value = `${rangeStart.toLocaleDateString()} — ...`;
    } else {
      input.value = "";
    }
  }

  function renderAll() {
    monthEls.forEach((el, i) => renderMonth(el, i));
  }

  container.querySelectorAll(".range-nav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dir = btn.dataset.dir === "next" ? 1 : -1;
      viewDate.setMonth(viewDate.getMonth() + dir);
      renderAll();
    });
  });

  input.addEventListener("click", () => {
    container.classList.toggle("is-open");
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      container.classList.remove("is-open");
    }
  });

  renderAll();
})();