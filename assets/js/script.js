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

        **Novokarina ny Alatsinainy 18 Aogositra 2025 tamin’ny 14 ora 45 min.** 

       ** Tranga ahiana sy toerana hisehoany:**
Ho mafy ny fitsokan’ny rivotra eo anelanelan’i Ampanihy sy Taolagnaro, Mahajanga sy Analalava ary Antalaha sy ny tanjona Bobaomby. Tombanana hahatratra 55 Km/ora ny hamafin’ny rivotra.
**Fotoana hisehoany:**  
– Anio 18 Aogositra 2025 alina hatramin’ny rahampitso Talata 19 Aogositra 2025 ny eo anelanelan’i Mahajanga sy Analalava;

**Ireo toerana voakasika:**
**Fanairana miloko MENA :** 
Ampanihy hatrany Taolagnaro sy Mahajanga hatrany Analalava.


**Ny mety ho fiantraikany:**
✓ Fahasarotan’ny fifamoivoizana sy faharendrehana an-dranomasina;
✓ Fikorontanan’ny asa aman-draharaha andavan’andro.


⚠️Entanina ny rehetra mba hanaraka hatrany ny toromarika omen’ny manam-pahefana isan-tokony.⚠️`,
        image: 'vigilance_vent1.png'
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

BULLETIN DE PRÉVISION MARINE CÔTIÈRE JUSQU’À 50 MILLES NAUTIQUES AU LARGE ÉTABLI PAR MÉTÉO MADAGASCAR LE 01209/2025 A 10 TU, VALABLE LE 02/09/2025 A 10 TU JUSQU’AU 03/09/2025 A 10 TU.
 LE VENT DONNE DANS CE BULLETIN CORRESPOND AU VENT MOYEN PRÉVU EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES

**CAP ST ANDRÉ A ANALALAVA**
CAP ST ANDRÉ A ANALALAVA VENT : Sud-Est 10/20, devenant Nord-Ouest à Ouest 05/10 vers l’après-midi.
 ÉTAT DE LA MER : Peu agitée.
 Hauteur des vagues 0.5/1m, localement agitée 1.5m entre Mahajanga et Analalava.
 TEMPS : Partiellement nuageux à ensoleillé`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 02/09/2025 A 10 TU, VALABLE LE 02/09/2025 A 10 TU JUSQU’AU 03/09/2025 A 10 TU.
 LE VENT DONNE DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES.

**Situation generale**:
BASSES PRESSIONS SUR LA PARTIE NORD-EST DE LA ZONE ;
 .
 DORSALE ANTICYCLONIQUE AU SUD DES ILES MASCAREIGNES;
 .
 PSEUDO-FRONT FROID AXE PAR 30S/35E, 31S/45E, 33S/53E ET 38S/65E;
 .
 ANTICYCLONE 1033 HPA CENTRE PAR 37S/42E.

10S/20S :
10S/20S : VENT : SUD A SUD/EST 05/15 ATTEIGNANT 20 AU NORD DE 15S.
 ÉTAT DE LA MER : PEU AGITÉE A AGITÉE.
 TEMPS : PEU NUAGEUX A ENSOLEILLE.`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];




























































































    const templates = [
    `Temps majoritairement ensoleillé sur l'ensemble de la région Boeny, notamment sur les zones Ouest (Soalala, Mitsinjo), intérieures (Marovoay, AmbatoBoeny) et Est (MahajangaII).
**Vents** : Vents modérés de secteur Est à Sud-Est, soufflant entre 12 et 18 km/h, avec des rafales allant jusqu'à 22 km/h.
**Températures minimales** : entre 18 et 22 °C
**Températures maximales** : entre 34 et 36 °C`,
    `Le temps sera largement ensoleillé sur l'ensemble de la région Boeny, avec des ciels dégagés sur l'Ouest (Soalala, Mitsinjo) et les zones intérieures (Marovoay), et un temps assez ensoleillé pour MahajangaII à l'Est et AmbatoBoeny.
**Vents** : Vents faibles à modérés de secteur Sud-Est à Sud-Sud-Est, soufflant entre 12 et 19 km/h, avec des rafales pouvant atteindre 22 km/h.
**Températures minimales** : entre 18 et 21 °C
**Températures maximales** : entre 34 et 36 °C`,
    `Temps majoritairement ensoleillé le matin sur l'ensemble de la région Boeny, devenant peu nuageux l'après-midi sur la plupart des localités (Soalala, Mitsinjo, MahajangaI, MahajangaII), excepté Marovoay où le ciel restera dégagé et AmbatoBoeny où il deviendra partiellement nuageux.
