# Signal Wake

Signal Wake is an experimental interactive telemetry visualization where active signals travel through a field and leave fading wake trails behind them.

Instead of representing activity using conventional charts, the component visualizes the movement history of each signal as a physical wake.

---

## Concept

Every signal is treated like an object travelling through a telemetry field.

As it moves, it leaves behind a fading trace.

The trace represents the recent history of the signal.

```text
                    SIGNAL
                       ●
                      ╱
                     ╱
                    ╱
───────────────╱────╯
        previous movement