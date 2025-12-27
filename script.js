// Сохраняем оригинальный title и description
const originalTitle = document.title;
const originalDescription = document.querySelector('meta[name="description"]')?.content || '';

// В authorType объекте:
// "founder"    // 👑 Основатель Хранилища
// "team"       // 👥 Команда  
// "expert"     // ⭐ Признанный эксперт
// "verified"   // ✅ Проверенный автор (специальный статус)
// "default"    // ✅ Автор (обычная галочка, если authorType не указан)

// Данные элементов
const items = [
    {
        id: 1,
        title: "Тимошка из Москвы",
        author: "Тимофей",
        authorType: "founder",
        date: "13.11.2025",
        shortDescription: "Канал про Minecraft с геймплеем и проектами",
        description: "Канал с контентом о мире Minecraft: от геймплея до создания проектов. Здесь вы найдете обзоры, гайды и многое другое для любителей этой культовой игры. Регулярные стримы, интересные сборки и советы для новичков.",
        image: "images/tim.png",
        tags: ["ютуб", "майнкрафт", "игры", "новичок"],
        url: "https://www.youtube.com/channel/UCrjrnsVgcgJJiV4En4ONoDA"
    },
    {
        id: 2,
        title: "TAIPrompts",
        author: "Команда TAIPrompts",
        date: "13.11.2025",
        shortDescription: "Создавайте идеальные промпты для нейросетей",
        description: "Создавайте идеальные промпты для нейросетей. Научитесь формулировать запросы так, чтобы ИИ понимал вас с полуслова. От базовых принципов до продвинутых техник - всё в одном месте.",
        image: "images/taiprompts.png",
        tags: ["промпт", "нейросети", "современность", "вайбкодинг"],
        url: "https://timoshamoscow.github.io/taiprompts.github.io/"
    },
    {
        id: 3,
        title: "Сибилевец",
        author: "Тимофей",
        date: "13.11.2025",
        shortDescription: "Простой и логичный язык для общения",
        description: "Простой, логичный, современный. Создан Тимофеем Сибилевым для лёгкого общения. Язык сочетает в себе простоту изучения и богатые выразительные возможности. Идеален для международного общения.",
        image: "images/sib.png",
        tags: ["лингвистика", "конланг", "простота", "3265"],
        url: "https://timoshamoscow.github.io/sibylevec-site.github.io/"
    },
    {
        id: 4,
        title: "Белойн",
        author: "Тимофей",
        date: "13.11.2025",
        shortDescription: "Дышите. Чувствуйте. Живите. Вне цифрового шума.",
        description: "Белойн - движение за осознанное отключение от цифрового шума.\n\n🌌 Основные направления:\n• Пространства тишины для медитации\n• Тактильные карты ручной работы\n• Эпистолярный клуб с каллиграфией\n• Читальни с редкими изданиями\n• Природные ретриты\n\n🎯 Философия:\nОсознанность вместо скроллинга, живые диалоги вместо чатов.\n\nУзнайте больше о наших уникальных услугах и статистике на сайте!",
        image: "images/belyoene.png",
        tags: ["детокс", "природа", "тишина", "спокойствие", "психология"],
        url: "https://timoshamoscow.github.io/belyoene.github.io/"
    },
    {
        id: 5,
        title: "'Хули' - это мат?",
        author: "Тимофей",
        date: "16.11.2025",
        shortDescription: "Разбираемся с сленгом и матом",
        description: "Хули - это сленговое слово. СЛЕНГ - это не МАТ. Подробное объяснение разницы между сленгом, жаргоном и нецензурной лексикой. Лингвистический анализ современной русской речи.",
        image: "images/hmm.png",
        tags: ["вопрос", "ответ", "сленг", "грамматика"],
        url: "https://sadalskij.livejournal.com/2845249.html"
    },
    {
        id: 6,
        title: "Как зовут девушку Домера?",
        author: "Тимофей",
        date: "16.11.2025",
        shortDescription: "Вся правда об Алиночке и Домере",
        description: "Алина также известная как Аlino4kaPrincess - главный герой каналов Domer Grief и Огород Домера (После самого Домера конечно), она является хейтершой Лены - бывшей девушки Домера. Также, в скором времени у Сергея (Домера) и Алины будет свадьба. Дата неизвестна. Сейчас же, с недавнего времени, она живет с Сергеем Камышниковым (Домером) и является его девушкой. Полная история их отношений и развития событий можно найти по ссылке на ресурс",
        image: "images/alina.png",
        tags: ["алиночка", "домер", "отношения", "майнкрафт", "любовь", "вопрос"],
        url: "https://taplink.cc/alino4kaprincssss"
    },
    {
        id: 7,
        title: "Сибилевец на Duolingo",
        author: "Тимофей",
        date: "16.11.2025",
        shortDescription: "Петиция по добавлению языка в Duolingo",
        description: "Официальная петиция к Duolingo с предложением добавить в инкубатор курс языка Сибилевец - простого и логичного лингвистического проекта. Присоединяйтесь к сообществу и поддержите инициативу!",
        image: "images/sib.png",
        tags: ["лингвистика", "конланг", "язык", "петиция"],
        url: "https://www.change.org/sibyleveconduolingo"
    },
    {
        id: 8,
        title: "Хранилище",
        author: "Тимофей",
        date: "17.11.2025",
        shortDescription: "Платформа для управления цифровыми ресурсами",
        description: "Хранилище с мета-тегами - это современная платформа для организации и управления цифровыми ресурсами. Хотите стать популярным на весь интернет? Добавьте ваш ресурс в наше хранилище! Мы предоставляем удобные инструменты для категоризации, поиска и продвижения вашего контента.",
        image: "images/hranit.png",
        tags: ["хранилище", "разработка", "технологии", "популярность"],
        url: "https://timoshamoscow.github.io/hranilishe.github.io/"
    },
    {
        id: 9,
        title: "Название вашего ресурса",
        author: "Вы можете быть здесь!",
        date: "31.11.2095",
        shortDescription: "Это место ждёт ВАШ проект!",
        description: "Здесь могла бы быть информация о ВАШЕМ ресурсе. Добавьте свой проект и станьте частью нашего сообщества!",
        image: "images/soon.png",
        tags: ["ваш-проект", "будущее", "скоро", "присоединяйся"],
        url: "https://timoshamoscow.github.io/hranilishe.github.io/#add-item-modal"
    },
    {
        id: 10,
        title: "Cuby - Minecraft-сервера",
        author: "Команда Cuby",
        date: "22.11.2025",
        shortDescription: "Лучший Minecraft-сервер в СНГ",
        description: "Лучший Minecraft-сервер в СНГ! Присоединяйтесь к нашему сообществу и наслаждайтесь ванильным геймплеем с кастомными плагинами. Регулярные ивенты, активное сообщество и качественная администрация.",
        image: "images/cuby.png",
        tags: ["майнкрафт", "сервер"],
        url: "https://t.me/cuby_mc"
    },
    {
        id: 11,
        title: "ICEBERG smp",
        author: "Команда ICEBERG",
        date: "22.11.2025",
        shortDescription: "Ванильные Minecraft-сервера с кастомными плагинами",
        description: "Ванильные Minecraft-сервера с кастомными плагинами. Уникальная атмосфера, сбалансированный геймплей и дружелюбное комьюнити. Идеально подходит для тех, кто ценит классический майнкрафт с современными улучшениями.",
        image: "images/iceberg.png",
        tags: ["майнкрафт", "сервер"],
        url: "https://t.me/ICEBERG_Minecraft"
    },
    {
        id: 12,
        title: "Ваш Единственный Друг",
        author: "Ваш Единственный Друг",
        date: "23.11.2025",
        shortDescription: "Полная история философии друга",
        description: "Я ваш единственный друг, все остальные враги, когда нибудь вы это поймёте... Полную философию можете узнать на канале. Жду по кнопке перейти к ресурсу)",
        image: "images/vashedinstveniydrug.png",
        tags: ["нарезки", "ютуб", "стрим", "популярность", "психология", "философия"],
        url: "https://taplink.cc/vashedinstveniydrug"
    },
    {
        id: 13,
        title: "AutoHE - Визуальный редактор для Minecraft",
        date: "31.11.2025",
        shortDescription: "Мощный редактор для Minecraft с визуальным программированием. Создавай истории без кода через перетаскивание блоков.",
        description: "AutoHE - это визуальный редактор для создания игровых историй в Minecraft. Создавай крутые проекты без программирования. Возможности:\n\n• Визуальное программирование через Blockly-блоки\n• Мгновенный экспорт проектов в Minecraft\n• GUI редактор для NPC диалогов\n• Менеджер ресурсов (модели, текстуры, звуки)\n• Темная тема с настраиваемыми акцентами\n• Локальное хранение проектов\n\nПроцесс создания: скачай → создай проект → собери логику из блоков → экспортируй в игру. Доступно для Windows, Linux, macOS.",
        image: "images/autohe.png",
        tags: ["майнкрафт", "редактор", "визуальное программирование", "игры", "разработка", "minecraft", "ютуб"],
        url: "https://www.autohe.ru/"
    },
    {
        id: 14,
        title: "Какие тайны могут быть у Кристаллов?",
        author: "Тимофей",
        date: "31.11.2025",
        shortDescription: "Размышляем о смысле кристаллов",
        description: "Премьера сюжетного сезона - Тайна Кристалла уже скоро!\n\nИ по секрету скажу, подписчики Телеграм канала узнали об этом раньше всех!\n\nЖду всех по кнопке Перейти к ресурсу!",
        image: "images/crystalls.png",
        tags: ["майнкрафт", "тайны", "кристаллы", "игры", "вопрос", "minecraft", "ютуб", "разработка"],
        url: "https://t.me/MinecraftWithTimosha/1764"
    },
    {
        id: 15,
        title: "Just Monika",
        author: "Тимофей",
        date: "31.11.2025",
        shortDescription: "Monika - культовая героиня из Doki Doki Literature Club",
        description: "Monika - самый известный персонаж из визуальной новеллы Doki Doki Literature Club. Известна своим уникальным мета-поведением, когда она осознает, что находится в игре, и начинает напрямую общаться с игроком через экран. Её фраза 'Just Monika' стала интернет-мемом и символом игры.",
        image: "images/monika.jpg",
        tags: ["ddlc", "визуальная новелла", "игры", "хоррор", "anime", "психология", "мемы", "ии", "аниме", "психологический хоррор", "любовь"],
        url: "https://t.me/druziya2025/32198"
    },
    {
        id: 16,
        title: "Как НЕ надо вести переговоры о пиаре?",
        shortDescription: "Разбор классических ошибок на примере реального диалога",
        description: "Анализ анти-переговоров: что пошло не так?\n\n❌ Ошибка 1: Пиар за 15 звезд\n- Неадекватная оценка стоимости услуг\n- Отсутствие понимания рыночных цен\n\n❌ Ошибка 2: Дай админку в канале\n- Нарушение базовых принциств безопасности\n- Попытка получить беспрецедентный доступ\n\n❌ Ошибка 3: Сам напишу пост\n- Непрофессиональный подход к контенту\n- Игнорирование правил площадки\n\n✅ Правильный подход:\n- Четкое ТЗ и бюджет\n- Уважение правил площадки\n- Профессиональное общение",
        image: "images/hmm.png",
        tags: ["пиар", "переговоры", "маркетинг", "ошибки", "образование", "вопрос"],
        url: "https://timoshamoscow.github.io/hranilishe.github.io/"
    },
    {
        id: 17,
        title: "Недрочабрь",
        author: "Ваш Единственный Друг",
        date: "01.12.2025",
        shortDescription: "Ноябрь как челлендж",
        description: "Недрочабрь, это интернет-челлендж, посвящённый воздержанию, участники которого воздерживаются от мастурбации в течение ноября.",
        image: "images/1635762767173756678.jpg",
        tags: ["ютуб", "челлендж", "сила воли", "недрочабрь"],
        url: "https://lifehacker.ru/health/kachestvo-zhizni/nedrochabr/"
    },
    {
        id: 18,
        title: "Трендовые запросы",
        date: "01.12.2025",
        shortDescription: "Какие поисковые запросы популярны в Google",
        description: "Трендовые поисковые запросы помогают понять, чем живёт интернет прямо сейчас.\nЗдесь собраны самые популярные темы, которые пользователи чаще всего ищут в Google.\nКаждый день тренды меняются: от мемов и новостей до игр, технологий и событий в мире.\nНиже приведён актуальный топ-10 поисковых запросов:\n1. Погода завтра — один из самых частых запросов у пользователей.\n2. Новый год 2026 выходные — люди проверяют праздничные дни и график отдыха.\n3. Итоги года Spotify — ежегодный тренд в конце декабря.\n4. Итоги года Яндекс Музыки — российский аналог, который тоже стабильно в топе.\n5. Minecraft 26.1 — интерес игроков к новой системе нумерации версии.\n6. Telegram проблемы со звонками — пользователи ищут причины перебоев в работе.\n7. FaceTime не работает — рост запросов после ограничений сервисов видеосвязи.\n8. Мессенджер Max что это — популярный запрос на фоне навязывания сервиса.\n9. Snapchat заблокирован — всплеск интереса после новостей о блокировке.\n10. Курс валют — один из вечных лидеров поиска.\nОткрой подборку трендов Google и узнай, какие темы сейчас врываются в инфополе.",
        image: "images/ggtrends.jpg",
        tags: ["ютуб", "вопрос", "новости", "популярность"],
        url: "https://trends.google.ru/trending?geo=RU"
    },
    {
        id: 19,
        title: "Мессенджер Max — вся правда",
        author: "Тимофей",
        date: "01.12.2025",
        shortDescription: "Что скрывает новый российский мессенджер и почему его обсуждают",
        description: "Мессенджер Max — новый сервис от VK, который активно продвигается как универсальная платформа для общения, учёбы и государственных сервисов.\nОднако вокруг него возникло множество вопросов: от избыточных разрешений до проблем с безопасностью.\nНиже собрана самая важная информация, которую должен знать каждый пользователь.\n\n1. Приложение запрашивает широкие системные разрешения — камеру, микрофон, геолокацию, Bluetooth и доступ к файлам.\n2. Анализы специалистов выявили активную передачу данных на серверы VK, включая метаданные устройства и активность других приложений.\n3. Max отказывается запускаться на Android 9, что вызывает сомнения в прозрачности требований.\n4. Внутри обнаружены jar-модули системного уровня, дающие приложению больше доступа, чем у обычного мессенджера.\n5. Max использует механики defensive evasion — проверку рута, виртуальных машин и дебаггеров.\n6. Зафиксировано необычное поведение: удерживание устройства в активном режиме через wake lock.\n7. Шифрование переписки и звонков отсутствует, что делает данные уязвимыми для перехвата.\n8. Приложение нельзя назвать устойчивым к MITM-атакам — обнаружены уязвимости.\n9. Пользователи жалуются на навязывание приложения в школах, вузах и госорганизациях.\n10. Многие считают, что Max ведёт себя скорее как шпионская программа, чем как безопасный мессенджер.\n\nЭта статья отражает текущее понимание устройства Max и рисков, связанных с его использованием.\nВажно учитывать, что безопасность цифровых сервисов — это не только функциональность, но и доверие.\nКаждый пользователь имеет право знать, какие данные собирает приложение и как они используются.",
        image: "images/max.jpg",
        tags: ["вопрос", "технологии", "новости", "безопасность", "мессенджер", "макс"],
        url: "https://vc.ru/life/2069180-messendzher-max-bezopasnost-i-uiazvimosti"
    },
    {
        id: 20,
        title: "ИТД",
        date: "25.12.2025",
        shortDescription: "ИТД — это новая гибридная платформа (соцсеть x форум) от блогера Новки, запущенная 16 декабря 2025 года.",
        description: "ИТД — это молодая платформа, созданная Ильёй Новки. \nОфициально запущена 16 декабря 2025 года. \nПо форме напоминает гибрид DTF и соцсети: упор на текстовые посты, комментарии-ветки и рейтинги. \nКлючевая особенность — система кланов (например, ❤️‍🔥), которую выбирают при регистрации и нельзя изменить. \nКультура платформы формируется ядром аудитории Новки из Telegram (392К подписчиков) и выражена в локальных мемах и трендовых хештегах (#супермиликотики, #ноукизаметь). \nПлатформа быстро развивается: уже добавлены верификация, тёмная тема, сезонный декор. \nОсновная механика роста — социальное взаимодействие: репосты, активные обсуждения, формирование альянсов между пользователями. \nМонетизация и масштабные рекламные инструменты пока отсутствуют. \nГлавный контент — пользовательский: от экспериментов по раскрутке до обсуждения нишевых тем.",
        image: "images/itd.png",
        tags: ["итд", "популярность", "пост"],
        url: "https://xn--d1ah4a.com/feed"
    },
    {
        id: 21,
        title: "Самый популярный пост на ИТД",
        author: "Тимофей",
        date: "25.12.2025",
        shortDescription: "Я создаю самый популярный пост на платформе ИТД, и вот, как это было",
        description: "Что такое ИТД можно посмотреть в статье 20 (ИТД), ну я скажу вам туториал по тому, как помочь посту:\n\nчто надо сделать:\n1. при регистрации выбрать клан ❤️‍🔥 / если зарегистрированы, то ладно\n2. подписаться на https://xn--d1ah4a.com/timosha_moscow\n3. на посте по ссылке на ресурс поставить лайк, написать комментарий, сделать репост\n\nважно то, что все это добровольно, если не хотите, можете не делать!!!",
        image: "images/itd.png",
        tags: ["пост", "популярность", "итд", "1место"],
        url: "https://xn--d1ah4a.com/@timosha_moscow/post/cc325e1d-e2c8-4d84-b533-982035f8610b"
    },
    {
        id: 22,
        title: "Dylan",
        date: "26.12.2025",
        shortDescription: "ИИ от разработчиков. Для разработчиков и не только",
        description: "ИИ от разработчиков. Для разработчиков и не только",
        image: "images/soon.png",
        tags: ["разработка", "образование", "ии"],
        url: "https://t.me/Dylan_TheOmniscient_bot"
    }
];

