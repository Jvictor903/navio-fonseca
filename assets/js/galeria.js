const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const imgs = document.querySelectorAll(".galeria img");
const close = document.getElementsByClassName("close")[0];

imgs.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

close.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(e) {
    if(e.target === modal) modal.style.display = "none";
}
