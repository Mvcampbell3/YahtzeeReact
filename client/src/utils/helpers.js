export const checkYahtzee = (diceArray) => {
    const checkValue = diceArray[0].value;
    return (
        diceArray
            .map((dice) => dice.value)
            .filter((value) => value === checkValue).length === 5
    );
};

export const checkNumber = (diceArray, number) => {
    return diceArray
        .map((dice) => dice.value)
        .filter((value) => value === number)
        .reduce((amt, tot) => amt + tot, 0);
};

export const checkStraight = (diceArrayValues, size) => {
    let isStraight = false;
    switch (size) {
        case "small":
            if (
                (diceArrayValues.includes(1) &&
                    diceArrayValues.includes(2) &&
                    diceArrayValues.includes(3) &&
                    diceArrayValues.includes(4)) ||
                (diceArrayValues.includes(2) &&
                    diceArrayValues.includes(3) &&
                    diceArrayValues.includes(4) &&
                    diceArrayValues.includes(5)) ||
                (diceArrayValues.includes(3) &&
                    diceArrayValues.includes(4) &&
                    diceArrayValues.includes(5) &&
                    diceArrayValues.includes(6))
            ) {
                isStraight = true;
            }
            break;
        case "large":
            if (
                (diceArrayValues.includes(1) &&
                    diceArrayValues.includes(2) &&
                    diceArrayValues.includes(3) &&
                    diceArrayValues.includes(4) &&
                    diceArrayValues.includes(5)) ||
                (diceArrayValues.includes(2) &&
                    diceArrayValues.includes(3) &&
                    diceArrayValues.includes(4) &&
                    diceArrayValues.includes(5) &&
                    diceArrayValues.includes(6))
            ) {
                isStraight = true;
            }
            break;
        default:
            return isStraight;
    }
    return isStraight;
};
