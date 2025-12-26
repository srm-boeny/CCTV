// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "green";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "rainflood"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "stormsurge", "drivingconditions"

const vigilanceMessages = [
    {
        message: `✅ **Aucune vigilance ou alerte en cours pour la Région BOENY**  
Les conditions météorologiques sont calmes pour les prochains jours.  
Restez informé en cas d’évolution de la situation.`,
        image: 'vigilance-vide1.jpg'
    },
    {
        message: `**fampitandremana noho ny FAHABETSAHAN’NY ROTSAKORANA ** 

        **Novokarina ny talata 23 desambra 2025 Tamin’ny 12 ora 14 min** 

       ** Tranga ahiana sy toerana hisehoany:**
Foana ny fampitandremana noho ny fahabetsahan’ny rotsak’orana ho an’ny afovoan-tany. Na izany aza dia
tombanana mbola hitohy ny rotsak’orana ka entanina ny tsirairay mba ho mailo hatrany. Etsy ankilan’izay,
noho ny fisian’ilay fikorontanana ao amin’ny lakandranon’i Mozambika dia vinavinaina hanatombo kokoa ny
rotsak’orana any amin’ny morontsiraka Avaratra Andrefana sy Afovoany Andrefan’ny Nosy. Vinavinaina
hahatratra 40 hatramin’ny 80 mm ny tahan’ny rotsak’orana ao anatin’ny 24 Ora.

** Fotoana hisehoany**
Manomboka ny 25 Desambra 2025 hariva
**Ireo toerana voakasika:**
**Fanairana miloko MAITSO :** 
– Ny morontsirak’i BOENY, MELAKY ary MENABE.


**Ny mety ho fiantraikany:**
➢ Fikorontanan’ny asa aman-draharaha andavanandro;
➢ Fiandronan’ny rano amin’ireo toerana mora tondraka;
➢ Fiakaran’ny renirano, fihotsahan’ny tany sy ny lalana
amin’ireo toerana marefo.


⚠️Entanina ny rehetra mba hanaraka hatrany ny toromarika omen’ny manam-pahefana isan-tokony.⚠️`,
        image: 'vigilance-rain.png'
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

NY METY HO TOETRY NY ANDRO ANY AN-DRANOMASINA NY ALAKAMISY 25 DESAMBRA 2025 AMIN’NY 06 ORA MARAINA HATRAMIN’NY ZOMA 26 DESAMBRA 2025 AMIN’NY 06 ORA MARAINA

**TANJONA VILANANDRO HATRANY ANALALAVA**
Hanorana tandrifindrahona ny maraina, mety hatevina kokoa izany rehefa manakaiky ny tanjona Vilanandro.
 Ho avy Avaratra ny rivotra ka ho 10/20 Km/ora.
 Hadini-panonja na hanonja be ny ranomasina.
 Haavon’ny onja 0.5/1m, hahatratra 1.5/2m indraindray any anaty orana.`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 25/12/2025 A 10 TU, VALABLE LE 25/12/2025 A 10 TU JUSQU’AU 26/12/2025 A 10 TU.
 LE VENT DONNE DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES.

**Situation generale**:
.

BASSES PRESSIONS SUR UNE BONNE PARTIE DE LA ZONE ;
.

ZCIT OSCILLÉ ENTRE 05S ET 10S AINSI QUE SUR LA PARTIE CENTRALE DU CANAL;
.

FRONT FROID AXE PAR 28S/35E, 29S/37E, 31S/40E ET 33S/42E

10S/20S :
VENT : NORD 15/20, DEVENANT CIRCULATION CYCLONIQUE 15/20 AU SUD DE 15S ET FRANCHISSANT 25/30 EN FIN DE PERIODE.
 ÉTAT DE LA MER : PEU AGITÉE A AGITÉE, MAIS FORTE SUR LA PARTIE SUD PAR HOULE DU NORD.
 TEMPS : PLUIES MODÉRÉES A FORTES AU SUD DE 15S,AVEC DES ORAGES LOCAUX PAR MOMENTS.`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];








































































































































































































































































































































    const templates = [
    `Le temps sera pluvieux sur la majeure partie de la région Boeny, avec des averses fortes attendues sur AmbatoBoeny et des conditions nuageuses accompagnées de pluie à MahajangaII.
**Vents** : Vents faibles à modérés, de secteur variable mais majoritairement Sud-Ouest (8 à 15 km/h). Des rafales pouvant atteindre 17 km/h sont possibles à Soalala.
**Températures minimales** : entre 24 et 25 °C
**Températures maximales** : entre 31 et 33 °C`,
    `Pluies sur l'ensemble de la région, avec des précipitations intenses à Soalala toute la journée et à AmbatoBoeny l'après-midi.
**Vents** : Vents faibles à modérés de secteur Sud à Sud-Ouest, avec des vitesses entre 7 et 19 km/h. Des rafales atteignant 27 km/h sont possibles à MahajangaI.
**Températures minimales** : entre 23 et 24 °C
**Températures maximales** : entre 31 et 33 °C`,
    `Pluies généralisées sur la région Boeny, parfois fortes notamment sur l'Ouest à Soalala et Mitsinjo, tandis que MahajangaI connaîtra de légères pluies le matin suivies d'un temps nuageux.
**Vents** : Vents faibles à modérés, généralement de secteur Sud à Sud-Est, soufflant entre 6 et 9 km/h, avec une rafale atteignant 15 km/h à Soalala.
**Températures minimales** : entre 24 et 25 °C
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
