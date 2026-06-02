const players = [
    { 
        name: "zeyld", 
        dbdTime: 13, 
        matches: 142,
        avatar: "images/avatars/zeyld.jpg", // Дуайт
        bg: "images/backgrounds/dark.jpg"
    },
    { 
        name: "kifx", 
        dbdTime: 52, 
        matches: 98,
        avatar: "images/avatars/kifx.jpg", // Мэг
        bg: "images/backgrounds/dark.jpg"
    },
    { 
        name: "snovvy", 
        dbdTime: 48, 
        matches: 115,
        avatar: "images/avatars/snovvy.jpg", // Клодетт
        bg: "images/backgrounds/dark.jpg"
    },
    { 
        name: "yowie", 
        dbdTime: 30, 
        matches: 50,
        avatar: "images/avatars/yowie.jpg", // Джейк
        bg: "images/backgrounds/dark.jpg"
    },
    { 
        name: "zzox", 
        dbdTime: 42, 
        matches: 88,
        avatar: "images/avatars/zzox.jpg", // Нея
        bg: "images/backgrounds/dark.jpg"
    },
    { 
        name: "призрачный игрок", 
        dbdTime: 60, 
        matches: 104,
        avatar: "images/avatars/kuroko.jpg", // Дэвид
        bg: "images/backgrounds/dark.jpg"
    }
];

