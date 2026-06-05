const players = [
    { name: "zeyld", dbdTime: 13, matches: 142, avatar: "images/avatars/zeyld.jpg", bg: "images/backgrounds/dark.jpg" },
    { name: "kifx", dbdTime: 52, matches: 98, avatar: "images/avatars/kifx.jpg", bg: "images/backgrounds/dark.jpg" },
    { name: "snovvy", dbdTime: 48, matches: 115, avatar: "images/avatars/snovvy.jpg", bg: "images/backgrounds/dark.jpg" },
    { name: "yowie", dbdTime: 30, matches: 50, avatar: "images/avatars/yowie.jpg", bg: "images/backgrounds/dark.jpg" },
    { name: "zzox", dbdTime: 42, matches: 88, avatar: "images/avatars/zzox.jpg", bg: "images/backgrounds/dark.jpg" },
    { name: "призрачный игрок", dbdTime: 60, matches: 104, avatar: "images/avatars/kuroko.jpg", bg: "images/backgrounds/dark.jpg" }
];

const randomNicknames = [
    "exize", "VoLGa", "24min", "seva20022", "fuerok", 
    "killjet", "californication", "qullan", "6yaka", "шампунь mysticl",
    "METEOR", "RafRider", "SelfKnowLedge", "HELLHOUND", "DEFAYLT", 
    "GLOWER", "zeyld", "samurik", "art", "DislanD",
    "TheFallenArt", "hxrdwell", "hoken", "lemag1c", "grenout",
    "Swatter", " ipic", "bubbozavr", "xstep", "VLT",
    "deikun", "kifx", "minxrka", "snovvy", "pestxr",
    "zox", "nightfury", "КАМЕНЩИК", "nymeza", "tohaD",
    "XEJLOVARO", "qwazare", "F5 MANNSER", "hope", "REDDISON",
    "константин прекрашев", "krasavabtw", "mulder", "H6", "elio",
    "sparky", "MEYDIX", "ХАНТЕР", "ХЕРМИТ", "sindz",
    "nertox", "anoniw", "Большой Руся", "vadimus", "helldosh",
    "domi", "RUMKA", "ТИЧЕР", "Anr1s1337", "KoZeL",
    "son of jeyson", "jwidaw", "haron", "denamo", "Look At Me",
    "mettaton ex 25", "glide", "detishkabtw", "nepsosqua", "GoodKann",
    "LEGASi", "RoGoG", "стримснайпер", "looni4", "dice_SPB",
    "sasuha", "sir", "cuk", "renhe", "nokk",
    "joinger", "nice2meetyou", "wizzle", "besplatny_ponchick", "rxw",
    "dr.rock", "acez", "predator3500", "krxde", "saint", "bermooda", "mraziidroga",
    "tommytapes", "nettorin", "karl franz", "dvoch", "spiker", "4SVDragon", "VadyaShaman",
    "bxrdxrk", "RIP tuzik_youth", "morff", "LEGIONER", "smoker", "vekk", "halfmoon", "sweet nothing",
    "abadead", "honeymaker", "jesstik", "La1ron1337", "nildon", "agur", "sayaora", "killerax", "STIKS",
    "Voytek", "NURICK", "undead", "VKD", "alanyan", "easyelik", "rese1ve", "felix", "NIGALOK", "Delsiz", 
    "sweetplant", "DianaDunaeva", "anddromash", "qelia", "kimi", "NON4ME", "derice", "DOCK",
    "7sec", "santajack", "gloucoma", "S E", "kyk", "Alastor", "WDKTZ", "DRIOR", "forelka", "хуевый мансер", "orator",
    "iseecolapse", "vadimrassta", "METOX", "MILLSTON", "kirillpaleco7566", "terrifero3o", "mccormick",
    "inonix", "perkele", "wega_n", "seth", "lyapota", "YARIK", "KICYAO", "XOJLERA", "кекс",
    "salambuzl", "zeratulez", "nildon", "twixkill", "drednote", "3rd size", "north", "goodkxt",
    "dogerox", "MoviePlay", "bambergthebeast", "steelmar", "samvain", "blaze",
    "D6", "objectivily", "KEMPILS", "DW", "DrWalt", "Star", "Marco", "improove", "SyeshPelmesh",
    "XEJLFIRE", "4pathy", "kodi", "4malik", "mailik", "qsens", "excellent", "clinzer", "BUZ9", "junglick",
    "noobasi4", "temy4es", "exeNagib", "husten", "whoam4ik", "puperdok", "biblethump", "mexanik", 
    "krytilka", "rain4all", "formond", "shh", "feromon", "kaktus", "windrose", "ЕЛИСЕЙ", "hikaru legends",
    "lim0n", "wiesy", "painful", "netfantazii", "Tyker", "fakturka", "beastslayero3o", "dikiy", "nightfreddygames",
    "tom tryhard", "fairythea", "timelordZ", "nothing", "whacksetz", "bor34ka", "skynedd", "chronos", 
    "xfire", "your tony", "dejavu", "ishidaharuko", "smart(m3lancholy)", "holly moly", "s1rone",
    "ton1uck", "killmexan", "nestor", "neito", "resolution", "leoneed", "юрий rayman show",
    "nessu", "akitetsi", "egorka show"
];
const teamsList = [
    { name: "Outer Heaven", players: "zeyld minxrka pestxr lemag1c snovvy z-z-zox"},
    { name: "Death Wish", players: "kifx xejlovaro minxrka undead deikun ishidaharuko objectivily" },
    { name: "Anxiety", players: "kifx nymeza xejlovaro xstep derice undead objectivily" },
    { name: "Lostteam", players: "acez pextxr newline alastor kyk z-z-zox" },
    { name: "Umbrella", players: "derice lemag1c exize swatter hxrdwell thefallenart ipic bubbozavr" },
    { name: "SERENITY", players: "qullan 24min mysticl 6yaka fuerok" },
    { name: "Black Jack", players: "californication sindz volga хантер killjet" },
    { name: "FTD", players: "rafraider exize meteor selfknowledge dr.rock" },
    { name: "INEVITABLE DEATH", players: "hellhound defaylt glow3r h.6 d.6" },
    { name: "FUZE TEAM", players: "l3gasi zeleboba besplatiny ponchick kempils goodkann" },
    { name: "HARU MAMBURU", players: "mettaton_ex25 haron seth malik vadimus " },
    { name: "DARK LEGACY", players: "sparky mommy sweet nothing seva20022 stiks" },
    { name: "ASTRALIS", players: "nepsosqua mrazya syeshpelmesh improooove sasuha" },
    { name: "Team BIG RUSYA", players: "большой руся thefallenart xejlife леха " },
    { name: "S.H.O.C.K", players: "temy4es logs bubbozavr smoker meydix fanat" },
    { name: "BLUEBERRY", players: "geforsik st1mmis fox 4svdragon разъебать" },
    { name: "LOYAL PLAYERS", players: "feromon windrose legioner fireinside" },
    { name: "SEA DEVIL'S", players: "wizzle 4mailik non4me artem_dwight" },
    { name: "LUCKERS", players: "neter435 molly fluffy rxw abadead" },
    { name: "TTD", players: "zeyld vlt samurik yukio xstep disland" },
    { name: "REAPER", players: "hoken vlt sasuha borechka honeymaker deikun killerax" },
    { name: "F5", players: "look at me mannser big boy radaiv" },
    { name: "BAT", players: "8enoff hope yarik voytek xd" },
    { name: "Eternal", players: "spiker vadimus pyperdok sir 4pathy" },
    { name: "ETERNITY", players: "zaka adry juancage raul" },
    { name: "Lacerate", players: "sir kaz dan bubbozavr verytrackdisco" },
    { name: "Tranquility", players: "lemag1c dr.rock minxrka resolution dzhun " },
    { name: "JINX", players: "madz mad05 yesboi quiet " },
    { name: "ORACLE", players: "xeno bubbozavr nigel zongow" },
    { name: "AGONY", players: "dr.rock knightlight fingerguns ruyn" },
    { name: "slammom", players: "swatter vkd 1nviz kozel volga garacy denamo" },
    { name: "BS", players: "detishka legasi seth glower fairythea " },
    { name: "hachu piccu", players: "anoniw krxde mraziidroga bermuuuda saint " },
    { name: "MOHUK", players: "qwazare morff wizzle vekk non4me" },
    { name: "СРАК", players: "zeleboba nertox nightfury whoam4ik " },
    { name: "SOMA", players: "milston volga legioner swatter nightfury" },
    { name: "PRISMA", players: "blind riven jonas quantum laktrin" },
    { name: "Lunar Eclipse", players: "qelia formond tetrya barbiegirl santajack " },
    { name: "HERMIT BASTARDS", players: "ХАХАХАХАХАХАХАХАХААХАХАХАХА" },
    { name: "PAINKILLER", players: "orator vodka acesticks dcp kid nurick" },
    { name: "Ascension", players: "dedly la1ron predator nildon agur kozel 4svdragon " },
    { name: "aogiri", players: "lemag1c nep rese1ve mommy detishka predator" },
    { name: "raymond", players: "fors9tina sheldon hypocrite nicotine v popo4ky пельмешка" },
    { name: "black crows", players: "rogog lader hekary ramirez" },
    { name: "Twisted Fate", players: "abadead ishida hollymolly killerax neter435" },
    { name: "Faceless", players: "tohaD rainfall rumka dogerox exa" },
    { name: "Ray of Death", players: "saint krayleft dolo567 hellreyz и арсэн" },
    { name: "No Mercy", players: "meteor exize californication sindz хантер killjet" },
    { name: "FAZ team", players: "klayson zaxar234 agford zeyld " },
    { name: "9 LIVES", players: "mysticl bamberg the beast 6yaka stiks wizzle" },
    { name: "TRAUMA", players: "wizzle hxrdwell 24min rxw thefallenart volga" },
    { name: "PARADOXQUAD", players: "овощ aspartat hikaru legends tyker" },
    { name: "crucifix", players: "sasuha nokk ipic renhe santajack " },
    { name: "SK Gaming", players: "exize predator selfknowledge acez" },
    { name: "cloud9", players: "xueviy manser seth blaze dooex" },
    { name: "EMA", players: "riven josh harnas emem" },
    { name: "LND", players: "frostiiikfeed iseecollapse yablichko smart" },
    { name: "immortal", players: "xstep vlt disland samurik zeyld " },
    { name: "existence", players: "hoken rese1ve joinger nice2meetyou felix kodi voytek" },
    { name: "dobro team", players: "sonic boom dup1o zakdoespixel hero" },
    { name: "peekaboo", players: "ridmind seva20022 morff lt.corbis" },
    { name: "eternity dream", players: "stiks phoenix 6yaka mommy hentai" },
    { name: "Mediocrity ", players: "noobak101 rekruit mixaul16529^^ hent" },
    { name: "WGrave", players: "krestall helldosh easyelik nessa uncolly" },
    { name: "FRI3NDS", players: "delsiz sweetplant anddromash lt.corbis meowdeimus" },
    { name: "TRIPLE SIX", players: "hellhound mettaton mulder hellrey vadimus enl1ghtment" },
    { name: "naybie", players: "wiesy art netfantasii dmitrynoo steelmar" },
    { name: "Devils squad", players: "twixkill clicking heli сдали нервы" },
    { name: "DOMINATIONS GAMING", players: "muhaboy комро максоха zmeykus" },
    { name: "MD Squad", players: "hellhound sirone kozel donterra" },
    { name: "eclipse", players: "shyro manu endru sinter " },
    { name: "Elysium", players: "xeno zaka ivn pedrohz marcos" },
    { name: "Invictus", players: "rocket pedro spitzz dan knightlight kekso" },
    { name: "X9", players: "jah note wispy angelz" },
    { name: "nocron", players: "zaka ivn marcos zynox" },
    { name: "0practice", players: "yumiko formond kirzep alkxli goodkann тетря" },
    { name: "sinners", players: "phenom bucky vinny weejason zube " },
    { name: "seraph", players: "kenshii zafis jah acid" },
    { name: "cynic", players: "angelz ultruh lusty wancy " },
    { name: "big ahh booty twerk", players: "200" },
    { name: "pornhub esports", players: "300" },
    { name: "Магмовый зверь Макар", players: "непобедимая хуйня" },
    { name: "team of north guys", players: "детишка artist nigalok exspise lefort87" },
    { name: "millenium", players: "samurik greenout spiker dvoch timelordz nothing sasuha" },
    { name: "praxis", players: "zaka laser v1 ward" },
    { name: "oboy", players: "oskar dunder mathis daimao" },
    { name: "akatsuki", players: "nestor neito 4lacrity goodkxt honeymaker vadimus "}
];
document.addEventListener('DOMContentLoaded', () => {
    const logoHome = document.getElementById('logo-home'); 
    const navTierlist = document.getElementById('nav-tierlist');
    
    const sectionHome = document.getElementById('section-home');
    const sectionTierlist = document.getElementById('section-tierlist');

    if (logoHome && navTierlist && sectionHome && sectionTierlist) {
        sectionHome.style.display = "block";
        sectionTierlist.style.display = "none";

        logoHome.addEventListener('click', (e) => {
            e.preventDefault();
            navTierlist.classList.remove('active');
            sectionHome.style.display = "block";
            sectionTierlist.style.display = "none";
            window.scrollTo(0, 0);
        });

        navTierlist.addEventListener('click', (e) => {
            e.preventDefault();
            navTierlist.classList.add('active');
            sectionHome.style.display = "none";
            sectionTierlist.style.display = "block";
            window.scrollTo(0, 0);
            
            initTierList();
        });
    }
});

