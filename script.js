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

var images = [
  "images/img_3019.jpeg",
  "images/img_3049.jpeg",
  "images/img_3021.jpeg",
  "images/img_3127.jpeg",
  "images/img_6222.jpg",
  "images/img_6468.jpg",
  "images/p1010002.jpg",
  "images/p1010010.jpg"
];

var captions = [
  "Thailand - Nong Nooch Tropical Garden",
  "Thailand - Nong Nooch Tropical Garden",
  "Thailand - Nong Nooch Tropical Garden",
  "Thailand - The Ancient City",
  "California - Santa Monica Sunset",
  "California - San Diego Park",
  "California - Hollywood Sign",
  "California - Beverly Hills"
];

var index = 0;

function showImage() {
  var img = document.getElementById("slider-image");
  var caption = document.getElementById("slider-caption");

  if (img) {
    img.src = images[index];
  }

  if (caption) {
    caption.textContent = captions[index];
  }
}

function nextImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage();
}

function prevImage() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage();
}