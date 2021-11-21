function invertirYRotar(id) {
	document.getElementById(id).classList.remove('invertir');
	document.getElementById(id).classList.toggle('invertirYCambiarColor');
	document.getElementById(id).classList.toggle('rotar3d');
}

function invertir(id) {
	document.getElementById(id).classList.toggle('invertir');
}

window.onload = function() {
    $('#cargando').addClass("oculto")
	var myModal = document.getElementById('myModal')
    var noticed = localStorage.getItem('noticed');
	if (noticed === null) {
		$('#myModal').modal('show');
	}
	myModal.addEventListener('shown.bs.modal', function() {
		localStorage.setItem('noticed',true)
	});
	$('#image1').zoom({ on: 'grab',duration:'500' });
	$('#image2').zoom({ on: 'grab' });
	$('#image3').zoom({ on: 'grab' });

};
