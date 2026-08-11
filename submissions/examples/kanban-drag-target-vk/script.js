/**
 * EaseMotion CSS: Kanban Board Card Drop Target with Drag Micro-Interactions
 * Lightweight Vanilla JS handling HTML5 Drag Lifecycle & Re-ordering Physics
 */

document.addEventListener('DOMContentLoaded', () => {
  const columns = document.querySelectorAll('.kanban-column');
  const dropZones = document.querySelectorAll('.column-drop-zone');
  const toast = document.getElementById('kanban-toast');
  const btnAddTask = document.getElementById('btn-add-task');

  let draggedCard = null;
  let placeholder = null;

  /**
   * Create placeholder gap element
   */
  function createPlaceholder() {
    if (!placeholder) {
      placeholder = document.createElement('div');
      placeholder.className = 'kanban-placeholder';
    }
    return placeholder;
  }

  /**
   * Remove placeholder element
   */
  function removePlaceholder() {
    if (placeholder && placeholder.parentNode) {
      placeholder.parentNode.removeChild(placeholder);
    }
  }

  /**
   * Recalculate column counters
   */
  function updateColumnCounts() {
    document.querySelectorAll('.kanban-column').forEach(col => {
      const colId = col.getAttribute('data-column');
      const countEl = document.getElementById(`count-${colId}`);
      const cards = col.querySelectorAll('.kanban-card');
      if (countEl) countEl.textContent = cards.length;
    });
  }

  /**
   * Show action toast
   */
  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  /**
   * Initialize Drag Events for a card element
   */
  function bindCardDragEvents(card) {
    card.addEventListener('dragstart', (e) => {
      draggedCard = card;
      card.classList.add('is-dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', card.id);

      // Delay adding invisible class for custom ghost preview effect
      setTimeout(() => {
        card.style.display = 'none';
      }, 0);
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      card.style.display = 'flex';

      // Remove drag-over states from all columns
      columns.forEach(col => col.classList.remove('drag-over'));
      removePlaceholder();

      // Trigger spring drop animation
      card.classList.add('just-dropped');
      setTimeout(() => card.classList.remove('just-dropped'), 500);

      draggedCard = null;
      updateColumnCounts();
    });
  }

  // Bind initial cards
  document.querySelectorAll('.kanban-card').forEach(bindCardDragEvents);

  /**
   * Bind Drop Zone Dragover & Drop handlers
   */
  dropZones.forEach(zone => {
    const parentColumn = zone.closest('.kanban-column');

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';

      if (!draggedCard) return;

      parentColumn.classList.add('drag-over');

      // Calculate insertion position based on mouse Y
      const afterElement = getDragAfterElement(zone, e.clientY);
      const ph = createPlaceholder();

      if (afterElement == null) {
        zone.appendChild(ph);
      } else {
        zone.insertBefore(ph, afterElement);
      }
    });

    zone.addEventListener('dragleave', (e) => {
      // Only remove if leaving column completely
      if (!parentColumn.contains(e.relatedTarget)) {
        parentColumn.classList.remove('drag-over');
        removePlaceholder();
      }
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      parentColumn.classList.remove('drag-over');

      if (draggedCard && placeholder && placeholder.parentNode) {
        placeholder.parentNode.insertBefore(draggedCard, placeholder);
        removePlaceholder();

        const colName = parentColumn.querySelector('.column-title')?.textContent || 'Column';
        const taskTitle = draggedCard.querySelector('.card-title')?.textContent || 'Task';
        showToast(`Moved "${taskTitle}" → ${colName}`);
      }
    });
  });

  /**
   * Utility to find nearest element below mouse Y
   */
  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.kanban-card:not(.is-dragging)')];

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  // Button to dynamically add sample tasks
  let sampleCount = 7;
  if (btnAddTask) {
    btnAddTask.addEventListener('click', () => {
      const todoZone = document.getElementById('zone-todo');
      if (!todoZone) return;

      const newCard = document.createElement('div');
      newCard.className = 'kanban-card just-dropped';
      newCard.setAttribute('draggable', 'true');
      newCard.id = `card-${sampleCount}`;
      newCard.setAttribute('data-task-id', sampleCount);

      newCard.innerHTML = `
        <div class="card-drag-handle" title="Drag task">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/>
            <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>
            <circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-tags">
            <span class="tag tag-feature">New</span>
            <span class="priority-badge priority-medium">Medium</span>
          </div>
          <h3 class="card-title">Sample Task #${sampleCount}</h3>
          <p class="card-desc">Newly added task card demonstrating drag micro-interactions.</p>
          <div class="card-meta">
            <div class="card-assignees">
              <div class="avatar avatar-1" title="Arpita">A</div>
            </div>
            <div class="card-due-date">Just Now</div>
          </div>
        </div>
      `;

      todoZone.prepend(newCard);
      bindCardDragEvents(newCard);
      updateColumnCounts();
      showToast(`Added Sample Task #${sampleCount} to To Do`);

      setTimeout(() => newCard.classList.remove('just-dropped'), 500);
      sampleCount++;
    });
  }

  // Initial count sync
  updateColumnCounts();
});
