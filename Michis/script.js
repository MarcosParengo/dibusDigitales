let ImagesLoaded = 0;
let TotalImages = 0;

const imageLoaded = () => {
	console.log("si")
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

let contenedor = $('#contenedor');

window.onload = function() {
	// Initialize Cloud Firestore through Firebase
	firebase.initializeApp({
		apiKey: 'AIzaSyARTA8bN4K_Zgiam79M5hzXxNAbhzLABkQ',
		authDomain: 'dibusdemarki.firebaseapp.com',
		projectId: 'dibusdemarki'
	});

	var db = firebase.firestore();

	db.collection('michis').get().then((querySnapshot) => {
		TotalImages = querySnapshot.size;
		querySnapshot.forEach((doc) => {
			contenedor.append(`
			<div class="row fullpage my-5 d-flex align-items-center ">
        		<div class="col-12 px-0 d-flex justify-content-center dibujoParent" data-aos="fade-up-left">
          			<img 
						onload="imageLoaded()" 
						src="http://drive.google.com/uc?export=view&id=${doc.data().googleDrivePhotoId}"
						class="dibujo" alt="${doc.data().nombre}"
					>
        		</div>
      		</div>
            `);
		});
	});
};
