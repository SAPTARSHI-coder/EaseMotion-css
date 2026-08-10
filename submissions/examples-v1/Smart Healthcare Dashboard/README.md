# 🏥 JanSetu 2.0 - Central Health Command

**JanSetu 2.0** upgrades the core concept of a donor platform into a fully-fledged **State Healthcare & Emergency Management Dashboard**. Designed with the visual language of a robust government portal, this UI serves as a command center for operators handling real-time health logistics.

## 🚀 Key Modules

1. **Live Overview Dashboard**
   - High-level metrics tracking ICU bed availability, active ambulances, critical emergency queues, and blood stock.
   - Live system clock and operational status indicators.
   - Real-time recent dispatch logs and automated system alerts (e.g., Hospital capacity warnings).

2. **Priority Triage Queue**
   - Incoming emergency patients are automatically sorted by severity (`Critical` > `High` > `Moderate`).
   - Pulse animations draw immediate attention to critical cases.
   - Operators can instantly assign ICUs or dispatch Advanced Life Support (ALS) units.

3. **Regional ICU Bed Matrix**
   - A grid of regional hospitals displaying real-time ICU bed capacities and oxygen supply levels.
   - Color-coded progress bars indicate stress levels (Green = Good, Orange = Low, Red = Full).
   - Instant "Reserve Bed" functionality directly from the command center.

4. **Ambulance Dispatcher**
   - Live fleet tracking of Advanced Life Support (ALS) and Basic Life Support (BLS) units.
   - A manual override dispatch form allowing operators to assign specific units to entered pincodes based on emergency type.

5. **Blood Bank Inventory System**
   - Statewide blood reserves visualized with capacity tracking.
   - Automated `Critical Shortage` alerts for specific blood groups (e.g., O- Negative).
   - Built-in form to authorize inner-hospital blood transfers logistics.

## 🎨 Design Philosophy

Unlike typical consumer-facing applications, JanSetu 2.0 is designed for **high-stakes, data-dense environments**:
- **Authoritative Colors:** Deep "Government Blue" (`#0a3d62`) establishes trust and structure.
- **Semantic Motion:** Animations are used strictly to draw attention to critical events (pulsing red borders, blinking text) rather than purely for aesthetics.
- **High Contrast & Clarity:** Sharp typography, clear borders, and defined spacing ensure operators can parse data instantly during emergencies.

## 💻 Technical Implementation

- **Architecture:** 100% Vanilla HTML, CSS, and JavaScript. No external frameworks or libraries.
- **Single File Simulation:** All logic for sorting, dispatching, and alerting is housed directly within the `demo.html` `<script>` tag.
- **Dynamic CSS State:** Uses CSS classes heavily manipulated by JS to reflect data changes (e.g., dynamically changing progress bar colors when a bed is booked).

## 🔧 How to Run

1. Download `demo.html` and `style.css`.
2. Place them in the same directory.
3. Open `demo.html` in your web browser.
4. Try clicking **"+ Simulate Emergency"** in the Priority Queue tab to see real-time triage sorting in action!