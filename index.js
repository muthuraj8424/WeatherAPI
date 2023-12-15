// const API_KEY = "49b11a714f35f6ed6a80f0c39488302f";
let searchResult = document.querySelector(".userinput");
let searchbutton = document.querySelector(".searchbutton");
// let city = searchResult.value;
// temperature, atmospheric pressure, wind, humidity, precipitation, and cloudiness
let city1 =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=chennai&appid=49b11a714f35f6ed6a80f0c39488302f";

const API_KEY = "49b11a714f35f6ed6a80f0c39488302f";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
async function getWeather(city) {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
  var data = await response.json();
  console.log(data);
  console.log(Math.round(data.main.temp));
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " Celsius";
  document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".latitude").innerHTML = "lat is " + data.coord.lat;
  document.querySelector(".longitude").innerHTML = "lon is " + data.coord.lon;
  if (data.cod== '404') {
    console.log("invalid response");
  }
}
searchbutton.addEventListener("click", () => {
  getWeather(searchResult.value);
  searchResult.value = "";
});
