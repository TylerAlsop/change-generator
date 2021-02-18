const returnChange = require("../changeReturn")


describe("Getting the correct change in return.", () => {

    //////////// 193 Cents //////////////
    it("Should return 7 quarters, 1 dimes, 1 nickel, and 3 pennies.", () => {
        const result = returnChange(193)
        expect(result.quarters).toBe(7)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(3)
        })
    

    //////////// 44 Cents //////////////
    it("Should return 1 quarter, 1 dimes, 1 nickel, and 4 pennies.", () => {
        const result = returnChange(44)
        expect(result.quarters).toBe(1)
        expect(result.dimes).toBe(1)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(4)
        })

    //////////// 28 Cents //////////////
    it("Should return 2 dimes, 1 nickel, and 3 pennies.", () => {
        const result = returnChange(28)
        expect(result.quarters).toBe(1)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(0)
        expect(result.pennies).toBe(3)
    })

    //////////// 2 Cents //////////////
    it("Should return 2 dimes, 1 nickel, and 3 pennies.", () => {
        const result = returnChange(28)
        expect(result.quarters).toBe(1)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(0)
        expect(result.pennies).toBe(3)
    })


    ////////////// 7 cents //////////////
    it("Should return 1 nickel and 2 pennies", () => {
        const result = returnChange(7)
        expect(result.quarters).toBe(0)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
    })

    
    //////////// 4 cents //////////////

    it("Should return 4 pennies.", () => {
        const result = returnChange(4)
        expect(result.quarters).toBe(0)
        expect(result.dimes).toBe(0)
        expect(result.nickels).toBe(0)
        expect(result.pennies).toBe(4)
    })


})