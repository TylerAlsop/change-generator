////////////// Returns Change //////////////
const returnChange = (amountGiven) => {
    let change = {
        dimes: 0,
        nickels: 0,
        pennies: 0
    }
    
    if (amountGiven >= 5){
        change.nickels += Math.floor((amountGiven/5))
        change.pennies += amountGiven % 5
    } else {
        change.pennies += amountGiven
    }
    return change
};

module.exports = returnChange

