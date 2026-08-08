import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './accordion-reorder.scss';

/**
 * EaseAccordionReorder
 * A drag‑and‑drop reorderable accordion component.
 *
 * Props:
 * - items: array of objects { id: string, title: string, content: ReactNode }
 */
export default function EaseAccordionReorder({ items: initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [openId, setOpenId] = useState(null);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(items);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setItems(reordered);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="accordion">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="accordion-item"
                  >
                    <button
                      className="accordion-header"
                      onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    >
                      {item.title}
                    </button>
                    {openId === item.id && (
                      <div className="accordion-body">{item.content}</div>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
