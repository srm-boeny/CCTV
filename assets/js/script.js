// --- CONFIGURABLE PARAMETERS ---
const niveauAlerte = "yellow";       // Options: "none", "blue", "green", "yellow", "red"
const typeCatastrophe = "cyclone"; // Options: "cyclone", "flood", "rainflood", "forestfire", "lightning", "stormsurge", "drivingconditions"

const vigilanceMessages = [
    {
        message: `✅ **Aucune vigilance ou alerte en cours pour la Région BOENY**  
Les conditions météorologiques sont calmes pour les prochains jours.  
Restez informé en cas d’évolution de la situation.`,
        image: 'vigilance-vide1.jpg'
    },
    {
        message: `**FILAZANA MANOKANA MOMBA NY RIVODOZA NY 30 JANOARY 2026 TAMIN'NY 10 ORA MARAINA** 

Tamin’ny 09 ora maraina teo dia tany amin’ny manodidina ny 226 Km Avaratra Andrefan’i Besalampy no nisy ny foiben’i FYTIA. Lasa Forte Tempête Tropicale izy. Niakatra ho 100 Km/ora ny rivotra miaraka aminy izay arahina tafiotra 140 Km/ora manakaiky ny foibeny. Nikisaka niatsinanana somary Atsimo Atsinanana izy ka nahafaka 7 Km/ora.   Vinavinaina hiditra an-tanety eo anelanelan’i Tambohorano sy Soalala i FYTIA anio alina na rahampitso Sabotsy 31 Janoary 2026 vao maraina be. Mety hahatratra ny tanjaka rivodoza mahery na Cyclone Tropical izy amin’izay  fotoana izay (rivotra manodidina ny 150 Km/ora sy  tafiotra  210  Km/ora). Tombanana hivoaka any an-ndranomasina kosa izy ny Alahady maraina, any amin’ny faritra ATSINANANA. Manoloana izany dia miova toy izao ny filazana loza :   -  Loza manambana miloko mavo : BOENY, MELAKY ary BETSIBOKA ; -  Fanairana miloko maintso : BONGOLVA, ITASY, ANALAMANGA, ALAOTRA MANGORO ary ny Distrikan’Ambatolampy.  Aorian’ny fidirany an-tanety dia hamakivaky ny faritry ny afovoan-tany ity rivodoza ity ka ahiana hitondra rotsak’orana betsaka (50 hatramin’ny 150 mm/24 ora) amina faritra maro. Ahiana mafy ny tondra-drano,  ny  fiakaran’ny  renirano,  ny  fihotsahan’ny  tany  sy  ny  lalana.  Misy  fampitandremana mikasika izany.    Entanina  ny  mpampiasa  ranomasina  eo  anelanelan’i  Analalava  sy  maintirano  mba  tsy hiandriaka  intsony  mikorontana  ny  toetry  ny  andro.  Araho  mandrakariva  ny  toro-marika  omen’ny manam-pahefana isan-tokony.  

⚠️Entanina ny rehetra mba hanaraka hatrany ny toromarika omen’ny manam-pahefana isan-tokony.⚠️`,
        image: 'vigilance-cyclone.png'
    },
    {
        message: `**Vigilance vent fort - Forte  Vague/Houle**  
Rivotra: Tombanana hahatratra 55/65 Km/ora ny hamafin’ny rivotra izay mety harahina tafiotra indraindray.

Alondrano: Tombanana ho 3/5m ny haavon’ny
onja, hisamonta ny ranomasina indraindray ka hahatratra 6m eo anelanelan’i Maintirano sy Soalala.

`,
        image: 'vigilance_vent.png'
    },
    {
        message: `**FAHAMAILONA AMIN’ NY METY HO FIAKARAN’NY RENIRANO | FARITRA BOENY, BETSIBOKA, SOFIA, MELAKY– Alakamisy 29 Janoary 2026 _ 01 ora tolakandro**  
Araka ny vinavina dia mbola mety hisy fiakarany ny haavon’ny rano amin’ireo renirano sasantsasany, noho ny fiantraikan’ny rotsakorana ao anaty sahandriaka ho an’ireto faritra ireto: Boeny, Betsiboka, Sofia ary Melaky.
📕📕 Noho izany, mbola manan-kery ny fampitandremana miloko mena amin’ny mety ho fiakaran’ny rano ho an’ireo mponina manamorona ny reniranon’i Betsiboka sy Mahajamba.
📒📒 Fampitandremana miloko mavo: ho an’ireo mponina manamorona ny reniranon’i Sofia sy Mahavavy Sud. Vinavinaina hahatratra ny fetra ny reniranon’i Mahavavy Sud ny 31 Janoary 2026.
📗📗 Fampitandremana miloko maintso : ho an’ireo mponina manamorona ny reniranon’i Sambao ary vinavinaina hahatratra ny fetra ny 31 Janoary 2026.`,
        image: 'vigilance-flood.png'
    },
];

