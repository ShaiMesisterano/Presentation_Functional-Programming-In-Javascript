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

function isLocationIsrael(employee) {
    return employee.location === "Israel";
}

var israelEmployees = allEmployees.filter(isLocationIsrael);

console.table(israelEmployees);