# SaaS API Gateway & Rate Limiting

## Issue
**Issue #20908**: Advanced: SaaS Landing — API Gateway & Rate Limiting

## Description
This submission introduces an interactive infographic/animation suitable for an API Gateway product landing page. The purely CSS-driven visualization shows data packets flowing from clients to a Gateway. It highlights a "rate limit" scenario where a red packet is blocked, triggering a temporary alert, while successful packets are passed securely to a backend database cluster.

## Implementation Details
- **HTML (`demo.html`)**: Semantic nodes representing clients, network paths, a gateway, and a server.
- **CSS (`style.css`)**: 
  - Absolute positioning and keyframe animations (`@keyframes fly`, `flyBlocked`, `flySecure`) create the illusion of flowing network packets.
  - The blocked packet scales up before fading out, simulating a rejected request.
  - A flashing `rate-limit-alert` syncs perfectly with the timing of the blocked packet.

## Verification
Open `demo.html` in a web browser. Observe the flow of packets from the clients on the left to the gateway. Notice how the red packet is blocked at the gateway, triggering the "Rate Limit Reached" alert, while the green packets continue to the server.
