# 🌐 NeuralMesh

NeuralMesh is an interactive distributed-system topology
visualization that represents services, dependencies, network traffic
and infrastructure health in a real-time monitoring interface.

Instead of displaying infrastructure as a traditional list of
servers, NeuralMesh visualizes the system as a living network.

---

## ✨ Features

- Distributed service topology
- Directional service dependencies
- Animated network packets
- Service health visualization
- HEALTHY state
- DEGRADED state
- Service inspector
- Request rate metrics
- Latency metrics
- Error rate
- CPU utilization
- Memory utilization
- Active connection count
- Infrastructure event stream
- LIVE mode
- PAUSE mode
- ISOLATE mode
- RESET mode
- Responsive design
- Vanilla JavaScript
- No external JavaScript dependencies

---

## 🧠 Services

The demo contains:

- API Gateway
- Auth Service
- User Service
- Order Service
- Payment Service
- Inventory Service
- Notification Service
- Redis Cache
- PostgreSQL

---

## 🩺 Health States

### HEALTHY

Service is operating normally.

### DEGRADED

Service is operational but experiencing elevated latency,
resource usage or errors.

### DOWN

Reserved for services that are unavailable.

---

## 📡 Traffic Visualization

Animated packets move through service connections to represent
network traffic.

The topology can therefore be interpreted as:

```text
Client
  ↓
API Gateway
  ↓
Application Services
  ↓
Databases / Caches