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
});