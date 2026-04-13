function initMap() {
  const place = { lat: 41.8781, lng: -87.6298 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: place,
    zoom: 12
  });
}