// ========== СОХРАНЕНИЕ СОСТОЯНИЯ СТРАНИЦЫ ==========

// Сохранение текущего состояния
function savePageState() {
    // Проверяем, есть ли активная страница
    const activeLink = document.querySelector('.nav-link.active');
    const activePage = activeLink ? activeLink.getAttribute('href').substring(1) : 'home';
    
    const state = {
        // Активная страница навигации
        activePage: activePage,
        
        // Номер страницы пагинации (только для страницы элементов)
        currentPage: document.querySelector('.pagination button.active')?.textContent || '1',
        
        // Текст поиска (если есть)
        searchQuery: document.querySelector('.search-input')?.value || '',
        
        // Активная категория (только для страницы категорий)
        activeCategory: document.querySelector('.category-card.active')?.dataset.category || '',
        
        // Прокрутка страницы
        scrollPosition: window.scrollY
    };
    
    localStorage.setItem('hranilishe_page_state', JSON.stringify(state));
}

// Восстановление состояния
function restorePageState() {
    const savedState = localStorage.getItem('hranilishe_page_state');
    
    if (savedState) {
        const state = JSON.parse(savedState);
        
        // Активируем соответствующую страницу
        if (state.activePage && state.activePage !== 'home') {
            setTimeout(() => {
                const targetLink = document.querySelector(`.nav-link[href="#${state.activePage}"]`);
                if (targetLink && !targetLink.classList.contains('active')) {
                    targetLink.click();
                }
            }, 100);
        }
        
        // Восстанавливаем поиск если есть
        if (state.searchQuery) {
            setTimeout(() => {
                const searchInput = document.querySelector('.search-input');
                if (searchInput && !searchInput.value) {
                    searchInput.value = state.searchQuery;
                    
                    // Если есть поисковый запрос, выполняем поиск
                    if (state.searchQuery.trim()) {
                        const searchBtn = document.querySelector('.search-btn');
                        if (searchBtn) {
                            setTimeout(() => {
                                performSearch(state.searchQuery);
                            }, 200);
                        }
                    }
                }
            }, 300);
        }
        
        // Восстанавливаем пагинацию
        if (state.currentPage && state.currentPage !== '1') {
            setTimeout(() => {
                const paginationBtn = document.querySelector(`.pagination button:nth-child(${state.currentPage})`);
                if (paginationBtn && !paginationBtn.classList.contains('active')) {
                    paginationBtn.click();
                }
            }, 500);
        }
        
        // Восстанавливаем прокрутку
        setTimeout(() => {
            if (state.scrollPosition > 0) {
                window.scrollTo(0, state.scrollPosition);
            }
        }, 800);
    }
}

