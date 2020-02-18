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
]

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
]

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
]

totalScore = {
    text: "Score",
    score: 0,
    class: "bold"
}


/**
  * Renders game overview
  */
const renderOverview = () => {
    const overview = document.getElementById("overview");

    items = "";

    scoreFieldsSameEyes.forEach(item => items += `
        <span>${item.text}</span>
        <span class=\"pointer\">${item.score}</span>
    `);

    scoreFieldsSum.forEach(item => items += `
        <span class=\"${item.class}\" disabled="true">${item.text}</span>
        <span class=\"${item.class}\" disabled="true">${item.score}</span>
    `);

    scoreFieldsDifferent.forEach(item => items += `
        <span>${item.text}</span>
        <span class=\"pointer\">${item.score}</span>
    `);

    items += `
        <span class=\"${totalScore.class}\" disabled="true">${totalScore.text}</span>
        <span class=\"${totalScore.class}\" disabled="true">${totalScore.score}</span>
    `;

    overview.innerHTML = items;
}

const mainRenderer = () => {
    renderOverview();
}

mainRenderer();