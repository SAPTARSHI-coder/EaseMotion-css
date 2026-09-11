## 📋 Issue Description

### Is your feature request related to a problem?
The `submissions/examples/` directory lacks a **calendar/scheduler** example that showcases monthly grids, event indicators, timeline views, and date selection UI. Calendar apps are extremely common and would serve as an excellent reference for scheduling interfaces.

### Describe the solution you'd like
I would like to add an **Animated Calendar Scheduler** example that demonstrates:
- **Monthly calendar**: Grid view with event dots
- **Today indicator**: Pulsing highlight on current date
- **Schedule timeline**: Today's events with time slots
- **Upcoming events**: List with date badges
- **Weekly stats**: Mini statistics display
- **Event categories**: Color-coded legend
- **Staggered entrance**: Sequential reveal of all sections

### Why is this useful?
Calendar interfaces combine many scheduling UI patterns. This example will show developers how to:
1. Build monthly calendar grids with CSS Grid
2. Create event indicator systems with color coding
3. Implement timeline views for daily schedules
4. Design upcoming event lists
5. Compose a complete calendar app with EaseMotion

### Proposed File Structure
```text
submissions/examples/animated-calendar-scheduler/
├── demo.html
├── style.css
└── README.md