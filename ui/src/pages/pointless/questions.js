const TYPES = {
    PICTURE: 0,
    OPTIONS: 1,
    INLINE: 2,
    OPEN: 3
}

const rounds = [
    {
        answers: [
            {
                answer: "Santa",
                prompt: "Bad ______ (Billy Bob Thornton, Bernie Mac - 2003)",
                count: 25,
            },
            {
                answer: "Ice",
                prompt: "The ______ Storm (Christina Ricci, Elijah Wood - 1997)",
                count: 0,
            },
            {
                answer: "Present",
                prompt: "Clear and ______ Danger (Harrison Ford, Anne Archer -1994)",
                count: 36,
            },
            {
                answer: "Crackers",
                prompt: "Animal ______ (Groucho Marx, Harpo Marx - 1930)",
                count: 11,
            },
            {
                answer: "Star",
                prompt: "A ______ Is Born (Lady Gaga, Bradley Cooper - 2018)",
                count: 63,
            },
            {
                answer: "Snowman",
                prompt: "The Falcon and the ______ (Timothy Hutton, Sean Penn - 1985)",
                count: 4,
            },
        ],
        type: TYPES.OPEN,
        prompt: "Unseasonal Films"
    },
    {
        answers: [
            {
                answer: "Partridge",
                prompt: "Alan ______ : Alpha Papa (Steve Coogan, Felicity Montagu - 2013)",
                count: 23,
            },
            {
                answer: "Winter",
                prompt: "Captain America: The ______ Soldier (Chris Evans, Sebastian Stan - 2014)",
                count: 19,
            },
            {
                answer: "Eve",
                prompt: "All About ______  (Bette Davis, Anne Baxter - 1950)",
                count: 1,
            },
            {
                answer: "Angels",
                prompt: "Charlie's ______ (Naomi Scott, Kristen Stewart - 2019)",
                count: 57,
            },
            {
                answer: "Joy",
                prompt: "The ______ Luck Club (Tamlyn Tomita, Rosalind Chao - 1993)",
                count: 4,
            },
            {
                answer: "Robin",
                prompt: "Christopher ______ (Ewan McGregor, Hayley Atwell - 2018)",
                count: 29,
            },
        ],
        type: TYPES.OPEN,
        prompt: "Unseasonal Films"
    },
    {
        answers: [
            {
                answer: "Donkey",
                prompt: "______ Xote (Andreu Buenafuente, David Fernandez - 2007)",
                count: 39,
            },
            {
                answer: "Christmas",
                prompt: "The Nightmare Before ______ (Chris Sarandon, Catherine O'Hara - 1993)",
                count: 64,
            },
            {
                answer: "Mary",
                prompt: "There's Something About ______ (Ben Stiller, Cameron Diaz - 1998)",
                count: 55,
            },
            {
                answer: "Cane",
                prompt: "Burning ______ (Wendell Pierce, Karen Kaia Livers - 2019)",
                count: 0,
            },
            {
                answer: "Frost",
                prompt: "______/Nixon (Michael Sheen, Frank Langella - 2008)",
                count: 17,
            },
            {
                answer: "Saint",
                prompt: "The ______ (Val Kilmer, Elizabeth Shue -1997)",
                count: 8,
            },
        ],
        type: TYPES.OPEN,
        prompt: "Unseasonal Films"
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
]

export {
    rounds,
    TYPES
}