/**
 * Board logic
 */
const selectDie = (event) => {
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

/**
 * Rolling dice
 */
const rollDiceHandler = () => {
    if (round < 3) {
        rollDice();
        renderDice();
        round++;
        document.getElementById("round-counter").innerText = round;
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