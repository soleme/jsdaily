const initialProperties = {
    "/inputEmployeeName": '',
    "/EmployeeList": [],
    "/EmployeeCount": 0
};

Object.keys(initialProperties).forEach(key => {
    console.log(key);
    console.log(initialProperties[key]);
})

console.log(new Date(1656633600000));
