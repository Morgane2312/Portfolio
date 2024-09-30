var preloader = document.getElementById("preloader");
var fadeInUp = document.getElementsByClassName("fade-in-up");

window.addEventListener("load", function() {
	preloader.style.display = "none";
	for (const element of fadeInUp) {
		element.style.animationPlayState = "running";
	}
});

function openPopup(popupId) {
	document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
	document.getElementById(popupId).style.display = 'none';
}