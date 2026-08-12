const table = document.getElementById('sortTable');
const tbody = document.getElementById('tableBody');
const headers = table.querySelectorAll('thead th');

function getRows() {
  return Array.from(tbody.querySelectorAll('tr'));
}

function sortRows(rows, colIndex, order) {
  const isNumeric = order === 'desc' || order === 'asc';
  const multiplier = order === 'desc' ? -1 : 1;

  rows.sort((a, b) => {
    let aVal = a.children[colIndex].textContent.trim();
    let bVal = b.children[colIndex].textContent.trim();
    if (isNumeric && /^[\d,]+$/.test(aVal.replace(/[^0-9]/g, ''))) {
      aVal = parseInt(aVal.replace(/[^0-9]/g, ''), 10);
      bVal = parseInt(bVal.replace(/[^0-9]/g, ''), 10);
    } else {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    if (aVal < bVal) return -1 * multiplier;
    if (aVal > bVal) return 1 * multiplier;
    return 0;
  });
  return rows;
}

headers.forEach((th) => {
  th.addEventListener('click', () => {
    const colIndex = Array.from(th.parentNode.children).indexOf(th);
    const current = th.dataset.sort;

    headers.forEach((h) => {
      if (h !== th) {
        h.dataset.sort = 'none';
        h.querySelector('.sort-arrow').classList.remove('active', 'desc');
      }
    });

    let next;
    if (current === 'none' || current === 'desc') {
      next = 'asc';
    } else {
      next = 'desc';
    }

    th.dataset.sort = next;
    const arrow = th.querySelector('.sort-arrow');
    arrow.classList.add('active');
    arrow.classList.toggle('desc', next === 'desc');

    const rows = getRows();
    const sorted = sortRows(rows, colIndex, next);

    sorted.forEach((row, i) => {
      row.style.transform = `translateY(${i - getRows().indexOf(row)}px)`;
    });

    requestAnimationFrame(() => {
      sorted.forEach((row) => {
        row.style.transform = '';
        tbody.appendChild(row);
      });
    });
  });
});
