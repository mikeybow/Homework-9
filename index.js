const fs = require("fs");
const employeeData = require("./employee.js");

fs.readFile("List.json", "utf8", function(err, data) {
    if(err) {
        throw err;
    }

    const employeeList = JSON.parse(data);

    const Name = [];
    const Id = [];
    const Email = [];
    const Role = [];

    employeeList.forEach(function(employeeData) {
        if(employeeData.Name === "Alice") {
            Name.push(employeeData);
        }
            else if (employeeData.Id === "Alice") {
                Email.push(employeeData)
            }
    });

    const ListJSON = JSON.stringify(employeeData, null, 2);

    fs.writeFile("Employee.PDF", ListJSON, function(err) {
        if (err) {
          throw err;
        }
    });
});