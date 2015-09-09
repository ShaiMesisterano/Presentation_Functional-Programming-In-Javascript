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

function getCity(employee) {
    return {
        name: employee.name,
        city: employee.location.city
    };
}

var employeeCities = allEmployees.map(getCity);

console.table(employeeCities);