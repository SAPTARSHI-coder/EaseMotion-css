# Team Capacity Allocation Bars Feature

Submits layout utility architectures and multi-segmented progress bar configurations for agile resourcing dashboards (`.ease-capacity-track`, `.ease-capacity-segment`) under issue #15331.

## Functional Mechanics

- **The Problem:** Tracking team velocity or project workload contributions using separate, traditional progress bars fills dashboards with vertical noise and fails to display relative balance within a fixed pool of resource hours.
- **The Solution:** Inline composite tracking. This layout utility structures a unified horizontal track capable of accepting adjacent, proportional segment fragments. This allows developers to construct highly readable, multi-colored distribution indicators that preserve spatial boundaries inside project planning management grids.

## Usage Layout Structure
```html
<div class="ease-capacity-track">
  <div class="ease-capacity-segment ease-capacity-engineering" style="width: 60%;"></div>
  <div class="ease-capacity-segment ease-capacity-design" style="width: 40%;"></div>
</div>
```

Closes #15331
