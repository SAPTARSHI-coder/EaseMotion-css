## Progress Bar Striped Animation

A1. What does this do?
\nAdds striped animation variant for progress bars with indeterminated loading states.

A2. How is it used?
```'\ossiz:none; }
.ease-progress-animated { background-position: -1rem 0; }
  to { background-position: 0 0; }
}
@media (prefers-reduced-motion: reduce) {
  .ease-progress-animated { animation: none; }
}
