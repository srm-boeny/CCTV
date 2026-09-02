const defaultWebmasterContent = {
    alert: { level: "none", type: "generic" },
    slides: []
};

let webmasterContent = defaultWebmasterContent;

async function loadWebmasterContent() {
    try {
        const response = await fetch('content/webmaster-content.json', { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const content = await response.json();
        webmasterContent = {
            alert: {
                level: content.alert?.level || defaultWebmasterContent.alert.level,
                type: content.alert?.type || defaultWebmasterContent.alert.type
            },
            slides: Array.isArray(content.slides) ? content.slides : []
        };
    } catch (error) {
        console.error('Unable to load webmaster content:', error);
        webmasterContent = defaultWebmasterContent;
    }
}

const MarineMessages = [
    {
        message: `**Bulletin marine cotière**

NY METY HO TOETRY NY ANDRO AN-DRANOMASINA NY ALAKAMISY 03 SEPTAMBRA 2026 AMIN’NY 06 ORA MARAINA HATRAMIN’NY ZOMA 04 SEPTAMBRA 2026 AMIN’NY 06 ORA MARAINA

**TANJONA VILANANDRO HATRANY ANALALAVA**
ANALALAVA HATRANY AMIN’NY TANJONA BOBAOMBY Handrahona mitsitokotoko na handrahona vitsy.
 Ho avy andrefana ny rivotra amin’ny ankapobeny ka ho 20/30 Km/ora, ho avy atsimo atsinanana kosa ny maraina any avaratr’i Nosy Be sy manakaiky an’i Analalava ka ho 20/45 Km/ora.
 Hadini-panonja na hanonja be ny ranomasina.
 Haavon’ny onja 0.5/1m, hahatratra 1.5/2m indraindray any amin’ny tapany avaratra.`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 02/09/2026 A 10 TU, VALABLE LE 02/09/2026 A 10 TU JUSQU’AU 03/09/2026 A 10 TU.
 LE VENT DONNE DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES

**Situation generale**:
.

BASSE PRESSION AU 05S ;
.

ANTICYCLONE 1036 HPA CENTRE PAR 30S/72E.

10S/20S :
10S/20S : VENT : SECTEUR EST 05/15, LOCALEMENT 20 SUR LA PARTIE NORD.
 MAIS, OUEST 05/15 SUR LA PARTIE SUD-EST L’APRÈS-MIDI.
 ÉTAT DE LA MER : PEU AGITÉE A AGITÉE.
 TEMPS : RARES AVERSES LOCALES.`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];



    const templates = [
    `Temps ensoleillé sur MahajangaI, Soalala et Mitsinjo le matin, et plutôt clair sur Marovoay, AmbatoBoeny et MahajangaII, devenant partiellement nuageux l'après-midi sur l'ensemble de la région.
**Vents** : Vents modérés de secteur Sud-Est à Est, de 12 à 17 km/h, avec des rafales atteignant 22 km/h à AmbatoBoeny.
**Températures minimales** : entre 21 et 24 °C
**Températures maximales** : entre 34 et 36 °C`,
    `Temps ensoleillé le matin sur l'ensemble de la région Boeny, devenant partiellement nuageux l'après-midi sur la plupart des localités, notamment à l'Est (MahajangaII) et dans les parties intérieures (Marovoay, AmbatoBoeny), avec un temps généralement beau à l'Ouest (Soalala).
**Vents** : Vents faibles à modérés de secteur Est à Sud (10 à 18 km/h), avec des rafales pouvant atteindre 22 km/h à MahajangaI.
**Températures minimales** : entre 21 et 22 °C
**Températures maximales** : entre 34 et 36 °C`,
    `Temps ensoleillé le matin sur l'ensemble de la région, devenant partiellement nuageux l'après-midi, plus dégagé à l'ouest (Soalala) et plus couvert à l'est (MahajangaII).
**Vents** : Vents faibles à modérés (12 à 21 km/h) de secteur dominant Sud-Est, avec des rafales atteignant 23 km/h à MahajangaII.
**Températures minimales** : entre 20 et 22 °C
**Températures maximales** : entre 34 et 37 °C`
];


// --- FORMATTER: Bold and Upper ---
function formatBoldAndUpper(text) {
    return text.replace(/\*\*(.*?)\*\*/g, (_, match) => `<strong>${match.toUpperCase()}</strong>`);
}

// --- DATE FORMATTER IN FRENCH (for message titles) ---
function formatFrenchDate(date) {
    return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'Indian/Antananarivo'
    });
}

// --- CHECK IF IMAGE EXISTS ---
function checkImageExists(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
    });
}

// --- MAIN FUNCTION TO GENERATE VALID ENTRIES ---
async function prepareValidEntries() {
    const entries = [];


    // 1. --- FORECAST BULLETIN HEADER ---
    const bulletinImage = 'Fond_rq.png';
    const bulletinExists = await checkImageExists(bulletinImage);
    if (bulletinExists) {
        const today = new Date();
        const bulletinDate = formatFrenchDate(today);
        const bulletinMsg = `**Prévisions journalières pour la Région BOENY**  
        `;
        entries.push({
            message: formatBoldAndUpper(bulletinMsg),
            image: bulletinImage
        });
    }

    // 2. --- WEBMASTER-MANAGED MESSAGES ---
    for (const slide of webmasterContent.slides) {
        if (slide.enabled === false || !slide.image) continue;

        const exists = await checkImageExists(slide.image);
        if (exists) {
            const message = `**${slide.title || 'Bulletin météorologique'}**\n${slide.description || ''}`;
            entries.push({
                message: formatBoldAndUpper(message),
                image: slide.image
            });
        }
    }

    //3 Ho an'ny marine
    for (const mer of MarineMessages) {
        const exists = await checkImageExists(mer.image);
        if (exists) {
            entries.push({
                message: formatBoldAndUpper(mer.message),
                image: mer.image
            });
        }
    }

    // 3. --- DAILY FORECASTS (based on available images) ---

    const dates = [];
    const filenames = [];
    for (let i = 0; i < 3; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        dates.push(new Date(date));
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        filenames.push(`assets/maps/weather_map_${yyyy}-${mm}-${dd}.png`);
    }

    const existing = [];
    for (let i = 0; i < 3; i++) {
        const exists = await checkImageExists(filenames[i]);
        if (exists) {
            existing.push({ date: dates[i], image: filenames[i], index: i });
        }
    }

    if (existing.length === 3 &&
        existing[0].index === 0 &&
        existing[1].index === 1 &&
        existing[2].index === 2) {
        for (let i = 0; i < 3; i++) {
            entries.push({
                message: formatBoldAndUpper(`**Prévisions pour le ${formatFrenchDate(existing[i].date)}**\n${templates[i]}`),
                image: existing[i].image
            });
        }
    } else if (existing.length === 2 &&
               existing[0].index === 0 &&
               existing[1].index === 1) {
        for (let i = 0; i < 2; i++) {
            entries.push({
                message: formatBoldAndUpper(`**Prévisions pour le ${formatFrenchDate(existing[i].date)}**\n${templates[i + 1]}`),
                image: existing[i].image
            });
        }
    } else if (existing.length === 1 && existing[0].index === 0) {
        entries.push({
            message: formatBoldAndUpper(`**Prévisions pour le ${formatFrenchDate(existing[0].date)}**\n${templates[2]}`),
            image: existing[0].image
        });
    }

    return entries;
}


// --- UI ELEMENTS ---
const messageElement = document.getElementById('message');
const imageContainer = document.getElementById('image-container');
const logoContainer = document.getElementById("logo-container");
const slideElement = document.getElementById('slide');
const slideTitleElement = document.getElementById('slide-title');
const slideCounterElement = document.getElementById('slide-counter');
const slideDotsElement = document.getElementById('slide-dots');
const alertStatusElement = document.getElementById('alert-status');
const previousButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');

const slideDelay = 12000;
const transitionDelay = 420;
const alertLevels = ["none", "blue", "green", "yellow", "orange", "red"];
let validEntries = [];
let currentSlideIndex = 0;
let slideTimer = null;
let globalAlertLevel = "none";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function configuredAlertLevel() {
    const value = String(webmasterContent.alert.level || "none").toLowerCase();
    return alertLevels.includes(value) ? value : "none";
}

function configuredAlertType() {
    return String(webmasterContent.alert.type || "generic").toLowerCase();
}

function alertLabel(level) {
    const labels = {
        none: "Situation normale",
        blue: "Information vigilance",
        green: "Vigilance verte",
        yellow: "Vigilance jaune",
        orange: "Vigilance orange",
        red: "Vigilance rouge"
    };

    return labels[level] || labels.none;
}

function updateAlertFrame(level) {
    const nextLevel = alertLevels.includes(level) ? level : "none";
    document.body.classList.remove(
        "alert-none",
        "alert-blue",
        "alert-green",
        "alert-yellow",
        "alert-orange",
        "alert-red"
    );
    document.body.classList.add(`alert-${nextLevel}`);
    alertStatusElement.textContent = alertLabel(nextLevel);
}

function updateAlertIcon(level) {
    const ancienneIcone = document.getElementById("alert-icon");
    if (ancienneIcone) ancienneIcone.remove();

    if (level === "none") return;

    const icone = document.createElement("img");
    icone.id = "alert-icon";
    icone.classList.add("alert-icon");
    icone.alt = alertLabel(level);
    icone.src = `img/icon-warning-${configuredAlertType()}-${level}.png`;
    icone.onerror = () => {
        const genericLevel = level === "blue" ? "green" : level;
        icone.onerror = null;
        icone.src = `img/icon-warning-generic-${genericLevel}.png`;
    };

    if (level === "red") {
        icone.style.animation = "blink 1s infinite";
    } else if (level === "orange" || level === "yellow") {
        icone.style.animation = "blink 1.5s infinite";
    }

    logoContainer.prepend(icone);
}

function splitTitleAndBody(htmlMessage) {
    const container = document.createElement('div');
    container.innerHTML = htmlMessage;
    const firstStrong = container.querySelector('strong');

    if (!firstStrong) {
        return {
            title: "Bulletin météorologique",
            body: htmlMessage
        };
    }

    const title = firstStrong.textContent.trim();
    firstStrong.remove();

    return {
        title,
        body: container.innerHTML.trim()
    };
}

function renderDots() {
    slideDotsElement.innerHTML = '';

    validEntries.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `slide-dot${index === currentSlideIndex ? ' is-active' : ''}`;
        dot.setAttribute('aria-label', `Afficher la slide ${index + 1}`);
        dot.addEventListener('click', () => showSlide(index, true));
        slideDotsElement.appendChild(dot);
    });
}

function renderSlide(entry) {
    const { title, body } = splitTitleAndBody(entry.message);
    const img = document.createElement('img');
    img.src = entry.image;
    img.classList.add('alert-image');
    img.alt = title || "Bulletin météo";

    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
    slideTitleElement.textContent = title;
    messageElement.innerHTML = body;
    messageElement.scrollTop = 0;
    slideCounterElement.textContent = `${currentSlideIndex + 1} / ${validEntries.length}`;
    renderDots();
}

async function showSlide(index, manual = false) {
    if (!validEntries.length) return;

    currentSlideIndex = (index + validEntries.length) % validEntries.length;
    if (manual && slideTimer) clearTimeout(slideTimer);

    slideElement.classList.add('is-changing');
    await delay(transitionDelay);
    renderSlide(validEntries[currentSlideIndex]);
    slideElement.classList.remove('is-changing');

    if (slideTimer) clearTimeout(slideTimer);
    slideTimer = setTimeout(() => showSlide(currentSlideIndex + 1), slideDelay);
}

async function displayMessages() {
    await loadWebmasterContent();
    validEntries = await prepareValidEntries();

    if (!validEntries.length) {
        slideTitleElement.textContent = "Aucun bulletin disponible";
        messageElement.textContent = "Aucune image météo disponible pour l'instant.";
        slideCounterElement.textContent = "0 / 0";
        return;
    }

    globalAlertLevel = configuredAlertLevel();
    updateAlertFrame(globalAlertLevel);
    updateAlertIcon(globalAlertLevel);
    showSlide(0);
}

previousButton.addEventListener('click', () => showSlide(currentSlideIndex - 1, true));
nextButton.addEventListener('click', () => showSlide(currentSlideIndex + 1, true));

// --- DATE/TIME UPDATE ---
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

// --- INIT ---
setInterval(updateDateTime, 1000);
displayMessages();