let tierListInitialized = false;
let remainingNicks = []; 
let currentMode = '30'; 
let modeButtonsSetup = false; 

function setupModeButtons() {
    if (modeButtonsSetup) return; 

    const btn30 = document.getElementById('btn-mode-30');
    const btnAll = document.getElementById('btn-mode-all');
    const btnTeams = document.getElementById('btn-mode-teams');
    const btnReset = document.getElementById('btn-reset-tier');
    
    if (btn30 && btnAll && btnTeams) {
        btn30.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentMode === '30') return;
            currentMode = '30';
            btn30.classList.add('active');
            btnAll.classList.remove('active');
            btnTeams.classList.remove('active');
            tierListInitialized = false; 
            initTierList();
        });

        btnAll.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentMode === 'all') return;
            currentMode = 'all';
            btnAll.classList.add('active');
            btn30.classList.remove('active');
            btnTeams.classList.remove('active');
            tierListInitialized = false; 
            initTierList();
        });

        btnTeams.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentMode === 'teams') return;
            currentMode = 'teams';
            btnTeams.classList.add('active');
            btn30.classList.remove('active');
            btnAll.classList.remove('active');
            tierListInitialized = false; 
            initTierList();
        });
    }

    if (btnReset) {
        btnReset.addEventListener('click', (e) => {
            e.preventDefault();
            tierListInitialized = false; 
            initTierList();
        });
    }

    modeButtonsSetup = true;
}

