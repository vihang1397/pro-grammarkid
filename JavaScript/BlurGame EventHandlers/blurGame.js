window.onload = init;
window.onresize = reSize;

function init() {
  var blurryPics = document.getElementsByTagName("img");
  for (var i = 0; i < blurryPics.length; i++) {
    // blurryPics[i].onclick = clarify;
    blurryPics[i].onmouseover = clarify;
    blurryPics[i].onmouseout = reBlur;
  }
  //   **Close to working it ut but didn't work ** setTimeout(resetPic, 5000);
  // }
}

function clarify(eventObj) {
  var pic = eventObj.target;
  var id = pic.id;
  id = "images/" + id + ".jpg";
  pic.src = id;

  // ** This will work for onmouseclick event ** setTimeout(reBlur, 3000, pic);
}

function reBlur(eventObj) {
  var pic = eventObj.target;
  var id = pic.id;
  id = "images/" + id + "blur.jpg";
  pic.src = id;
}

function reSize() {
  var warning = document.getElementById("warning");
  warning.innerHTML = "IT TICKLES!!!";
  setTimeout(backToNormal, 4000);
}

function backToNormal() {
  var warning = document.getElementById("warning");
  warning.innerHTML = "Please resize the window!";
}

// **below code to try and get the images blurred again**
// var reset = true;
// function clarify(eventObj) {
//   var pic = eventObj.target;
//   if (reset) {
//     var id = pic.id;
//     id = "images/" + id + ".jpg";
//     pic.src = id;
//     reset = false;
//   } else {
//     var pic = eventObj.target;
//     var id = pic.id;
//     id = "images/" + id + "blur.jpg";
//     pic.src = id;
//     reset = true;
//   }
// }

// setInterval(init, 5000);

// function resetPic(eventObj) {
//   var pic = eventObj.target;
//   var id = pic.id;
//   id = "images/" + id + "blur.jpg";
//   pic.src = id;
// }

// **Code below commented to avoid alerts on live server load:**
// function TimerHandler() {
//   alert("Guess the picture and click on it to reveal the answer!");
// }

// setTimeout(TimerHandler, 5000);
