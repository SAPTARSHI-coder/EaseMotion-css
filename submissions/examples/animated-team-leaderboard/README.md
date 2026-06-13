# Animated Team Leaderboard

## What does this do?
An animated leaderboard with rank badges, score bars, and a top 3 podium — all with CSS-driven fill animations.

## How is it used?
Structure the podium and rank rows as shown:

    <div class="podium">
      <div class="podium-item podium--gold">...</div>
    </div>
    <div class="leaderboard">
      <div class="rank-row rank--gold">...</div>
    </div>

Podium modifiers: `podium--gold`, `--silver`, `--bronze`. Rank modifiers: `rank--gold`, `--silver`, `--bronze`.

## Why is it useful?
Ideal for gaming dashboards, competition results, and team performance tracking — engages users with animated progress feedback.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
