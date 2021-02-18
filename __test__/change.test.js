const returnChange = require("../changeReturn")


describe("Getting the correct change in return.", () => {

    //////////// ONE HUNDRED DOLLAR BILLS & BELOW //////////////
    it("Should return 1 one hundred dollar bill, 1 fifty dollar bill, 1 twenty dollar bill, 1 ten dollar bill, 2 one dollar bill, 2 quarters, 1 dimes, 1 nickel, and 2 pennies.", () => {
        const result = returnChange(18267)
        expect(result.oneHundredDollarBills).toBe(1)
        expect(result.fiftyDollarBills).toBe(1)
        expect(result.twentyDollarBills).toBe(1)
        expect(result.tenDollarBills).toBe(1)
        expect(result.oneDollarBills).toBe(2)
        expect(result.quarters).toBe(2)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
        })

    //////////// FIFTY DOLLAR BILLS & BELOW //////////////
    it("Should return 0 one hundred dollar bills, 1 fifty dollar bill, 1 twenty dollar bill, 1 ten dollar bill, 2 one dollar bill, 2 quarters, 1 dimes, 1 nickel, and 2 pennies.", () => {
        const result = returnChange(8267)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(1)
        expect(result.twentyDollarBills).toBe(1)
        expect(result.tenDollarBills).toBe(1)
        expect(result.oneDollarBills).toBe(2)
        expect(result.quarters).toBe(2)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
        })

    //////////// TWENTY DOLLAR BILLS & BELOW //////////////
    it("Should return 0 one hundred dollar bills, 0 fifty dollar bills, 1 twenty dollar bill, 1 ten dollar bill, 2 one dollar bill, 2 quarters, 1 dimes, 1 nickel, and 2 pennies.", () => {
        const result = returnChange(3267)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(0)
        expect(result.twentyDollarBills).toBe(1)
        expect(result.tenDollarBills).toBe(1)
        expect(result.oneDollarBills).toBe(2)
        expect(result.quarters).toBe(2)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
        })

    //////////// TEN DOLLAR BILLS & BELOW //////////////
    it("Should return 0 one hundred dollar bills, 0 fifty dollar bills, 0 twenty dollar bills, 1 ten dollar bill, 1 one dollar bill, 3 quarters, 1 dimes, 1 nickel, and 3 pennies.", () => {
        const result = returnChange(1193)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(0)
        expect(result.twentyDollarBills).toBe(0)
        expect(result.tenDollarBills).toBe(1)
        expect(result.oneDollarBills).toBe(1)
        expect(result.quarters).toBe(3)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(3)
        })
    

    //////////// ONE DOLLAR BILLS & BELOW //////////////
    it("Should return 0 one hundred dollar bills, 0 fifty dollar bills, 0 twenty dollar bills, 0 ten dollar bills, 1 one dollar bill, 3 quarters, 1 dimes, 1 nickel, and 3 pennies.", () => {
        const result = returnChange(193)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(0)
        expect(result.twentyDollarBills).toBe(0)
        expect(result.tenDollarBills).toBe(0)
        expect(result.oneDollarBills).toBe(1)
        expect(result.quarters).toBe(3)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(3)
        })


    //////////// QUARTERS & BELOW //////////////

    it("Should return 0 one hundred dollar bills, 0 fifty dollar bills, 0 twenty dollar bills, 0 ten dollar bills, 0 one dollar bills, 1 quarter, 1 dimes, 1 nickel, and 4 pennies.", () => {
        const result = returnChange(44)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(0)
        expect(result.twentyDollarBills).toBe(0)
        expect(result.tenDollarBills).toBe(0)
        expect(result.oneDollarBills).toBe(0)
        expect(result.quarters).toBe(1)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(4)
        })

    it("Should return 0 one hundred dollar bills, 0 fifty dollar bills, 0 twenty dollar bills, 0 ten dollar bills, 0 one dollar bills, 1 quarter, 0 dimes, 0 nickels, and 3 pennies.", () => {
        const result = returnChange(28)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(0)
        expect(result.twentyDollarBills).toBe(0)
        expect(result.tenDollarBills).toBe(0)
        expect(result.oneDollarBills).toBe(0)
        expect(result.quarters).toBe(1)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(0)
        expect(result.pennies).toBe(3)
    })

    //////////// DIMES & BELOW //////////////
    it("Should return 0 one hundred dollar bills, 0 fifty dollar bills, 0 twenty dollar bills, 0 ten dollar bills, 0 one dollar bills, 1 dime, 1 nickel, and 2 pennies.", () => {
        const result = returnChange(17)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(0)
        expect(result.twentyDollarBills).toBe(0)
        expect(result.tenDollarBills).toBe(0)
        expect(result.oneDollarBills).toBe(0)
        expect(result.quarters).toBe(0)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
    })


    ////////////// NICKELS & BELOW //////////////
    it("Should return 0 one hundred dollar bills, 0 fifty dollar bills, 0 twenty dollar bills, 0 ten dollar bills, 0 one dollar bills, 1 nickel and 2 pennies", () => {
        const result = returnChange(7)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(0)
        expect(result.twentyDollarBills).toBe(0)
        expect(result.tenDollarBills).toBe(0)
        expect(result.oneDollarBills).toBe(0)
        expect(result.quarters).toBe(0)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
    })

    
    //////////// PENNIES //////////////

    it("Should return 0 one hundred dollar bills, 0 fifty dollar bills, 0 twenty dollar bills, 0 ten dollar bills, 0 one dollar bills, 0 quarters, 0 dimes, 0 nickels, and 4 pennies.", () => {
        const result = returnChange(4)
        expect(result.oneHundredDollarBills).toBe(0)
        expect(result.fiftyDollarBills).toBe(0)
        expect(result.twentyDollarBills).toBe(0)
        expect(result.tenDollarBills).toBe(0)
        expect(result.oneDollarBills).toBe(0)
        expect(result.quarters).toBe(0)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(0)
        expect(result.pennies).toBe(4)
    })


})