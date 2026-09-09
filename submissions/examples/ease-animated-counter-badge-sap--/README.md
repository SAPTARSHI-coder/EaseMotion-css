# ease-animated-counter-badge-sap

An icon with a count badge that bumps with a scale animation every time the number increases.

## Notes
- Forced reflow (`void count.offsetWidth`) after removing/re-adding `.bump` ensures the bump replays on every increment, not just the first.
- Respects `prefers-reduced-motion`: bump animation disabled, count updates without motion.