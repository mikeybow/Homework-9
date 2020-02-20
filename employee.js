class Employee {
    constructor(Name, Id, Email, Role) {
        this.Name = Name
        this.Id = Id
        this.Email = Email
        this. Role = Role
    }

    printInfo() {
        console.log(`Name: ${this.Name}`);
        console.log(`Id: ${this.Id}`);
        console.log(`Email: ${this.Email}`);
        console.log(`Role: ${this.Role}`);
    }
}

const e = new Employee()

Employee.printInfo();