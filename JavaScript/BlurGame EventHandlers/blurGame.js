window.onload = init;
function init() {
  var blurryPic = document.getElementsByTagName("img");
  for (var i = 0; i < blurryPic.length; i++) {
    blurryPic[i].onclick = clarify;
  }
}

function clarify(eventObj) {
  var pic = eventObj.target;
  var id = pic.id;
  id = "images/" + id + ".jpg";
  pic.src = id;
}
