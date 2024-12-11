function burgermenue() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openModal(imgSrc) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}