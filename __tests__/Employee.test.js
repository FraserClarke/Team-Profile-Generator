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

// if this.email is working

// if getRoleis working

// if getName is working

// if getId is working

// if getEmail is working





describe("Employee", () => {
    it ("", () => {
        // create a new Employee object 
        // assert that the employees getName function returns the name I created the employee with. 
        //const employee = new Employee();

        // Assert
        //expect(employee.getName).toEqual(employee.name);

        const employee = new Employee("john");
        expect(employee.getName).toEqual("john");
        //expect(employee.name).toEqual(false)
        //const text = getName

        // Act
        // Call the function that we're testing
        //const obj = new Employee(text);
  
        // Assert
        // Running the expect code
        //expect(obj.text).toEqual(text);
    
    })
    // It returns the name of the employee

    //

})