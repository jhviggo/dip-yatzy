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

const mainRenderer = () => {
    renderOverview();
    document.getElementById("dice").appendChild(renderDie(4))
    document.getElementById("dice").appendChild(renderDie(1))
    document.getElementById("dice").appendChild(renderDie(6))
    document.getElementById("dice").appendChild(renderDie(4))
    document.getElementById("dice").appendChild(renderDie(2))
}

mainRenderer();