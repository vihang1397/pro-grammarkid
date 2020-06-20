window.onload = init;
function init() {
  var map = document.getElementById("map");
  map.onmousemove = revealBooty;
}

function revealBooty(eventObj) {
  var map = document.getElementById("coords");
  var x = eventObj.clientX;
  var y = eventObj.clientY;
  map.innerHTML = "Map co-ordinates are: " + x + ", " + y;
}

// window.onload = init;
// function init() {
//   var map = document.getElementById("map");
//   map.onmousemove = showCoords;
// }
// function showCoords(eventObj) {
//   var map = document.getElementById("coords");
//   var x = eventObj.clientX;
//   var y = eventObj.clientY;
//   map.innerHTML = "Map coordinates: " + x + ", " + y;
// }
