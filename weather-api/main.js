// let todayDate = document.querySelector("#date");
// let temperature = document.querySelector("#temperature");
// let condition = document.querySelector("#condition");
// let location = document.querySelector("#location");

// window.addEventListener("load", () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//     });
//   }
// });
window.addEventListener("load", function () {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      let temperature = document.querySelector("#temperature");
      let condition = document.querySelector("#condition");
      let location = document.querySelector("#location");

      const api = `http://api.weatherapi.com/v1/current.json?key=3de5e5ec1a02466ea99101801212211&q=${long},${lat}`;

      this.fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp_c, condition } = data.current;

          temperature.textContent = temp_c;
        });
    });
  }
});
