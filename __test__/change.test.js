const returnChange = require("../changeReturn")


describe("Getting the correct change in return.", () => {

    //////////// 22 Cents //////////////
    it("Should return 2 dimes and 2 pennies.", () => {
        const result = returnChange(22)
        expect(result.dimes).toBe(2)
        expect(result.nickels).toBe(0)
        expect(result.pennies).toBe(2)
    })


    // ////////////// 14 cents //////////////
    // it("Should return 2 nickels and 4 pennies", () => {
    //     const result = returnChange(14)
    //     expect(result.nickels).toBe(2)
    //     expect(result.pennies).toBe(4)
    // })


    ////////////// 7 cents //////////////
    it("Should return 1 nickel and 2 pennies", () => {
        const result = returnChange(7)
        expect(result.nickels).toBe(1)
        expect(result.pennies).toBe(2)
    })

    
    //////////// 4 cents //////////////

    it("Should return 4 pennies.", () => {
        const result = returnChange(4)
        expect(result.pennies).toBe(4)
    })


})