**Vents** : Vents faibles à modérés de secteur Sud à Sud-Ouest pour l'ouest et le littoral, et Sud-Est pour l'est et l'intérieur, avec des vitesses moyennes de 8 à 15 km/h et des rafales jusqu'à 20 km/h.
**Températures minimales** : entre 18 et 21 °C
**Températures maximales** : entre 33 et 37 °C`
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

//const delayVigilance = 5000; 
const scrollDuration = 15000;
const afterScrollPause = 100;
const scrollSpeed = 30;
const delayVigilance = 5000;

// --- HIDE IMAGES ---
function hideImages() {
    imageContainer.style.opacity = 0;
}

//function scrollMessage(message, { delay = 0, speed = scrollSpeed } = {}) {
//    return new Promise(resolve => {
//        const el = messageElement;
//
//        el.innerHTML = message;
//        el.style.position = 'absolute';
//        el.style.left = '0';
//        el.style.right = '0';

//        el.style.transition = 'none';
//        el.style.transform = 'translateY(100%)';
//        el.style.visibility = 'hidden';

//        void el.offsetHeight;

//        const containerHeight = el.parentElement.offsetHeight;
//        const textHeight = el.scrollHeight;
//        const distance = textHeight + containerHeight; // px à parcourir
//        const duration = (distance / speed) * 1000; // ms

//        setTimeout(() => {
//            el.style.visibility = 'visible';
//            el.style.transition = `transform ${duration}ms linear`;
//            el.style.transform = `translateY(-${textHeight}px)`;

//            const done = () => {
//                el.removeEventListener('transitionend', done);
//                resolve();
//            };
//            el.addEventListener('transitionend', done, { once: true });
//            setTimeout(done, duration + 200); // fallback
//        }, delay);
//    });
//}

function scrollMessage(message, { delay = 0, speed = scrollSpeed } = {}) {
    return new Promise(resolve => {
        const el = messageElement;

        // Put the message inside the container
        el.innerHTML = message;
        el.style.position = 'absolute';
        el.style.left = '0';
        el.style.right = '0';

        // Reset transform before measuring
        el.style.transition = 'none';
        el.style.transform = 'translateY(100%)';
        el.style.visibility = 'hidden';

        void el.offsetHeight; // force reflow

        const containerHeight = el.parentElement.offsetHeight;
        const textHeight = el.scrollHeight;
        const distance = textHeight + containerHeight; // total distance to scroll
        const duration = (distance / speed) * 1000;    // ms based on speed

        setTimeout(() => {
            el.style.visibility = 'visible';
            el.style.transition = `transform ${duration}ms linear`;
            // Move text fully outside the top of container
            el.style.transform = `translateY(-${distance}px)`;

            const done = () => {
                el.removeEventListener('transitionend', done);
                resolve();
            };
            el.addEventListener('transitionend', done, { once: true });

            // Safety fallback
            setTimeout(done, duration + 200);
        }, delay);
    });
}



async function displayMessages() {
    const validEntries = await prepareValidEntries();

    while (true) {
        for (const entry of validEntries) {
            const isVigilance =
                /vigilance/i.test(entry.image || '') ||
                /vigilance|fampitandremana|hamafin/i.test(entry.message || '');

            if (isVigilance) {

                hideImages();
                await scrollMessage(entry.message, { delay: delayVigilance });

                imageContainer.innerHTML = '';
                const img = document.createElement('img');
                img.src = entry.image;
                img.classList.add('alert-image');
                imageContainer.appendChild(img);

                setTimeout(() => {
                    imageContainer.style.opacity = 1;
                }, 1000);

                await new Promise(r => setTimeout(r, 9000));
            } else {

                hideImages();
                await scrollMessage(entry.message);

                imageContainer.innerHTML = '';
                const img = document.createElement('img');
                img.src = entry.image;
                img.classList.add('alert-image');
                imageContainer.appendChild(img);

                setTimeout(() => {
                    imageContainer.style.opacity = 1;
                }, 1000);

                await new Promise(r => setTimeout(r, 9000));
            }
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
