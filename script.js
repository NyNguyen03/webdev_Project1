function initMap() {
  var place = { lat: 41.8781, lng: -87.6298 };

  var map = new google.maps.Map(document.getElementById("map"), {
    center: place,
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position: myplace,
    map: map,
  });

  var infoWindow = new google.maps.InfoWindow({
    content:"This is Chicago, where I live in"
  });
  marker.addlistener("click", function() {
    infoWindow.open(map,marker);
  });

  var button = document.getElementById("recenter-btn");

  if(button){
    button.onclick = function(){
      map.setCenter(myPlace);
      map.setZoom(12);
    }
  }
}