function updateMetaTagsForArticle(item) {
    // Динамически обновляем метатеги
    document.title = `${item.title} | Хранилище цифровых ресурсов`;
    
    // Обновляем description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', item.shortDescription);
    }
    
    // Создаём или обновляем Open Graph теги
    updateOpenGraphTags(item);
}

function updateOpenGraphTags(item) {
    const articleUrl = `${window.location.origin}${window.location.pathname}?article=${item.id}`;
    
    // Функция для создания/обновления метатегов
    const setMeta = (property, content) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
    };
    
    setMeta('og:title', item.title);
    setMeta('og:description', item.shortDescription);
    setMeta('og:image', item.image.startsWith('http') ? item.image : window.location.origin + '/' + item.image);
    setMeta('og:url', articleUrl);
    setMeta('og:type', 'article');
}

// Функция для работы с URL параметрами
function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Функция открытия статьи по ID из URL
function openArticleFromUrl() {
    const articleId = getUrlParam('article');
    if (articleId) {
        const item = items.find(item => item.id === parseInt(articleId));
        if (item) {
            // Меняем title сразу при загрузке с параметром
            document.title = `${item.title} | Хранилище`;
            
            // Небольшая задержка, чтобы страница успела загрузиться
            setTimeout(() => {
                showArticleModal(item);
            }, 300);
        }
    }
}

