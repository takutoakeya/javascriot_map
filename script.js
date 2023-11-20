

const map = L.map('map').setView([33.67345752177457, 130.44140661378802], 15);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);


const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
  blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });

L.marker([33.661496, 130.489254], { icon: whiteIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.<br><img src="images/img01.png" alt="img">');


L.marker([33.771478, 130.509939], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([33.589884, 130.404711], { icon: blueIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

 
const circle = L.circle([33.67345752177457, 130.44140661378802], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3,
  radius: 1000
}).addTo(map);

circle.bindPopup("駅から1kmの範囲");


const polygon = L.polygon([
  [33.716915, 130.648727],
  [33.721484, 130.33699],
  [33.650137, 130.452476]
], {
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.3
}).addTo(map);


const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは " + e.latlng.toString() + " です")
    .openOn(map);
}

map.on('click', onMapClick);