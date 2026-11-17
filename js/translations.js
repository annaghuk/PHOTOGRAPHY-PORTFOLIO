/* =========================================
   SANDALJYAN STUDIO — LANGUAGE SYSTEM
   English | Armenian | Russian | French
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const languageTrigger = document.querySelector("#languageTrigger");
    const languageMenu = document.querySelector("#languageMenu");
    const currentLanguage = document.querySelector("#currentLanguage");

    if (!languageTrigger || !languageMenu || !currentLanguage) return;

    const supportedLanguages = ["en", "hy", "ru", "fr"];

    const translations = {

        en: {
            "Home": "Home",
            "Portfolio": "Portfolio",
            "Experience": "Experience",
            "About": "About",
            "Contact": "Contact",
            "Instagram": "Instagram",
            "Book a Session": "Book a Session",
            "BEYOND THE PHOTOGRAPH": "BEYOND THE PHOTOGRAPH",
            "Some moments pass.": "Some moments pass.",
            "Some become forever.": "Some become forever.",
            "A VISUAL JOURNEY": "A VISUAL JOURNEY",
            "Every frame tells": "Every frame tells",
            "a story.": "a story.",
            "A CURATED COLLECTION": "A CURATED COLLECTION",
            "Stories through": "Stories through",
            "the lens.": "the lens.",
            "All Works": "All Works",
            "Portraits": "Portraits",
            "Fashion": "Fashion",
            "Editorial": "Editorial",
            "Family": "Family",
            "Details": "Details",
            "MORE THAN A PHOTOSHOOT": "MORE THAN A PHOTOSHOOT",
            "A LITTLE ABOUT ME": "A LITTLE ABOUT ME",
            "KIND WORDS": "KIND WORDS",
            "A FEW THINGS TO KNOW": "A FEW THINGS TO KNOW",
            "Frequently asked": "Frequently asked",
            "questions.": "questions.",
            "YOUR STORY STARTS HERE": "YOUR STORY STARTS HERE",
            "Let's create something": "Let's create something",
            "beautiful.": "beautiful.",
            "Choose your session": "Choose your session",
            "Individual": "Individual",
            "Your name": "Your name",
            "Phone number": "Phone number",
            "Preferred date": "Preferred date",
            "Tell us about your idea": "Tell us about your idea",
            "Send Booking Request": "Send Booking Request",
            "LET'S CONNECT": "LET'S CONNECT",
            "Have a story to": "Have a story to",
            "tell?": "tell?",
            "Back to top": "Back to top"
        },

        hy: {
            "Home": "Գլխավոր",
            "Portfolio": "Պորտֆոլիո",
            "Experience": "Փորձառություն",
            "About": "Մեր մասին",
            "Contact": "Կապ",
            "Instagram": "Instagram",
            "Book a Session": "Ամրագրել նկարահանում",
            "BEYOND THE PHOTOGRAPH": "ԼՈՒՍԱՆԿԱՐԻ ՍԱՀՄԱՆՆԵՐԻՑ ԴՈՒՐՍ",
            "Some moments pass.": "Որոշ պահեր անցնում են։",
            "Some become forever.": "Որոշները մնում են հավերժ։",
            "A VISUAL JOURNEY": "ՏԵՍՈՂԱԿԱՆ ՃԱՆԱՊԱՐՀՈՐԴՈՒԹՅՈՒՆ",
            "Every frame tells": "Յուրաքանչյուր կադր պատմում է",
            "a story.": "մի պատմություն։",
            "A CURATED COLLECTION": "ԸՆՏՐԱՆԻ ՀԱՎԱՔԱԾՈՒ",
            "Stories through": "Պատմություններ՝",
            "the lens.": "օբյեկտիվի միջով։",
            "All Works": "Բոլոր աշխատանքները",
            "Portraits": "Դիմանկարներ",
            "Fashion": "Նորաձևություն",
            "Editorial": "Խմբագրական",
            "Family": "Ընտանեկան",
            "Details": "Մանրամասներ",
            "MORE THAN A PHOTOSHOOT": "ԱՎԵԼԻՆ, ՔԱՆ ՆԿԱՐԱՀԱՆՈՒՄ",
            "A LITTLE ABOUT ME": "ԻՄ ՄԱՍԻՆ",
            "KIND WORDS": "ՋԵՐՄ ԽՈՍՔԵՐ",
            "A FEW THINGS TO KNOW": "ՄԻ ՔԱՆԻ ԿԱՐԵՎՈՐ ՄԱՆՐԱՄԱՍՆԵՐ",
            "Frequently asked": "Հաճախ տրվող",
            "questions.": "հարցեր։",
            "YOUR STORY STARTS HERE": "ՔՈ ՊԱՏՄՈՒԹՅՈՒՆԸ ՍԿՍՎՈՒՄ Է ԱՅՍՏԵՂ",
            "Let's create something": "Եկ միասին ստեղծենք",
            "beautiful.": "գեղեցիկ մի բան։",
            "Choose your session": "Ընտրիր նկարահանման տեսակը",
            "Individual": "Անհատական",
            "Your name": "Քո անունը",
            "Phone number": "Հեռախոսահամար",
            "Preferred date": "Նախընտրելի ամսաթիվ",
            "Tell us about your idea": "Պատմիր քո գաղափարի մասին",
            "Send Booking Request": "Ուղարկել ամրագրման հարցում",
            "LET'S CONNECT": "ԿԱՊ ՀԱՍՏԱՏԵՆՔ",
            "Have a story to": "Ունե՞ս պատմություն՝",
            "tell?": "պատմելու։",
            "Back to top": "Վերադառնալ վերև"
        },

        ru: {
            "Home": "Главная",
            "Portfolio": "Портфолио",
            "Experience": "Опыт",
            "About": "О нас",
            "Contact": "Контакты",
            "Instagram": "Instagram",
            "Book a Session": "Записаться на съёмку",
            "BEYOND THE PHOTOGRAPH": "ЗА ГРАНИЦАМИ ФОТОГРАФИИ",
            "Some moments pass.": "Некоторые моменты проходят.",
            "Some become forever.": "Другие остаются навсегда.",
            "A VISUAL JOURNEY": "ВИЗУАЛЬНОЕ ПУТЕШЕСТВИЕ",
            "Every frame tells": "Каждый кадр рассказывает",
            "a story.": "историю.",
            "A CURATED COLLECTION": "ИЗБРАННАЯ КОЛЛЕКЦИЯ",
            "Stories through": "Истории через",
            "the lens.": "объектив.",
            "All Works": "Все работы",
            "Portraits": "Портреты",
            "Fashion": "Мода",
            "Editorial": "Редакционная съёмка",
            "Family": "Семейные",
            "Details": "Детали",
            "MORE THAN A PHOTOSHOOT": "БОЛЬШЕ, ЧЕМ ФОТОСЕССИЯ",
            "A LITTLE ABOUT ME": "НЕМНОГО ОБО МНЕ",
            "KIND WORDS": "ТЁПЛЫЕ СЛОВА",
            "A FEW THINGS TO KNOW": "НЕСКОЛЬКО ВАЖНЫХ ДЕТАЛЕЙ",
            "Frequently asked": "Часто задаваемые",
            "questions.": "вопросы.",
            "YOUR STORY STARTS HERE": "ТВОЯ ИСТОРИЯ НАЧИНАЕТСЯ ЗДЕСЬ",
            "Let's create something": "Давай создадим что-то",
            "beautiful.": "прекрасное.",
            "Choose your session": "Выберите тип съёмки",
            "Individual": "Индивидуальная",
            "Your name": "Ваше имя",
            "Phone number": "Номер телефона",
            "Preferred date": "Предпочтительная дата",
            "Tell us about your idea": "Расскажите о своей идее",
            "Send Booking Request": "Отправить заявку",
            "LET'S CONNECT": "ДАВАЙТЕ ОБЩАТЬСЯ",
            "Have a story to": "У тебя есть история,",
            "tell?": "которую хочется рассказать?",
            "Back to top": "Наверх"
        },

        fr: {
            "Home": "Accueil",
            "Portfolio": "Portfolio",
            "Experience": "Expérience",
            "About": "À propos",
            "Contact": "Contact",
            "Instagram": "Instagram",
            "Book a Session": "Réserver une séance",
            "BEYOND THE PHOTOGRAPH": "AU-DELÀ DE LA PHOTOGRAPHIE",
            "Some moments pass.": "Certains moments passent.",
            "Some become forever.": "D'autres deviennent éternels.",
            "A VISUAL JOURNEY": "UN VOYAGE VISUEL",
            "Every frame tells": "Chaque image raconte",
            "a story.": "une histoire.",
            "A CURATED COLLECTION": "UNE COLLECTION SÉLECTIONNÉE",
            "Stories through": "Des histoires à travers",
            "the lens.": "l'objectif.",
            "All Works": "Toutes les œuvres",
            "Portraits": "Portraits",
            "Fashion": "Mode",
            "Editorial": "Éditorial",
            "Family": "Famille",
            "Details": "Détails",
            "MORE THAN A PHOTOSHOOT": "PLUS QU'UNE SÉANCE PHOTO",
            "A LITTLE ABOUT ME": "QUELQUES MOTS SUR MOI",
            "KIND WORDS": "QUELQUES MOTS DOUX",
            "A FEW THINGS TO KNOW": "QUELQUES INFORMATIONS",
            "Frequently asked": "Questions",
            "questions.": "fréquentes.",
            "YOUR STORY STARTS HERE": "VOTRE HISTOIRE COMMENCE ICI",
            "Let's create something": "Créons quelque chose de",
            "beautiful.": "magnifique.",
            "Choose your session": "Choisissez votre séance",
            "Individual": "Individuelle",
            "Your name": "Votre nom",
            "Phone number": "Numéro de téléphone",
            "Preferred date": "Date souhaitée",
            "Tell us about your idea": "Parlez-nous de votre idée",
            "Send Booking Request": "Envoyer la demande",
            "LET'S CONNECT": "RESTONS EN CONTACT",
            "Have a story to": "Vous avez une histoire à",
            "tell?": "raconter ?",
            "Back to top": "Retour en haut"
        }
    };

    const originalTexts = new WeakMap();

    function translatePage(language) {

        const dictionary = translations[language];

        if (!dictionary) return;

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );

        let node;

        while (node = walker.nextNode()) {

            const parent = node.parentElement;

            if (!parent || parent.closest("#languageSwitcher")) continue;

            if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) continue;

            if (!originalTexts.has(node)) {
                originalTexts.set(node, node.textContent);
            }

            const original = originalTexts.get(node);
            const cleanText = original.trim();

            if (dictionary[cleanText]) {
                const leading = original.match(/^\s*/)?.[0] || "";
                const trailing = original.match(/\s*$/)?.[0] || "";

                node.textContent =
                    leading + dictionary[cleanText] + trailing;
            }
        }

        document.documentElement.lang = language;
        currentLanguage.textContent = language.toUpperCase();

        localStorage.setItem("sandaljyan-language", language);
    }

    languageTrigger.addEventListener("click", () => {

        const isOpen = !languageMenu.hidden;

        languageMenu.hidden = isOpen;

        languageTrigger.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        languageTrigger.classList.toggle("active", !isOpen);
    });

    languageMenu.querySelectorAll("[data-language]").forEach(button => {

        button.addEventListener("click", () => {

            const language = button.dataset.language;

            if (!supportedLanguages.includes(language)) return;

            translatePage(language);

            languageMenu.hidden = true;

            languageTrigger.setAttribute("aria-expanded", "false");

            languageTrigger.classList.remove("active");
        });

    });

    document.addEventListener("click", event => {

        if (!event.target.closest("#languageSwitcher")) {

            languageMenu.hidden = true;

            languageTrigger.setAttribute("aria-expanded", "false");

            languageTrigger.classList.remove("active");
        }

    });

    const savedLanguage =
        localStorage.getItem("sandaljyan-language") || "en";

    translatePage(
        supportedLanguages.includes(savedLanguage) ? savedLanguage : "en"
    );

});