// Элементы DOM
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const featuredItemsContainer = document.getElementById('featured-items');
const allItemsContainer = document.getElementById('all-items');
const paginationContainer = document.getElementById('pagination');
const searchInputs = document.querySelectorAll('.search-input');
const searchButtons = document.querySelectorAll('.search-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const addItemBtn = document.getElementById('add-item-btn');
const addItemModal = document.getElementById('add-item-modal');
const closeModalBtn = document.querySelector('.close-modal');
const copyCodeBtn = document.getElementById('copy-code-btn');
const itemCodeTemplate = document.getElementById('item-code-template');
const categoriesContainer = document.getElementById('categories-container');
const categoryItemsContainer = document.getElementById('category-items-container');
const breadcrumbsContainer = document.getElementById('breadcrumbs');

// Обобщенные категории
const generalCategories = {
    "🎮 Игры": {
        tags: ["игры", "майнкрафт", "minecraft", "гейминг", "игровой", "геймер", "ютуб", "стрим", "хоррор", "визуальная новелла", "психологический хоррор", "сервер"],
        icon: "🎮",
        description: "Игровые ресурсы, гайды и сообщества"
    },
    "🎥 Видео": {
        tags: ["ютуб", "youtube", "видео", "стрим", "трансляция", "видеоблог", "популярность", "аниме", "anime"],
        icon: "🎥",
        description: "Видео платформы и контент"
    },
    "🤖 ИИ и Технологии": {
        tags: ["нейросети", "ии", "ai", "технологии", "промпт", "вайбкодинг", "современность"],
        icon: "🤖",
        description: "Искусственный интеллект и современные технологии"
    },
    "🔤 Языки": {
        tags: ["лингвистика", "конланг", "язык", "сленг", "лингва", "грамматика", "петиция", "обучение"],
        icon: "🔤",
        description: "Языки, лингвистика и коммуникация"
    },
    "🌿 Здоровье": {
        tags: ["детокс", "природа", "тишина", "спокойствие", "медитация", "здоровье", "психология", "недрочабрь"],
        icon: "🌿",
        description: "Здоровый образ жизни и релаксация"
    },
    "❓ Вопросы": {
        tags: ["вопрос", "ответ", "обсуждение", "помощь", "совет", "справка", "объяснение", "философия"],
        icon: "❓",
        description: "Вопросы и ответы, обсуждения"
    },
    "😍 Отношения": {
        tags: ["отношения", "любовь", "алиночка", "домер", "семья", "дружба", "сложные отношения", "взаимоотношения"],
        icon: "😍",
        description: "Межличностные отношения и эмоциональные связи."
    },
    "📚 Образование": {
        tags: ["обучение", "образование", "курс", "язык", "лингвистика", "петиция"],
        icon: "📚", 
        description: "Образовательные ресурсы и обучающие материалы"
    },
    "🛠️ Разработка": {
        tags: ["вайбкодинг", "промпт", "код", "разработка", "проект"],
        icon: "🛠️",
        description: "Инструменты и ресурсы для разработчиков"
    },
    "⚡ Быстрое": {
        tags: ["скоро", "новое", "обновление", "в разработке"],
        icon: "⚡",
        description: "Скоростоящие проекты и обновления"
    }
};

// Функции для шаринга
function createShareMessage(item) {
    // Создаём уникальный URL для статьи с параметром article=id
    const articleUrl = `${window.location.origin}${window.location.pathname}?article=${item.id}`;
    
    return `Хей! Посмотри какую крутую информацию я нашел!

"${item.title}"
${item.shortDescription}

Читать полностью: ${articleUrl}

Ссылка на ресурс: ${item.url}

#Хранилище

А нашёл я это в самом лучшем Хранилище цифровых ресурсов: https://timoshamoscow.github.io/hranilishe.github.io/`;
}

const shareHandlers = {
    copy: (item) => {
        const message = createShareMessage(item);
        navigator.clipboard.writeText(message).then(() => {
            alert('✅ Сообщение скопировано в буфер обмена!');
        }).catch(() => {
            alert('❌ Не удалось скопировать сообщение');
        });
    },
    
    whatsapp: (item) => {
        const message = createShareMessage(item);
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    },
    
    telegram: (item) => {
        const message = createShareMessage(item);
        const url = `https://t.me/share/url?url=${encodeURIComponent(item.url)}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    },
    
    vk: (item) => {
        const message = createShareMessage(item);
        const url = `https://vk.com/share.php?url=${encodeURIComponent(item.url)}&title=${encodeURIComponent(item.title)}&comment=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    },
    
    twitter: (item) => {
        const message = createShareMessage(item);
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
};

// Функция показа модального окна с полной статьей
function showArticleModal(item) {
    // Сохраняем текущий title
    const previousTitle = document.title;
    
    // СОХРАНЯЕМ И СОЗДАЕМ SEO-ТЕГИ ДЛЯ СТАТЬИ
    document.title = `${item.title} | Хранилище цифровых ресурсов`;
    
    // Обновляем description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', item.shortDescription);
    }
    
    // Создаем каноническую ссылку для статьи
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `https://timoshamoscow.github.io/hranilishe.github.io/?article=${item.id}`;
    
    // Создаем динамические Open Graph теги
    updateOpenGraphTags(item);
    
    // Создаем структурированные данные для статьи
    createArticleStructuredData(item);
    
    // Добавляем параметр в URL при открытии модалки
    const url = new URL(window.location);
    url.searchParams.set('article', item.id);
    window.history.pushState({}, '', url);
    
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="
            background: white;
            border-radius: 12px;
            padding: 2rem;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        ">
            <button class="close-article" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            ">&times;</button>
            
            <div class="article-header" style="margin-bottom: 2rem;">
                <h2 style="color: var(--primary-dark); margin-bottom: 1rem;">${item.title}</h2>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
                    ${item.tags.map(tag => `<span style="background: rgba(74, 144, 226, 0.1); padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; color: var(--primary-dark);">${tag}</span>`).join('')}
                </div>
            </div>
            
            <div class="article-content" style="line-height: 1.8; font-size: 1.1rem;">
                ${item.description.split('\n').map(paragraph => 
                    `<p style="margin-bottom: 1rem;">${paragraph}</p>`
                ).join('')}
            </div>
            
            <div class="article-actions" style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eee;">
                <a href="${item.url}" target="_blank" class="resource-btn" style="display: inline-block; margin-right: 1rem;">Перейти к ресурсу</a>
                <button class="share-article-btn" style="
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    margin-right: 1rem;
                ">Поделиться статьей</button>
                <button class="copy-link-btn" style="
                    background: #6B7280;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                ">Скопировать ссылку</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Функция закрытия модалки
    const closeModal = () => {
        // Восстанавливаем оригинальный title
        document.title = previousTitle;
        
        // Удаляем модалку
        document.body.removeChild(modal);
        
        // Очищаем URL
        const cleanUrl = new URL(window.location);
        cleanUrl.searchParams.delete('article');
        window.history.replaceState({}, '', cleanUrl);
        
        // Удаляем обработчик Escape
        document.removeEventListener('keydown', handleEscape);
    };
    
    // Закрытие модального окна
    modal.querySelector('.close-article').addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Шаринг статьи
    modal.querySelector('.share-article-btn').addEventListener('click', () => {
        shareHandlers.copy(item);
    });
    
    // Копирование ссылки на статью
    modal.querySelector('.copy-link-btn').addEventListener('click', () => {
        const articleUrl = `${window.location.origin}${window.location.pathname}?article=${item.id}`;
        navigator.clipboard.writeText(articleUrl).then(() => {
            alert('✅ Ссылка скопирована!');
        });
    });
    
    // Закрытие по Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function createArticleStructuredData(item) {
    // Удаляем старые structured data если есть
    const oldScript = document.querySelector('script[type="application/ld+json"][data-article]');
    if (oldScript) {
        oldScript.remove();
    }
    
    // Создаем новые structured data для статьи
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://timoshamoscow.github.io/hranilishe.github.io/?article=${item.id}`
        },
        "headline": item.title,
        "description": item.shortDescription,
        "image": item.image.startsWith('http') ? item.image : `https://timoshamoscow.github.io/hranilishe.github.io/${item.image}`,
        "datePublished": "2025-12-26",
        "dateModified": "2025-12-26",
        "author": {
            "@type": "Person",
            "name": "Тимофей",
            "url": "https://timoshamoscow.github.io/hranilishe.github.io/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Хранилище",
            "logo": {
                "@type": "ImageObject",
                "url": "https://timoshamoscow.github.io/hranilishe.github.io/images/hranit.png",
                "width": "256",
                "height": "256"
            }
        },
        "articleBody": item.description,
        "keywords": item.tags.join(', '),
        "inLanguage": "ru-RU"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-article', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Функции для хлебных крошек
function updateBreadcrumbs(page, category = null, item = null) {
    let html = '<a href="#home">Главная</a>';
    
    if (page === 'categories' && category) {
        html += ` <span class="separator">→</span> <a href="#categories">Категории</a>`;
        html += ` <span class="separator">→</span> <span class="current">${category}</span>`;
    }
    else if (page === 'items') {
        html += ` <span class="separator">→</span> <span class="current">Все элементы</span>`;
    }
    else if (page === 'about') {
        html += ` <span class="separator">→</span> <span class="current">О проекте</span>`;
    }
    else {
        html += ` <span class="separator">→</span> <span class="current">${getPageTitle(page)}</span>`;
    }
    
    breadcrumbsContainer.innerHTML = html;
}

function getPageTitle(page) {
    const titles = {
        'home': 'Главная',
        'items': 'Элементы', 
        'categories': 'Категории',
        'about': 'О проекте'
    };
    return titles[page] || 'Главная';
}

// Настройка пагинации
function setupPagination() {
    const itemsPerPage = 6;
    const pageCount = Math.ceil(items.length / itemsPerPage);
    
    paginationContainer.innerHTML = '';
    
    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок
            document.querySelectorAll('.pagination button').forEach(btn => {
                btn.classList.remove('active');
            });
        button.classList.add('active');
    
            // Показываем элементы для выбранной страницы
            showPage(i, itemsPerPage);
    
            // СОХРАНЯЕМ СОСТОЯНИЕ
            setTimeout(savePageState, 100);
        });
        
        if (i === 1) button.classList.add('active');
        
        paginationContainer.appendChild(button);
    }
    
    // Показываем первую страницу при загрузке
    showPage(1, itemsPerPage);
}

