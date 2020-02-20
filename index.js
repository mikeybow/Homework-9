const fs = require("fs");

fs.readFile("List.json", "utf8", function(err, data) {
    if(err) {
        throw err;
    }

    const ListJSON = JSON.parse(data);

    const Name = [];
    const Id = [];
    const Email = [];
    const Role = [];

    ListJSON.forEach(function(Employee) {
        if(Employee.Name === "Alice") {
            Name.push(Employee);
        }
            else if (Employee.Id === "Alice") {
                Email.push(Employee)
            }
    });

    const ListJSON = JSON.stringify(Employee, null, 2);

    fs.writeFile("List.json", ListJSON, function(err) {
        if (err) {
          throw err;
        }
    });
});