const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

function invertirYRotar(id) {
	document.getElementById(id).classList.remove('invertir');
	document.getElementById(id).classList.toggle('invertirYCambiarColor');
	document.getElementById(id).classList.toggle('rotar3d');
}

function invertir(id) {
	document.getElementById(id).classList.toggle('invertir');
}

window.onload = function() {
	// Initialize Cloud Firestore through Firebase
	firebase.initializeApp({
		apiKey: '### FIREBASE API KEY ###',
		authDomain: '### FIREBASE AUTH DOMAIN ###',
		projectId: '### CLOUD FIRESTORE PROJECT ID ###'
	});

	var db = firebase.firestore();
	
	$('#body').addClass('loaded');
	$('#cargando').addClass('oculto');
	var myModal = document.getElementById('myModal');
	var noticed = localStorage.getItem('noticed');
	if (noticed === null) {
		$('#myModal').modal('show');
	}
	myModal.addEventListener('shown.bs.modal', function() {
		localStorage.setItem('noticed', true);
	});
	$('#image1').zoom({ on: 'click', duration: '1000' });
	$('#image2').zoom({ on: 'click', duration: '500' });
	$('#image3').zoom({ on: 'click', magnify: 1.3 });
};
