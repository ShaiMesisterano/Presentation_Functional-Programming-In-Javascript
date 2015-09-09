var allEmployees = [
{name: "a", location: { country: "Israel", city: "Tel Aviv"}},
{name: "b", location: { country: "Israel", city: "Jerusalem"}},
{name: "c", location: { country: "US", city: "Chicago"}}
];

function isLocationIsrael(employee){
    return employee.location.country === "Israel";
}

function getCity(employee){
    return {
        name: employee.name,
        city: employee.location.city
    };
}

var israelEmployeesWithCity = allEmployees.filter(isLocationIsrael).map(getCity);

console.table(israelEmployeesWithCity);