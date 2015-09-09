var allEmployees = [
    {
        name: "a",
        location: {
            country: "Israel",
            city: "Tel Aviv"
        }
    },
    {
        name: "b",
        location: {
            country: "Israel",
            city: "Jerusalem"
        }
    },
    {
        name: "c",
        location: {
            country: "US",
            city: "Chicago"
        }
    }
];

var employeeCities = [];

for (var i = 0; i < allEmployees.length; i++) {
    employeeCities.push({
        name: allEmployees[i].name,
        city: allEmployees[i].location.city
    });
}

console.table(employeeCities);