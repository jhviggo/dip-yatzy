/**
 * Data
 */
const scoreFieldsSameEyes = [
    {
        text: "Ones",
        score: 0
    },
    {
        text: "Twos",
        score: 0
    },
    {
        text: "Threes",
        score: 0
    },
    {
        text: "Fours",
        score: 0
    },
    {
        text: "Fives",
        score: 0
    },
    {
        text: "Sixes",
        score: 0
    }
];

const scoreFieldsSum = [
    {
        text: "Sum",
        score: 0,
        class: "border-top bold"
    },
    {
        text: "Bonus",
        score: 0,
        class: "border-bottom bold"
    }
];

const scoreFieldsDifferent = [
    {
        text: "Three of a kind",
        score: 0
    },
    {
        text: "Four of a kind",
        score: 0
    },
    {
        text: "Full house",
        score: 0
    },
    {
        text: "Small straight",
        score: 0
    },
    {
        text: "Large straight",
        score: 0
    },
    {
        text: "Chance",
        score: 0
    },
    {
        text: "Yatzy",
        score: 0
    },
];

totalScore = [
    {
        text: "Score",
        score: 0,
        class: "bold"
    }
];

const diceNames = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
};

const boardDice = []

const amountOfDiceInGame = 5;

let round = 0;