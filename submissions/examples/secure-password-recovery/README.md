# Secure Password Recovery (Token Lifecycle Component)

Hey there! This is an interactive multi-page frontend demonstration built for GSSoC '26. It simulates a complete, secure self-service "Forgot Password" token lifecycle using native URL parameter validation and smooth state transitions.

The goal of this component is to bridge the gap between complex backend auth logic (like token hashing and 15-minute expirations) and clean, motion-first user experiences.

---

## 📂 What's Inside?

Instead of cramming everything into a single file, the logic is split across dedicated views to mirror how a real production application handles page routing and token ingestion:

1. **`demo.html`**: The main landing portal. It introduces the component features and acts as the starting point for reviewers.
2. **`forgot-password.html`**: The token generation page. When a user enters their email, JavaScript handles creating a secure mock 64-character token and dynamically renders an "email dispatch" view containing the unique recovery link.
3. **`reset-password.html`**: The token consumption page. It reads the raw token directly from the browser's address bar using `URLSearchParams`, runs a visual validation sequence, handles password matching checks, and displays success/expiration states.
4. **`style.css`**: A shared, highly optimized stylesheet packed with focus indicators, clean hover states, and smooth keyframe entry animations (`animate-fade-in` and `animate-slide-up`).

---

## 🛠️ How to Test the Flow Locally

To see the complete token lifecycle in action, just follow these simple steps:

1. Open your browser and launch **`demo.html`**.
2. Click **Launch Interactive Demo** to head over to the forgot password screen.
3. Enter any email address and click **Send Recovery Email**.
4. A mock email preview box will smoothly slide into view at the bottom, containing a unique, dynamically built link (e.g., `reset-password.html?token=...`).
5. Click that link. You will be routed to the reset page where you'll see the system parse your specific token straight out of the URL bar before letting you update your password.

---

## 🔗 Connection to Issue #647

This component visually maps the architecture outlined in the backend specification rules:

- **Token Generation**: Mimics the `crypto.randomBytes(32)` flow.
- **Expirations**: Incorporates validation badges tracking the mock 15-minute expiration window.
- **State Cleanup**: Simulates the backend clearing out reset tokens upon a successful password update.
