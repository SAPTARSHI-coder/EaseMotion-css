# Analytics Spring Physics Modal (Pure CSS)

A metric fluid animation model using custom cubicbezier overshooting physics parameters to process animations natively.

## Features
* ⚡ **Zero JavaScript Animation States:** Models snappy elastic spring vectors purely over the URL native browser `:target` system.
* 📊 **Clean Enterprise Layout System:** Complements clean SaaS dashboards, featuring clean layouts, precise custom inputs, and soft shadow backdrops.
* 🎛️ **Exposed Configuration Nodes:** Modify the bounce profile elasticity and speed values globally via localized variables.

## Configuration Profiles
| Custom Property | Description | Default Value |
| :--- | :--- | :--- |
| `--spring-duration` | Determines velocity/speed boundaries of the mass execution. | `0.55s` |
| `--spring-curve` | Overshooting cubic-bezier values modeling mass spring variables. | `cubic-bezier(0.68, -0.6, 0.32, 1.4)` |
| `--spring-scale-start` | Setting target scale values prior to layout expansion triggers. | `0.75` |