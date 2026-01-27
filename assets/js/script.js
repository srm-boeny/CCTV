// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "red";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "rainflood"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "stormsurge", "drivingconditions"

const vigilanceMessages = [
    {
        message: `✅ **Aucune vigilance ou alerte en cours pour la Région BOENY**  
Les conditions météorologiques sont calmes pour les prochains jours.  
Restez informé en cas d’évolution de la situation.`,
        image: 'vigilance-vide1.jpg'
    },
    {
        message: `**Famitandremana mahakasika ny fahabetsahan'ny rotsakorana** 

        **Novokarina ny Talata 27 Janoary 2026 Tamin’ny 11 ora 23 min** 

       ** Tranga ahiana**

Noho ny fisian’ilay fikorontanana ao amin’ny lakandranon’i Mozambika dia tombanana hahazo vahana
kokoa ny oram-baratra any amin’ny faritra Avaratra Andrefan’ny Nosy. Mety hahatratra 50 hatramin’ny
100 mm ny tahan’ny rotsak’orana ao anatin’ny 24 Ora.

**FOTOANA HISEHOANY:**
- Anio Talata 27 Janoary 2026 ho an’ny
distrikan’i Nosy Be, Ambanja, Analalava,
Mahajanga I-II ary Mitsinjo.
- Rahampitso Alarobia 28 Janoary 2026 ho
an’ny distrikan’i Besalampy, Soalala,
Marovoay, Ambato Boeny, Mampikony,
Boriziny, Antsohihy ary Bealanana.
- Ny Alakamisy 29 Janoary 2026 kosa ho an’i
Maintirano, Morafenobe, Ambatomainty,
Mandritsara, Befandriana Avaratra ary ny
faritra BETSIBOKA.

**TOERANA VOAKASIKA**
**Miloko mena**
Ny distrikan’i Nosy Be, Ambanja, Analalava,
Mahajanga I-II ary Mitsinjo
**miloko mavo**
Ny distrikan’i Besalampy, Soalala, Marovoay,
Ambato Boeny, Mampikony, Boriziny,
Antsohihy ary Bealanana
**miloko maintso**

Ny distrikan’i Maintirano, Morafenobe,
Ambatomainty, Mandritsara, Befandriana
Avaratra ary ny faritra BETSIBOKA.

**Ny mety ho fiantraikany:**
➢ Fikorontanan’ny asa aman-draharaha andavanandro;
➢ Fiandronan’ny rano amin’ireo toerana mora tondraka;
➢ Fiakaran’ny renirano, fihotsahan’ny tany sy ny lalana amin’ireo toerana marefo.



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

NY METY HO TOETRY NY ANDRO ANY AN-DRANOMASINA NY TALATA 27 JANOARY 2026 AMIN’NY 06 ORA MARAINA HATRAMIN’NY ALAROBIA 28 JANOARY 2026 AMIN’NY 06 ORA MARAINA

**TANJONA VILANANDRO HATRANY ANALALAVA**
Hanoram-baratra.
 Ho avy Avaratra-Andrefana ny rivotra ka ho 20/30 km/ora, hahatratra 40 Km/ora indraindray.
 Hadini-panonja na hanonja be ny ranomasina.
 Haavon’ny onja 1/1.5m.`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 27/01/2026 A 10 TU, VALABLE LE 27/01/2026 A 10 TU JUSQU’AU 28/01/2026 A 10 TU.
 LE VENT DONNE DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES

**Situation generale**:
.

BASSES PRESSIONS SUR L'ENSEMBLE DE LA ZONE;
.

ZCIT AXÉE PAR 15S/54E, 13S/57E ET 11S/61E;
.

LIGNE DE CONVERGENCE AXÉE PAR 11S/41E, 14S/43E, 15S/42E ET 17S/41E;
.

UNE AUTRE LIGNE DE CONVERGENCE AXÉE PAR 13S/52E, 17S/53, 16S/51E ET 18S/50E.

10S/20S :
VENT : LARGE CIRCULATION DÉPRESSIONNAIRE 05/15 LOCALEMENT 20. ÉTAT DE LA MER : PEU AGITÉE A AGITÉE, LOCALEMENT FORTE SOUS ORAGES.
 TEMPS : PARTIELLEMENT NUAGEUX SUR LA PARTIE SUD-OUEST DE LA ZONE, AVERSES LOCALEMENT ORAGEUSES AILLEURS.`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];













































































































































































































































































































































































































    const templates = [
    `La région Boeny sera sous de fortes pluies toute la journée, avec des précipitations particulièrement intenses sur les localités de Soalala, Mitsinjo, Marovoay et MahajangaII.
**Vents** : Vents faibles à modérés, variant entre 7 et 18 km/h, de directions diverses, principalement de l'Est au Sud.
**Températures minimales** : entre 22 et 25 °C
**Températures maximales** : entre 29 et 31 °C`,
    `La région Boeny connaîtra principalement des pluies intenses, généralisées le matin et persistant l'après-midi sur l'Est (Mahajanga I, Mahajanga II) et à Marovoay, tandis que l'Ouest (Soalala, Mitsinjo) et AmbatoBoeny verront des averses l'après-midi.
**Vents** : Vents faibles à modérés (10 à 16 km/h) majoritairement de secteur Est à Nord-Est. Des rafales sont attendues, atteignant 20 km/h à Mahajanga I (où le vent sera de secteur Sud-Sud-Ouest) et 19 km/h à Soalala.
**Températures minimales** : entre 22 et 24 °C
**Températures maximales** : entre 28 et 32 °C`,
    `De fortes pluies persisteront toute la journée sur l'ensemble de la région Boeny, touchant notamment Soalala et Mitsinjo à l'Ouest, ainsi que Marovoay, AmbatoBoeny et MahajangaII.
**Vents** : Vents faibles à modérés (9 à 24 km/h) principalement de secteur Sud-Est, avec des rafales atteignant 31 km/h à Soalala.
**Températures minimales** : entre 22 et 23 °C
**Températures maximales** : entre 29 et 30 °C`
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
