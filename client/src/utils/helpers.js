export const checkYahtzee = (diceArray) => {
    const checkValue = diceArray[0].value;
    return diceArray.map(dice => dice.value).filter(value => value === checkValue).length === 5;
}