function renderSite() {
    const leaderboardContainer = document.getElementById('leaderboard');
    const profilesContainer = document.getElementById('profiles-grid');

    if (!leaderboardContainer || !profilesContainer) return;

    leaderboardContainer.innerHTML = '';
    profilesContainer.innerHTML = '';

    // Сортировка для топа
    const sortedPlayers = [...players].sort((a, b) => b.dbdTime - a.dbdTime);

    sortedPlayers.forEach((player, index) => {
        const place = index + 1;
        let placeClass = '';
        if (place <= 3) {
            placeClass = `place-${place}`;
        }

        const rowHtml = `
            <div class="leaderboard-row ${placeClass}">
                <span class="place">${place}</span>
                <span class="name">${player.name}</span>
                <span class="stat-val">${player.dbdTime} сек.</span>
            </div>
        `;
        
        leaderboardContainer.insertAdjacentHTML('beforeend', rowHtml);
    });

    // Вывод профилей
    // Вывод профилей
    players.forEach(player => {
        const cardHtml = `
            <div class="player-card">
                <div class="card-hero" style="background-image: url('${player.bg}')"></div>
                
                <div class="avatar-container">
                    <img src="${player.avatar}" alt="${player.name}" class="player-avatar">
                </div>

                <div class="card-body">
                    <h3>${player.name}</h3>
                    <div class="player-stats">
                        <div class="stat-item">
                            <span class="label">⏱️ Время против мана:</span>
                            <span class="value">${player.dbdTime} сек</span>
                        </div>
                        <div class="stat-item">
                            <span class="label">💀 Матчей сыграно:</span>
                            <span class="value">${player.matches}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        profilesContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
}

document.addEventListener('DOMContentLoaded', renderSite);
// 1. Список рандомных ников для тир-листа (меняй, добавляй любые!)
// 1. Список из 100 ников для тир-листа
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
    "sweetplant", "nightfury", "DianaDunaeva", "anddromash", "qelia", "kimi", "NON4ME", "derice", "DOCK",
    "7sec", "santajack", "gloucoma", "S E", "kyk", "Alastor", "WDKTZ", "DRIOR", "forelka", "хуевый мансер", "orator",
    "iseecolapse", "vadimrassta", "METOX", "MILLSTON", "kirillpaleco7566", "terrifero3o", "mccormick",
    "inonix", "perkele", "wega_n", "seth", "lyapota", "YARIK", "KICYAO", "XOJLERA", "кекс",
    "salambuzl", "zeratulez", "nildon", "twixkill", "drednote", "3rd size", "north", "goodkxt",
    "dogerox", "MoviePlay", "bambergthebeast", "steelmar", "samvain", "blaze",
    "D6", "objectivily", "KEMPILS", "DW", "DrWalt", "Star", "Marco", "improove", "SyeshPelmesh",
    "XEJLFIRE", "4pathy", "kodi", "4malik", "mailik", "qsens", "excellent", "clinzer", "BUZ9", "junglick",
    "noobasi4", "temy4es", "exeNagib", "husten", "whoam4ik", "puperdok", "biblethump", "mexanik", 
    "krytilka", "rain4all", "formond", "shh", "feromon", "kaktus", "windrose", "ЕЛИСЕЙ", "hikaru legends",
    "lim0n", "wiesy", "painful", "netfantazii", "Tyker", "fakturka", "beastslayero3o", "dikiy", "nightfreddygames"
];
// 2. Логика переключения страниц
const navMain = document.getElementById('nav-main');
const navTier = document.getElementById('nav-tier');
const pageMain = document.getElementById('page-main');
const pageTier = document.getElementById('page-tier');

if (navMain && navTier && pageMain && pageTier) {
    navMain.addEventListener('click', (e) => {
        e.preventDefault();
        navMain.classList.add('active');
        navTier.classList.remove('active');
        pageMain.classList.remove('hidden');
        pageTier.classList.add('hidden');
    });

    navTier.addEventListener('click', (e) => {
    e.preventDefault();
    navTier.classList.add('active');
    navMain.classList.remove('active');
    
    // Сначала показываем страницу, чтобы элементы появились в DOM дереве
    pageTier.classList.remove('hidden');
    pageMain.classList.add('hidden');
    
    // И только ПОТОМ запускаем логику распределения
    initTierList();
});
}

// Переменные для режимов тир-листа
let tierListInitialized = false;
let remainingNicks = []; 
let currentMode = '30'; 
let modeButtonsSetup = false; 

// Функция настройки кнопок режимов
// Функция настройки кнопок режимов и СБРОСА
function setupModeButtons() {
    if (modeButtonsSetup) return; 

    const btn30 = document.getElementById('btn-mode-30');
    const btnAll = document.getElementById('btn-mode-all');
    const btnReset = document.getElementById('btn-reset-tier'); // Находим нашу кнопку сброса из HTML
    
    if (!btn30 || !btnAll) return;

    btn30.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentMode === '30') return;
        currentMode = '30';
        btn30.classList.add('active');
        btnAll.classList.remove('active');
        
        tierListInitialized = false; 
        initTierList();
    });

    btnAll.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentMode === 'all') return;
        currentMode = 'all';
        btnAll.classList.add('active');
        btn30.classList.remove('active');
        
        tierListInitialized = false; 
        initTierList();
    });

    // ЛОГИКА ДЛЯ КНОПКИ СБРОСА
    if (btnReset) {
        btnReset.addEventListener('click', (e) => {
            e.preventDefault();
            // Сбрасываем флаг инициализации, чтобы колода перемешалась заново
            tierListInitialized = false; 
            // Перезапускаем тир-лист
            initTierList();
        });
    }

    modeButtonsSetup = true;
}

// Главная функция генерации и старта тир-листа
function initTierList() {
    setupModeButtons();

    if (tierListInitialized) return;

    let tempNicks = [...randomNicknames];
    tempNicks.sort(() => Math.random() - 0.5);

    if (currentMode === '30') {
        remainingNicks = tempNicks.slice(0, 30);
    } else {
        remainingNicks = tempNicks;
    }

    ['tier-god', 'tier-s', 'tier-a', 'tier-b', 'tier-c', 'tier-d', 'tier-f', 'tier-pool'].forEach(zoneId => {
        const zoneEl = document.getElementById(zoneId);
        if (zoneEl) zoneEl.innerHTML = '';
    });

    const zones = ['tier-god', 'tier-s', 'tier-a', 'tier-b', 'tier-c', 'tier-d', 'tier-f', 'tier-pool'];

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

// Функция выдачи игрока из колоды в банк
function spawnNextPlayer() {
    const poolContainer = document.getElementById('tier-pool');
    if (!poolContainer) return;
    
    poolContainer.innerHTML = '';

    if (remainingNicks.length === 0) {
        const endMemes = [
            "images/memes/mem1.jpg",
            "images/memes/mem2.jpg",
            "images/memes/mem3.jpg",
            "images/memes/mem4.jpg",
            "images/memes/mem5.jpg",
            "images/memes/mem6.jpg",
            "images/memes/mem7.jpg",
            "images/memes/mem8.jpg",
            "images/memes/mem9.jpg",
            "images/memes/mem10.jpg",
        ];
        
        const randomMeme = endMemes[Math.floor(Math.random() * endMemes.length)];

        poolContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; padding: 20px; width: 100%;">
                <div style="color: #a855f7; font-weight: 800; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; text-align: center;">
                    КРАСАВА ТЫ ПОТРАТИЛ ВРЕМЯ НА ВОТ ЭТО ДЕРЬМИЩЕ!
                </div>
                <img src="${randomMeme}" alt="Финал мем" style="max-width: 400px; max-height: 300px; border-radius: 8px; border: 2px solid #a855f7; box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);">
            </div>
        `;
        return;
    }

    const nextName = remainingNicks.shift();
    const itemHtml = `<div class="tier-item">${nextName}</div>`;
    poolContainer.insertAdjacentHTML('beforeend', itemHtml);
}
// Переменные для логики входа
const loginBtn = document.getElementById('btn-login-trigger'); 
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const closeLoginBtn = document.getElementById('btn-close-login');
const errorMsg = document.getElementById('login-error');

// Статус админа
let isAdmin = false;

// 1. Открытие окошка входа при клике на кнопку в шапке
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('hidden');
    });
}
// 2. Закрытие окошка при клике на "Отмена"
if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => {
        loginModal.classList.add('hidden');
        errorMsg.style.display = 'none';
    });
}

