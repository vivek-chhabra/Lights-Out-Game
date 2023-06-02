function randNum(max, min = 0) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function randBool() {
    return randNum(1) == 1 ? true : false;
}

function displayFlex(boolean) {
    return boolean ? { display: "flex" } : { display: "none" };
}

export { randNum, randBool, displayFlex };

// for(let i = 0; i < 20; i++) {
//     console.log(`random number: ${randNum(10, 5)}, random boolean : ${randBool()}`)
// }
