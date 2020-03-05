/**
 * Data
 */
const scoreFields = [];
const boardDice = [];
let round = 0;
let scoreFieldLocked = false;

const amountOfDiceInGame = 5;

const diceNames = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
};

const scoreFieldsSum = [
    {
        text: "Sum",
        score: 0,
        index: 6,
        locked: true,
        class: "border-top bold"
    },
    {
        text: "Bonus",
        score: 0,
        index: 7,
        locked: true,
        class: "border-bottom bold"
    }
];

const scoreFieldsDifferent = [
    {
        text: "Three of a kind",
        score: 0,
        action: () => {},
    },
    {
        text: "Four of a kind",
        score: 0,
        action: () => {},
    },
    {
        text: "Full house",
        score: 0,
        action: () => {},
    },
    {
        text: "Small straight",
        score: 0,
        action: () => {},
    },
    {
        text: "Large straight",
        score: 0,
        action: () => {},
    },
    {
        text: "Chance",
        score: 0,
        action: () => {},
    },
    {
        text: "Yatzy",
        score: 0,
        action: () => {},
    },
];

totalScore = [
    {
        text: "Score",
        score: 0,
        class: "bold"
    }
];


/**
 * generate list of score fields
 */
const generateScoreFields = () => {
    // same eyes
    for (let i = 1; i <= amountOfDiceInGame; i++) {
        scoreFields.push({
            text: diceNames[i] + "s",
            score: 0,
            index: i-1,
            locked: false,
            action: () => calculateSameEyedDice(i)
        });
    }

    for (let field of scoreFieldsSum) {
        scoreFields.push(field);
    }

    const fieldIndexCounter = amountOfDiceInGame + 2;

    for (let i = fieldIndexCounter; i < fieldIndexCounter + scoreFieldsDifferent.length; i++) {
        scoreFields.push(scoreFieldsDifferent[i - fieldIndexCounter]);
        scoreFields[i].index = i;
    }
}
generateScoreFields();
