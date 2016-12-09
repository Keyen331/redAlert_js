console.log("Sanity check");

function hello() {
  var changeDiv = document.getElementById("divElement");
  changeDiv.innerHTML = "wat";

};

function soFast () {
  var classElements = document.getElementByClassName('firstPeriod');
  console.log(classElements);
  classElements[0].innerHTML = "wat";
}