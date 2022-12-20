const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an Employee object with 'name' string, 'id' number, 'email' string", () => {
            const employee = new Employee('Jerome', 1, 'jerome@bleh.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    describe("getName", () => {
        it("should add a name to the 'name' string", () => {
            const employee = new Employee('Jerome', 1, 'jerome@gmail.com');
            // Week 10 Activity 18
            expect(employee.getName()).toEqual(expect.any(String));
        })
    })
    describe("getId", () => {
        it("should add a id to the 'id' string", () => {
            const employee = new Employee('Jerome', 1, 'jerome@gmail.com');

            expect(employee.getId()).toEqual(expect.any(Number));
        })
    })
    describe("getEmail", () => {
        it("should add a email to the 'email' string", () => {
            const employee = new Employee('jerome', 1, 'jerome@gmail.com');

            expect(employee.getEmail()).toEqual(expect.any(String));
        })
    })
    describe("getRole", () => {
        it("should return the role", () => {
            const employee = new Employee('jerome', 1, 'jerome@gmail.com');

            expect(employee.getRole()).toEqual("Employee");
        })
    })

});