function updateRowLabels() {
    const labelElements = document.querySelectorAll('.tier-row > div:first-child, [class*="label"], .tier-label');
    
    if (labelElements.length >= 8) {
        if (currentMode === 'teams') {
            labelElements[0].textContent = "ТИР-1 КОМАНДЫ";
            labelElements[1].textContent = "СИЛЬНЫЕ КОМАНДЫ";
            labelElements[2].textContent = "СЫГРАННЫЕ ПАРНИ";
            labelElements[3].textContent = "СРЕДНЯЧОК";
            labelElements[4].textContent = "ПИВО";
            labelElements[5].textContent = "ПЛОХО";
            labelElements[6].textContent = "ХАХАХАХАХАХА";
            labelElements[7].textContent = "НН";
        } else {
            labelElements[0].textContent = "ЛЕГЕНДЫ";
            labelElements[1].textContent = "ОЧЕНЬ СИЛЬНЫЕ ИГРОКИ";
            labelElements[2].textContent = "СКИЛОВЫЕ РЕБЯТКИ";
            labelElements[3].textContent = "ВЫШЕ СРЕДНЕГО";
            labelElements[4].textContent = "СРЕДНЯЧКИ";
            labelElements[5].textContent = "НИЖЕ СРЕДНЕГО";
            labelElements[6].textContent = "ПЛОХО";
            labelElements[7].textContent = "НЕ ЗНАЮ ИХ";
        }
    }
}

