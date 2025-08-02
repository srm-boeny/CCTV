// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "green";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "wind"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "stormsurge", "drivingconditions"

const vigilanceMessages = [
    {
        message: `✅ **Aucune vigilance ou alerte en cours pour la Région BOENY**  
Les conditions météorologiques sont calmes pour les prochains jours.  
Restez informé en cas d’évolution de la situation.`,
        image: 'vigilance-vide1.jpg'
    },
    {
        message: `**fampitandremana momba ny hamafin'ny rivotra** 

        **Novokarina ny Alakamisy 31 Jolay 2025 Tamin’ny 11 ora 44 min** 

       ** Tranga ahiana sy toerana hisehoany:**
Ho mafy ny fitsokan’ny rivotra any amin’ny morontsirak’i SOFIA, manomboka eo
amin’ny tanjona Bobaomby hatrany amin’ny tanjona Angotsy ary ny morontsiraka
Afovoany sy Atsimo Andrefan’ny Nosy. Tombanana hahatratra 55 Km/ora ny
hamafin’ny rivotra.

**Fotoana hisehoany:**  
 Manomboka ny Alatsinainy 04
Aogositra 2025 kosa ho an’ny
morontsirak’i SOFIA ary eo
anelanelan’ny tanjona Bobaomby sy
ny tanjona Angotsy.


**Ireo toerana voakasika:**
**Fanairana miloko MAINTSO :** 
Ny morontsirak’i SOFIA, eo
anelanelan’ny tanjona Bobaomby sy ny
tanjona Angotsy.


**Ny mety ho fiantraikany:**
✓ Fahasarotan’ny fifamoivoizana sy faharendrehana an-dranomasina;
✓ Fikorontanan’ny asa aman-draharaha andavan’andro.


⚠️Entanina ny rehetra mba hanaraka hatrany ny toromarika omen’ny manam-pahefana isan-tokony.⚠️`,
        image: 'vigilance_vent.png'
    },
    {
        message: `**Vigilance vent fort**  
Rafales de vent pouvant atteindre 70 km/h dans le nord de la région.`,
        image: 'vigilance_houle.png'
    },
    {
        message: `**Vigilance vent fort**  
Rafales de vent pouvant atteindre 70 km/h dans le nord de la région.`,
        image: 'vigilance_rain.png'
    },
];

const MarineMessages = [
    {
        message: `**Bulletin marine cotière**

BULLETIN DE PRÉVISION MARINE CÔTIÈRE JUSQU’À 50 MILLES NAUTIQUES AU LARGE ÉTABLI PAR MÉTÉO MADAGASCAR LE 01/08/2025 A 10 TU, VALABLE LE 01/08/2025 A 10 TU JUSQU’AU 02/08/2025 A 10 TU.
 LE VENT DONNÉ DANS CE BULLETIN CORRESPOND AU VENT MOYEN PRÉVU EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES.

**CAP ST ANDRÉ A ANALALAVA**
CAP ST ANDRÉ A ANALALAVA VENT : Ouest 10/20, devenant Sud-Est 15/20 le matin.
 ÉTAT DE LA MER : Peu agitée.
 Hauteur des vagues 0.5/1m.
 TEMPS : Ciel dégagé.`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 01/08/2025 A 10 TU, VALABLE LE 01/08/2025 A 10 TU JUSQU’AU 02/08/2025 A 10 TU.
 LE VENT DONNÉ DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) N MÈTRES.

**Situation generale**:
BASSES PRESSIONS AU NORD DE 10S;
 FRONT FROID AXE PAR 28S/33E, 33S/37E ET 38S/40E;
 ANTICYCLONE 1041 HPA CENTRE PAR 36S/64E.

10S/20S :
10S/20S : VENT : SECTEUR SUD 15/20. ÉTAT DE LA MER : PEU AGITÉE A AGITÉE.
 TEMPS : PLUIES FAIBLES PAR ENDROITS.`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];








    const templates = [
    `Temps ensoleillé le matin, devenant peu à partiellement nuageux l'après-midi sur l'ensemble de la région.
**Vents** : Vents faibles à modérés de secteur Sud, avec des rafales jusqu'à 25 km/h à Mahajanga I.
**Températures minimales** : entre 17 et 22 °C.
**Températures maximales** : entre 31 et 35 °C.`,
    `Temps majoritairement ensoleillé sur l'ensemble de la région, avec quelques nuages attendus l'après-midi sur Mahajanga I et dans l'Est.
**Vents** : Vents faibles à modérés de secteur Sud-Est à Sud-Ouest (10 à 23 km/h), avec des rafales pouvant atteindre 32 km/h à Mahajanga I.
**Températures minimales** : entre 17 et 20 °C
**Températures maximales** : entre 33 et 35 °C`,
    `Temps ensoleillé le matin sur l'ensemble de la région, devenant partiellement nuageux l'après-midi, notamment dans les terres et sur la partie Est.
**Vents** : Vents faibles à modérés de secteur Sud-Est (12 à 21 km/h).
**Températures minimales** : entre 19 et 21 °C.
**Températures maximales** : entre 34 et 35 °C.`
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

    // 2. --- MULTIPLE VIGILANCE MESSAGES ---
    for (const vig of vigilanceMessages) {
        const exists = await checkImageExists(vig.image);
        if (exists) {
            entries.push({
                message: formatBoldAndUpper(vig.message),
                image: vig.image
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

// --- HIDE IMAGES ---
function hideImages() {
    imageContainer.style.opacity = 0;
}

// --- SCROLL TEXT ---
function scrollMessage(message) {
    return new Promise(resolve => {
        messageElement.innerHTML = message;
        messageElement.style.transition = 'none';
        messageElement.style.bottom = '-100%';
        messageElement.offsetHeight;
        messageElement.style.transition = 'bottom 25s linear';
        messageElement.style.bottom = '100%';
        messageElement.addEventListener('transitionend', () => resolve(), { once: true });
    });
}

// --- MAIN DISPLAY LOOP ---
async function displayMessages() {
    const validEntries = await prepareValidEntries();

    while (true) {
        for (const entry of validEntries) {
            hideImages();
            await scrollMessage(entry.message);
            await new Promise(resolve => setTimeout(resolve, 2000));

            imageContainer.innerHTML = '';
            const img = document.createElement('img');
            img.src = entry.image;
            img.classList.add('alert-image');
            imageContainer.appendChild(img);
            setTimeout(() => {
                imageContainer.style.opacity = 1;
            }, 1000);

            await new Promise(resolve => setTimeout(resolve, 9000));
        }
    }
}

// --- ALERT ICON LOGIC ---
const ancienneIcone = document.getElementById("alert-icon");
if (ancienneIcone) ancienneIcone.remove();

if (niveauAlerte !== "none") {
    const icone = document.createElement("img");
    icone.id = "alert-icon";
    icone.classList.add("alert-icon");

    const niveauCouleur = niveauAlerte.toLowerCase();
    const type = typeCatastrophe.toLowerCase();

    icone.src = `img/icon-warning-${type}-${niveauCouleur}.png`;

    if (niveauCouleur === "red") {
        icone.style.animation = "blink 1s infinite";
    } else if (niveauCouleur === "yellow") {
        icone.style.animation = "blink 1.5s infinite";
    }

    logoContainer.prepend(icone);
}

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
