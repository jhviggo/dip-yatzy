/**
  * Renders game overview
  */
const renderOverviewContainer = (container) => {
    const overview = document.getElementById("overview");
    overview.onclick = event => console.log(event);

    container.forEach(item => {
        const sameEyesContainer = document.createElement("div");
        sameEyesContainer.innerHTML = `
            <span class="${item.class || 'pointer'}">${item.text}</span>
            <span class="${item.class || 'pointer'}">${item.score}</span>`
        overview.appendChild(sameEyesContainer);
    });
}


/**
 * Render die
 */
const getSingleDiceElement = (dice, index) => {
    let die = document.createElement("div");
    die.onclick = selectDie;
    die.setAttribute("index", index)
    die.className = `die die-${diceNames[dice.eyes]}${dice.locked ? " selected" : ""}`;
    
    for(let i = 0; i < dice.eyes; i++) {
        die.innerHTML += `<div class="eye"></div>`
    }

    return die;
}

const renderDice = () => {
    document.getElementById("dice").innerHTML = "";
    for (let i in boardDice) {
        document.getElementById("dice").appendChild(getSingleDiceElement(boardDice[i], i));
    }
}

/**
 * Main method
 */
const mainRenderer = () => {
    // render UI
    renderOverviewContainer(scoreFieldsSameEyes);
    renderOverviewContainer(scoreFieldsSum);
    renderOverviewContainer(scoreFieldsDifferent);
    renderOverviewContainer(totalScore);

    // add event listen to button
    document.getElementById("roll").onclick = rollDiceHandler;

    document.getElementById("round-counter").innerText = round;
}

mainRenderer();