function initTierList() {
    setupModeButtons();
    updateRowLabels(); 
    const poolTitle = document.getElementById('pool-title');
    if (poolTitle) {
        if (currentMode === 'teams') {
            poolTitle.innerText = "КОМАНДОЧКИ";
            const modalOverlay = document.getElementById('command-modal-overlay');
            const modalCloseBtn = document.getElementById('modal-close-btn');
            
            if (modalOverlay) {
                modalOverlay.classList.add('active');
            }
            
            if (modalCloseBtn && modalOverlay) {
                modalCloseBtn.onclick = function() {
                    modalOverlay.classList.remove('active');
                };
            }

        } else {
            poolTitle.innerText = "ДБД ПЛЕЕРС АХАХАХАХАХАХХАХА";
        }
    }

    if (tierListInitialized) return;
    

    if (currentMode === '30') {
        let tempNicks = [...randomNicknames];
        tempNicks.sort(() => Math.random() - 0.5);
        remainingNicks = tempNicks.slice(0, 30);
    } else if (currentMode === 'all') {
        let tempNicks = [...randomNicknames];
        tempNicks.sort(() => Math.random() - 0.5);
        remainingNicks = tempNicks;
    } else if (currentMode === 'teams') {
        let tempTeams = [...teamsList];
        tempTeams.sort(() => Math.random() - 0.5);
        remainingNicks = tempTeams; 
    }

    const zones = ['tier-god','tier-god2', 'tier-s', 'tier-a', 'tier-b', 'tier-c', 'tier-d', 'tier-f', 'tier-pool'];
    zones.forEach(zoneId => {
        const zoneEl = document.getElementById(zoneId);
        if (zoneEl) zoneEl.innerHTML = '';
    });

    zones.forEach(zoneId => {
        const el = document.getElementById(zoneId);
        if (!el) return;
        
        if (!el.sortableInstance) {
            el.sortableInstance = new Sortable(el, {
                group: 'sharedTier',
                animation: 150,
                ghostClass: 'sortable-ghost',
                onAdd: function (evt) {
                    if (evt.from.id === 'tier-pool') {
                        setTimeout(spawnNextPlayer, 200);
                    }
                }
            });
        }
    });

    spawnNextPlayer();
    tierListInitialized = true;
}


