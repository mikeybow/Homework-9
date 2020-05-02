const fs = require("fs");
const employeeData = require("./employee.js");
const pdf = require('html-pdf');
const html = fs.readFileSync('./Employee.PDF', 'utf8');
const options = { format: 'Letter' }; 

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

    pdf.create(html, options).toFile('./Employee.PDF', function(err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/Employee.PDF' }
      });
    });