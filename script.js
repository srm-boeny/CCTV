// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "none";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "cyclone"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "flood", "stormsurge", "drivingconditions"

const rawMessages = [
    `**Prévisions journalières pour la Région BOENY, établi le 27/06/2025 à 06:30 AM**
	
	
    ✅ **Aucune vigilance ou alerte en cours pour la Région BOENY**  
    Les conditions météorologiques sont calmes pour les 3 jours.  
    Restez informé en cas d’évolution de la situation.`,

    `**Prévisions – Jour 1 (Aujourd’hui)**  
    Temps peu nuageux toute la matinée et très nuageux l'après-midi et le soir.
    **Vents** : Vents modéré à fort de secteur ESE
    **Températures minimales** : entre 17 et 18 °C
    **Températures maximales** : entre 33 et 34 °C.`,

    `**Prévisions – Jour 2 (Demain)**  
    Temps ensoleillé le matin, devenant nuageux l'après-midi et surtout le soir, risque de crachin le soir.
    **Vents** : Vents modéré du secteur SE
    **Températures minimales** : entre 18 et 19 °C
    **Températures maximales** : entre 32 et 34 °C.`,

    `**Prévisions – Jour 3 (Après-demain)**  
    Temps ensoleillé toute la journée.
    **Vents** : Vents modéré à fort de secteur ESE
    **Températures minimales** : entre 19 et 20 °C
    **Températures maximales** : entre 33 et 34 °C.`
];

// Fonction pour mettre en gras HTML et majuscule le texte entre ** ** 
function formatBoldAndUpper(text) {
    return text.replace(/\*\*(.*?)\*\*/g, (_, match) => `<strong>${match.toUpperCase()}</strong>`);
}

const messages = rawMessages.map(formatBoldAndUpper);

const imageSets = [
    ['vigilance-vide.jpg'],
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
        messageElement.innerHTML = message;
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
        await new Promise(resolve => setTimeout(resolve, 6000));
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