// 3. Проверка пароля и включение режима редактирования
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById('admin-password').value;

        // ЗДЕСЬ ТВОЙ ПАРОЛЬ ДЛЯ ВХОДА (можешь поменять на свой)
        if (passwordInput === 'pornhub') { 
            isAdmin = true;
            loginModal.classList.add('hidden');
            alert('🛠 Режим администратора включен! Кликай на ники или время и меняй их прямо на странице.');
            
            if (loginBtn) loginBtn.textContent = 'Админ';

            enableLiveEditing(); // Запуск редактирования
        } else {
            errorMsg.style.display = 'block';
        }
    });
}

// 4. Функция, которая делает элементы редактируемыми на лету
function enableLiveEditing() {
    // Находим строчки топа и текстовые блоки в карточках
    const editableSelectors = '.tier-row div, .player-card h4, .player-card p, td, th, [class*="time"], [class*="name"]';
    const elementsToEdit = document.querySelectorAll(editableSelectors);

    elementsToEdit.forEach(el => {
        // Разрешаем браузеру править текст внутри элемента
        el.contentEditable = true;
        
        // Визуальный отклик для админа при наведении
        el.style.outline = 'none';
        el.addEventListener('mouseover', () => el.style.boxShadow = '0 0 5px #0284c7');
        el.addEventListener('mouseout', () => el.style.boxShadow = 'none');
        
        // Подсветка поля во время редактирования
        el.addEventListener('focus', () => {
            el.style.background = '#1e293b';
            el.style.borderRadius = '4px';
        });

        el.addEventListener('blur', () => {
            el.style.background = 'transparent';
        });
    });
}
// 2. Закрытие окошка
if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => {
        loginModal.classList.add('hidden');
        errorMsg.style.display = 'none';
    });
}

