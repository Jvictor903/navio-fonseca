// Seleciona todas as imagens com a classe zoom
const images = document.querySelectorAll('.zoom');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imgModal');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.innerHTML = img.nextElementSibling.innerHTML;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', e => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
