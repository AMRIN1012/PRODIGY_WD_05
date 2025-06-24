const apiKey = "YOUR_API_KEY"; // Your real API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherCard = document.getElementById("weatherCard");

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        weatherCard.innerHTML = `<p style="color: red;">City not found: ${data.message}</p>`;
        weatherCard.classList.remove("hidden");
      } else {
        weatherCard.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>🌡 Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>☁️ Condition:</strong> ${data.weather[0].description}</p>
          <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>🌬 Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        weatherCard.classList.remove("hidden");
      }
    })
    .catch(error => {
      console.error(error);
      weatherCard.innerHTML = `<p style="color: red;">Error fetching data.</p>`;
      weatherCard.classList.remove("hidden");
    });
}
