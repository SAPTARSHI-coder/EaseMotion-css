# Thermostat Temperature Control (ease-thermostat-temperature-control-anshikadev)

A sleek, responsive thermostat controller interface module built on native physics transitions. The interface scales elegantly across thermal UI states—triggering calm ecosystem behaviors, high-velocity heating alerts, or chilled cooling pulses based instantly on dynamic variable adjustments.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialTemp` | `number` | `72` | The starting temperature value setting the fallback state. |
| `minTemp` | `number` | `50` | Hard floor ceiling threshold preventing lower limit configurations. |
| `maxTemp` | `number` | `90` | Hard ceiling boundary preventing peak configuration errors. |
| `unit` | `string` | `'°F'` | String token rendering metric notations alongside target values. |

## Usage Example

```jsx
import React from 'react';
import { ThermostatTemperatureControl } from './ThermostatTemperatureControl';
import './style.css'; 

const App = () => {
  return (
    <div style={{ padding: '24px' }}>
      <ThermostatTemperatureControl initialTemp="{72}" maxTemp="{85}" minTemp="{60}" unit="°C"/>
    </div>
  );
};

export default App;