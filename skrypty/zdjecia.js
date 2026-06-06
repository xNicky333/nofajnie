document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById('lightbox');
    const lightbox_img = document.getElementById('lightbox-img');
    const zdjecia = document.querySelectorAll('#nasze_zdjecia img');
    const zamknij = document.getElementById('zamknij');

    zdjecia.forEach(zdjecie => {
        zdjecie.addEventListener('click', function(){
            lightbox.classList.add('aktywny');
            lightbox_img.src = this.src
        });
    });

    zamknij.addEventListener('click', function(){
        lightbox.classList.remove('aktywny');
    });

    lightbox.addEventListener('click' ,function(event){
        if (event.target !== lightbox_img){
            lightbox.classList.remove('aktywny');
        }
    });
});