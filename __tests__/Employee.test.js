const Employee = require('../lib/Employee');

// if it is an object

test("can create a new employee object", () => {
    const employee = new Employee("john", 123, "john@gmail.com");
    expect(typeof(employee)).toBe("object")
})


// if this.name is working
test("can create a new employee name", () => {
    const employee = new Employee("john");
    expect(employee.getName()).toBe("john");
})


// if this.id is working
test("can create a new employee id", () => {
    const employee = new Employee("john", 100);
    expect(employee.getId()).toBe(100);
})

// if this.email is working
test("can create a new employee email", () => {
    const employee = new Employee("john", 100, "john@gmail.com");
    expect(employee.getEmail()).toBe("john@gmail.com");
})


// if getRoleis working
test("can get role", () => {
    const employee = new Employee("Employee");
    expect(employee.getRole()).toBe("Employee");
})


// if getName is working

// if getId is working

// if getEmail is working





// describe("Employee", () => {
//     it ("", () => {
        // create a new Employee object 
        // assert that the employees getName function returns the name I created the employee with. 
        //const employee = new Employee();

        // Assert
        //expect(employee.getName).toEqual(employee.name);

        // const employee = new Employee("john");
        // expect(employee.getName).toEqual("john");
        //expect(employee.name).toEqual(false)
        //const text = getName

        // Act
        // Call the function that we're testing
        //const obj = new Employee(text);
  
        // Assert
        // Running the expect code
        //expect(obj.text).toEqual(text);
    
    // })
    // It returns the name of the employee

    //

//})