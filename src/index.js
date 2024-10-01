function TimeUpdate() {
  // Istanbul
  const istanbulElement = document.getElementById("Istanbul");
  const istanbulDate = istanbulElement.querySelector(".world-clock__city__date");
  const istanbulTime = istanbulElement.querySelector(".world-clock__city__time");
  const istanbulTimeElement = moment().tz("Asia/Istanbul");

  istanbulDate.textContent = moment().format("Do MMMM YYYY");
  istanbulTime.innerHTML = `${istanbulTimeElement.format(
    "h:mm:ss [<small>]a[</small>]"
  )}`;

  // Berlin
  const berlinElement = document.getElementById("Berlin");
  const berlinDate = berlinElement.querySelector(".world-clock__city__date");
  const berlinTime = berlinElement.querySelector(".world-clock__city__time");
  const berlinTimeElement = moment().tz("Europe/Berlin");

  berlinDate.textContent = moment().format("Do MMMM YYYY");
  berlinTime.innerHTML = `${berlinTimeElement.format(
    "h:mm:ss [<small>]a[</small>]"
  )}`;

  // Tokyo
  const tokyoElement = document.getElementById("Tokyo");
  const tokyoDate = tokyoElement.querySelector(".world-clock__city__date");
  const tokyoTime = tokyoElement.querySelector(".world-clock__city__time");
  const tokyoTimeElement = moment().tz("Asia/Tokyo");

  tokyoDate.textContent = moment().format("Do MMMM YYYY");
  tokyoTime.innerHTML = `${tokyoTimeElement.format(
    "h:mm:ss [<small>]a[</small>]"
  )}`;
}

TimeUpdate();
setInterval(TimeUpdate, 1000);

function addCity(event) {
  function updateClock() {
    const timeZone = event.target.value;

    if (timeZone === "location") {
      timeZone = moment.tz.guess();
    }

    const cityName = timeZone.replace("/", " ").split(" ")[1];
    console.log(cityName);

    const cityTime = moment().tz(timeZone);
    const cityElement = document.getElementById("blank");
    cityElement.classList.add("world-clock__city"); // Using the full class name
    cityElement.classList.add("blink");

    let flagEmoji;
    switch (cityName) {
      case "Paris":
        flagEmoji = "🇫🇷";
        break;
      case "Johannesburg":
        flagEmoji = "🇿🇦";
        break;
      case "Lagos":
        flagEmoji = "🇳🇬";
        break;
      // Add more cases for other cities as needed
      default:
        flagEmoji = "🌎"; // Default to a generic world emoji
    }

    cityElement.innerHTML = `
      <div class="world-clock__city__info">
        <h2 class="world-clock__city__name">${cityName} ${flagEmoji}</h2>
        <div class="world-clock__city__date">${cityTime.format("Do MMM YYYY")}</div>
      </div>
      <div class="world-clock__city__time"><span>${cityTime.format(
        "h:mm:ss"
      )} ${cityTime.format("[<small>]a[</small>]")}</span></div>
    `;
  }

  setInterval(updateClock, 1000);
  document.getElementById("Reset").style.display = "block";
}

setInterval(TimeUpdate, 1000);

const citySelectElement = document.getElementById("timezone");
citySelectElement.addEventListener("change", addCity);