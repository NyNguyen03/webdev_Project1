function initMap() {
  var place = { lat: 41.91758961183419, lng: -87.62839891070242 };

  var map = new google.maps.Map(document.getElementById("map"), {
    center: place,
    zoom: 12

  });

  var marker = new google.maps.Marker({
    position: place,
    map: map,
    title: "North Avenue Beach"
  });

  var infoContent = document.getElementById("info-content").innerHTML;

  var infoWindow = new google.maps.InfoWindow({
  content: infoContent
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });

  var button = document.getElementById("recenter-btn");

  if(button){
    button.onclick = function(){
      map.setCenter(place);
      map.setZoom(12);
    }
  }
}