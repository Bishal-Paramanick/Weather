# 🌤️ Real-Time Weather Dashboard

A sleek, lightweight frontend web application that fetches live weather conditions for any city across the globe. Built entirely with vanilla web technologies, this project dynamically adjusts its visual layout and interface theme based on real-time temperature thresholds and local climate conditions.

---

## 🚀 Core Features

* **🔍 Global City Search:** Instantly tracks and displays updated weather metrics for any parsed city location.
* **📊 Metrics Tracked:** Extracts localized structural data point fields including:
  * City Name & Geographic Identity
  * Ambient Temperature (Rounded to nearest degree in Celsius °C)
  * Relative Humidity percentage (%)
  * Textual Weather Conditions (e.g., "broken clouds", "clear sky")
* **🎨 Dynamic Theme Interactivity:** The user interface monitors thermal metrics and injects specialized CSS layout overrides (`hot`, `cold`, `rainy`) seamlessly:
  * **Hot Layout:** Triggers when local metrics exceed **28°C** ☀️
  * **Cold Layout:** Triggers when local metrics drop below **15°C** ❄️
  * **Rainy Layout:** Automatically engages when target OpenWeatherMap configuration indexes match active rain or storm arrays 🌧️
* **🎭 Contextual Asset Emojis:** Decodes standard atmospheric condition IDs to map unique contextual symbols (`⛈️`, `🌧️`, `❄️`, `☀️`, `☁️`) dynamically.
* **⚠️ UI Error Boundaries:** Fully handles empty queries or broken HTTP network lookups by deploying active defensive visual alerts to guide user interaction.

---

## 🛠️ Technical Stack

| Category | Technology Used |
| :--- | :--- |
| **Structure** | HTML5 (Semantic Forms and Inputs) |
| **Styling** | CSS3 (Flexbox Layouts & Contextual Class States) |
| **Core Logic** | JavaScript (ES6+, Asynchronous Fetch, DOM Restructuring) |
| **Data Source** | OpenWeatherMap REST API |

---

## 💡 Code Logic & Architecture

[Image of frontend API integration data flow architecture]

The implementation utilizes modern JavaScript patterns to deliver a smooth user experience:

1. **Asynchronous API Integration:** Harnesses modern `async/await` and the native `Fetch API` to access external endpoints without interrupting UI interaction streams.
2. **Object Destructuring:** Unpacks complex JSON data nodes securely in a single declaration string:
   ```javascript
   const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;
