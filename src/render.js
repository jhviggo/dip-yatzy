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
const renderDie = (eyes) => {
    let die = document.createElement("div");
    die.onclick = selectDie;
    die.className = `die die-${dice[eyes]}`;
    
    for(let i = 0; i < eyes; i++) {
        die.innerHTML += `<div class="eye"></div>`
    }

    return die;
}

/**
 * Main method
 */
const mainRenderer = () => {
    renderOverviewContainer(scoreFieldsSameEyes);
    renderOverviewContainer(scoreFieldsSum);
    renderOverviewContainer(scoreFieldsDifferent);
    renderOverviewContainer(totalScore);

    // render dice hardcoded for now
    document.getElementById("dice").appendChild(renderDie(4))
    document.getElementById("dice").appendChild(renderDie(1))
    document.getElementById("dice").appendChild(renderDie(6))
    document.getElementById("dice").appendChild(renderDie(4))
    document.getElementById("dice").appendChild(renderDie(2))
}

mainRenderer();