// Функция показа страницы
function showPage(pageNumber, itemsPerPage) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = items.slice(startIndex, endIndex);
    
    renderAllItems(pageItems);
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedItems();
    setupPagination();
    renderGeneralCategories();
    setupEventListeners();
    setupTabs();
    updateBreadcrumbs('home');
    
    // Проверяем URL на наличие параметра article при загрузке
    openArticleFromUrl();
});

// Настройка вкладок
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок и контента
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Добавляем активный класс текущей кнопке
            btn.classList.add('active');

            // Показываем соответствующий контент
            const tabId = btn.dataset.tab + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Улучшенное копирование кода
    copyCodeBtn.addEventListener('click', () => {
        const codeText = itemCodeTemplate.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
            const originalText = copyCodeBtn.textContent;
            copyCodeBtn.textContent = '✅ Скопировано!';
            copyCodeBtn.style.background = '#10B981';
            
            setTimeout(() => {
                copyCodeBtn.textContent = originalText;
                copyCodeBtn.style.background = '';
            }, 2000);
        }).catch(() => {
            copyCodeBtn.textContent = '❌ Ошибка';
            setTimeout(() => {
                copyCodeBtn.textContent = '📋 Копировать';
            }, 2000);
        });
    });
}

// Получение избранных элементов (первые 3)
function getFeaturedItems() {
    return items.slice(0, 3);
}

// Простая функция поиска
function performSearch(query) {
    if (!query.trim()) {
        // Если поиск пустой, показываем первую страницу всех элементов
        showPage(1, 6);
        setupPagination(); // Пересоздаём пагинацию для всех элементов
        return items;
    }

    const lowerQuery = query.toLowerCase();
    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.shortDescription.toLowerCase().includes(lowerQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
    
    // Для результатов поиска убираем пагинацию
    renderAllItems(filteredItems);
    paginationContainer.innerHTML = ''; // Скрываем пагинацию при поиске
    
    if (filteredItems.length === 0) {
        allItemsContainer.innerHTML = `
            <div class="no-items">
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить запрос поиска</p>
            </div>
        `;
    }
    
    // Сохраняем состояние поиска
    setTimeout(savePageState, 100);
    
    return filteredItems;
}

// Рендер обобщенных категорий
function renderGeneralCategories() {
    categoriesContainer.innerHTML = '';
    
    Object.entries(generalCategories).forEach(([categoryName, categoryData]) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card glass-effect';
        categoryCard.dataset.category = categoryName;
        
        // Находим элементы, подходящие под эту категорию
        const categoryItems = items.filter(item => 
            item.tags.some(tag => 
                categoryData.tags.some(categoryTag => 
                    tag.toLowerCase().includes(categoryTag.toLowerCase())
                )
            )
        );
        
        const itemsCount = categoryItems.length;
        
        categoryCard.innerHTML = `
            <div class="category-icon">${categoryData.icon}</div>
            <div class="category-name">${categoryName}</div>
            <div class="category-count">${itemsCount} элемент${itemsCount === 1 ? '' : itemsCount > 4 ? 'ов' : 'а'}</div>
        `;
        
        categoryCard.addEventListener('click', () => {
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('active');
            });
            categoryCard.classList.add('active');
            showCategoryItems(categoryName, categoryData.tags);
            updateBreadcrumbs('categories', categoryName);
        });
        
        categoriesContainer.appendChild(categoryCard);
    });
}

// Показать элементы категории
function showCategoryItems(categoryName, categoryTags) {
    // Сохраняем состояние
    setTimeout(savePageState, 100);
    const filteredItems = items.filter(item => 
        item.tags.some(tag => 
            categoryTags.some(categoryTag => 
                tag.toLowerCase().includes(categoryTag.toLowerCase())
            )
        )
    );
    
    
    if (filteredItems.length === 0) {
        categoryItemsContainer.innerHTML = `
            <div class="no-items">
                <h3>В категории "${categoryName}" пока нет элементов</h3>
                <p>Добавьте элементы с соответствующими тегами</p>
            </div>
        `;
        return;
    }
    
    categoryItemsContainer.innerHTML = `
        <h3>Элементы в категории "${categoryName}"</h3>
        <p>${generalCategories[categoryName].description}</p>
        <div class="items-grid" id="category-items-grid"></div>
    `;
    
    const categoryItemsGrid = document.getElementById('category-items-grid');
    filteredItems.forEach(item => {
        categoryItemsGrid.appendChild(createItemCard(item));
    });
}

