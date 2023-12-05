const cardsData = [
    {
        id: 1,
        title: "Я больше не могу!",
        cost: 590,
        png: "bolshe_ne_mogu.jpeg",
        author: "Ранган Чаттерджи"
    },
    {
        id: 2,
        title: "Триггер к переменам",
        cost: 650,
        png: "trigger_k_peremenam.jpeg",
        author: "Дэвид Ричо"
        
    },
    {
        id: 3,
        title: 'Чек-лист "79 психотрюков"',
        cost: 480,
        png: "check.jpeg",
        author: "Игорь Ризов"
    },
    {
        id: 4,
        title: "Эмоциональный интеллект",
        cost: 370,
        png: "emotional.jpg",
        author: "Дэниел Гоулман"
    },
    {
        id: 5,
        title: "Sapiens. Графическая история",
        cost: 510,
        png: "sapiens.jpeg",
        author: "Юваль Ной Харари"
    },
    {
        id: 6,
        title: "Слишком занят, чтобы жить",
        cost: 690,
        png: "slishkom.jpeg",
        author: "Тим Райхель"
    },
    {
        id: 7,
        title: "Иди туда, где страшно",
        cost: 550,
        png: "idi_tuda.jpeg",
        author: "Джим Лоулесс"
    },
    {
        id: 8,
        title: "Трансформация мышления",
        cost: 710,
        png: "transformation.jpeg",
        author: "Брайан Трейси"
    },
    {
        id: 9,
        title: "Все закончится, а ты нет",
        cost: 480,
        png: "vse_zakoncitsya.jpg",
        author: "Ольга Примаченко"
    },
    {
        id: 10,
        title: "Искусство любить",
        cost: 390,
        png: "Iiskusstvo.jpg",
        author: "Эрих Фромм"
    },
    {
        id: 11,
        title: "Нет значит нет",
        cost: 530,
        png: "net_znacit_net.jpeg",
        author: "Деймон Захариадис"
    },
    {
        id: 12,
        title: "Эмоциональный интеллект",
        cost: 280,
        png: "emotional.jpg",
        author: "Дэниел Гоулман"
    },
    {
        id: 13,
        title: "Когнитивно-поведенческая терапия тревоги",
        cost: 410,
        png: "kognetivno.jpeg",
        author: "Уильям Дж. Кнаус"
    },
    {
        id: 14,
        title: "Люди, которые играют в игры",
        cost: 720,
        png: "lyudi_kotorie.jpeg",
        author: "Эрик Берн"
    },
    {
        id: 15,
        title: "Ловушка счастья",
        cost: 540,
        png: "lovushka.jpg",
        author: "Расс Хэррис"
    },
    {
        id: 16,
        title: "Хрупкие люди",
        cost: 800,
        png: "khrupkie.jpg",
        author: "Юлия Пирумова"
    },
    {
        id: 17,
        title: "Приключения Оливера Твиста",
        cost: 580,
        png: "oliver_twist.png",
        author: "Чарлз Диккенз"
    },
    {
        id: 18,
        title: "Портрет Дориана Грея",
        cost: 690,
        png: "oscar.jpeg",
        author: "Оскар Уайлд"
    },
    {
        id: 19,
        title: "Мартин Иден",
        cost: 280,
        png: "martin.jpeg",
        author: "Джек Лондон"
    },
    {
        id: 20,
        title: "Великий Гэтсби",
        cost: 370,
        png: "velikiy.jpg",
        author: "Френсис Скотт Фицджеральд"
    },
    {
        id: 21,
        title: "Граф Монте-Кристо",
        cost: 290,
        png: "graf.jpg",
        author: "Александр Дюма"
    },
    {
        id: 22,
        title: "Скотный двор",
        cost: 490,
        png: "skotniy.jpeg",
        author: "Джордж Оруэлл"
    },
    {
        id: 23,
        title: "Человек, который смеётся",
        cost: 510,
        png: "chelovek.jpg",
        author: "Виктор Гюго"
    },
    {
        id: 24,
        title: "Победитель не поучает ничего",
        cost: 480,
        png: "pobeditel.jpg",
        author: "Эрнест Хемингуэй"
    },
    {
        id: 25,
        title: "Алиса в стране чудес",
        cost: 800,
        png: "alice.jpg",
        author: "Льюис Кэролл"
    },
    {
        id: 26,
        title: "Снежная королева",
        cost: 620,
        png: "queen.jpg",
        author: "Ганс Христиан Андерсен"
    },
    {
        id: 27,
        title: "Маугли",
        cost: 290,
        png: "maugli.jpg",
        author: "Редьярд Киплинг"
    },
    {
        id: 28,
        title: "Приключения Буратино",
        cost: 310,
        png: "buratino.jpg",
        author: "Алексей Толстой"
    },
    {
        id: 29,
        title: "Каштанка",
        cost: 240,
        png: "kashtanka.jpg",
        author: "Антон Чехов"
    },
    {
        id: 30,
        title: "Вождь краснокожих",
        cost: 390,
        png: "vozhd.jpg",
        author: "О.Генри"
    },
    {
        id: 31,
        title: "Принц и нищий",
        cost: 410,
        png: "princ.jpg",
        author: "Марк Твен"
    },
    {
        id: 32,
        title: "Маленькие сказки про Чебурашку",
        cost: 540,
        png: "cheburashka.jpg",
        author: "Эдуард Успенский"
    },
    {
        id: 33,
        title: "Большое путешествие по телу человека",
        cost: 360,
        png: "bolshoe.webp",
        author: "Фарндон Джон"
    },
    {
        id: 34,
        title: "Чарльз Дарвин",
        cost: 455,
        png: "darvin.webp",
        author: "Бретт Анна"
    },
    {
        id: 35,
        title: "Чудеса природы России",
        cost: 370,
        png: "chudesa.webp",
        author: "Юлия Смирнова"
    },
    {
        id: 36,
        title: "Легендарные русские космонавты",
        cost: 490,
        png: "cosmo.webp",
        author: "Леонид Кочетков"
    },
    {
        id: 37,
        title: "Антарктида",
        cost: 550,
        png: "antarctida.webp",
        author: "Фёдор Конюхов"
    },
    {
        id: 38,
        title: "Ботаникум",
        cost: 290,
        png: "botanicum.webp",
        author: "Уллис Кэти"
    },
    {
        id: 39,
        title: "Животные Африки в натуральную величину",
        cost: 890,
        png: "africa.webp",
        author: "Хааг Хольгер"
    },
    {
        id: 40,
        title: "Как строили города на Руси",
        cost: 770,
        png: "goroda.webp",
        author: "Михаил Мильчик"
    },
    {
        id: 41,
        title: "Герой нашего времени",
        cost: 450,
        png: "geroy-nashego-vremeni.jpg",
        author: "Михаил Лермонтов"
    },
    {
        id: 42,
        title: "Преступление и наказание",
        cost: 380,
        png: "prestuplenie.jpg",
        author: "Фёдор Достоевский"
    },
    {
        id: 43,
        title: "Капитанская дочка",
        cost: 280,
        png: "kapitanskaya.jpg",
        author: "Александр Пушкин"
    },
    {
        id: 44,
        title: "Мцыри",
        cost: 190,
        png: "mciri.jpg",
        author: "Михаил Лермонтов"
    },
    {
        id: 45,
        title: "Лев Толстой",
        cost: 610,
        png: "anna.jpeg",
        author: "Анна Каренина"
    },
    {
        id: 46,
        title: "Тарас Бульба",
        cost: 390,
        png: "taras.jpg",
        author: "Николай Гоголь"
    },
    {
        id: 47,
        title: "Бедная Лиза",
        cost: 190,
        png: "bednaya.jpg",
        author: "Николай Карамзин"
    },
    {
        id: 48,
        title: "Белые ночи",
        cost: 210,
        png: "belie.jpg",
        author: "Фёдор Достоевский"
    },
    {
        id: 49,
        title: "Метро 2033",
        cost: 310,
        png: "metro.jpeg",
        author: "Дмитрий Глуховский"
    },
    {
        id: 50,
        title: "Я, Робот",
        cost: 270,
        png: "robot.jpeg",
        author: "Айзек Азимов"
    },
    {
        id: 51,
        title: "Охота",
        cost: 330,
        png: "okhota.jpg",
        author: "Станислав Лем"
    },
    {
        id: 52,
        title: "Институт",
        cost: 410,
        png: "institut.jpg",
        author: "Стивен Кинг"
    },
    {
        id: 53,
        title: "Дюна",
        cost: 510,
        png: "duna.jpeg",
        author: "Фрэнк Герберт"
    },
    {
        id: 54,
        title: "За миллиард лет до конца света",
        cost: 320,
        png: "za_milliard.jpg",
        author: "Аркадий и Борис Стругацкие"
    },
    {
        id: 55,
        title: "Академия и империя",
        cost: 220,
        png: "akadimia.jpg",
        author: "Айзек Азимов"
    },
    {
        id: 56,
        title: "Остров погибших кораблей",
        cost: 385,
        png: "ostrov.jpg",
        author: "Александр Беляев"
    },
    {
        id: 57,
        title: "Экономика просто и понятно",
        cost: 220,
        png: "prosto.jpeg",
        author: "Александр Никонов"
    },
    {
        id: 58,
        title: "Новая поведенческая экономика",
        cost: 310,
        png: "novaya.jpg",
        author: "Ричард Талер"
    },
    {
        id: 59,
        title: "Голая экономика",
        cost: 390,
        png: "golaya.jpg",
        author: "Чарльз Уилан"
    },
    {
        id: 60,
        title: "Экономика на пальцах",
        cost: 430,
        png: "na_paltsah.jpeg",
        author: "Александр Никонов"
    },
    {
        id: 61,
        title: "Экономика впечатлений",
        cost: 290,
        png: "vpecatleniy.jpg",
        author: "Джеймс Гилмор"
    },
    {
        id: 62,
        title: "Иран. Экономика под санкциями",
        cost: 420,
        png: "iran.jpeg",
        author: "Павла Рипинская"
    },
    {
        id: 63,
        title: "Капитализм всеобщего блага",
        cost: 510,
        png: "klaus.jpeg",
        author: "Клаус Шваб"
    },
    {
        id: 64,
        title: "Занимательная экономика",
        cost: 370,
        png: "zanimatelnaya.jpg",
        author: "Алексей Савватеев"
    }
];

const arrayAsString = JSON.stringify(cardsData);
// Пример данных о товарах
const products = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 0,
    28: 0,
    29: 0,
    30: 0,
    31: 0,
    32: 0,
    33: 0,
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 0,
    39: 0,
    40: 0,
    41: 0,
    42: 0,
    43: 0,
    44: 0,
    45: 0,
    46: 0,
    47: 0,
    48: 0,
    49: 0,
    50: 0,
    51: 0,
    52: 0,
    53: 0,
    54: 0,
    55: 0,
    56: 0,
    57: 0,
    58: 0,
    59: 0,
    60: 0,
    61: 0,
    62: 0,
    63: 0,
    64: 0,
};

// Преобразуем объект в строку JSON и сохраняем его в Local Storage
if (localStorage.getItem('productsData') === null)
    localStorage.setItem('productsData', JSON.stringify(products));
