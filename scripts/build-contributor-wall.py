"""
Build the contributor wall HTML for README.md.
Reads /tmp/contributors.json (list of {login, type, contributions}),
replaces content between <!-- CONTRIBUTOR-WALL-START --> and <!-- CONTRIBUTOR-WALL-END --> markers.

Source: merged PR authors — every contributor whose PR was merged appears here.
"""
import json
import re
import sys

COLS = 14
INPUT = "/tmp/contributors.json"
README = "README.md"
START_MARKER = "<!-- CONTRIBUTOR-WALL-START -->"
END_MARKER = "<!-- CONTRIBUTOR-WALL-END -->"


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
                f'width="48" height="48" alt="{login}" '
                f'style="border-radius:50%;margin:3px"/>'
                f"<br/><sub><b>{login}</b></sub>"
                f"<br/><sub>{count} PR{'s' if count != 1 else ''}</sub>"
                f"</a></td>"
            )
        rows.append(f"<tr>{cells}</tr>")

    total = len(contributors)
    table_rows = "\n".join(rows)

    return (
        f"{START_MARKER}\n"
        f'<div align="center">\n\n'
        f"### 🎉 {total} Contributors\n\n"
        f"<table>\n{table_rows}\n</table>\n\n"
        f"*Auto-updated daily from merged PRs · [View all →](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)*\n\n"
        f"</div>\n"
        f"{END_MARKER}"
    )


def main():
    with open(INPUT) as f:
        data = json.load(f)

    if not data:
        print("WARNING: Empty contributors JSON payload. Skipping contributor wall update safely.", file=sys.stderr)
        sys.exit(0)

    contributors = []
    for item in data:
        if isinstance(item, dict):
            # Format: {login, type, contributions} from merged PR fetch
            if "login" in item and "contributions" in item:
                login = item.get("login")
                user_type = item.get("type", "User")
                count = item.get("contributions", 0)
            # Legacy format: /stats/contributors payload
            elif "author" in item and item["author"]:
                login = item["author"].get("login")
                user_type = item["author"].get("type", "User")
                count = item.get("total", 0)
            else:
                continue

            if login and user_type != "Bot" and "bot" not in login.lower():
                contributors.append({
                    "author": {"login": login, "type": user_type},
                    "total": count
                })

    # Sort by PR count descending
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
    updated = re.sub(r'contributors-[\d%2B]+-f59e0b', f'contributors-{len(contributors)}%2B-f59e0b', updated)

    with open(README, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"Done — {len(contributors)} contributors written across {-(-len(contributors) // COLS)} rows.")


if __name__ == "__main__":
    main()
