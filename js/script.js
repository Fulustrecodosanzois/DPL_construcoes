// Adicionado o botão de captura
document.addEventListener('DOMContentLoaded', function() {
    const cameraInput = document.getElementById('cameraInput');
    const captureButton = document.getElementById('captureButton');
    const photo = document.getElementById('photo');

    captureButton.addEventListener('click', function() {
        cameraInput.click();
    });

    cameraInput.addEventListener('change', function(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = function(e) {
                photo.src = e.target.result;
                photo.style.display = 'block';
            };

            reader.readAsDataURL(selectedFile);
        }
    });
});



