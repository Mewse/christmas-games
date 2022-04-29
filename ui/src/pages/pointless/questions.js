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
                prompt: "Girl with a Pearl E _ _ _ _ _ _ (Tracy Chevalier, 1999)",
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
                count: 50,
            },
        ],
        type: TYPES.OPEN,
        prompt: "POTs and PANs"
    },
    {
        answers: [
            {
                answer: "Maggie Smith",
                prompt: "HAMMIEST GIG",
                count: 7,
            },
            {
                answer: "Ben Kingsley",
                prompt: "Ken Being Sly",
                count: 32,
            },
            {
                answer: "Michael Caine",
                prompt: "A chile cinema",
                count: 17,
            },
            {
                answer: "Kristin Scott Thomas",
                prompt: "A smiths cotton skirt",
                count: 0,
            },
            {
                answer: "Thora Hird",
                prompt: "Horrid hat",
                count: 15,
            }
        ],
        type: TYPES.OPEN,
        prompt: "Acting Knights and Dames"
    },
    {
        answers: [
            {
                answer: "Star Trek",
                prompt: "USS Enterprise",
                count: 87,
            },
            {
                answer: "Wacky Races",
                prompt: "Arkansas Chuggabug",
                count: 13,
            },
            {
                answer: "Rugrats",
                prompt: "Reptar Wagon",
                count: 3,
            },
            {
                answer: "....Dukes of Hazard",
                prompt: "General Lee",
                count: 45,
            },
            {
                answer: "Thunderbirds",
                prompt: "FAB 1",
                count: 62,
            },
            {
                answer: "Knight Rider",
                prompt: "KITT",
                count: 66,
            },
            {
                answer: "Harry Potter",
                prompt: "Hogwarts Express",
                count: 91,
            }
        ],
        type: TYPES.OPEN,
        prompt: "Fictional Film and TV vehicles"
    },
    {
        answers: [
            {
                answer: "Doctor Who",
                prompt: "TARDIS",
                count: 96,
            },
            {
                answer: "Tron",
                prompt: "Light Cycle",
                count: 11,
            },
            {
                answer: "Scooby-Doo",
                prompt: "The Mystery Machine",
                count: 44,
            },
            {
                answer: "Ghostbusters",
                prompt: "ECTO 1",
                count: 23,
            },
            {
                answer: "Star Wars",
                prompt: "Millenium Falcon",
                count: 63,
            },
            {
                answer: "Captain Scarlet",
                prompt: "Cloudbase",
                count: 8,
            },
            {
                answer: "Cars",
                prompt: "Lightning McQueen",
                count: 45,
            }
        ],
        type: TYPES.OPEN,
        prompt: "Fictional Film and TV vehicles"
    },
    {
        answers: [
            {
                src: "/images/puppy-pomeranian.png",
                answer: "Pomeranian",
                count: 34,
            },
            {
                src: "/images/puppy-samoyed.png",
                answer: "Samoyed (Sammie)",
                count: 9,
            },
            {
                src: "/images/puppy-shiba-inu.png",
                answer: "Shiba Inu",
                count: 21,
            },
            {
                src: "/images/puppy-leonberger.png",
                answer: "Leonberger",
                count: 0,
            },
            {
                src: "/images/puppy-border-collie.png",
                answer: "Border Collie",
                count: 75,
            }
        ],
        type: TYPES.PICTURE,
        prompt: "Puppy Power"
    },
    {
        answers: [
            {
                src: "/images/dwayne-johnson.png",
                answer: "Dwayne Johnson",
                count: 86,
            },
            {
                src: "/images/donatella-versace.png",
                answer: "Donatella Versace",
                count: 32,
            },
            {
                src: "/images/lily-allen.png",
                answer: "Lily Allen",
                count: 48,
            },
            {
                src: "/images/ellie-kemper.png",
                answer: "Ellie Kemper",
                count: 35,
            },
            {
                src: "/images/shaun-t.png",
                answer: "Shaun T",
                count: 3,
            }
        ],
        type: TYPES.PICTURE,
        prompt: "Born on May 2nd"
    },
    {
        answers: [
            {
                prompt: "Destiny / Fate (6)",
                answer: "Kismet",
                count: 14,
            },
            {
                prompt: "an act or judgement that is misguided or wrong (7)",
                answer: "Mistake",
                count: 67,
            },
            {
                prompt: "Point or direct at a target (3)",
                answer: "Aim",
                count: 83,
            },
            {
                prompt: "An Indian term for minced meat (5)",
                answer: "Keema",
                count: 10,
            },
            {
                prompt: "A jet-propelled vehicle that skims across the surface of water (6)",
                answer: "Jetski",
                count: 31,
            },
            {
                prompt: "To move or glide quickly along a surface (5)",
                answer: "Skate",
                count: 71,
            },
            {
                prompt: "A young guineafowl (4)",
                answer: "Keet",
                count: 0,
            }
        ],
        type: TYPES.OPEN,
        prompt: "Katie James"
    },
    {
        answers: [
            "Most performed Broadway Musicals",
            "'Best Musical' Award Winners"
        ],
        type: TYPES.CATEGORIES,
        prompt: "Musically Inclined"
    },
]

export {
    rounds,
    TYPES
}