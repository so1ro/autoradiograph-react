var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://geoip-db.com/jsonp";

function callback(data) {
  console.log(data);
  // country.innerHTML = data.country_name;
  // state.innerHTML = data.state;
  // city.innerHTML = data.city;
  // postal.innerHTML = data.postal;
  // latitude.innerHTML = data.latitude;
  // longitude.innerHTML = data.longitude;
  // ip.innerHTML = data.IPv4;
}
