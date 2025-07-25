// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "none";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "wind"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "stormsurge", "drivingconditions"

const vigilanceMessages = [
    {
        message: `✅ **Aucune vigilance ou alerte en cours pour la Région BOENY**  
Les conditions météorologiques sont calmes pour les prochains jours.  
Restez informé en cas d’évolution de la situation.`,
        image: 'vigilance-vide.jpg'
    },
    {
        message: `**fampitandremana momba ny hamafin'ny rivotra** 

        **Novokarina ny Asabotsy 19 Jolay 2025Tamin’ny 11 ora 11 min** 

       ** Tranga ahiana sy toerana hisehoany:**
Ho mafy ny fitsokan’ny rivotra eo anelanelan’ny tanjona Bobaomby sy Vohemar, ny morontsirak’i Analalava sy ATSIMO ANDREFANA ka tombanana hahatratra 55
Km/ora.
**Fotoana hisehoany:**  
– Anio alina hatramin’ny rahampitso 20 Jolay 2025 vao maraina kosa ny morontsirak’i Analalava.

**Ireo toerana voakasika:**
**Fanairana miloko MENA :** 
Tanjona Bobaomby hatrany Vohemar ary ny morontsirak’i Analalava sy ATSIMO ANDREFANA..


**Ny mety ho fiantraikany:**
✓ Fahasarotan’ny fifamoivoizana sy faharendrehana an-dranomasina;
✓ Fikorontanan’ny asa aman-draharaha andavan’andro.


⚠️Entanina ny rehetra mba hanaraka hatrany ny toromarika omen’ny manam-pahefana isan-tokony.⚠️`,
        image: 'vigilance_vent1.jpg'
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

BULLETIN DE PRÉVISION MARINE CÔTIÈRE JUSQU’À 50 MILLES NAUTIQUES AU LARGE ÉTABLI PAR MÉTÉO MADAGASCAR LE 26/07/2025 A 10 TU, VALABLE LE 26/07/2025 A 10 TU JUSQU’AU 27/07/2025 A 10 TU.
 LE VENT DONNÉ DANS CE BULLETIN CORRESPOND AU VENT MOYEN PRÉVU EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES.

**CAP ST ANDRÉ A ANALALAVA**
CAP ST ANDRÉ A ANALALAVA VENT : Sud à Sud-Est 10/15 atteignant 20 au voisinage de Besalampy.
 ÉTAT DE LA MER : Peu agitée.
 Hauteur des vagues 0.5/1m.
 TEMPS : Ciel dégagé.`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 26/07/2025 A 10 TU, VALABLE LE 26/07/2025 A 10 TU JUSQU’AU 27/07/2025 A 10 TU.
 LE VENT DONNÉ DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) N MÈTRES.

**Situation generale**:
BASSES PRESSIONS SUR LA PARTIE NORD-EST DE LA ZONE ;
 DORSALE ANTICYCLONIQUE SUR LA PARTIE SUD-EST DES ILES MASCAREIGNES;
 DEUX FRONT FROID DONT L’UN AXE PAR 26S/49E, 30S/56E, 35S/62E ETL’AUTRE AXE PAR 27S/36E, 33S/47E, 39S/53E.

10S/20S :
10S/20S : VENT : SUD A SUD-EST 10/15 SE RENFORÇANT 20/25 A L’OUEST DE 43E EN FIN DE LA PÉRIODE.
 ÉTAT DE LA MER : PEU AGITÉE A AGITÉE, DEVENANT FORTE A L’OUEST DE 43E EN FIN DE LA PÉRIODE PAR HOULE DE SECTEUR SUD.
 TEMPS : RARES AVERSES LOCALES AUTOUR DE COMORES, PARTIELLEMENT NUAGEUX AILLEURS.`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];






































    const templates = [
    `Temps ensoleillé le matin, devenant partiellement nuageux l’après-midi sur la région Boeny.

**Vents** : Vents faible à modérés de secteur ESE

**Températures minimales** : entre 19 et 21 °C

**Températures maximales** : entre 32 et 34 °C`,
    `Temps ensoleillé à partiellement nuageux sur la région Boeny, avec un ciel généralement clair le matin.

**Vents** : Vents faibles à modérés de secteur ESE

**Températures minimales** : entre 19 et 20 °C

**Températures maximales** : entre 32 et 34 °C`,
    `Temps ensoleillé le matin, devenant partiellement nuageux l’après-midi sur la région de Boeny.

**Vents** : Vents faibles à modérés de secteur ESE

**Températures minimales** : entre 18 et 21 °C

**Températures maximales** : entre 32 et 34 °C`
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
