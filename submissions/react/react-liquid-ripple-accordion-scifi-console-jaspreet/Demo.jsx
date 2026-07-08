import React from "react";
import { SciFiAccordion } from "./SciFiAccordion";

export const SciFiConsoleDemo = () => {
  const consoleData = [
    {
      id: "sec-01",
      title: "CORE REACTOR STABILITY",
      subtitle: "SYS_STATUS: ACTIVE // MODULATOR_OK",
      content: (
        <div className="terminal-data-wrapper">
          <div className="terminal-stat-row">
            <span>PLASMA_DENSITY</span>
            <span className="text-neon-cyan">84.22 TWh</span>
          </div>
          <div className="terminal-stat-row">
            <span>THERMAL_OUTPUT</span>
            <span className="text-neon-amber">4,190 K</span>
          </div>
          <p className="terminal-paragraph">
            Magnetic confinement fields are holding within baseline parameters. No anomalies reported in the primary cooling loops.
          </p>
        </div>
      )
    },
    {
      id: "sec-02",
      title: "WARP MATRIX ALIGNMENT",
      subtitle: "SYS_STATUS: DEGRADED // WARN_098",
      content: (
        <div className="terminal-data-wrapper">
          <div className="terminal-stat-row">
            <span>CHRONO_DISPLACEMENT</span>
            <span className="text-neon-rose">0.0042 ms</span>
          </div>
          <p className="terminal-paragraph text-neon-rose">
            CRITICAL: Vector drift detected in secondary emitter arrays. Realignment protocols highly recommended before system initialization.
          </p>
        </div>
      )
    },
    {
      id: "sec-03",
      title: "QUANTUM ENCRYPTION NET",
      subtitle: "SYS_STATUS: SECURE // CIPHER_AES_Q",
      content: (
        <div className="terminal-data-wrapper">
          <div className="terminal-stat-row">
            <span>NODE_SYNCHRONICITY</span>
            <span className="text-neon-cyan">99.998%</span>
          </div>
          <p className="terminal-paragraph">
            Keys refreshed dynamically via localized entanglement arrays. Network remains impenetrable to passive sniffing modules.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="scifi-layout-wrapper">
      <div className="console-hud-frame">
        <header class="hud-header">
          <div class="hud-glitch-title">CENTRAL COGNITIVE INTERFACE</div>
          <div class="hud-status-badge">ONLINE</div>
        </header>
        <SciFiAccordion items={consoleData} allowMultiple={false} />
      </div>
    </div>
  );
};