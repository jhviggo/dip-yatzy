// NOOP

/**
 * Board logic
 */
const selectDie = (event) => {
    if (event.target.className == "eye") {
        event.target.parentElement.classList.toggle("selected");
        return;
    }

    event.target.classList.toggle("selected");
} 