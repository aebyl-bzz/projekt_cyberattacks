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

// Utility-Funktion zum Setzen der aktiven Klasse
function setActiveButton(buttonGroup, activeButton) {
    buttonGroup.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
}

// Layer-Wechsel-Buttons
const viewButtons = document.querySelectorAll('#streetView, #satelliteView');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        setActiveButton(viewButtons, button);

        if (button.id === 'satelliteView') {
            map.removeLayer(streetLayer);
            map.addLayer(satelliteLayer);
        } else if (button.id === 'streetView') {
            map.removeLayer(satelliteLayer);
            map.addLayer(streetLayer);
        }
    });
});

// Filter-Buttons
const filterButtons = document.querySelectorAll('#filterUkraine, #filterRussia, #filterAll');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        setActiveButton(filterButtons, button);

        const category = button.id.replace('filter', '');
        filterMarkers(category === 'All' ? 'All' : category);
    });
});

// Marker-Filter-Funktion
function filterMarkers(category) {
    markers.forEach(({ marker, category: markerCategory }) => {
        if (category === 'All' || markerCategory === category) {
            marker.addTo(map);
        } else {
            map.removeLayer(marker);
        }
    });
}
