const returnChange = require("../changeReturn")


describe("Getting the correct change in return.", () => {

    //////////// QUARTERS & BELOW //////////////
    it("Should return 7 quarters, 1 dimes, 1 nickel, and 3 pennies.", () => {
        const result = returnChange(193)
        expect(result.quarters).toBe(7)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(3)
        })
    

    it("Should return 1 quarter, 1 dimes, 1 nickel, and 4 pennies.", () => {
        const result = returnChange(44)
        expect(result.quarters).toBe(1)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(4)
        })

    it("Should return 1 quarter, 0 dimes, 0 nickels, and 3 pennies.", () => {
        const result = returnChange(28)
        expect(result.quarters).toBe(1)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(0)
        expect(result.pennies).toBe(3)
    })

    //////////// DIMES & BELOW //////////////
    it("Should return 1 dime, 1 nickel, and 2 pennies.", () => {
        const result = returnChange(17)
        expect(result.quarters).toBe(0)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
    })


    ////////////// NICKELS & BELOW //////////////
    it("Should return 1 nickel and 2 pennies", () => {
        const result = returnChange(7)
        expect(result.quarters).toBe(0)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
    })

    
    //////////// PENNIES //////////////

    it("Should return 4 pennies.", () => {
        const result = returnChange(4)
        expect(result.quarters).toBe(0)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(0)
        expect(result.pennies).toBe(4)
    })


})