// Write your solution in this file!
const employee = {
    name : 'Franklin',
    streetAddress : '373 Antioch'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,[key]: value,}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee; 
}function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
   // const newEmployee = employee;
    //newEmployee[key] = value;
    delete employee[key];
    return employee;
}
