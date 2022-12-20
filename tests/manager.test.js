const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an Manager object with 'name' string, 'id' number, 'email' string from Employee class adding 'officeNumber' number property", () => {
            const employee = new Manager('Joe', 1, 'joe@gmail.com', 1);

            expect(employee.officeNumber).toEqual(expect.any(Number));
        });
    });

    describe("getOfficeNumber", () => {
        it("should add a office number to the 'officeNumber' number property", () => {
            const employee = new Manager('Joe', 1, 'joe@gmail.com', 1);

            expect(employee.getOfficeNumber()).toEqual(expect.any(Number));
        })
    })

    describe("getRole", () => {
        it("should return the role", () => {
            const employee = new Manager('Joe', 1, 'joe@gmail.com', 1);

            expect(employee.getRole()).toEqual("Manager");
        })
    })

});