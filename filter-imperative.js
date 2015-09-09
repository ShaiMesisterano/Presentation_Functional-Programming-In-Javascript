var allEmployees = [
    {
        name: "a",
        location: "Israel"
    },
    {
        name: "b",
        location: "Israel"
    },
    {
        name: "c",
        location: "US"
    }
];

var israelEmployees = [];

for (var i = 0; i < allEmployees.length; i++) {
    if (allEmployees[i].location === "Israel") {
        israelEmployees.push(allEmployees[i]);
    }
}

console.table(israelEmployees);