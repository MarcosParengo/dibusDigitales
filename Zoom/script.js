let ImagesLoaded = 0;
let TotalImages = 0;

const imageLoaded = () => {
	ImagesLoaded++;
	if (TotalImages === ImagesLoaded) {
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
	}
};

function invertirYRotar(id) {
	document.getElementById(id).classList.remove('invertir');
	document.getElementById(id).classList.toggle('invertirYCambiarColor');
	document.getElementById(id).classList.toggle('rotar3d');
}

function invertir(id) {
	document.getElementById(id).classList.toggle('invertir');
}
let contenedor = $('#contenedor');

window.onload = function() {
	// Initialize Cloud Firestore through Firebase
	firebase.initializeApp({
		apiKey: 'AIzaSyARTA8bN4K_Zgiam79M5hzXxNAbhzLABkQ',
		authDomain: 'dibusdemarki.firebaseapp.com',
		projectId: 'dibusdemarki'
	});

	var db = firebase.firestore();

	db.collection('dibujos').get().then((querySnapshot) => {
		TotalImages = querySnapshot.size;
		querySnapshot.forEach((doc) => {
			contenedor.append(`
			<div class="row fullpage my-5 d-flex align-items-center justify-content-center">
                <div  id=${doc.data()
					.nombre} class="col-auto px-0 d-flex justify-content-center dibujoParent dropShadow zoom" data-aos="fade-up-left"
                    data-aos-offset="300">
                    <img   
						src="http://drive.google.com/uc?export=view&id=${doc.data().googleDrivePhotoId}"
						class="dibujo" alt=${doc.data().nombre} onload="imageLoaded()">
                </div>
            </div>
            `);
			$(`#${doc.data().nombre}`).zoom({
				on: 'click',
				magnify: doc.data().magnify,
				duration: doc.data().duration
			});
		});
	});
};
