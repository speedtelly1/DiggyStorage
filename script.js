// Сохраняем оригинальный title и description
const originalTitle = document.title;
const originalDescription = document.querySelector('meta[name="description"]')?.content || '';

// Данные элементов
const items = [
    {
        id: 1,
        title: "Тимошка из Москвы",
        shortDescription: "Канал про Minecraft с геймплеем и проектами",
        description: "Канал с контентом о мире Minecraft: от геймплея до создания проектов. Здесь вы найдете обзоры, гайды и многое другое для любителей этой культовой игры. Регулярные стримы, интересные сборки и советы для новичков.",
        image: "images/tim.png",
        tags: ["ютуб", "майнкрафт", "игры", "новичок"],
        url: "https://www.youtube.com/channel/UCrjrnsVgcgJJiV4En4ONoDA"
    },
    {
        id: 2,
        title: "TAIPrompts",
        shortDescription: "Создавайте идеальные промпты для нейросетей",
        description: "Создавайте идеальные промпты для нейросетей. Научитесь формулировать запросы так, чтобы ИИ понимал вас с полуслова. От базовых принципов до продвинутых техник - всё в одном месте.",
        image: "images/taiprompts.png",
        tags: ["промпт", "нейросети", "современность", "вайбкодинг"],
        url: "https://timoshamoscow.github.io/taiprompts.github.io/"
    },
    {
        id: 3,
        title: "Сибилевец",
        shortDescription: "Простой и логичный язык для общения",
        description: "Простой, логичный, современный. Создан Тимофеем Сибилевым для лёгкого общения. Язык сочетает в себе простоту изучения и богатые выразительные возможности. Идеален для международного общения.",
        image: "images/sib.png",
        tags: ["лингвистика", "конланг", "простота", "3265"],
        url: "https://timoshamoscow.github.io/sibylevec-site.github.io/"
    },
    {
        id: 4,
        title: "Белойн",
        shortDescription: "Дышите. Чувствуйте. Живите. Вне цифрового шума.",
        description: "Белойн - движение за осознанное отключение от цифрового шума.\n\n🌌 Основные направления:\n• Пространства тишины для медитации\n• Тактильные карты ручной работы\n• Эпистолярный клуб с каллиграфией\n• Читальни с редкими изданиями\n• Природные ретриты\n\n🎯 Философия:\nОсознанность вместо скроллинга, живые диалоги вместо чатов.\n\nУзнайте больше о наших уникальных услугах и статистике на сайте!",
        image: "images/belyoene.png",
        tags: ["детокс", "природа", "тишина", "спокойствие", "психология"],
        url: "https://timoshamoscow.github.io/belyoene.github.io/"
    },
    {
        id: 5,
        title: "'Хули' - это мат?",
        shortDescription: "Разбираемся с сленгом и матом",
        description: "Хули - это сленговое слово. СЛЕНГ - это не МАТ. Подробное объяснение разницы между сленгом, жаргоном и нецензурной лексикой. Лингвистический анализ современной русской речи.",
        image: "images/hmm.png",
        tags: ["вопрос", "ответ", "сленг", "грамматика"],
        url: "https://sadalskij.livejournal.com/2845249.html"
    },
    {
        id: 6,
        title: "Как зовут девушку Домера?",
        shortDescription: "Вся правда об Алиночке и Домере",
        description: "Алина также известная как Аlino4kaPrincess - главный герой каналов Domer Grief и Огород Домера (После самого Домера конечно), она является хейтершой Лены - бывшей девушки Домера. Также, в скором времени у Сергея (Домера) и Алины будет свадьба. Дата неизвестна. Сейчас же, с недавнего времени, она живет с Сергеем Камышниковым (Домером) и является его девушкой. Полная история их отношений и развития событий можно найти по ссылке на ресурс",
        image: "images/alina.png",
        tags: ["алиночка", "домер", "отношения", "майнкрафт", "любовь", "вопрос"],
        url: "https://taplink.cc/alino4kaprincssss"
    },
    {
        id: 7,
        title: "Сибилевец на Duolingo",
        shortDescription: "Петиция по добавлению языка в Duolingo",
        description: "Официальная петиция к Duolingo с предложением добавить в инкубатор курс языка Сибилевец - простого и логичного лингвистического проекта. Присоединяйтесь к сообществу и поддержите инициативу!",
        image: "images/sib.png",
        tags: ["лингвистика", "конланг", "язык", "петиция"],
        url: "https://www.change.org/sibyleveconduolingo"
    },
    {
        id: 8,
        title: "Хранилище",
        shortDescription: "Платформа для управления цифровыми ресурсами",
        description: "Хранилище с мета-тегами - это современная платформа для организации и управления цифровыми ресурсами. Хотите стать популярным на весь интернет? Добавьте ваш ресурс в наше хранилище! Мы предоставляем удобные инструменты для категоризации, поиска и продвижения вашего контента.",
        image: "images/hranit.png",
        tags: ["хранилище", "разработка", "технологии", "популярность"],
        url: "https://timoshamoscow.github.io/hranilishe.github.io/"
    },
    {
        id: 9,
        title: "Название вашего ресурса",
        shortDescription: "Краткое описание вашего ресурса",
        description: "Полное описание вашего ресурса с деталями, преимуществами и особенностями. Здесь можно разместить развернутую информацию о проекте, его целях и возможностях.",
        image: "images/soon.png",
        tags: ["тег1", "тег2", "тег3", "скоро"],
        url: "https://ссылка-на-ресурс.com"
    },
    {
        id: 10,
        title: "Cuby - Minecraft-сервера",
        shortDescription: "Лучший Minecraft-сервер в СНГ",
        description: "Лучший Minecraft-сервер в СНГ! Присоединяйтесь к нашему сообществу и наслаждайтесь ванильным геймплеем с кастомными плагинами. Регулярные ивенты, активное сообщество и качественная администрация.",
        image: "images/cuby.png",
        tags: ["майнкрафт", "сервер"],
        url: "https://t.me/cuby_mc"
    },
    {
        id: 11,
        title: "ICEBERG smp",
        shortDescription: "Ванильные Minecraft-сервера с кастомными плагинами",
        description: "Ванильные Minecraft-сервера с кастомными плагинами. Уникальная атмосфера, сбалансированный геймплей и дружелюбное комьюнити. Идеально подходит для тех, кто ценит классический майнкрафт с современными улучшениями.",
        image: "images/iceberg.png",
        tags: ["майнкрафт", "сервер"],
        url: "https://t.me/ICEBERG_Minecraft"
    },
    {
        id: 12,
        title: "Ваш Единственный Друг",
        shortDescription: "Полная история философии друга",
        description: "Я ваш единственный друг, все остальные враги, когда нибудь вы это поймёте... Полную философию можете узнать на канале. Жду по кнопке перейти к ресурсу)",
        image: "images/vashedinstveniydrug.png",
        tags: ["нарезки", "ютуб", "стрим", "популярность", "психология", "философия"],
        url: "https://taplink.cc/vashedinstveniydrug"
    },
    {
        id: 13,
        title: "AutoHE - Визуальный редактор для Minecraft",
        shortDescription: "Мощный редактор для Minecraft с визуальным программированием. Создавай истории без кода через перетаскивание блоков.",
        description: "AutoHE - это визуальный редактор для создания игровых историй в Minecraft. Создавай крутые проекты без программирования. Возможности:\n\n• Визуальное программирование через Blockly-блоки\n• Мгновенный экспорт проектов в Minecraft\n• GUI редактор для NPC диалогов\n• Менеджер ресурсов (модели, текстуры, звуки)\n• Темная тема с настраиваемыми акцентами\n• Локальное хранение проектов\n\nПроцесс создания: скачай → создай проект → собери логику из блоков → экспортируй в игру. Доступно для Windows, Linux, macOS.",
        image: "images/autohe.png",
        tags: ["майнкрафт", "редактор", "визуальное программирование", "игры", "разработка", "minecraft", "ютуб"],
        url: "https://www.autohe.ru/"
    },
    {
        id: 14,
        title: "Какие тайны могут быть у Кристаллов?",
        shortDescription: "Размышляем о смысле кристаллов",
        description: "Премьера сюжетного сезона - Тайна Кристалла уже скоро!\n\nИ по секрету скажу, подписчики Телеграм канала узнали об этом раньше всех!\n\nЖду всех по кнопке Перейти к ресурсу!",
        image: "images/crystalls.png",
        tags: ["майнкрафт", "тайны", "кристаллы", "игры", "вопрос", "minecraft", "ютуб", "разработка"],
        url: "https://t.me/MinecraftWithTimosha/1764"
    },
    {
        id: 15,
        title: "Just Monika",
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
        shortDescription: "Ноябрь как челлендж",
        description: "Недрочабрь, это интернет-челлендж, посвящённый воздержанию, участники которого воздерживаются от мастурбации в течение ноября.",
        image: "images/1635762767173756678.jpg",
        tags: ["ютуб", "челлендж", "сила воли", "недрочабрь"],
        url: "https://lifehacker.ru/health/kachestvo-zhizni/nedrochabr/"
    },
    {
        id: 18,
        title: "Трендовые запросы",
        shortDescription: "Какие поисковые запросы популярны в Google",
        description: "Трендовые поисковые запросы помогают понять, чем живёт интернет прямо сейчас.\nЗдесь собраны самые популярные темы, которые пользователи чаще всего ищут в Google.\nКаждый день тренды меняются: от мемов и новостей до игр, технологий и событий в мире.\nНиже приведён актуальный топ-10 поисковых запросов:\n1. Погода завтра — один из самых частых запросов у пользователей.\n2. Новый год 2026 выходные — люди проверяют праздничные дни и график отдыха.\n3. Итоги года Spotify — ежегодный тренд в конце декабря.\n4. Итоги года Яндекс Музыки — российский аналог, который тоже стабильно в топе.\n5. Minecraft 26.1 — интерес игроков к новой системе нумерации версии.\n6. Telegram проблемы со звонками — пользователи ищут причины перебоев в работе.\n7. FaceTime не работает — рост запросов после ограничений сервисов видеосвязи.\n8. Мессенджер Max что это — популярный запрос на фоне навязывания сервиса.\n9. Snapchat заблокирован — всплеск интереса после новостей о блокировке.\n10. Курс валют — один из вечных лидеров поиска.\nОткрой подборку трендов Google и узнай, какие темы сейчас врываются в инфополе.",
        image: "images/ggtrends.jpg",
        tags: ["ютуб", "вопрос", "новости", "популярность"],
        url: "https://trends.google.ru/trending?geo=RU"
    },
    {
        id: 19,
        title: "Мессенджер Max — вся правда",
        shortDescription: "Что скрывает новый российский мессенджер и почему его обсуждают",
        description: "Мессенджер Max — новый сервис от VK, который активно продвигается как универсальная платформа для общения, учёбы и государственных сервисов.\nОднако вокруг него возникло множество вопросов: от избыточных разрешений до проблем с безопасностью.\nНиже собрана самая важная информация, которую должен знать каждый пользователь.\n\n1. Приложение запрашивает широкие системные разрешения — камеру, микрофон, геолокацию, Bluetooth и доступ к файлам.\n2. Анализы специалистов выявили активную передачу данных на серверы VK, включая метаданные устройства и активность других приложений.\n3. Max отказывается запускаться на Android 9, что вызывает сомнения в прозрачности требований.\n4. Внутри обнаружены jar-модули системного уровня, дающие приложению больше доступа, чем у обычного мессенджера.\n5. Max использует механики defensive evasion — проверку рута, виртуальных машин и дебаггеров.\n6. Зафиксировано необычное поведение: удерживание устройства в активном режиме через wake lock.\n7. Шифрование переписки и звонков отсутствует, что делает данные уязвимыми для перехвата.\n8. Приложение нельзя назвать устойчивым к MITM-атакам — обнаружены уязвимости.\n9. Пользователи жалуются на навязывание приложения в школах, вузах и госорганизациях.\n10. Многие считают, что Max ведёт себя скорее как шпионская программа, чем как безопасный мессенджер.\n\nЭта статья отражает текущее понимание устройства Max и рисков, связанных с его использованием.\nВажно учитывать, что безопасность цифровых сервисов — это не только функциональность, но и доверие.\nКаждый пользователь имеет право знать, какие данные собирает приложение и как они используются.",
        image: "images/max.jpg",
        tags: ["вопрос", "технологии", "новости", "безопасность", "мессенджер", "макс"],
        url: "https://vc.ru/life/2069180-messendzher-max-bezopasnost-i-uiazvimosti"
    }
];

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
    
    // Меняем title на статью
    document.title = `${item.title} | Хранилище`;
    
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
                ">Копировать ссылку</button>
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

// Создание карточки элемента
function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card glass-effect';
    
    // Используем shortDescription если есть, иначе обрезаем description
    const displayDescription = item.shortDescription || 
        (item.description.length > 120 ? item.description.substring(0, 120) + '...' : item.description);
    
    // Показываем кнопку "Читать" только если есть полное описание, отличное от короткого
    const showReadMore = item.description && item.description.length > 120 && item.shortDescription !== item.description;
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="item-image" title="${item.title}">
        <div class="item-content">
            <h3 class="item-title">${item.title}</h3>
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
