# ❤️ JanSetu - Connect Life to Life

JanSetu (LifeLink) is a modern, real-time platform concept designed to bridge the gap between blood/organ donors and patients in critical need. 

This repository contains the **Frontend UI Simulation**, demonstrating how thoughtful UI design, motion, and accessibility can be applied to platforms creating real social impact.

## ✨ Features

- **Heartbeat & Pulse UI**: Subtle animations (`@keyframes heartbeat`, pulse rings) signify life and urgency without overwhelming the user.
- **Glassmorphism Design**: Clean, modern cards that feel lightweight and approachable.
- **Live Filtering**: Search for donors by location and blood group seamlessly.
- **Emergency Alert System**: A dedicated panel for high-priority requests with urgent visual cues.
- **Request Flow Simulation**: An animated stepper UI showing the real-time process of requesting a donor (Sent → Notified → Accepted).
- **Dependency-Free**: Built entirely with plain HTML, CSS, and Vanilla JavaScript.

## 📁 File Structure

- `demo.html` - Contains the UI layout, routing logic, mock data, and DOM manipulation scripts.
- `style.css` - Contains CSS variables, glassmorphism utilities, and keyframe animations.
- `README.md` - Project documentation.

## 🚀 How to Run

1. Clone or download this repository.
2. Ensure both `demo.html` and `style.css` are in the same folder.
3. Open `demo.html` in any modern web browser. No local server or build tools required.

## 🧠 Why this UI approach?

When building apps for emergencies (like blood donation), clarity is key. 
- **Colors** are used semantically (Red = Urgent/Primary action, Green = Available).
- **Motion** is purposeful. The pulse effect draws the eye instantly to critical emergencies, while standard profile cards rely on soft hover states. 
- **Feedback** is immediate through Toast notifications and the visual Request Stepper.