const Engineer = require('../lib/Engineer');

// if it is an object

test("can create a new Engineer object", () => {
    const engineer = new Engineer("john", 123, "john@gmail.com", "Github");
    expect(typeof(engineer)).toBe("object");
    console.log(engineer);
})


// if this.name is working
test("can create a new Engineer name", () => {
    const engineer = new Engineer("john");
    expect(engineer.getName()).toBe("john");
})


// if this.id is working
test("can create a new Engineer id", () => {
    const engineer = new Engineer("john", 100);
    expect(engineer.getId()).toBe(100);
})

// if this.email is working
test("can create a new Engineer email", () => {
    const engineer = new Engineer("john", 100, "john@gmail.com", "github" );
    expect(engineer.getEmail()).toBe("john@gmail.com");

})


// if getRoleis working
test("can get role", () => {
    const engineer = new Engineer("Engineer");
    expect(engineer.getRole()).toBe("Engineer");
})