// Рендер избранных элементов
function renderFeaturedItems() {
    featuredItemsContainer.innerHTML = '';
    const featuredItems = getFeaturedItems();
    
    featuredItems.forEach(item => {
        featuredItemsContainer.appendChild(createItemCard(item));
    });
}

// Рендер всех элементов (теперь принимает массив для отображения)
function renderAllItems(itemsToRender = items) {
    allItemsContainer.innerHTML = '';
    itemsToRender.forEach(item => {
        allItemsContainer.appendChild(createItemCard(item));
    });
}

// Создание карточки
// ========== СИСТЕМА ТИПОВ ГАЛОЧЕК ==========
const authorTypes = {
    // Ключ: значение из authorType
    founder: {
        icon: "👑",
        title: "Администратор Хранилища",
        color: "#F59E0B",
        badge: "Администратор",
        svg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" style="vertical-align: middle;">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"/>
              </svg>`
    },
    team: {
        icon: "👥",
        title: "Над проектом работает не один человек",
        color: "#3B82F6",
        badge: "Команда",
        svg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#3B82F6" style="vertical-align: middle;">
                <path d="M12 5.5A3.5 3.5 0 0 1 15.5 9 3.5 3.5 0 0 1 12 12.5 3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8C5 6.62 6.22 5.5 7.75 5.5C9.28 5.5 10.5 6.62 10.5 8C10.5 9.38 9.28 10.5 7.75 10.5C6.22 10.5 5 9.38 5 8M16.25 5.5C17.78 5.5 19 6.62 19 8C19 9.38 17.78 10.5 16.25 10.5C14.72 10.5 13.5 9.38 13.5 8C13.5 6.62 14.72 5.5 16.25 5.5M5.5 13.75C5.5 12.37 6.62 11.25 8 11.25C9.38 11.25 10.5 12.37 10.5 13.75V18.5H5.5V13.75M13.5 13.75C13.5 12.37 14.62 11.25 16 11.25C17.38 11.25 18.5 12.37 18.5 13.75V18.5H13.5V13.75Z"/>
              </svg>`
    },
    expert: {
        icon: "⭐",
        title: "Признанный эксперт",
        color: "#10B981",
        badge: "Эксперт",
        svg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#10B981" style="vertical-align: middle;">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
              </svg>`
    },
    verified: {
        icon: "✅",
        title: "Проверенный автор",
        color: "#1DA1F2",
        badge: "Проверено",
        svg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#1DA1F2" style="vertical-align: middle;">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>`
    },
    // Базовый тип для авторов без authorType
    default: {
        icon: "✅",
        title: "Автор подтвердил информацию",
        color: "#6B7280",
        badge: "Автор",
        svg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#6B7280" style="vertical-align: middle;">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>`
    }
};

// Функция для получения типа автора
function getAuthorType(item) {
    if (!item.author || item.author.trim() === '') {
        return null; // Аноним → нет галочки
    }
    return authorTypes[item.authorType] || authorTypes.default;
}

