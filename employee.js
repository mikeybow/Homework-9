class Employee {
    constructor(Name, Id, Email, Role) {
        this.Name = Name
        this.Id = Id
        this.Email = Email
        this. Role = Role
        this.printInfo = function() {return console.log(this.Name + " " + this.Id + " " + this.Email + " " + this.Role + " ")};
    }

}

const e = new Employee("Alice", "93957384", "alice_firstemployee@gmail.com", "Engineer")

e.printInfo();

module.exports = Employee