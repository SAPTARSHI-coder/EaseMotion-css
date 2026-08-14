# DOM Event Cleanup on Component Destroy

A responsive DOM event lifecycle testing example created for issue #82025.

## Overview

This example demonstrates how a component can safely register a DOM
event listener when mounted and remove that listener when destroyed.

The test verifies that:

- A listener is registered during mount.
- Mounted components receive events.
- The listener is removed during destroy.
- Destroyed components no longer receive events.
- Calling destroy repeatedly is safe.
- Calling mount repeatedly does not create duplicate listeners.
- Final cleanup leaves zero active listeners.

## Test Coverage

### Happy Path

The component is mounted and an event is dispatched.

Expected result:

```text
Listener count = 1
Event count increases