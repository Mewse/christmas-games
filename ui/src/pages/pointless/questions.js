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
                answer: "fluffy",
                prompt: "Squiggly muffin creatures ____",
                count: 26,
            },
            {
                answer: "fluffy",
                prompt: "Squiggly muffin creatures ____",
                count: 26,
            },
            {
                answer: "fluffy",
                prompt: "Squiggly muffin creatures ____",
                count: 26,
            },
            {
                answer: "fluffy",
                prompt: "Squiggly muffin creatures ____",
                count: 100,
            },
            {
                answer: "fluffy",
                prompt: "Squiggly muffin creatures ____",
                count: 26,
            },
            {
                answer: "fluffy",
                prompt: "Squiggly muffin creatures ____",
                count: 26,
            },
        ],
        type: TYPES.OPEN,
        prompt: "Weird phrases"
    },
    {
        answers: [
            {
                src: "/images/anne.png",
                answer: "anne",
                count: 26,
            },
            {
                src: "/images/anne.png",
                answer: "anne",
                count: 26,
            },
            {
                src: "/images/anne.png",
                answer: "anne",
                count: 26,
            },
            {
                src: "/images/anne.png",
                answer: "anne",
                count: 26,
            },
            {
                src: "/images/anne.png",
                answer: "anne",
                count: 26,
            }
        ],
        type: TYPES.PICTURE,
        prompt: "Weird pictures"
    },
]

export {
    rounds,
    TYPES
}