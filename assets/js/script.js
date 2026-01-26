// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "yellow";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "flood"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "stormsurge", "drivingconditions"

const vigilanceMessages = [
    {
        message: `✅ **Aucune vigilance ou alerte en cours pour la Région BOENY**  
Les conditions météorologiques sont calmes pour les prochains jours.  
Restez informé en cas d’évolution de la situation.`,
        image: 'vigilance-vide1.jpg'
    },
    {
        message: `**FAHAMAILOANA AMIN’ NY METY HO FIAKARAN’NY RENIRANO (Mikasika ny eto amin'ny faritra BOENY manokana)** 

        **Novokarina ny: Alakamisy faha 22 Janoary 2026 tamin’ny 01 ora tolak’andro** 

       ** Tranga ahiana sy toerana hisehoany:**

Hitohy hatrany amin’ny ankapobeny ny orana ato anatin’ny 24 ora ho avy, ary mbola mety hisy fiakarany ny haavon’ny rano amin’ny renirano sasantsasany noho ny fiantraikan’ny rotsak’orana ao anaty sahandriaka. 
Ireo renirano misy fampitandremana ato anatin'ny faritra BOENY: 
- Fampitandremana miloko MAVO: Renirano Betsiboka ao amin'ny Distrika Ambato Boeny sy Marovoay
- Fampitandremana miloko MAINTSO: Renirano Mahavavy Sud ao main'ny Distrika Mitsinjo sy renirano Mahajamba ao amin'ny Distrika Mahajanga II.


**Ny mety ho fiantraikany:**

➢ Fiakaran’ny renirano



⚠️Entanina ny rehetra mba hanaraka hatrany ny toromarika omen’ny manam-pahefana isan-tokony.⚠️`,
        image: 'vigilance-flood.png'
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

NY METY HO TOETRY NY ANDRO ANY AN-DRANOMASINA NY ALATSINAINY 26 JANOARY 2026 AMIN’NY 06 ORA MARAINA HATRAMIN’NY TALATA 27 JANOARY 2026 AMIN’NY 06 ORA MARAINA

**TANJONA VILANANDRO HATRANY ANALALAVA**
Hanorana mety harahin-kotroka indraindray.
 Ho avy Avaratra ny rivotra amin’ny ankapobeny ka ho 10/20 km/ora.
 Hadini-panonja na hanonja be ny ranomasina.
 Haavon’ny onja 1m, hahatratra 1.5/2m indraindray any anaty orana.`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 25/01/2026 A 10 TU, VALABLE LE 25/01/2026 A 10 TU JUSQU’AU 26/01/2026 A 10 TU.
 LE VENT DONNE DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES

**Situation generale**:
.

BASSES PRESSIONS SUR UNE BONNE PARTIE DE LA ZONE;
.

ZCIT AXÉE PAR 15S/45E, 18S/44E, 16S/49E, 12S/56E, 10S/62E ET 10S/69E;
.

LIGNE DE CONVERGENCE AXEE PAR 20S/50E, 21S/50E ET 23S/50E ;
.

FRONT FROID AXE PAR 30S/52E, 31S/53E ET 32S/55E.

10S/20S :
VENT : OUEST 10/15 AU NORD DE 15S, CIRCULATION CYCLONIQUE 05/15 AILLEURS.
 ÉTAT DE LA MER : PEU AGITEE A AGITEE, LOCALEMENT FORTE SUR LA PARTIE CENTRALE SUD PAR HOULE DE SECTEUR SUD.
 TEMPS : AVERSES LOCALEMENT ORAGEUSES.`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];









































































































































































































































































































































































































    const templates = [
    `Des pluies, parfois fortes, sont attendues sur l'ensemble de la région Boeny, avec des averses intenses le matin à MahajangaI et dans l'ouest à Mitsinjo, puis s'intensifiant l'après-midi sur Mitsinjo, les parties intérieures (Marovoay, AmbatoBoeny) et l'Est (MahajangaII).
**Vents** : Vents faibles à modérés de secteur Sud-Est, avec des vitesses allant de 8 à 18 km/h.
**Températures minimales** : entre 22 et 25 °C
**Températures maximales** : entre 31 et 34 °C`,
    `Temps pluvieux à très pluvieux sur l'ensemble de la région, avec des pluies fortes prévues l'après-midi, notamment à MahajangaI, Mitsinjo, Marovoay et MahajangaII.
**Vents** : Vents faibles à modérés de secteur ESE dominant, variant vers le Sud-Ouest à MahajangaI et le Sud-Est à Soalala. Vitesses moyennes entre 9 et 17 km/h, avec une rafale isolée de 16 km/h à MahajangaII.
**Températures minimales** : entre 22 et 24 °C
**Températures maximales** : entre 31 et 33 °C`,
    `Des averses sont attendues sur l'ensemble de la région, devenant fortes l'après-midi, en particulier sur Marovoay, AmbatoBoeny et MahajangaII.
**Vents** : Vents faibles à modérés (8 à 17 km/h) de secteur Sud-Est, avec des rafales atteignant 24 km/h à MahajangaI.
**Températures minimales** : entre 22 et 24 °C
**Températures maximales** : entre 30 et 34 °C`
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