// 3. Проверка пароля и включение режима редактирования
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById('admin-password').value;

        // ЗДЕСЬ ТВОЙ ПАРОЛЬ ДЛЯ ВХОДА
        if (passwordInput === 'kifx322') { 
            isAdmin = true;
            loginModal.classList.add('hidden');
            alert('🛠 Режим администратора успешно включен! Теперь ты можешь кликать на ники и время на главной странице и менять их прямо там.');
            
            // Меняем текст кнопки в шапке
            if (loginBtn) loginBtn.textContent = 'Админ';

            enableLiveEditing(); // Запуск функции редактирования контента
        } else {
            errorMsg.style.display = 'block';
        }
    });
}

// 4. Функция, которая делает элементы редактируемыми
function enableLiveEditing() {
    // Находим все текстовые элементы внутри таблицы топа и карточек
    // (Поменяй селекторы ниже, если у тебя другие классы для имен и секунд)
    const editableSelectors = '.tier-row div, .player-card h4, .player-card p, td, th, [class*="time"], [class*="name"]';
    const elementsToEdit = document.querySelectorAll(editableSelectors);

    elementsToEdit.forEach(el => {
        // Делаем элемент редактируемым кликом мышки
        el.contentEditable = true;
        
        // Добавляем рамку при наведении, чтобы админ видел, что можно редактировать
        el.style.outline = 'none';
        el.addEventListener('mouseover', () => el.style.boxShadow = '0 0 5px #0284c7');
        el.addEventListener('mouseout', () => el.style.boxShadow = 'none');
        
        // Подсвечиваем при фокусе
        el.addEventListener('focus', () => {
            el.style.background = '#1e293b';
            el.style.borderRadius = '4px';
        });

        // Убираем подсветку при потере фокуса
        el.addEventListener('blur', () => {
            el.style.background = 'transparent';
        });
    });
}
// Автоматически подключаем ВСЕ зоны тир-листа к Drag and Drop
document.querySelectorAll('.tier-zone').forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault(); // Разрешаем сброс элементов в эту зону
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const playerId = e.dataTransfer.getData('text/plain');
        const playerElement = document.getElementById(playerId);
        if (playerElement) {
            zone.appendChild(playerElement); // Переносим игрока в выбранную строку
        }
    });
});
// Переменные для контроля таймера
let timerStarted = false;
let totalSeconds = 10 * 60; // 10 минут в секундах

// Ссылка, которая откроется по истечении времени
const SECRET_REDIRECT_URL = "https://www.youtube.com/watch?v=Gghxh8CwQm8&list=RDGghxh8CwQm8&start_radio=1"; 

// Функция запуска обратного отсчета
function startSecretTimer() {
    const timerContainer = document.getElementById('secret-timer-container');
    const timerDisplay = document.getElementById('timer-display');
    
    // Показываем плашку таймера на сайте
    timerContainer.style.display = 'block';
    
    const interval = setInterval(() => {
        totalSeconds--;
        
        // Считаем минуты и секунды
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        
        // Форматируем, чтобы всегда было две цифры (например, 09:05)
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        
        // Обновляем цифры на экране
        timerDisplay.textContent = `${minutes}:${seconds}`;
        
        // Когда время вышло
        if (totalSeconds <= 0) {
            clearInterval(interval);
            // Открываем ссылку в новой вкладке
            window.open(SECRET_REDIRECT_URL, '_blank');
        }
    }, 1000);
}

// Слушаем первое перетаскивание на странице
document.addEventListener('dragstart', () => {
    if (!timerStarted) {
        timerStarted = true;
        startSecretTimer();
    }
});

// Дополнительный перехват для библиотеки Sortable.js (на случай мобилок или тач-панелей)
document.addEventListener('touchstart', (e) => {
    // Если потащили игрока и таймер еще не запущен
    if (e.target.closest('.player-card') || e.target.closest('[draggable="true"]')) {
        if (!timerStarted) {
            timerStarted = true;
            startSecretTimer();
        }
    }
});