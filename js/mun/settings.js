function updateComm() {
	var input = document.getElementById("commInput").value;
	if (input!=null) {
		document.getElementById("maintitle").innerHTML = input;
	}
}

function updateMC() {
	var input = document.getElementById("mcInput").value;
	if (input!=null) {
		document.getElementById("caucustitle").innerHTML = input;
	}
}