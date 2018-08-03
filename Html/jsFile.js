
function changeColor(){
	document.getElementById("divT").style.backgroundColor = "yellow";
}

setInterval(keepChangeing,3000);
function keepChangeing(){
	var ele = document.getElementById('divF')
	ele.style.backgroundColor = randomColor();

}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}