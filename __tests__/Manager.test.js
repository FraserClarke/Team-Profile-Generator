const Manager = require('../lib/Manager');

// if it is an object

test("can create a new Manager object", () => {
    const manager = new Manager("john", 123, "john@gmail.com");
    expect(typeof(manager)).toBe("object")
})


// if this.name is working
test("can create a new Manager name", () => {
    const manager = new Manager("john");
    expect(manager.getName()).toBe("john");
})


// if this.id is working
test("can create a new Manager id", () => {
    const manager = new Manager("john", 100);
    expect(manager.getId()).toBe(100);
})

// if this.email is working
test("can create a new Manager email", () => {
    const manager = new Manager("john", 100, "john@gmail.com");
    expect(manager.getEmail()).toBe("john@gmail.com");
})


// if getRoleis working
test("can get role", () => {
    const manager = new Manager("Manager");
    expect(manager.getRole()).toBe("Manager");
})
