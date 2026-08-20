# useList

Array state with immutable helper methods — `push`, `removeAt`, `updateAt`,
`move`, `insertAt`, `filter`, `clear`, `reset` — so array updates never need
a hand-written spread expression at the call site.

## API

```js
const [list, { push, removeAt, updateAt, move, insertAt, filter, clear, reset, setList }]
  = useList(initial);
```

| Method | Signature | Description |
|---|---|---|
| `push` | `(item) => void` | Appends an item to the end. |
| `removeAt` | `(index) => void` | Removes the item at `index`. |
| `updateAt` | `(index, item) => void` | Replaces the item at `index`. |
| `move` | `(from, to) => void` | Moves an item between indices; no-op on out-of-range indices. |
| `insertAt` | `(index, item) => void` | Inserts an item at `index`, shifting later items forward. |
| `filter` | `(predicate) => void` | Keeps only items where `predicate` returns true. |
| `clear` | `() => void` | Empties the list. |
| `reset` | `() => void` | Restores the list to its original `initial` value. |
| `setList` | `Dispatch<SetStateAction<T[]>>` | Escape hatch for updates the named helpers don't cover. |

## Usage

```jsx
function TodoList() {
  const [todos, { push, removeAt, move }] = useList([{ text: 'Write README' }]);

  return (
    <>
      {todos.map((todo, i) => (
        <TodoRow key={i} todo={todo} onRemove={() => removeAt(i)} onMoveUp={() => move(i, i - 1)} />
      ))}
      <button onClick={() => push({ text: '' })}>Add</button>
    </>
  );
}
```

## Why is it useful?

Array state managed with raw `useState` invites small immutability
mistakes that are easy to introduce and hard to catch in review: calling
`.splice()`, `.sort()`, or `.reverse()` directly on the state array mutates
it in place and can leave React unaware a change happened at all (since the
array reference is unchanged), silently breaking re-renders. Centralizing
the common operations behind named methods that always build a *new* array
via `.filter`/`.map`/`.slice` removes that class of bug entirely, since
there's no longer a raw array reference for calling code to mutate
directly.

`move` in particular is easy to get subtly wrong by hand (off-by-one after
the `splice` removal shifts later indices) — implementing it once here
means every consumer of the hook gets a correct drag-reorder primitive
without re-deriving the index arithmetic themselves. `setList` is still
exposed for the rare case that needs a fully custom update the named
helpers don't cover.

## Bulk removal with filter

`filter` is the array-state equivalent of `Array.prototype.filter`, useful
for bulk removal by a condition rather than a single index:

```jsx
function TaskBoard() {
  const [tasks, { filter, updateAt }] = useList(initialTasks);

  function clearCompleted() {
    filter((task) => !task.done);
  }

  function toggleTask(index) {
    updateAt(index, { ...tasks[index], done: !tasks[index].done });
  }

  return (
    <>
      {tasks.map((task, i) => (
        <TaskRow key={task.id} task={task} onToggle={() => toggleTask(i)} />
      ))}
      <button onClick={clearCompleted}>Clear completed</button>
    </>
  );
}
```

## Inserting at a specific position

`insertAt` differs from `push` in that it accepts a target index, useful
for a "insert above/below this item" interaction that `push`
(append-only) and `move` (relocate an existing item) don't cover on their
own:

```jsx
function addSectionAfter(index) {
  insertAt(index + 1, { title: 'New Section', content: '' });
}
```

## Comparison to reaching for a state library

For a single array's worth of local component state, pulling in a full
state-management library is usually more machinery than the problem calls
for — `useList` covers the operations that come up most often (add, remove,
reorder, bulk-filter) with the same mental model as `useState`, while
staying framework-free and requiring no provider setup. It's intentionally
scoped to a single array rather than trying to be a general-purpose
immutable-update utility; nested object mutations within array items still
need the same spread-based care `updateAt`'s replacement pattern already
demonstrates.