// ========== ОБНОВЛЁННАЯ ФУНКЦИЯ СОЗДАНИЯ КАРТОЧКИ ==========
function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card glass-effect';
    
    const displayDescription = item.shortDescription || 
        (item.description.length > 120 ? item.description.substring(0, 120) + '...' : item.description);
    
    const showReadMore = item.description && item.description.length > 120 && item.shortDescription !== item.description;
    
    // Проверяем, есть ли автор и дата
    const hasAuthor = item.author && item.author.trim() !== '';
    const hasDate = item.date && item.date.trim() !== '';
    const defaultDate = 'Неизвестно';
    
    // Получаем тип автора
    const authorType = getAuthorType(item);
    
    // Генерируем HTML для мета-информации
    let metaHTML = '';
    
    if (authorType) {
        // Есть автор и тип галочки
        metaHTML = `
            <div class="item-meta" style="
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 10px;
                font-size: 0.9rem;
            ">
                <!-- Автор с галочкой -->
                <div style="display: flex; align-items: center; gap: 8px;" class="author-with-badge">
                    <span style="display: flex; align-items: center; gap: 5px; color: var(--text-secondary);">
                        <span style="font-size: 1rem;">👤</span>
                        <span style="
                            display: inline-flex;
                            align-items: center;
                            gap: 6px;
                            padding: 4px 10px;
                            background: ${authorType.color}15;
                            border-radius: 20px;
                            color: var(--text-primary);
                            border: 1px solid ${authorType.color}30;
                        ">
                            ${item.author}

                            ${item.authorType ? `<span class="badge-on-hover" style="
                                    display: none;
                                    font-size: 0.7rem;
                                    background: ${authorType.color};
                                    color: white;
                                    padding: 1px 6px;
                                    border-radius: 10px;
                                    margin-left: 4px;
                              ">${authorType.badge}</span>` : ''}

                                ${authorType.svg || authorType.icon}
                                ${item.authorType ? `<span style="
                                    font-size: 0.7rem;
                                    background: ${authorType.color};
                                    color: white;
                                    padding: 1px 6px;
                                    border-radius: 10px;
                                    margin-left: 4px;
                                ">${authorType.badge}</span>` : ''}
                            </span>
                        </span>
                    </span>
                </div>
                
                <!-- Дата -->
                <div style="display: flex; align-items: center; gap: 5px; color: var(--text-secondary);">
                    <span style="font-size: 1rem;">📅</span>
                    <span>${hasDate ? item.date : defaultDate}</span>
                </div>
            </div>
        `;
    } else if (hasAuthor) {
        // Есть автор, но нет галочки (не должно быть по логике, но на всякий случай)
        metaHTML = `
            <div class="item-meta" style="
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 10px;
                font-size: 0.9rem;
                color: var(--text-secondary);
            ">
                <div style="display: flex; align-items: center; gap: 5px;">
                    <span style="font-size: 1rem;">👤</span>
                    <span>${item.author}</span>
                </div>
                
                <div style="display: flex; align-items: center; gap: 5px;">
                    <span style="font-size: 1rem;">📅</span>
                    <span>${hasDate ? item.date : defaultDate}</span>
                </div>
            </div>
        `;
    } else {
        // Анонимный автор
        metaHTML = `
            <div class="item-meta" style="
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 10px;
                font-size: 0.9rem;
                color: var(--text-secondary);
            ">
                <div style="display: flex; align-items: center; gap: 5px;">
                    <span style="font-size: 1rem;">👤</span>
                    <span>Аноним</span>
                </div>
                
                <div style="display: flex; align-items: center; gap: 5px;">
                    <span style="font-size: 1rem;">📅</span>
                    <span>${hasDate ? item.date : defaultDate}</span>
                </div>
            </div>
        `;
    }
    
    // HTML для заголовка
    const titleHTML = `<h3 class="item-title">${item.title}</h3>`;
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="item-image" title="${item.title}">
        <div class="item-content">
            <!-- ЗАГОЛОВОК -->
            ${titleHTML}
            
            <!-- АВТОР И ДАТА ПОД ЗАГОЛОВКОМ -->
            ${metaHTML}
            
            <p class="item-description">${displayDescription}</p>
            <div class="item-tags" style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 5px;">
                ${item.tags.map(tag => `<span style="background: rgba(74, 144, 226, 0.1); padding: 3px 8px; border-radius: 12px; font-size: 0.8rem; color: var(--primary-dark);">${tag}</span>`).join('')}
            </div>
            <div class="item-actions">
                <a href="${item.url}" target="_blank" class="resource-btn">Перейти к ресурсу</a>
                ${showReadMore ? '<button class="read-more-btn">Читать</button>' : ''}
                <div class="share-dropdown">
                    <button class="share-btn">Поделиться</button>
                    <div class="share-menu">
                        <button class="share-option" data-platform="copy">Скопировать</button>
                        <button class="share-option" data-platform="whatsapp">WhatsApp</button>
                        <button class="share-option" data-platform="telegram">Telegram</button>
                        <button class="share-option" data-platform="vk">VK</button>
                        <button class="share-option" data-platform="twitter">Twitter (X)</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Добавляем обработчик для специальных галочек
    const verifiedBadge = card.querySelector('.verified-badge');
    if (verifiedBadge) {
        const authorName = verifiedBadge.dataset.author;
        const badgeType = verifiedBadge.dataset.type;
        const typeInfo = authorTypes[badgeType] || authorTypes.default;
        
        verifiedBadge.addEventListener('click', (e) => {
            e.stopPropagation();
            showVerificationTooltip(e.target, authorName, typeInfo);
        });
        
        verifiedBadge.addEventListener('mouseenter', (e) => {
            showVerificationTooltip(e.target, authorName, typeInfo);
        });
        
        // Добавляем класс для анимации
        if (badgeType !== 'default') {
            verifiedBadge.classList.add('special-badge');
        }
    }
    
    const image = card.querySelector('.item-image');
    image.addEventListener('click', () => {
        window.open(item.url, '_blank');
    });
    
    // Обработчик кнопки "Читать"
    const readMoreBtn = card.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', () => {
            showArticleModal(item);
        });
    }
    
    // Обработчики для кнопок шаринга
    const shareOptions = card.querySelectorAll('.share-option');
    shareOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const platform = option.dataset.platform;
            if (shareHandlers[platform]) {
                shareHandlers[platform](item);
            }
        });
    });
    
    return card;
}

// ========== ОБНОВЛЁННАЯ ФУНКЦИЯ ТУЛТИПА ==========
function showVerificationTooltip(element, authorName, typeInfo = null) {
    // Удаляем старый тултип если есть
    const oldTooltip = document.querySelector('.verification-tooltip');
    if (oldTooltip) oldTooltip.remove();
    
    let tooltipContent = '';
    
    if (typeInfo) {
        // Специальный тултип для типовых галочек
        tooltipContent = `
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="color: ${typeInfo.color}; font-size: 1.2rem;">${typeInfo.icon}</span>
                <strong>${typeInfo.title}</strong>
            </div>
            <p style="margin: 0; color: var(--text-secondary); line-height: 1.4;">
                Автор <strong>${authorName}</strong> имеет статус <strong style="color: ${typeInfo.color}">${typeInfo.badge}</strong>.
                ${typeInfo.badge === 'Администратор' ? 'Главный администратор Хранилища.' : ''}
                ${typeInfo.badge === 'Команда' ? 'Над проектом работает не один человек.' : ''}
                ${typeInfo.badge === 'Эксперт' ? 'Проверенный специалист в своей области.' : ''}
                ${typeInfo.badge === 'Проверено' ? 'Автор подтвердил достоверность информации.' : ''}
            </p>
        `;
    } else {
        // Стандартный тултип
        tooltipContent = `
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="color: #1DA1F2; font-size: 1.2rem;">✓</span>
                <strong>Информация проверена</strong>
            </div>
            <p style="margin: 0; color: var(--text-secondary); line-height: 1.4;">
                Автор <strong>${authorName}</strong> подтвердил достоверность информации в этой статье.
            </p>
        `;
    }
    
    // Создаем новый тултип
    const tooltip = document.createElement('div');
    tooltip.className = 'verification-tooltip';
    tooltip.innerHTML = `
        <div style="
            position: fixed;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 12px 16px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            max-width: 300px;
            font-size: 0.9rem;
            color: var(--text-primary);
            backdrop-filter: blur(10px);
        ">
            ${tooltipContent}
            <div style="
                position: absolute;
                bottom: -6px;
                left: 20px;
                width: 12px;
                height: 12px;
                background: var(--card-bg);
                border-right: 1px solid var(--border-color);
                border-bottom: 1px solid var(--border-color);
                transform: rotate(45deg);
            "></div>
        </div>
    `;
    
    // Позиционируем тултип рядом с галочкой
    const rect = element.getBoundingClientRect();
    tooltip.style.top = (rect.top - 120) + 'px';
    tooltip.style.left = (rect.left - 140) + 'px';
    
    document.body.appendChild(tooltip);
    
    // Автоудаление через 3 секунды
    setTimeout(() => {
        if (tooltip && tooltip.parentNode) {
            tooltip.remove();
        }
    }, 3000);
    
    // Удаление при клике вне тултипа
    document.addEventListener('click', function removeTooltip(e) {
        if (!tooltip.contains(e.target) && e.target !== element) {
            tooltip.remove();
            document.removeEventListener('click', removeTooltip);
        }
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Навигация
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(`${targetPage}-page`).classList.add('active');
            
            // Обновляем хлебные крошки
            updateBreadcrumbs(targetPage);

            // Если переходим на страницу элементов, восстанавливаем пагинацию
            if (targetPage === 'items') {
                setupPagination();
            }
        });
    });
    
    // Поиск на главной странице - переходит на страницу элементов с результатами
    const homeSearchInput = document.querySelector('#home-page .search-input');
    const homeSearchBtn = document.querySelector('#home-page .search-btn');
    
    if (homeSearchBtn) {
        homeSearchBtn.addEventListener('click', () => {
            const query = homeSearchInput.value;
            if (query.trim()) {
                // Переходим на страницу элементов
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector('a[href="#items"]').classList.add('active');
                
                pages.forEach(page => page.classList.remove('active'));
                document.getElementById('items-page').classList.add('active');
                
                updateBreadcrumbs('items');
                
                // Выполняем поиск
                performSearch(query);
            }
        });
    }

    if (homeSearchInput) {
        homeSearchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const query = homeSearchInput.value;
                if (query.trim()) {
                    // Переходим на страницу элементов
                    navLinks.forEach(l => l.classList.remove('active'));
                    document.querySelector('a[href="#items"]').classList.add('active');
                    
                    pages.forEach(page => page.classList.remove('active'));
                    document.getElementById('items-page').classList.add('active');
                    
                    updateBreadcrumbs('items');
                    
                    // Выполняем поиск
                    performSearch(query);
                }
            }
        });
    }
    
    // Поиск на странице элементов
    const itemsSearchInput = document.querySelector('#items-page .search-input');
    const itemsSearchBtn = document.querySelector('#items-page .search-btn');
    
    if (itemsSearchBtn) {
        itemsSearchBtn.addEventListener('click', () => {
            const query = itemsSearchInput.value;
            performSearch(query);
        });
    }

    if (itemsSearchInput) {
        itemsSearchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const query = itemsSearchInput.value;
                performSearch(query);
            }
        });
    }
    
    // Мобильное меню
    mobileMenuBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.style.display = '';
        }
    });
    
    // Модальное окно
    addItemBtn.addEventListener('click', () => {
        addItemModal.classList.add('active');
    });
    
    closeModalBtn.addEventListener('click', () => {
        addItemModal.classList.remove('active');
    });
    
    addItemModal.addEventListener('click', (e) => {
        if (e.target === addItemModal) {
            addItemModal.classList.remove('active');
        }
    });

    // Обработка кнопки "Назад" в браузере
window.addEventListener('popstate', function() {
    const articleId = getUrlParam('article');
    if (!articleId) {
        // Определяем текущую страницу по URL
        const path = window.location.pathname;
        let originalTitle = "Хранилище | Управление цифровыми ресурсами";
        
        if (path.includes('items.html')) {
            originalTitle = "Все элементы | Хранилище";
        } else if (path.includes('categ.html')) {
            originalTitle = "Категории | Хранилище";
        } else if (path.includes('privacy.html')) {
            originalTitle = "Политика конфиденциальности | Хранилище";
        } else if (path.includes('terms.html')) {
            originalTitle = "Условия использования | Хранилище";
        }
        
        document.title = originalTitle;
    }
});
}

// ... весь ваш существующий код ...

// === ДОБАВЬТЕ ЭТО В САМЫЙ КОНЕЦ ФАЙЛА ===

// Функция для генерации sitemap (только для разработки)
function generateSitemap() {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
    <url>
        <loc>https://timoshamoscow.github.io/hranilishe.github.io/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    
    <url>
        <loc>https://timoshamoscow.github.io/hranilishe.github.io/items.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    
    <url>
        <loc>https://timoshamoscow.github.io/hranilishe.github.io/categ.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>`;
    
    items.forEach(item => {
        sitemap += `
    <url>
        <loc>https://timoshamoscow.github.io/hranilishe.github.io/?article=${item.id}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
    });
    
    sitemap += `
    
    <url>
        <loc>https://timoshamoscow.github.io/hranilishe.github.io/privacy.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.3</priority>
    </url>
    
    <url>
        <loc>https://timoshamoscow.github.io/hranilishe.github.io/terms.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.3</priority>
    </url>

</urlset>`;
    
    return sitemap;
}

// Для использования:
// 1. Откройте консоль браузера (F12)
// 2. Введите: generateSitemap()
// 3. Скопируйте результат
// 4. Вставьте в файл sitemap.xml

// ========== ИНИЦИАЛИЗАЦИЯ СОХРАНЕНИЯ СОСТОЯНИЯ ==========

// Восстанавливаем состояние страницы при загрузке
window.addEventListener('load', function() {
    // Небольшая задержка чтобы все успело загрузиться
    setTimeout(restorePageState, 300);
});

// Сохраняем состояние при закрытии/обновлении страницы
window.addEventListener('beforeunload', savePageState);

// Сохраняем состояние при прокрутке (с ограничением частоты)
let scrollSaveTimeout;
window.addEventListener('scroll', () => {
    if (!scrollSaveTimeout) {
        scrollSaveTimeout = setTimeout(() => {
            savePageState();
            scrollSaveTimeout = null;
        }, 1000);
    }
});

// Также сохраняем при клике на навигацию
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(savePageState, 200);
    });
});

// Функция для генерации статических страниц статей
function generateStaticArticlePages() {
    console.log('=== ГЕНЕРАЦИЯ SEO-СТРАНИЦ ДЛЯ СТАТЕЙ ===');
    
    items.forEach(item => {
        console.log(`Генерируем страницу для: ${item.title}`);
        
        // Код HTML для страницы статьи
        const articleHTML = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${item.title} | Хранилище цифровых ресурсов</title>
    <meta name="description" content="${item.shortDescription}">
    <meta name="keywords" content="${item.tags.join(', ')}, хранилище, цифровые ресурсы">
    <meta name="author" content="Тимофей">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${item.title}">
    <meta property="og:description" content="${item.shortDescription}">
    <meta property="og:image" content="https://timoshamoscow.github.io/hranilishe.github.io/${item.image}">
    <meta property="og:url" content="https://timoshamoscow.github.io/hranilishe.github.io/articles/article-${item.id}.html">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Хранилище">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${item.title}">
    <meta name="twitter:description" content="${item.shortDescription}">
    <meta name="twitter:image" content="https://timoshamoscow.github.io/hranilishe.github.io/${item.image}">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://timoshamoscow.github.io/hranilishe.github.io/articles/article-${item.id}.html">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${item.title}",
        "description": "${item.shortDescription}",
        "image": "https://timoshamoscow.github.io/hranilishe.github.io/${item.image}",
        "author": {
            "@type": "Person",
            "name": "Тимофей"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Хранилище",
            "logo": {
                "@type": "ImageObject",
                "url": "https://timoshamoscow.github.io/hranilishe.github.io/images/hranit.png"
            }
        },
        "datePublished": "2025-12-26",
        "dateModified": "2025-12-26",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://timoshamoscow.github.io/hranilishe.github.io/articles/article-${item.id}.html"
        },
        "articleBody": "${item.description.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
    }
    </script>
    
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
            line-height: 1.6;
        }
        .back-link { 
            display: inline-block; 
            margin-bottom: 20px; 
            color: #4A90E2; 
            text-decoration: none;
        }
        .article-title { 
            color: #2c3e50; 
            margin-bottom: 10px;
        }
        .article-image { 
            max-width: 100%; 
            height: auto; 
            margin: 20px 0;
        }
        .article-content { 
            margin-top: 20px; 
            font-size: 1.1em;
        }
        .tags { 
            margin-top: 20px;
        }
        .tag { 
            display: inline-block; 
            background: #f0f8ff; 
            padding: 5px 10px; 
            margin-right: 5px; 
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <a href="https://timoshamoscow.github.io/hranilishe.github.io/" class="back-link">← Назад в Хранилище</a>
    
    <h1 class="article-title">${item.title}</h1>
    
    <img src="https://timoshamoscow.github.io/hranilishe.github.io/${item.image}" alt="${item.title}" class="article-image">
    
    <div class="article-content">
        ${item.description.split('\n').map(p => `<p>${p}</p>`).join('')}
    </div>
    
    <div class="tags">
        <strong>Теги:</strong>
        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    
    <p style="margin-top: 30px;">
        <a href="${item.url}" target="_blank" style="background: #4A90E2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Перейти к ресурсу
        </a>
    </p>
    
    <script>
        // Перенаправляем на главную страницу с параметром article
        if (!window.location.search.includes('redirected')) {
            window.location.replace('https://timoshamoscow.github.io/hranilishe.github.io/?article=${item.id}&redirected=true');
        }
    </script>
</body>
</html>`;

        // Выводим код для копирования
        console.log(`\n=== article-${item.id}.html ===`);
        console.log(articleHTML);
        console.log('\n--- КОНЕЦ ФАЙЛА ---\n');
    });
}

// Чтобы сгенерировать страницы, выполните в консоли браузера:
// generateStaticArticlePages()
// Затем скопируйте код каждого файла и создайте физические файлы в папке /articles/

// Анимация галочки при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем класс pulse к галочкам
    setTimeout(() => {
        document.querySelectorAll('.verified-badge').forEach(badge => {
            badge.classList.add('pulse');
            setTimeout(() => badge.classList.remove('pulse'), 1000);
        });
    }, 500);
});
