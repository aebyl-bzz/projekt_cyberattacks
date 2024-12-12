function burgermenue() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const closeModalButtons = document.querySelectorAll(".close");
    const modals = document.querySelectorAll(".modal");

    openModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "block";
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});