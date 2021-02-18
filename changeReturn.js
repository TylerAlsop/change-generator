////////////// Returns Change //////////////
const returnChange = (amountGiven) => {
    let change = {
        dimes: 0,
        nickels: 0,
        pennies: 0
    }
    
    let changeLeft = amountGiven

    const calculateChange = (changeLeft) => {
        if (changeLeft >= 10){
            change.dimes += Math.floor((changeLeft/10))
            changeLeft -= change.dimes * 10
            calculateChange(changeLeft)
        } else if (changeLeft >= 5){
            change.nickels += Math.floor((changeLeft/5))
            changeLeft -= change.nickels * 5
            calculateChange(changeLeft)
        } else {
            change.pennies += changeLeft
            changeLeft -= change.pennies
        }
    }

    if (changeLeft > 0) {
        calculateChange(changeLeft)
    }

    return change

};

module.exports = returnChange

