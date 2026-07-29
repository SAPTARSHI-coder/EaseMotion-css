# 🌾 Smart Farmer AI

> An AI-powered crop recommendation web app for Indian farmers — predicts the best crops for any city using real-time weather, NASA soil data, ICAR soil database, and Groq LLM for fertilizer, irrigation, and mandi price advice.

![Python](https://img.shields.io/badge/Python-3.10+-blue?style=flat&logo=python)
![Flask](https://img.shields.io/badge/Flask-3.x-black?style=flat&logo=flask)
![XGBoost](https://img.shields.io/badge/XGBoost-ML-orange?style=flat)
![NASA API](https://img.shields.io/badge/NASA-POWER_API-blue?style=flat)
![Groq LLM](https://img.shields.io/badge/Groq-LLaMA_3.3-purple?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 🚀 Features

- 🌱 **Crop Prediction** — XGBoost ML model trained on 22+ crops with real soil & weather inputs
- 🌤️ **Live Weather Integration** — OpenWeatherMap API for real-time temperature, humidity & wind
- 🛰️ **NASA POWER API** — Daily rainfall and soil moisture data from satellite
- 🧪 **ICAR Soil Database** — City-specific N, P, K, pH values for 100+ Indian cities
- 🤖 **Groq LLM Advice** — AI-generated fertilizer schedules, irrigation plans & mandi prices
- 🍃 **Leaf Disease Detection** — Upload a leaf image for instant AI disease diagnosis
- 📅 **12-Month Crop Calendar** — Month-wise farming activity planner
- 🏪 **Mandi Price Search** — Real-time market price analysis with 30-day forecast
- 🌐 **Multilingual Support** — English, Telugu, and Hindi
- 🗺️ **50+ Extended Crops** — Region + climate based recommendations beyond ML model

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python, Flask |
| ML Model | XGBoost, Scikit-learn |
| AI / LLM | Groq API (LLaMA 3.3 70B + LLaMA 4 Scout Vision) |
| Weather | OpenWeatherMap API |
| Soil & Rain | NASA POWER API |
| Geocoding | Geopy (Nominatim) |
| Frontend | HTML, CSS, JavaScript, Jinja2 |
| Data | ICAR Soil DB, Custom Rainfall DB (120+ cities) |

---

## 📁 Project Structure

```
Smart_Farmer_AI/
├── templates/              # HTML templates (Jinja2)
├── app.py                  # Main Flask application
├── shc_engine.py           # Soil Health Card scraper engine
├── train_model.py          # XGBoost model training script
├── xgb_model.pkl           # Trained XGBoost model
├── encoder.pkl             # Label encoder for crop classes
├── class_names.json        # Crop class names
├── Crop_recommendation.csv # Training dataset
├── requirements.txt        # Python dependencies
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/GeethaBurigalla/Smart_Farmer_AI.git
cd Smart_Farmer_AI
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Set up environment variables

Create a `.env` file in the root directory:
```
GROQ_API_KEY=your_groq_api_key_here
WEATHER_API_KEY=your_openweathermap_api_key_here
```

> 🔑 Get your free API keys:
> - Groq: https://console.groq.com
> - OpenWeatherMap: https://openweathermap.org/api

### 4. Run the application
```bash
python app.py
```

Visit `http://127.0.0.1:5000` in your browser.

---

## 🌍 How It Works

```
User enters city name
        ↓
Geocoding (Geopy) → lat/lon
        ↓
┌─────────────────────────────────┐
│  NASA POWER API → daily rain    │
│  OpenWeatherMap → temp, humidity│
│  ICAR Soil DB   → N, P, K, pH  │
│  Annual Rain DB → annual mm     │
└─────────────────────────────────┘
        ↓
XGBoost ML Model → Top 5 crop predictions
        ↓
Region + Climate Engine → 8 extended crops
        ↓
Groq LLM → Fertilizer / Irrigation / Mandi advice
        ↓
Result displayed in selected language
```

---

## 📊 ML Model Details

- **Algorithm:** XGBoost Classifier
- **Dataset:** Crop Recommendation Dataset (Kaggle)
- **Features:** N, P, K, Temperature, Humidity, pH, Rainfall
- **Classes:** 22 crops (Rice, Maize, Chickpea, Mango, Coconut, Coffee, etc.)
- **Extended:** 50+ crops via region + climate scoring engine

---

## 🌐 Supported Cities

100+ Indian cities across all states including Hyderabad, Bengaluru, Mumbai, Delhi, Chennai, Kolkata, and more — each with curated ICAR soil data and annual rainfall values.

---

## 👥 Contributors

| Name | GitHub |
|------|--------|
| Geetha Burigalla | [@GeethaBurigalla](https://github.com/GeethaBurigalla) |
| Hruthika | [@hruthika18](https://github.com/hruthika18) |

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [NASA POWER API](https://power.larc.nasa.gov/) for satellite-based soil & weather data
- [ICAR](https://icar.org.in/) for soil health reference data
- [Groq](https://groq.com/) for blazing-fast LLM inference
- [OpenWeatherMap](https://openweathermap.org/) for live weather data
- [Kaggle Crop Recommendation Dataset](https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset)

---

<p align="center">Made with ❤️ for Indian Farmers 🇮🇳</p>
