# CSV Export — Admin Applicants Table

## What does this do?

Simulates the admin panel's applicant management view with a one-click "Export as CSV" button. Uses vanilla JS to generate and download a properly formatted CSV file entirely on the client side — no backend required.

## How is it used?

Open `demo.html` to see a table of 10 mock applicants with their details (Name, Email, Branch, CGPA, Skills, Status, Applied Date). Click **📥 Export as CSV** to download `applicants-software-engineer-intern.csv` directly to your downloads folder.

## Key features

- **Applicant table** with avatar initials, skill tags, and color-coded status badges
- **Summary stats** showing total / approved / pending / rejected counts
- **Client-side CSV export** — builds CSV string from table data and triggers download via `Blob` + `URL.createObjectURL`
- **Animated export button** — loading spinner state, success confirmation, auto-reset
- **Toast notification** confirming file download with row count
- **Fully client-side** — no server, no dependencies

## CSV output format

```csv
Name,Email,Branch,CGPA,Skills,Status,Applied Date
Ananya Sharma,ananya.sharma@example.com,CSE,8.9,"React, Node.js, Python",Approved,2026-05-20
...
```

## CSS concepts used

- CSS custom properties for consistent dark theme
- Badge-based status indicators (approved/pending/rejected)
- Avatar initials with primary color background
- Animated button states via class toggles
- Toast notification with slide-in/slide-out animation

## EaseMotion classes used

This demo imports `easemotion.css` for base styling and extends with custom table/export-specific styles.
