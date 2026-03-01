// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "none";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "flood"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "stormsurge", "drivingconditions"

const vigilanceMessages = [
    {
        message: `✅ **Aucune vigilance ou alerte en cours pour la Région BOENY**  
Les conditions météorologiques sont calmes pour les prochains jours.  
Restez informé en cas d’évolution de la situation.`,
        image: 'vigilance-vide.jpg'
    },
    {
        message: `**FAMPITANDREMANA AMIN’ NY METY HO FIAKARAN’NY RENIRANO ** 

Nohon'ny fandalovan'ny Rivodoza GEZANI izay hiditra antanety anio alina ka hamakivaky ny faritra Atsinanana, Alaotra mangoro, Analamanga, Bongolava ary hivoaka any Andrefan'ny Madagasikara dia misy ny FAMPITANDREMANA AMIN’ NY METY HO FIAKARAN’NY RENIRANO ho antsika eto BOENY : 
Novokarina ny: Talata faha 10 Febroary 2026 tamin’ny 01 ora tolak’andro
Manankery hatramin’ny: Alarobia 11 Febroary 2026
Hiakatra miandalana ny renirano nohon'ny fahabetsahan'ny rotsakorana ao anatin'ny sahandriaka ka ireto renirano ireto no mahazo fampitandremana MILOKO MENA ho antsika eto BOENY: 
- Renirano Betsiboka : Ao amin'ny Distrika Ambato Boeny, Marovoay
- Renirano Mahavavy Sud : Ao amin'ny Distrika Mitsinjo, Ambato Boeny. 
Ka noho izany dia entanina ho mailo hatrany no handray ny fanampahan-kevitra mifanaraka amin'izany ireo manamorona ny renirano voantonona ireo. 

⚠️Entanina ny rehetra mba hanaraka hatrany ny toromarika omen’ny manam-pahefana isan-tokony.⚠️`,
        image: 'vigilance-flood1.png'
    },
    {
        message: `**Vigilance vent fort - Forte  Vague/Houle**  
Rivotra: Tombanana hahatratra 55/65 Km/ora ny hamafin’ny rivotra izay mety harahina tafiotra indraindray.

Alondrano: Tombanana ho 3/5m ny haavon’ny
onja, hisamonta ny ranomasina indraindray ka hahatratra 6m eo anelanelan’i Maintirano sy Soalala.

`,
        image: 'vigilance_vent1.png'
    },
    {
        message: `**FAHAMAILONA AMIN’ NY METY HO FIAKARAN’NY RENIRANO | FARITRA BOENY, BETSIBOKA, SOFIA, MELAKY– Alakamisy 29 Janoary 2026 _ 01 ora tolakandro**  
Araka ny vinavina dia mbola mety hisy fiakarany ny haavon’ny rano amin’ireo renirano sasantsasany, noho ny fiantraikan’ny rotsakorana ao anaty sahandriaka ho an’ireto faritra ireto: Boeny, Betsiboka, Sofia ary Melaky.
📕📕 Noho izany, mbola manan-kery ny fampitandremana miloko mena amin’ny mety ho fiakaran’ny rano ho an’ireo mponina manamorona ny reniranon’i Betsiboka sy Mahajamba.
📒📒 Fampitandremana miloko mavo: ho an’ireo mponina manamorona ny reniranon’i Sofia sy Mahavavy Sud. Vinavinaina hahatratra ny fetra ny reniranon’i Mahavavy Sud ny 31 Janoary 2026.
📗📗 Fampitandremana miloko maintso : ho an’ireo mponina manamorona ny reniranon’i Sambao ary vinavinaina hahatratra ny fetra ny 31 Janoary 2026.`,
        image: 'vigilance-flood1.png'
    },
];

const MarineMessages = [
    {
        message: `**Bulletin marine cotière**

NY METY HO TOETRY NY ANDRO AN-DRANOMASINA NY ALAHADY 1 MARTSA 2026 AMIN’NY 06 ORA MARAINA HATRAMIN’NY ALATSINAINY 2 MARTSA 2026 AMIN’NY 06 ORA MARAINA

**TANJONA VILANANDRO HATRANY ANALALAVA**
Hanorana tandrifindrahona indraindray ny maraina.
 Ho avy Avaratra na Avaratra-Andrefana ny rivotra ka ho 10/20 Km/ora, ho avy Atsinanana na Atsimo-Atsinanana kosa ny maraina ka ho 10/20 Km/ora.
 Ho tony na hadini-panonja ny ranomasina.
 Haavon’ny onja ho latsaky ny 0.5m.`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 28/02/2026 A 10 TU, VALABLE LE 28/02/2026 A 10 TU JUSQU’AU 01/03/2026 A 10 TU.
 LE VENT DONNE DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES

**Situation generale**:
.

BASSES PRESSIONS SUR L'ENSEMBLE DE LA ZONE ;
.

ZCIT AXÉE PAR 08S/53E, 07S/60E ET 07S/69E.

10S/20S :
VENT : NORD-EST A NORD 05/10 LOCALEMENT 15. ÉTAT DE LA MER : BELLE PRES DES CÔTES NORD-OUEST DE MADAGASCAR, PEU AGITÉE AILLEURS.
 TEMPS : PARTIELLEMENT NUAGEUX SUR LA PARTIE SUD-OUEST, AVERSES ÉPARSES AILLEURS.`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];


























































































































































































































































































































































































































































































    const templates = [
    `Le matin sera globalement ensoleillé sur les parties intérieures (Marovoay, AmbatoBoeny) et Est (MahajangaII), et peu nuageux à l'Ouest (Soalala, Mitsinjo) et MahajangaI. L'après-midi, le ciel sera partiellement nuageux sur l'ensemble de la région, avec des averses prévues à MahajangaI.
**Vents** : Vents faibles à modérés de secteur Est à Sud, avec des vitesses moyennes entre 6 et 13 km/h. Une rafale maximale de 18 km/h est attendue à MahajangaI.
**Températures minimales** : entre 25 et 26 °C
**Températures maximales** : entre 34 et 36 °C`,
    `Après un matin largement ensoleillé, des averses sont attendues l'après-midi sur plusieurs localités, de Soalala à l'ouest jusqu'à MahajangaII à l'est, où les pluies pourront être fortes.
**Vents** : Vents modérés, de 8 à 12 km/h, de dominante Est à Sud-Est, avec des rafales pouvant atteindre 19 km/h à Marovoay et AmbatoBoeny.
**Températures minimales** : entre 24 et 25 °C
**Températures maximales** : entre 35 et 36 °C`,
    `Temps ensoleillé le matin sur l'ensemble de la région, devenant peu nuageux l'après-midi, à l'exception de Soalala où des averses légères sont attendues.
**Vents** : Vents faibles à modérés de secteur Sud-Est à Sud-Sud-Ouest, soufflant entre 6 et 13 km/h, avec des rafales atteignant 17 km/h à MahajangaI.
**Températures minimales** : entre 24 et 25 °C
**Températures maximales** : entre 35 et 36 °C`
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
