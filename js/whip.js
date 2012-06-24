
function playWhip(){
	document.getElementById("sound").play();
}

function addClick(){
	document.getElementById("button").addEventListener("click", playWhip);
}

document.addEventListener("DOMContentLoaded", addClick)
