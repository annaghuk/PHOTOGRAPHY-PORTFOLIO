/* =================================================
   SANDALJYAN STUDIO
   COMPLETE MULTILINGUAL SYSTEM
   ENGLISH | ARMENIAN | RUSSIAN | FRENCH
================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const trigger = document.querySelector("#languageTrigger");
    const menu = document.querySelector("#languageMenu");
    const currentLanguage = document.querySelector("#currentLanguage");

    if (!trigger || !menu || !currentLanguage) return;

    const supportedLanguages = ["en", "hy", "ru", "fr"];

    const translations = {

        /* =========================================
           ARMENIAN
        ========================================= */

        hy: {

            "Photography Studio | Timeless Stories": "Լուսանկարչական ստուդիա | Հավերժ պատմություններ",
            "Discover timeless portrait, individual and family photography experiences in Yerevan.": "Բացահայտեք դիմանկարային, անհատական և ընտանեկան լուսանկարչության անմոռանալի փորձառությունները Երևանում։",
            "Creating memories...": "Ստեղծում ենք հիշողություններ...",
            "Open menu": "Բացել ցանկը",

            "Home": "Գլխավոր",
            "Portfolio": "Պորտֆոլիո",
            "Experience": "Փորձառություն",
            "About": "Մեր մասին",
            "Contact": "Կապ",
            "Instagram ↗": "Instagram ↗",
            "Book a Session ↗": "Ամրագրել նկարահանում ↗",

            "Your story through my lens.": "Քո պատմությունը՝ իմ օբյեկտիվի միջով։",

            "BEYOND THE PHOTOGRAPH": "ԼՈՒՍԱՆԿԱՐԻ ՍԱՀՄԱՆՆԵՐԻՑ ԴՈՒՐՍ",
            "Some moments pass.": "Որոշ պահեր անցնում են։",
            "Some become forever.": "Որոշները մնում են հավերժ։",
            "Photography is more than an image. It is a feeling, a connection and a story that deserves to live beyond today.": "Լուսանկարչությունն ավելին է, քան պարզապես պատկեր։ Այն զգացողություն է, կապ և պատմություն, որն արժանի է ապրել այսօրվանից շատ ավելի երկար։",

            "A VISUAL JOURNEY": "ՏԵՍՈՂԱԿԱՆ ՃԱՆԱՊԱՐՀՈՐԴՈՒԹՅՈՒՆ",
            "Every frame tells": "Յուրաքանչյուր կադր պատմում է",
            "a story.": "մի պատմություն։",
            "A collection of moments, emotions and timeless beauty.": "Պահերի, զգացմունքների և հավերժական գեղեցկության հավաքածու։",

            "FASHION · 01": "ՆՈՐԱՁԵՎՈՒԹՅՈՒՆ · 01",
            "EDITORIAL · 02": "ԽՄԲԱԳՐԱԿԱՆ · 02",
            "DETAILS · 03": "ՄԱՆՐԱՄԱՍՆԵՐ · 03",
            "FASHION · 04": "ՆՈՐԱՁԵՎՈՒԹՅՈՒՆ · 04",
            "FAMILY · 05": "ԸՆՏԱՆԵԿԱՆ · 05",
            "PORTRAITS · 06": "ԴԻՄԱՆԿԱՐՆԵՐ · 06",
            "EDITORIAL · 07": "ԽՄԲԱԳՐԱԿԱՆ · 07",
            "PORTRAITS · 08": "ԴԻՄԱՆԿԱՐՆԵՐ · 08",
            "FASHION · 09": "ՆՈՐԱՁԵՎՈՒԹՅՈՒՆ · 09",
            "FAMILY · 10": "ԸՆՏԱՆԵԿԱՆ · 10",
            "EDITORIAL · 11": "ԽՄԲԱԳՐԱԿԱՆ · 11",
            "DETAILS · 12": "ՄԱՆՐԱՄԱՍՆԵՐ · 12",

            "Previous photo": "Նախորդ լուսանկարը",
            "Next photo": "Հաջորդ լուսանկարը",
            "THE ART OF CAPTURING MOMENTS": "ՊԱՀԵՐԸ ՀԱՎԵՐԺԱՑՆԵԼՈՒ ԱՐՎԵՍՏԸ",

            "A CURATED COLLECTION": "ԸՆՏՐԱՆԻ ՀԱՎԱՔԱԾՈՒ",
            "Stories through": "Պատմություններ՝",
            "the lens.": "օբյեկտիվի միջով։",
            "Portraits, connections and moments worth remembering.": "Դիմանկարներ, կապեր և պահեր, որոնք արժանի են հիշվելու։",

            "All Works": "Բոլոր աշխատանքները",
            "Portraits": "Դիմանկարներ",
            "Fashion": "Նորաձևություն",
            "Editorial": "Խմբագրական",
            "Family": "Ընտանեկան",
            "Details": "Մանրամասներ",

            "Natural Beauty": "Բնական գեղեցկություն",
            "Individual Stories": "Անհատական պատմություններ",
            "The Art of You": "Քո արվեստը",
            "Quiet Moments": "Խաղաղ պահեր",
            "Fashion Story": "Նորաձևության պատմություն",
            "Modern Elegance": "Ժամանակակից նրբագեղություն",
            "The Look": "Կերպարը",
            "Style & Light": "Ոճ և լույս",
            "In Motion": "Շարժման մեջ",
            "Editorial Mood": "Խմբագրական տրամադրություն",
            "Artful Frames": "Արվեստի կադրեր",
            "A Different Perspective": "Այլ տեսանկյուն",
            "Fine Art": "Կերպարվեստ",
            "Visual Poetry": "Տեսողական պոեզիա",
            "Beyond the Frame": "Կադրի սահմաններից դուրս",
            "The Details of Light": "Լույսի մանրամասները",
            "Together": "Միասին",
            "Little Moments": "Փոքրիկ պահեր",
            "Family Stories": "Ընտանեկան պատմություններ",
            "A Lifetime of Love": "Սիրո մի ամբողջ կյանք",
            "Our Forever": "Մեր հավերժությունը",
            "The Beautiful Us": "Մեր գեղեցիկ աշխարհը",
            "Little Details": "Փոքրիկ մանրամասներ",
            "The Finishing Touch": "Վերջին նրբերանգը",
            "A Closer Look": "Ավելի մոտիկից",
            "Fashion Portrait": "Նորաձևության դիմանկար",
            "Editorial Style": "Խմբագրական ոճ",
            "Modern Fashion": "Ժամանակակից նորաձևություն",
            "The New Look": "Նոր կերպար",
            "A Fashion Moment": "Նորաձևության պահ",
            "In Focus": "Ֆոկուսում",
            "Timeless Style": "Հավերժական ոճ",
            "Final Frame": "Վերջին կադրը",

            "34 FRAMES · ENDLESS STORIES": "34 ԿԱԴՐ · ԱՆՎԵՐՋ ՊԱՏՄՈՒԹՅՈՒՆՆԵՐ",
            "BOOK YOUR SESSION ↗": "ԱՄՐԱԳՐԵԼ ՆԿԱՐԱՀԱՆՈՒՄ ↗",

            "MORE THAN A PHOTOSHOOT": "ԱՎԵԼԻՆ, ՔԱՆ ՆԿԱՐԱՀԱՆՈՒՄ",
            "Your story,": "Քո պատմությունը,",
            "your experience.": "քո փորձառությունը։",

            "Personal Connection": "Անձնական կապ",
            "Every session begins with understanding your personality and your vision.": "Յուրաքանչյուր նկարահանում սկսվում է քո անհատականությունն ու տեսլականը հասկանալուց։",
            "Artistic Direction": "Գեղարվեստական մոտեցում",
            "Thoughtful styling, creative concepts and attention to every detail.": "Մտածված ոճավորում, ստեղծագործ գաղափարներ և ուշադրություն յուրաքանչյուր մանրուքի նկատմամբ։",
            "Timeless Memories": "Հավերժ հիշողություններ",
            "Images created to remain meaningful long after the moment has passed.": "Լուսանկարներ, որոնք կպահպանեն իրենց արժեքը նույնիսկ պահի անցնելուց շատ հետո։",

            "BEHIND THE LENS — 01": "ՕԲՅԵԿՏԻՎԻ ՀԵՏԵՎՈՒՄ — 01",
            "Feel the moment": "Զգա պահը",
            "before the frame.": "մինչև կադրը։",
            "A glimpse into the creative process, the atmosphere and the moments in between.": "Հայացք ստեղծագործական ընթացքին, մթնոլորտին և կադրերի միջև տեղի ունեցող պահերին։",
            "THE ART OF CAPTURING LIFE": "ԿՅԱՆՔԸ ՀԱՎԵՐԺԱՑՆԵԼՈՒ ԱՐՎԵՍՏԸ",
            "BEHIND THE SCENES": "ԿԱԴՐԻ ՀԵՏԵՎՈՒՄ",
            "01 / FILM": "01 / ՏԵՍԱՆՅՈՒԹ",
            "THE ART OF MOMENTS": "ՊԱՀԵՐԻ ԱՐՎԵՍՏԸ",
            "02 / FILM": "02 / ՏԵՍԱՆՅՈՒԹ",

            "A LITTLE ABOUT ME": "ԻՄ ՄԱՍԻՆ",
            "The artist": "Արվեստագետը",
            "behind the lens.": "օբյեկտիվի հետևում։",
            "I believe every photograph holds something more than what the eye can see — a feeling, a connection, a beautiful moment in time.": "Ես հավատում եմ, որ յուրաքանչյուր լուսանկար իր մեջ ավելին է պահում, քան տեսանելի է աչքին՝ զգացողություն, կապ և ժամանակի մի գեղեցիկ պահ։",
            "My passion is capturing genuine emotions, natural beauty and the little details that make every story uniquely yours.": "Իմ կիրքն անկեղծ զգացմունքները, բնական գեղեցկությունն ու այն փոքրիկ մանրամասները հավերժացնելն է, որոնք յուրաքանչյուր պատմություն դարձնում են անկրկնելի։",
            "Your story, told with heart.": "Քո պատմությունը՝ սրտով պատմված։",

            "KIND WORDS": "ՋԵՐՄ ԽՈՍՔԵՐ",
            "Stories told by": "Պատմություններ՝ պատմված",
            "our clients.": "մեր հաճախորդների կողմից։",
            "Every detail felt so natural and beautiful. The experience was even more special than I imagined.": "Յուրաքանչյուր մանրուք այնքան բնական ու գեղեցիկ էր։ Փորձառությունն ավելի յուրահատուկ էր, քան պատկերացնում էի։",
            "CLIENT EXPERIENCE": "ՀԱՃԱԽՈՐԴԻ ՏՊԱՎՈՐՈՒԹՅՈՒՆԸ",

            "A FEW THINGS TO KNOW": "ՄԻ ՔԱՆԻ ԿԱՐԵՎՈՐ ՄԱՆՐԱՄԱՍՆԵՐ",
            "Frequently asked": "Հաճախ տրվող",
            "questions.": "հարցեր։",

            "How do I book a photography session?": "Ինչպե՞ս ամրագրել լուսանկարչական նկարահանում։",
            "Choose your preferred session and complete the booking form. We will contact you to discuss availability.": "Ընտրիր նախընտրելի նկարահանման տեսակը և լրացրու ամրագրման ձևը։ Մենք կկապվենք քեզ հետ՝ հասանելի ամսաթվերը քննարկելու համար։",

            "Where do photography sessions take place?": "Որտե՞ղ են անցկացվում նկարահանումները։",
            "Sessions can be arranged in Yerevan, at selected locations or in a suitable studio.": "Նկարահանումները կարող են կազմակերպվել Երևանում՝ ընտրված վայրերում կամ համապատասխան ստուդիայում։",

            "Can I request a specific photography style?": "Կարո՞ղ եմ ընտրել լուսանկարչության որոշակի ոճ։",
            "Absolutely. We can discuss your preferred aesthetic and creative direction before your session.": "Իհարկե։ Նկարահանումից առաջ կարող ենք քննարկել քո նախընտրած գեղագիտական ոճն ու ստեղծագործական ուղղությունը։",

            "Can I book a family session?": "Կարո՞ղ եմ ամրագրել ընտանեկան նկարահանում։",
            "Yes. Family sessions are available and can be tailored to your needs.": "Այո՛։ Ընտանեկան նկարահանումները հասանելի են և կարող են հարմարեցվել ձեր ցանկություններին։",

            "YOUR STORY STARTS HERE": "ՔՈ ՊԱՏՄՈՒԹՅՈՒՆԸ ՍԿՍՎՈՒՄ Է ԱՅՍՏԵՂ",
            "Let's create something": "Եկ միասին ստեղծենք",
            "beautiful.": "գեղեցիկ մի բան։",
            "Tell us a little about your vision and let's plan your photography experience.": "Մի փոքր պատմիր քո գաղափարի մասին, և միասին կծրագրենք քո լուսանկարչական փորձառությունը։",

            "Choose your session": "Ընտրիր նկարահանման տեսակը",
            "Select a session": "Ընտրել նկարահանման տեսակը",
            "Individual": "Անհատական",
            "Portrait": "Դիմանկար",
            "Your name": "Քո անունը",
            "Full name": "Անուն Ազգանուն",
            "Phone number": "Հեռախոսահամար",
            "Your phone number": "Քո հեռախոսահամարը",
            "Preferred date": "Նախընտրելի ամսաթիվ",
            "Tell us about your idea": "Պատմիր քո գաղափարի մասին",
            "Your vision, preferences and details...": "Քո գաղափարը, նախընտրությունները և մանրամասները...",
            "Send Booking Request ↗": "Ուղարկել ամրագրման հարցում ↗",
            "Your booking is not confirmed until availability has been discussed and agreed upon.": "Ամրագրումը հաստատված չէ, մինչև հասանելիությունը չքննարկվի և չհաստատվի։",

            "A LITTLE MORE OF OUR WORLD": "ՄԵՐ ԱՇԽԱՐՀԻՑ ՄԻ ՓՈՔՐԻԿ ՄԱՍՆԻԿ",
            "Follow the": "Հետևիր",
            "moments.": "պահերին։",
            "Beauty": "Գեղեցկություն",
            "Moments": "Պահեր",
            "FOLLOW ON INSTAGRAM ↗": "ՀԵՏԵՎԵԼ INSTAGRAM-ՈՒՄ ↗",

            "LET'S CONNECT": "ԿԱՊ ՀԱՍՏԱՏԵՆՔ",
            "Have a story to": "Ունե՞ս պատմություն՝",
            "tell?": "պատմելու։",
            "We would love to hear from you. Let's create something meaningful together.": "Ուրախ կլինենք լսել քեզ։ Եկ միասին ստեղծենք մի յուրահատուկ բան։",

            "Photography is the art of making a moment last forever.": "Լուսանկարչությունը մի պահ հավերժ դարձնելու արվեստն է։",
            "© 2026 Photography Studio. All rights reserved.": "© 2026 Photography Studio։ Բոլոր իրավունքները պաշտպանված են։",
            "Back to top ↑": "Վերադառնալ վերև ↑",

            "Visit Sandaljyan on Instagram": "Այցելել Sandaljyan-ի Instagram-ը",
            "WhatsApp": "WhatsApp",
            "Email": "Էլեկտրոնային փոստ"
        },


        /* =========================================
           RUSSIAN
        ========================================= */

        ru: {

            "Photography Studio | Timeless Stories": "Фотостудия | Истории вне времени",
            "Discover timeless portrait, individual and family photography experiences in Yerevan.": "Откройте для себя портретную, индивидуальную и семейную фотосъёмку в Ереване.",
            "Creating memories...": "Создаём воспоминания...",
            "Open menu": "Открыть меню",

            "Home": "Главная",
            "Portfolio": "Портфолио",
            "Experience": "Опыт",
            "About": "Обо мне",
            "Contact": "Контакты",
            "Instagram ↗": "Instagram ↗",
            "Book a Session ↗": "Записаться на съёмку ↗",

            "Your story through my lens.": "Твоя история через мой объектив.",

            "BEYOND THE PHOTOGRAPH": "ЗА ГРАНИЦАМИ ФОТОГРАФИИ",
            "Some moments pass.": "Некоторые моменты проходят.",
            "Some become forever.": "Другие остаются навсегда.",
            "Photography is more than an image. It is a feeling, a connection and a story that deserves to live beyond today.": "Фотография — это больше, чем изображение. Это чувство, связь и история, которая заслуживает жить за пределами сегодняшнего дня.",

            "A VISUAL JOURNEY": "ВИЗУАЛЬНОЕ ПУТЕШЕСТВИЕ",
            "Every frame tells": "Каждый кадр рассказывает",
            "a story.": "историю.",
            "A collection of moments, emotions and timeless beauty.": "Коллекция мгновений, эмоций и красоты вне времени.",

            "FASHION · 01": "МОДА · 01",
            "EDITORIAL · 02": "РЕДАКЦИОННАЯ СЪЁМКА · 02",
            "DETAILS · 03": "ДЕТАЛИ · 03",
            "FASHION · 04": "МОДА · 04",
            "FAMILY · 05": "СЕМЬЯ · 05",
            "PORTRAITS · 06": "ПОРТРЕТЫ · 06",
            "EDITORIAL · 07": "РЕДАКЦИОННАЯ СЪЁМКА · 07",
            "PORTRAITS · 08": "ПОРТРЕТЫ · 08",
            "FASHION · 09": "МОДА · 09",
            "FAMILY · 10": "СЕМЬЯ · 10",
            "EDITORIAL · 11": "РЕДАКЦИОННАЯ СЪЁМКА · 11",
            "DETAILS · 12": "ДЕТАЛИ · 12",

            "Previous photo": "Предыдущее фото",
            "Next photo": "Следующее фото",
            "THE ART OF CAPTURING MOMENTS": "ИСКУССТВО СОХРАНЯТЬ МОМЕНТЫ",

            "A CURATED COLLECTION": "ИЗБРАННАЯ КОЛЛЕКЦИЯ",
            "Stories through": "Истории через",
            "the lens.": "объектив.",
            "Portraits, connections and moments worth remembering.": "Портреты, чувства и моменты, достойные памяти.",

            "All Works": "Все работы",
            "Portraits": "Портреты",
            "Fashion": "Мода",
            "Editorial": "Редакционная съёмка",
            "Family": "Семья",
            "Details": "Детали",

            "Natural Beauty": "Естественная красота",
            "Individual Stories": "Личные истории",
            "The Art of You": "Искусство быть собой",
            "Quiet Moments": "Тихие мгновения",
            "Fashion Story": "История моды",
            "Modern Elegance": "Современная элегантность",
            "The Look": "Образ",
            "Style & Light": "Стиль и свет",
            "In Motion": "В движении",
            "Editorial Mood": "Редакционное настроение",
            "Artful Frames": "Художественные кадры",
            "A Different Perspective": "Другой взгляд",
            "Fine Art": "Изобразительное искусство",
            "Visual Poetry": "Визуальная поэзия",
            "Beyond the Frame": "За пределами кадра",
            "The Details of Light": "Игра света",
            "Together": "Вместе",
            "Little Moments": "Маленькие мгновения",
            "Family Stories": "Семейные истории",
            "A Lifetime of Love": "Целая жизнь любви",
            "Our Forever": "Наша вечность",
            "The Beautiful Us": "Наша прекрасная история",
            "Little Details": "Маленькие детали",
            "The Finishing Touch": "Последний штрих",
            "A Closer Look": "Вблизи",
            "Fashion Portrait": "Модный портрет",
            "Editorial Style": "Редакционный стиль",
            "Modern Fashion": "Современная мода",
            "The New Look": "Новый образ",
            "A Fashion Moment": "Мгновение моды",
            "In Focus": "В фокусе",
            "Timeless Style": "Стиль вне времени",
            "Final Frame": "Последний кадр",

            "34 FRAMES · ENDLESS STORIES": "34 КАДРА · БЕСКОНЕЧНЫЕ ИСТОРИИ",
            "BOOK YOUR SESSION ↗": "ЗАПИСАТЬСЯ НА СЪЁМКУ ↗",

            "MORE THAN A PHOTOSHOOT": "БОЛЬШЕ, ЧЕМ ФОТОСЕССИЯ",
            "Your story,": "Твоя история,",
            "your experience.": "твой опыт.",

            "Personal Connection": "Личный контакт",
            "Every session begins with understanding your personality and your vision.": "Каждая съёмка начинается с понимания твоей индивидуальности и твоего видения.",
            "Artistic Direction": "Художественный подход",
            "Thoughtful styling, creative concepts and attention to every detail.": "Продуманный стиль, творческие идеи и внимание к каждой детали.",
            "Timeless Memories": "Воспоминания вне времени",
            "Images created to remain meaningful long after the moment has passed.": "Фотографии, которые сохраняют свою ценность даже спустя долгое время.",

            "BEHIND THE LENS — 01": "ЗА ОБЪЕКТИВОМ — 01",
            "Feel the moment": "Почувствуй момент",
            "before the frame.": "до того, как он станет кадром.",
            "A glimpse into the creative process, the atmosphere and the moments in between.": "Взгляд на творческий процесс, атмосферу и мгновения между кадрами.",
            "THE ART OF CAPTURING LIFE": "ИСКУССТВО СОХРАНЯТЬ ЖИЗНЬ",
            "BEHIND THE SCENES": "ЗА КАДРОМ",
            "01 / FILM": "01 / ВИДЕО",
            "THE ART OF MOMENTS": "ИСКУССТВО МГНОВЕНИЙ",
            "02 / FILM": "02 / ВИДЕО",

            "A LITTLE ABOUT ME": "НЕМНОГО ОБО МНЕ",
            "The artist": "Художник",
            "behind the lens.": "за объективом.",
            "I believe every photograph holds something more than what the eye can see — a feeling, a connection, a beautiful moment in time.": "Я верю, что каждая фотография хранит больше, чем видит глаз: чувство, связь и прекрасное мгновение.",
            "My passion is capturing genuine emotions, natural beauty and the little details that make every story uniquely yours.": "Моя страсть — запечатлевать искренние эмоции, естественную красоту и маленькие детали, которые делают каждую историю неповторимой.",
            "Your story, told with heart.": "Твоя история, рассказанная с душой.",

            "KIND WORDS": "ТЁПЛЫЕ СЛОВА",
            "Stories told by": "Истории, рассказанные",
            "our clients.": "нашими клиентами.",
            "Every detail felt so natural and beautiful. The experience was even more special than I imagined.": "Каждая деталь была такой естественной и прекрасной. Этот опыт оказался даже более особенным, чем я представляла.",
            "CLIENT EXPERIENCE": "ВПЕЧАТЛЕНИЯ КЛИЕНТА",

            "A FEW THINGS TO KNOW": "НЕСКОЛЬКО ВАЖНЫХ ДЕТАЛЕЙ",
            "Frequently asked": "Часто задаваемые",
            "questions.": "вопросы.",

            "How do I book a photography session?": "Как записаться на фотосессию?",
            "Choose your preferred session and complete the booking form. We will contact you to discuss availability.": "Выберите подходящий формат съёмки и заполните форму бронирования. Мы свяжемся с вами, чтобы обсудить свободные даты.",

            "Where do photography sessions take place?": "Где проходят фотосессии?",
            "Sessions can be arranged in Yerevan, at selected locations or in a suitable studio.": "Съёмки можно организовать в Ереване, в выбранных локациях или в подходящей студии.",

            "Can I request a specific photography style?": "Можно ли выбрать определённый стиль съёмки?",
            "Absolutely. We can discuss your preferred aesthetic and creative direction before your session.": "Конечно. Перед съёмкой мы можем обсудить ваши предпочтения и творческое направление.",

            "Can I book a family session?": "Можно ли заказать семейную фотосессию?",
            "Yes. Family sessions are available and can be tailored to your needs.": "Да. Семейные фотосессии доступны и могут быть адаптированы под ваши пожелания.",

            "YOUR STORY STARTS HERE": "ТВОЯ ИСТОРИЯ НАЧИНАЕТСЯ ЗДЕСЬ",
            "Let's create something": "Давай создадим что-то",
            "beautiful.": "прекрасное.",
            "Tell us a little about your vision and let's plan your photography experience.": "Расскажи немного о своей идее, и мы вместе спланируем твою фотосессию.",

            "Choose your session": "Выберите тип съёмки",
            "Select a session": "Выберите съёмку",
            "Individual": "Индивидуальная",
            "Portrait": "Портрет",
            "Your name": "Ваше имя",
            "Full name": "Имя и фамилия",
            "Phone number": "Номер телефона",
            "Your phone number": "Ваш номер телефона",
            "Preferred date": "Желаемая дата",
            "Tell us about your idea": "Расскажите о своей идее",
            "Your vision, preferences and details...": "Ваши идеи, пожелания и детали...",
            "Send Booking Request ↗": "Отправить заявку ↗",
            "Your booking is not confirmed until availability has been discussed and agreed upon.": "Бронирование не считается подтверждённым, пока мы не обсудим и не согласуем доступность.",

            "A LITTLE MORE OF OUR WORLD": "НЕМНОГО БОЛЬШЕ О НАШЕМ МИРЕ",
            "Follow the": "Следи за",
            "moments.": "мгновениями.",
            "Beauty": "Красота",
            "Moments": "Моменты",
            "FOLLOW ON INSTAGRAM ↗": "ПОДПИСАТЬСЯ В INSTAGRAM ↗",

            "LET'S CONNECT": "ДАВАЙТЕ ОБЩАТЬСЯ",
            "Have a story to": "Есть история, которую",
            "tell?": "хочется рассказать?",
            "We would love to hear from you. Let's create something meaningful together.": "Будем рады услышать вас. Давайте вместе создадим что-то особенное.",

            "Photography is the art of making a moment last forever.": "Фотография — это искусство сохранять мгновение навсегда.",
            "© 2026 Photography Studio. All rights reserved.": "© 2026 Photography Studio. Все права защищены.",
            "Back to top ↑": "Вернуться наверх ↑",

            "Visit Sandaljyan on Instagram": "Посетить Instagram Sandaljyan",
            "WhatsApp": "WhatsApp",
            "Email": "Электронная почта"
        },


        /* =========================================
           FRENCH
        ========================================= */

        fr: {

            "Photography Studio | Timeless Stories": "Studio Photo | Histoires intemporelles",
            "Discover timeless portrait, individual and family photography experiences in Yerevan.": "Découvrez des expériences photographiques de portraits, individuelles et familiales à Erevan.",
            "Creating memories...": "Création de souvenirs...",
            "Open menu": "Ouvrir le menu",

            "Home": "Accueil",
            "Portfolio": "Portfolio",
            "Experience": "Expérience",
            "About": "À propos",
            "Contact": "Contact",
            "Instagram ↗": "Instagram ↗",
            "Book a Session ↗": "Réserver une séance ↗",

            "Your story through my lens.": "Votre histoire à travers mon objectif.",

            "BEYOND THE PHOTOGRAPH": "AU-DELÀ DE LA PHOTOGRAPHIE",
            "Some moments pass.": "Certains moments passent.",
            "Some become forever.": "D'autres deviennent éternels.",
            "Photography is more than an image. It is a feeling, a connection and a story that deserves to live beyond today.": "La photographie est bien plus qu'une image. C'est une émotion, un lien et une histoire qui mérite de vivre au-delà d'aujourd'hui.",

            "A VISUAL JOURNEY": "UN VOYAGE VISUEL",
            "Every frame tells": "Chaque image raconte",
            "a story.": "une histoire.",
            "A collection of moments, emotions and timeless beauty.": "Une collection de moments, d'émotions et de beauté intemporelle.",

            "FASHION · 01": "MODE · 01",
            "EDITORIAL · 02": "ÉDITORIAL · 02",
            "DETAILS · 03": "DÉTAILS · 03",
            "FASHION · 04": "MODE · 04",
            "FAMILY · 05": "FAMILLE · 05",
            "PORTRAITS · 06": "PORTRAITS · 06",
            "EDITORIAL · 07": "ÉDITORIAL · 07",
            "PORTRAITS · 08": "PORTRAITS · 08",
            "FASHION · 09": "MODE · 09",
            "FAMILY · 10": "FAMILLE · 10",
            "EDITORIAL · 11": "ÉDITORIAL · 11",
            "DETAILS · 12": "DÉTAILS · 12",

            "Previous photo": "Photo précédente",
            "Next photo": "Photo suivante",
            "THE ART OF CAPTURING MOMENTS": "L'ART DE CAPTURER LES INSTANTS",

            "A CURATED COLLECTION": "UNE COLLECTION SÉLECTIONNÉE",
            "Stories through": "Des histoires à travers",
            "the lens.": "l'objectif.",
            "Portraits, connections and moments worth remembering.": "Des portraits, des liens et des moments inoubliables.",

            "All Works": "Toutes les œuvres",
            "Portraits": "Portraits",
            "Fashion": "Mode",
            "Editorial": "Éditorial",
            "Family": "Famille",
            "Details": "Détails",

            "Natural Beauty": "Beauté naturelle",
            "Individual Stories": "Histoires personnelles",
            "The Art of You": "L'art de vous",
            "Quiet Moments": "Instants paisibles",
            "Fashion Story": "Histoire de mode",
            "Modern Elegance": "Élégance moderne",
            "The Look": "Le regard",
            "Style & Light": "Style et lumière",
            "In Motion": "En mouvement",
            "Editorial Mood": "Ambiance éditoriale",
            "Artful Frames": "Images artistiques",
            "A Different Perspective": "Un autre regard",
            "Fine Art": "Beaux-arts",
            "Visual Poetry": "Poésie visuelle",
            "Beyond the Frame": "Au-delà du cadre",
            "The Details of Light": "Les détails de la lumière",
            "Together": "Ensemble",
            "Little Moments": "Petits instants",
            "Family Stories": "Histoires de famille",
            "A Lifetime of Love": "Une vie d'amour",
            "Our Forever": "Notre éternité",
            "The Beautiful Us": "Notre belle histoire",
            "Little Details": "Petits détails",
            "The Finishing Touch": "La touche finale",
            "A Closer Look": "De plus près",
            "Fashion Portrait": "Portrait de mode",
            "Editorial Style": "Style éditorial",
            "Modern Fashion": "Mode contemporaine",
            "The New Look": "Le nouveau look",
            "A Fashion Moment": "Un instant de mode",
            "In Focus": "Au point",
            "Timeless Style": "Style intemporel",
            "Final Frame": "Dernière image",

            "34 FRAMES · ENDLESS STORIES": "34 IMAGES · DES HISTOIRES INFINIES",
            "BOOK YOUR SESSION ↗": "RÉSERVER VOTRE SÉANCE ↗",

            "MORE THAN A PHOTOSHOOT": "PLUS QU'UNE SÉANCE PHOTO",
            "Your story,": "Votre histoire,",
            "your experience.": "votre expérience.",

            "Personal Connection": "Connexion personnelle",
            "Every session begins with understanding your personality and your vision.": "Chaque séance commence par la découverte de votre personnalité et de votre vision.",
            "Artistic Direction": "Direction artistique",
            "Thoughtful styling, creative concepts and attention to every detail.": "Un style réfléchi, des concepts créatifs et une attention portée à chaque détail.",
            "Timeless Memories": "Souvenirs intemporels",
            "Images created to remain meaningful long after the moment has passed.": "Des images qui conservent leur valeur bien après que l'instant soit passé.",

            "BEHIND THE LENS — 01": "DERRIÈRE L'OBJECTIF — 01",
            "Feel the moment": "Ressentez l'instant",
            "before the frame.": "avant qu'il ne devienne image.",
            "A glimpse into the creative process, the atmosphere and the moments in between.": "Un aperçu du processus créatif, de l'atmosphère et des instants entre les prises.",
            "THE ART OF CAPTURING LIFE": "L'ART DE CAPTURER LA VIE",
            "BEHIND THE SCENES": "DANS LES COULISSES",
            "01 / FILM": "01 / VIDÉO",
            "THE ART OF MOMENTS": "L'ART DES INSTANTS",
            "02 / FILM": "02 / VIDÉO",

            "A LITTLE ABOUT ME": "QUELQUES MOTS SUR MOI",
            "The artist": "L'artiste",
            "behind the lens.": "derrière l'objectif.",
            "I believe every photograph holds something more than what the eye can see — a feeling, a connection, a beautiful moment in time.": "Je crois que chaque photographie renferme bien plus que ce que l'œil peut voir : une émotion, un lien, un magnifique instant dans le temps.",
            "My passion is capturing genuine emotions, natural beauty and the little details that make every story uniquely yours.": "Ma passion est de capturer les émotions sincères, la beauté naturelle et les petits détails qui rendent chaque histoire unique.",
            "Your story, told with heart.": "Votre histoire, racontée avec le cœur.",

            "KIND WORDS": "QUELQUES MOTS DOUX",
            "Stories told by": "Des histoires racontées par",
            "our clients.": "nos clients.",
            "Every detail felt so natural and beautiful. The experience was even more special than I imagined.": "Chaque détail était si naturel et si beau. Cette expérience était encore plus spéciale que je ne l'avais imaginé.",
            "CLIENT EXPERIENCE": "EXPÉRIENCE CLIENT",

            "A FEW THINGS TO KNOW": "QUELQUES INFORMATIONS",
            "Frequently asked": "Questions",
            "questions.": "fréquentes.",

            "How do I book a photography session?": "Comment réserver une séance photo ?",
            "Choose your preferred session and complete the booking form. We will contact you to discuss availability.": "Choisissez votre type de séance et remplissez le formulaire de réservation. Nous vous contacterons pour discuter des disponibilités.",

            "Where do photography sessions take place?": "Où se déroulent les séances photo ?",
            "Sessions can be arranged in Yerevan, at selected locations or in a suitable studio.": "Les séances peuvent être organisées à Erevan, dans des lieux sélectionnés ou dans un studio adapté.",

            "Can I request a specific photography style?": "Puis-je demander un style photographique particulier ?",
            "Absolutely. We can discuss your preferred aesthetic and creative direction before your session.": "Bien sûr. Nous pouvons discuter de vos préférences esthétiques et de la direction créative avant votre séance.",

            "Can I book a family session?": "Puis-je réserver une séance en famille ?",
            "Yes. Family sessions are available and can be tailored to your needs.": "Oui. Les séances en famille sont disponibles et peuvent être adaptées à vos souhaits.",

            "YOUR STORY STARTS HERE": "VOTRE HISTOIRE COMMENCE ICI",
            "Let's create something": "Créons quelque chose de",
            "beautiful.": "magnifique.",
            "Tell us a little about your vision and let's plan your photography experience.": "Parlez-nous un peu de votre vision et préparons ensemble votre expérience photographique.",

            "Choose your session": "Choisissez votre séance",
            "Select a session": "Sélectionnez une séance",
            "Individual": "Individuelle",
            "Portrait": "Portrait",
            "Your name": "Votre nom",
            "Full name": "Nom complet",
            "Phone number": "Numéro de téléphone",
            "Your phone number": "Votre numéro de téléphone",
            "Preferred date": "Date souhaitée",
            "Tell us about your idea": "Parlez-nous de votre idée",
            "Your vision, preferences and details...": "Votre vision, vos préférences et vos détails...",
            "Send Booking Request ↗": "Envoyer la demande ↗",
            "Your booking is not confirmed until availability has been discussed and agreed upon.": "Votre réservation n'est pas confirmée tant que les disponibilités n'ont pas été discutées et convenues.",

            "A LITTLE MORE OF OUR WORLD": "UN PEU PLUS DE NOTRE UNIVERS",
            "Follow the": "Suivez les",
            "moments.": "instants.",
            "Beauty": "Beauté",
            "Moments": "Instants",
            "FOLLOW ON INSTAGRAM ↗": "SUIVRE SUR INSTAGRAM ↗",

            "LET'S CONNECT": "RESTONS EN CONTACT",
            "Have a story to": "Vous avez une histoire à",
            "tell?": "raconter ?",
            "We would love to hear from you. Let's create something meaningful together.": "Nous serions ravis d'avoir de vos nouvelles. Créons ensemble quelque chose de précieux.",

            "Photography is the art of making a moment last forever.": "La photographie est l'art de rendre un instant éternel.",
            "© 2026 Photography Studio. All rights reserved.": "© 2026 Photography Studio. Tous droits réservés.",
            "Back to top ↑": "Retour en haut ↑",

            "Visit Sandaljyan on Instagram": "Visiter Instagram de Sandaljyan",
            "WhatsApp": "WhatsApp",
            "Email": "E-mail"
        }

    };


    /* =========================================
       PRESERVE ORIGINAL CONTENT
    ========================================= */

    const originalTextNodes = new WeakMap();
    const originalAttributes = new WeakMap();

    const originalTitle = document.title;

    const descriptionTag = document.querySelector(
        'meta[name="description"]'
    );

    const originalDescription = descriptionTag
        ? descriptionTag.content
        : "";


    function normalizeText(value) {
        return value.trim().replace(/\s+/g, " ");
    }


    /* =========================================
       TRANSLATE TEXT CONTENT
    ========================================= */

    function translateTextNodes(language) {

        const dictionary = translations[language] || {};

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );

        let node;

        while ((node = walker.nextNode())) {

            const parent = node.parentElement;

            if (!parent) continue;

            if (parent.closest("#languageSwitcher")) continue;

            if (
                ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)
            ) continue;

            if (!originalTextNodes.has(node)) {
                originalTextNodes.set(node, node.textContent);
            }

            const original = originalTextNodes.get(node);

            if (language === "en") {
                node.textContent = original;
                continue;
            }

            const key = normalizeText(original);

            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {

                const leading = original.match(/^\s*/)[0];
                const trailing = original.match(/\s*$/)[0];

                node.textContent =
                    leading + dictionary[key] + trailing;
            }

        }

    }


    /* =========================================
       TRANSLATE ATTRIBUTES
       PLACEHOLDERS / ALT / ARIA LABELS
    ========================================= */

    function translateAttributes(language) {

        const dictionary = translations[language] || {};

        const elements = document.querySelectorAll(
            "[placeholder], [aria-label], [alt], [title]"
        );

        elements.forEach(element => {

            if (element.closest("#languageSwitcher")) return;

            const attributes = [
                "placeholder",
                "aria-label",
                "alt",
                "title"
            ];

            attributes.forEach(attribute => {

                if (!element.hasAttribute(attribute)) return;

                if (!originalAttributes.has(element)) {
                    originalAttributes.set(element, {});
                }

                const saved = originalAttributes.get(element);

                if (!(attribute in saved)) {
                    saved[attribute] = element.getAttribute(attribute);
                }

                const original = saved[attribute];

                if (language === "en") {
                    element.setAttribute(attribute, original);
                    return;
                }

                const key = normalizeText(original);

                if (
                    Object.prototype.hasOwnProperty.call(dictionary, key)
                ) {
                    element.setAttribute(attribute, dictionary[key]);
                }

            });

        });

    }


    /* =========================================
       MAIN LANGUAGE FUNCTION
    ========================================= */

    function changeLanguage(language) {

        if (!supportedLanguages.includes(language)) return;

        translateTextNodes(language);
        translateAttributes(language);

        document.documentElement.lang = language;

        currentLanguage.textContent = language.toUpperCase();

        if (language === "en") {

            document.title = originalTitle;

            if (descriptionTag) {
                descriptionTag.content = originalDescription;
            }

        } else {

            const dictionary = translations[language];

            document.title =
                dictionary[originalTitle] || originalTitle;

            if (descriptionTag) {

                descriptionTag.content =
                    dictionary[originalDescription] ||
                    originalDescription;

            }

        }

        try {
            localStorage.setItem(
                "sandaljyan-language",
                language
            );
        } catch (error) {
            console.warn("Language preference could not be saved.");
        }

        menu.querySelectorAll("[data-language]").forEach(button => {

            button.setAttribute(
                "aria-pressed",
                String(button.dataset.language === language)
            );

        });

    }


    /* =========================================
       LANGUAGE MENU
    ========================================= */

    trigger.addEventListener("click", () => {

        const isOpen = !menu.hidden;

        menu.hidden = isOpen;

        trigger.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        trigger.classList.toggle("active", !isOpen);

    });


    menu.querySelectorAll("[data-language]").forEach(button => {

        button.addEventListener("click", () => {

            changeLanguage(button.dataset.language);

            menu.hidden = true;

            trigger.setAttribute("aria-expanded", "false");

            trigger.classList.remove("active");

        });

    });


    document.addEventListener("click", event => {

        if (!event.target.closest("#languageSwitcher")) {

            menu.hidden = true;

            trigger.setAttribute("aria-expanded", "false");

            trigger.classList.remove("active");

        }

    });


    /* =========================================
       RESTORE SAVED LANGUAGE
    ========================================= */

    let savedLanguage = "en";

    try {
        savedLanguage =
            localStorage.getItem("sandaljyan-language") || "en";
    } catch (error) {
        savedLanguage = "en";
    }

    if (!supportedLanguages.includes(savedLanguage)) {
        savedLanguage = "en";
    }

    changeLanguage(savedLanguage);

    console.log("Sandaljyan Studio language system initialized.");

});
