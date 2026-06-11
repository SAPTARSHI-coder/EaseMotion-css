# RBAC Auth Middleware — Admin API Demo

## What does this do?

Demonstrates a visual simulation of Role-Based Access Control (RBAC) on admin API endpoints using pure CSS. Switch between Student, Moderator, and Admin roles to see how endpoint-level authorization behaves.

## How is it used?

Open `demo.html` and click the role tabs to toggle views. Each role sees a different dashboard and set of accessible API endpoints. Blocked endpoints show a `403 Forbidden` status — mirroring what a real `authorize('admin')` middleware would return.

## Key visual features

- **Role selector tabs** — switch between Student / Moderator / Admin
- **Dashboard panels** — role-specific content sections
- **API endpoint matrix** — `GET` / `POST` / `PUT` / `DELETE` routes with live 200/403 status
- **Auth status bar** — JWT simulation with role indicator

## CSS concepts used

- `:checked` sibling selectors for role state management
- CSS custom properties for role color theming
- `@keyframes` for panel fade-in transitions
- Monospace endpoint paths for code-like aesthetics

## EaseMotion classes used

This demo imports `easemotion.css` for base styling and extends with custom RBAC-specific styles.
