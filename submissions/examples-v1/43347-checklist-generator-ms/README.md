# Contribution Checklist Generator

Resolves #43347.

### What does this do?
Provides an interactive, gamified checklist that helps contributors ensure their new EaseMotion components adhere to the project's strict submission guidelines. Once all requirements are checked off, it dynamically generates formatted Markdown to be pasted into the GitHub Pull Request description.

### How is it used?
Contributors tick boxes corresponding to project rules ("Uses Native Classes", "Pure CSS", "Demo Provided"). A progress bar tracks completion. Hitting 100% triggers an `ease-fade-in-up` animation that reveals the markdown payload.

### Why is it useful?
Strict repository governance can often frustrate new open-source contributors. Providing them with a tool that both educates them on the rules and automatically generates their required paperwork drastically lowers the barrier to entry for creating high-quality Pull Requests.
