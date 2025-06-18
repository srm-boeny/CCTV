// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "yellow";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "cyclone"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "flood", "stormsurge", "drivingconditions"

const messages = [
    `✅ **Aucune alerte ou vigilance en cours**  
    Les conditions météorologiques sont calmes pour le moment.  
    Restez informé en cas d’évolution de la situation.`,

    ` **Prévisions – Jour 1 (Aujourd’hui)**  
    Quelques pluies légères le matin, éclaircies l’après-midi.  
    Vents : Modérés de sud-est.  
    Températures : 24–29°C.`,

    ` **Prévisions – Jour 2 (Demain)**  
    Partiellement nuageux, averses isolées en soirée.  
    Vents : Légers et variables.  
    Températures : 25–30°C.`,

    ` **Prévisions – Jour 3 (Après-demain)**  
    Ciel couvert avec risque d’orages en après-midi.  
    Vents : Rafales possibles près des orages.  
    Températures : 23–28°C.`
];

const imageSets = [
    ['vigilance-vide.jpg', 'vigilance-vide.jpg'],
    ['day1.png'],
    ['day2.png'],
    ['day3.png']
];

// --- UI SETUP ---
const messageElement = document.getElementById('message');
const imageContainer = document.getElementById('image-container');
const logoContainer = document.getElementById("logo-container");
let currentMessageIndex = 0;

// --- TIME UPDATE ---
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const formattedDate = now.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Indian/Antananarivo'
    });
    const formattedTime = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Indian/Antananarivo'
    });
    dateTimeElement.textContent = `${formattedDate} | ${formattedTime}`;
}

// --- IMAGES ---
function hideImages() {
    imageContainer.style.opacity = 0;
}

function updateImages() {
    imageContainer.innerHTML = '';
    const images = imageSets[currentMessageIndex];
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('alert-image');
        imageContainer.appendChild(img);
    });
    setTimeout(() => {
        imageContainer.style.opacity = 1;
    }, 500);
}

// --- TEXT SCROLLING ---
function scrollMessage(message) {
    return new Promise(resolve => {
        messageElement.textContent = message;
        messageElement.style.transition = 'none';
        messageElement.style.bottom = '-100%';
        messageElement.offsetHeight;
        messageElement.style.transition = 'bottom 15s linear';
        messageElement.style.bottom = '100%';
        messageElement.addEventListener('transitionend', () => resolve(), { once: true });
    });
}

// --- DISPLAY LOOP ---
async function displayMessages() {
    while (true) {
        hideImages();
        const message = messages[currentMessageIndex];
        await scrollMessage(message);
        await new Promise(resolve => setTimeout(resolve, 1000));
        updateImages();
        await new Promise(resolve => setTimeout(resolve, 4000));
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// --- ALERT ICON ---
const ancienneIcone = document.getElementById("alert-icon");
if (ancienneIcone) ancienneIcone.remove();

if (niveauAlerte !== "none") {
    const icone = document.createElement("img");
    icone.id = "alert-icon";
    icone.classList.add("alert-icon");

    const niveauCouleur = niveauAlerte.toLowerCase();
    const type = typeCatastrophe.toLowerCase();

    icone.src = `img/icon-warning-${type}-${niveauCouleur}.png`;

    // Animation only for alert levels "yellow" and "red"
    if (niveauCouleur === "red") {
        icone.style.animation = "blink 1s infinite";
    } else if (niveauCouleur === "yellow") {
        icone.style.animation = "blink 1.5s infinite";
    }

    logoContainer.prepend(icone);
}

// --- INIT ---
setInterval(updateDateTime, 1000);
displayMessages();