const MarineMessages = [
    {
        message: `**Bulletin marine cotière**

NY METY HO TOETRY NY ANDRO AN-DRANOMASINA NY ZOMA 30 JANOARY 2026 AMIN’NY 06 ORA MARAINA HATRAMIN’NY SABOTSY 31 JANOARY 2026 AMIN’NY 06 ORA MARAINA

**TANJONA VILANANDRO HATRANY ANALALAVA**
Hanoram-baratra.
 Ho avy Avaratra-Atsinanana ny rivotra ka ho 30/40 km/ora, hahatratra 55 Km/ora indraindray.
 Hahery na hahery be ny ranomasina.
 Haavon’ny onja 2.5/3m, hahatratra 5/6m indraindray noho ny alondrano haterik’ilay faritra andro ratsy`,
        image: 'Image_marine_cotiere_SITEWEB-MHJ.png'
    },
    {
        message: `**BULLETIN MARINE HAUTE MER**

BULLETIN DE PRÉVISION POUR LA MARINE DESTINE A LA NAVIGATION HAUTE MER (DE 10°S A 30°S / COTES AFRICAINES A 60°E ET DE 05°S A 30°S / 60°E A 70°E) ÉTABLI PAR MÉTÉO MADAGASCAR LE 29/01/2026 A 10 TU, VALABLE LE 29/01/2026 A 10 TU JUSQU’AU 30/01/2026 A 10 TU.
 LE VENT DONNE DANS CE BULLETIN CORRESPOND AU VENT MOYEN EN NŒUD ET LA HAUTEUR DE VAGUE REPRÉSENTE LA HAUTEUR SIGNIFICATIVE (H1/3) EN MÈTRES

**Situation generale**:
.

BASSES PRESSIONS SUR L'ENSEMBLE DE LA ZONE
.

ZONE PERTURBÉE NUMÉRO 09 1004 HPA CENTRÉE AUTOUR DU POINT 15.4S / 41.9E A 06 TU, DPLT EST 2KT
.

UN AUTRE MINIMUM 1007 HPA CENTRE VERS 16S/55E
.

ZCIT AXÉE PAR 14S/60E, 12S/63E, 11S/69E ET 10S/73E

10S/20S :
VENT : CF BMS METEO-FRANCE/CENTRE DES CYCLONES TROPICAUX DE LA RÉUNION CONCERNANT LA ZP 09 ÉTAT DE LA MER : AGITÉE A LOCALEMENT FORTE TEMPS : FORTES RAFALES SOUS GRAINS`,
        image: 'Image_marine_haute_mer_SITEWEB.png'
    }
];























































































































































































































































































































































































































    const templates = [
    `Des fortes pluies généralisées sont prévues pour toute la journée sur l'ensemble de la région Boeny, touchant particulièrement les localités de Soalala, Mitsinjo, MahajangaI, AmbatoBoeny et MahajangaII.
**Vents** : Vents modérés de secteur Nord-Est à Est-Nord-Est (entre 10 et 34 km/h), avec des rafales atteignant 42 km/h à Soalala.
**Températures minimales** : entre 24 et 24 °C
**Températures maximales** : entre 28 et 30 °C`,
    `De fortes pluies persistantes sont attendues toute la journée sur l'ensemble de la région Boeny, notamment à Soalala et Mitsinjo à l'Ouest, Marovoay et AmbatoBoeny à l'intérieur, ainsi qu'à Mahajanga et MahajangaII.
**Vents** : Vents modérés à très forts, de 26 à 56 km/h, avec des rafales pouvant atteindre 71 km/h à Soalala. Les vents souffleront principalement de secteur Sud à Sud-Ouest.
**Températures minimales** : entre 23 et 24 °C
**Températures maximales** : entre 28 et 30 °C`,
    `Le temps sera pluvieux à très pluvieux sur l'ensemble de la région Boeny, avec de fortes averses attendues particulièrement à MahajangaI et MahajangaII (Est de la région).
**Vents** : Vents modérés à forts de secteur Ouest-Nord-Ouest à Nord-Ouest, avec des vitesses moyennes entre 14 et 33 km/h. Les rafales pourront atteindre 28 km/h à Soalala.
**Températures minimales** : entre 23 et 25 °C
**Températures maximales** : entre 30 et 33 °C`
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
