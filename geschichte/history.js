function burgermenue() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// Interaktive Ereignis-Darstellung
const events = document.querySelectorAll('.timeline-event');
events.forEach(event => {
    event.addEventListener('click', () => {
        event.classList.toggle('active');
    });
});