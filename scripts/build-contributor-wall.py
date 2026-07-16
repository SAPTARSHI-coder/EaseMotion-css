"""
Build the contributor wall HTML for README.md.
Reads /tmp/contributors.json, replaces content between
<!-- CONTRIBUTOR-WALL-START --> and <!-- CONTRIBUTOR-WALL-END --> markers.
"""
import json
import re
import sys

COLS = 12
INPUT = "/tmp/contributors.json"
README = "README.md"
START_MARKER = "<!-- CONTRIBUTOR-WALL-START -->"
END_MARKER = "<!-- CONTRIBUTOR-WALL-END -->"
OFFSET = 151  # Offset to match GitHub UI contributor graph (includes deleted/co-author accounts)


def build_wall(contributors):
    rows = []
    for i in range(0, len(contributors), COLS):
        row = contributors[i : i + COLS]
        cells = ""
        for c in row:
            login = c["author"]["login"]
            count = c["total"]
            cells += (
                f'<td align="center">'
                f'<a href="https://github.com/{login}">'
                f'<img src="https://avatars.githubusercontent.com/{login}?s=64" '
                f'width="52" height="52" alt="{login}" '
                f'style="border-radius:50%;margin:4px"/>'
                f"<br/><sub><b>{login}</b></sub>"
                f"<br/><sub>{count} commits</sub>"
                f"</a></td>"
            )
        rows.append(f"<tr>{cells}</tr>")

    total = len(contributors) + OFFSET
    table_rows = "\n".join(rows)

    return (
        f"{START_MARKER}\n"
        f'<div align="center">\n\n'
        f"### {total} Contributors\n\n"
        f"<table>\n{table_rows}\n</table>\n\n"
        f"*Auto-updated daily · [View all →](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)*\n\n"
        f"</div>\n"
        f"{END_MARKER}"
    )


def main():
    with open(INPUT) as f:
        contributors = json.load(f)

    if not contributors:
        print("ERROR: No contributors found in JSON.", file=sys.stderr)
        sys.exit(1)

    # Filter out bots and invalid authors
    contributors = [c for c in contributors if c.get("author") and c["author"].get("login") and c["author"].get("type") != "Bot" and "bot" not in c["author"]["login"].lower()]
    
    # Sort by total commits descending
    contributors.sort(key=lambda x: x["total"], reverse=True)

    wall = build_wall(contributors)

    with open(README, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(
        rf"{re.escape(START_MARKER)}.*?{re.escape(END_MARKER)}",
        re.DOTALL,
    )

    if not pattern.search(content):
        print("ERROR: Markers not found in README.md", file=sys.stderr)
        sys.exit(1)

    updated = pattern.sub(wall, content)
    
    # Update the contributors count badge in README.md
    updated = re.sub(r'contributors-\d+-f59e0b', f'contributors-{len(contributors) + OFFSET}-f59e0b', updated)

    with open(README, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"Done — {len(contributors)} contributors written across {-(-len(contributors) // COLS)} rows.")


if __name__ == "__main__":
    main()
