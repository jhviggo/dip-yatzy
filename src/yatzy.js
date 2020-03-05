/**
 * Board logic
 */
const selectDie = (event) => {
    if (round == 0) {
        return;
    }

    let target;

    if (event.target.className == "eye") {
        target = event.target.parentElement;
    } else {
        target = event.target;
    }
    const index = target.getAttribute("index");
    target.classList.toggle("selected");
    boardDice[index].locked = !boardDice[index].locked;
}

const changeRound = newRound => {
    round = newRound;
    document.getElementById("round-counter").innerText = round;
}

/**
 * Rolling dice
 */
const rollDiceHandler = () => {
    if (round < 3) {
        rollDice();
        renderDice();
        changeRound(round + 1);
        renderOverviewContainer();
        updateOverviewTempScores();
        scoreFieldLocked = false;
    }
}

const rollDice = () => {
    for (let i = 0; i < amountOfDiceInGame; i++) {
        if (!boardDice[i] || boardDice[i] && !boardDice[i].locked) {
            boardDice[i] = {
                eyes: parseInt(Math.random()*5+1),
                locked: false
            };
        }
    }
}

/**
 * Overview logic
 */

const lockOverviewField = (event) => {
    if (scoreFieldLocked === true) {
        return;
    }

    const index = event.target.parentElement.getAttribute("index");
    if (index !== undefined && round != 0 && !scoreFields[index].locked) {
        scoreFields[index].locked = true;
        scoreFields[index].score = scoreFields[index].action();
        changeRound(0);

        if (scoreFields[index].action !== undefined) {
            renderOverviewContainer();
        }
        calculateSameEyesSum();
    }

    Array.from(document.getElementsByClassName("selected")).forEach(dice => {
        const index = dice.getAttribute("index");
        dice.classList.toggle("selected");
        boardDice[index].locked = !boardDice[index].locked;
    });
}

// Same eyed dice calculations
const calculateSameEyedDice = amount => {
    const total = boardDice
        .filter(item => item.eyes === amount)
        .map(item => item.eyes)
        .reduce((a,b) => a + b, 0);

    document.getElementById("points-" + (amount - 1)).innerText = total;
    return total;
}

const calculateSameEyesSum = () => {
    let total = 0;

    for (let i = 0; i < 5; i++) {
        total += scoreFields[i].score;
    }

    scoreFields[5].score = total;
    document.getElementById("points-6").innerText = total;
}

const updateOverviewTempScores = () => {
    for (field of scoreFields) {
        if (field.action != undefined && !field.locked) {
            field.action();
        }
    }
}