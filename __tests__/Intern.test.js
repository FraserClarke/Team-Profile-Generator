const Intern = require('../lib/Intern');

// if it is an object

test("can create a new employee object", () => {
    const intern = new Intern("john", 123, "john@gmail.com");
    expect(typeof(intern)).toBe("object")
})


// if this.name is working
test("can create a new Intern name", () => {
    const intern = new Intern("john");
    expect(intern.getName()).toBe("john");
})


// if this.id is working
test("can create a new Intern id", () => {
    const intern = new Intern("john", 100);
    expect(intern.getId()).toBe(100);
})

// if this.email is working
test("can create a new Intern email", () => {
    const intern = new Intern("john", 100, "john@gmail.com");
    expect(intern.getEmail()).toBe("john@gmail.com");
})


// if getRoleis working
test("can get role", () => {
    const intern = new Intern("Intern");
    expect(intern.getRole()).toBe("Intern");
})
