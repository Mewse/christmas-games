const TYPES = {
    PICTURE: 0,
    OPTIONS: 1,
    INLINE: 2,
    OPEN: 3,
    CATEGORIES: 4,
}

const rounds = [
    {
        answers: [
            {
                answer: "Esio",
                prompt: "E _ _ _ Trot (Roald Dahl,1990)",
                count: 16,
            },
            {
                answer: "English",
                prompt: "The E _ _ _ _ _ Patient (Michael Ondaatje, 1992)",
                count: 64,
            },
            {
                answer: "Eternity",
                prompt: "Artemis Fowl: The E _ _ _ _ _ _ _ Code (Eoin Colfer, 2003)",
                count: 0,
            },
            {
                answer: "Ecstasy",
                prompt: "The Agony and the E _ _ _ _ _ _ (Irving Stone, 1961)",
                count: 33,
            },
            {
                answer: "Eighty",
                prompt: "Around the World in E _ _ _ _ _ Days (Jules Verne, 1873)",
                count: 87,
            },
            {
                answer: "Elephants",
                prompt: "Water for E _ _ _ _ _ _ _ _ (Sara Gruen, 2006)",
                count: 12,
            },
            {
                answer: "Earring",
                prompt: "Giel with a Pearl E _ _ _ _ _ _ (Tracy Chevalier, 1999)",
                count: 84,
            },
        ],
        type: TYPES.OPEN,
        prompt: "E-Books"
    },
    {
        answers: [
            {
                answer: "Potato",
                prompt: "Plant in the nightshade family grown for its edible tubers (6)",
                count: 29,
            },
            {
                answer: "Pantomime",
                prompt: "Theatrical entertainment, usually based on a fairy tale and produced around christmas (9)",
                count: 75,
            },
            {
                answer: "Pangolin",
                prompt: "Mammal also known as the scaly anteater (8)",
                count: 20,
            },
            {
                answer: "Potholing",
                prompt: "The exploration of underground cases as a leisure activity (9)",
                count: 43,
            },
            {
                answer: "Potassium",
                prompt: "Highly reactive metal with atomic number 19 (9)",
                count: 33,
            },
            {
                answer: "Pantagruel",
                prompt: "The son of a giant gargantua, in 16th century comic novels by Rabelais (10)",
                count: 3,
            },
            {
                answer: "Panda",
                prompt: "Black and white bearlike mammal that feeds on bamboo, native to china (5)",
                count: 85,
            },
        ],
        type: TYPES.OPEN,
        prompt: "POTs and PANs"
    },
    {
        answers: [
            {
                answer: "Panama",
                prompt: "Central american country crossed by a canal connecting the atlantic and pacific oceans (6)",
                count: 39,
            },
            {
                answer: "Potter",
                prompt: "Surname shared by children's author Beatrix and fictional wizard Harry (6)",
                count: 64,
            },
            {
                answer: "Pansy",
                prompt: "A garden flower related to violets and violas (5)",
                count: 55,
            },
            {
                answer: "Potlatch",
                prompt: "Native american ceremonial feast involving the distribution of gifts (8)",
                count: 0,
            },
            {
                answer: "Potsie",
                prompt: "Nickname of the character warren weber in the television series 'Happy Days' (6)",
                count: 17,
            },
            {
                answer: "Pankhurst",
                prompt: "Surname of Emmeline, Sylvia and Christabel, Prominent campaigners for women's suffrage (9)",
                count: 8,
            },
            {
                answer: "Panini",
                prompt: "A sandwich made with italian bread, usually grilled or toasted (6)",
                count: 8,
            },
        ],
        type: TYPES.OPEN,
        prompt: "POTs and PANs"
    },
    {
        answers: [
            {
                answer: "Last Christmas",
                prompt: "STARLIT CHASMS (1984)",
                count: 41,
            },
            {
                answer: "Fairytale of New York",
                prompt: "ONTO FREAKIER FLYWAY (1987)",
                count: 11,
            },
            {
                answer: "A Spaceman Came Travelling",
                prompt: "A MAGICAL CARP ENSLAVEMENT (1986)",
                count: 0,
            },
            {
                answer: "Stay Another Day",
                prompt: "SAY YEAH TO DR TAN (1994)",
                count: 28,
            },
            {
                answer: "Rockin' Around the Christmas Tree",
                prompt: "SECRET HORROR! CID HUNT SAM 'N' KATIE (1958)",
                count: 7,
            }
        ],
        type: TYPES.OPEN,
        prompt: "Jumbled up Xmas songs"
    },
    {
        answers: [
            {
                answer: "Hnit Thit Ku Mingalar Pa",
                prompt: "MATT THINK PIRANHA UGLI (Burmese)",
                count: 0,
            },
            {
                answer: "Buon Natale",
                prompt: "NOT A NEBULA (Italian)",
                count: 10,
            },
            {
                answer: "Feliz Navidad",
                prompt: "DIVIDE ZA FLAN (Spanish)",
                count: 37,
            },
            {
                answer: "God Jul",
                prompt: "OLD JUG (Swedish)",
                count: 6,
            },
            {
                answer: "Joyeux Noel",
                prompt: "U ENJOY LE OX (French)",
                count: 59,
            }
        ],
        type: TYPES.OPEN,
        prompt: "Merry Christmas in other languages"
    },
    {
        answers: [
            {
                answer: "Away in a Manger",
                prompt: "I WAYNE, ANAGRAM",
                count: 46,
            },
            {
                answer: "Silent Night",
                prompt: "LIGHTEST INN",
                count: 73,
            },
            {
                answer: "Hark the Herald Angels Sing",
                prompt: "HE HATED ALL GRANS GHERKINS",
                count: 4,
            },
            {
                answer: "O Come All Ye Faithful",
                prompt: "HUFFILY MOO AT CALLEE",
                count: 13,
            },
            {
                answer: "Good King Wenceslas",
                prompt: "NICK GASSED, WOE LONG",
                count: 5,
            }
        ],
        type: TYPES.OPEN,
        prompt: "Christmas Carols"
    },
    {
        answers: [
            {
                src: "/images/holly-walsh.jpg",
                answer: "Holly Walsh",
                count: 7,
            },
            {
                src: "/images/holly-hunter.jpg",
                answer: "Holly Hunter",
                count: 21,
            },
            {
                src: "/images/holly-earl.jfif",
                answer: "Holly Earl",
                count: 0,
            },
            {
                src: "/images/holly-valance.jpg",
                answer: "Holly Valance",
                count: 30,
            },
            {
                src: "/images/holly-willoughby.jpg",
                answer: "Holly Willoughby",
                count: 68,
            }
        ],
        type: TYPES.PICTURE,
        prompt: "Famous Holly's"
    },
    {
        answers: [
            {
                src: "/images/annie-lennox.jpg",
                answer: "Annie Lennox",
                count: 10,
            },
            {
                src: "/images/justin-trudeau.jpg",
                answer: "Justin Trudeau",
                count: 32,
            },
            {
                src: "/images/chris-kamara.jpg",
                answer: "Chris Kamara",
                count: 24,
            },
            {
                src: "/images/shane-macgowan.jpg",
                answer: "Shane Macgowan",
                count: 13,
            },
            {
                src: "/images/dido.jpg",
                answer: "Dido",
                count: 18,
            }
        ],
        type: TYPES.PICTURE,
        prompt: "Born on christmas day"
    },
    {
        answers: [
            {
                prompt: "The health, happiness, and fortunes of a person or group",
                answer: "Welfare",
                count: 26,
            },
            {
                prompt: "Largest Town in Shropshire",
                answer: "Telford",
                count: 14,
            },
            {
                prompt: "Underwater Creatures with a laterally compressed body, typically brightly coloured or boldly striped",
                answer: "Angelfish",
                count: 5,
            },
            {
                prompt: "A long, flat length of board hung to a wall, used to hold objects",
                answer: "Shelf",
                count: 83,
            },
            {
                prompt: "A large amount",
                answer: "Barrelful",
                count: 0,
            },
            {
                prompt: "Concerned excessively with oneself",
                answer: "Selfish",
                count: 57,
            }
        ],
        type: TYPES.OPEN,
        prompt: "Elf Words"
    },
    {
        answers: [
            "Eighties",
            "Nineties",
            "Noughties"
        ],
        type: TYPES.CATEGORIES,
        prompt: "Best selling christmas toys by decade"
    },
]

export {
    rounds,
    TYPES
}