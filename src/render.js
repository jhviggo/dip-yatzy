/**
  * Renders game overview
  */
const renderOverviewContainer = () => {
    const overview = document.getElementById("overview");
    overview.innerHTML = "";
    overview.onclick = lockOverviewField

    scoreFields.forEach(item => {
        const sameEyesContainer = document.createElement("div");
        let pointsId = "";

        if (item.index !== undefined) {
            sameEyesContainer.setAttribute("index", item.index);
            pointsId = `id="points-${item.index}"`;

        }
        if (item.locked == true) {
            sameEyesContainer.classList.add("locked");
        }
        sameEyesContainer.innerHTML = `
            <span class="${item.class || 'pointer'}">${item.text}</span>
            <span ${pointsId} class="${item.class || 'pointer'}">${item.locked ? item.score : ""}</span>`
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
    renderOverviewContainer();

    // add event listen to button
    document.getElementById("roll").onclick = rollDiceHandler;

    document.getElementById("round-counter").innerText = round;
}

mainRenderer();