function spawnNextPlayer() {
    const poolContainer = document.getElementById('tier-pool');
    if (!poolContainer) return;
    
    poolContainer.innerHTML = '';

    if (remainingNicks.length === 0) {
        const endMemes = [
            { src: "images/memes/mem1.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem2.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem3.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem4.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem5.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem6.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem7.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem8.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem9.jpg", text: "еще разочек братан" },
            { src: "images/memes/mem10.jpg", text: "еще разочек братан" }
        ];
        
        const randomMeme = endMemes[Math.floor(Math.random() * endMemes.length)];
        
        poolContainer.innerHTML = `
            <div style="width: 100%; text-align: center; padding: 10px;">
                <p style="color: #ffffff; font-size: 24px; font-weight: bold; margin-bottom: 20px; text-shadow: 2px 2px 4px #000;">
                    ${randomMeme.text}
                </p>
                <img src="${randomMeme.src}" alt="Финал" style="max-width: 100%; max-height: 350px; border-radius: 8px; box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); border: 2px solid #ffffff;">
            </div>
        `;
        return;
    }

    const currentItem = remainingNicks.shift();
    let itemHtml = '';

   if (typeof currentItem === 'object' && currentItem !== null) {
        const teamPlayers = currentItem.players ? currentItem.players : "Состав неизвестен";

        itemHtml = `
            <div class="tier-item team-tooltip-container" style="display: inline-flex; align-items: center; justify-content: center; padding: 6px 12px; position: relative;">
                <span>${currentItem.name.toUpperCase()}</span>
                
                <div class="team-tooltip">${teamPlayers}</div>
            </div>
        `;
    } else {
        itemHtml = `<div class="tier-item">${currentItem.toUpperCase()}</div>`;
    }

    poolContainer.insertAdjacentHTML('beforeend', itemHtml);
}

let timerStarted = false;
let totalSeconds = 10 * 60; 
const SECRET_REDIRECT_URL = "https://www.youtube.com/watch?v=0BbTRx96dvY&t=4839s"; 

function startSecretTimer() {
    const timerContainer = document.getElementById('secret-timer-container');
    const timerDisplay = document.getElementById('timer-display');

    if (timerContainer) {
        document.body.appendChild(timerContainer);
        timerContainer.style.setProperty('position', 'fixed', 'important');
        timerContainer.style.setProperty('top', '20px', 'important');
        timerContainer.style.setProperty('right', '30px', 'important');
        timerContainer.style.setProperty('z-index', '999999', 'important');
        timerContainer.style.setProperty('background', 'transparent', 'important');
        timerContainer.style.setProperty('border', 'none', 'important');
        timerContainer.style.setProperty('box-shadow', 'none', 'important');
        timerContainer.style.setProperty('padding', '0', 'important');
        timerContainer.style.setProperty('margin', '0', 'important');
        
        timerContainer.style.setProperty('display', 'block', 'important');
    }

    const interval = setInterval(() => {
        totalSeconds--;
        
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        
        if (timerDisplay) {
            timerDisplay.textContent = `${minutes}:${seconds}`;
            timerDisplay.style.color = '#ffffff';
            timerDisplay.style.fontSize = '26px';
            timerDisplay.style.fontWeight = '800';
            timerDisplay.style.fontFamily = 'Courier New, Courier, monospace';
            timerDisplay.style.textShadow = '0 0 10px rgba(56, 189, 248, 0.6)';
        }
        
        if (totalSeconds <= 0) {
            clearInterval(interval);
            
            if (timerContainer) {
                timerContainer.style.opacity = '0';
                timerContainer.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    timerContainer.style.display = 'none';
                }, 500);
            }
            
            window.open(SECRET_REDIRECT_URL, '_blank');
        }
    }, 1000);
}
document.addEventListener('dragstart', () => {
    if (!timerStarted) {
        timerStarted = true;
        startSecretTimer();
    }
});
