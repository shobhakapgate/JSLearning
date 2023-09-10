

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi,];

console.log('-----------------------FIND OUT THE WIPRO EMP-----------------------------');
const employeeWipro = arrayEmployees.filter((employee)=>{
        return employee.emp_company==="Wipro";
});
for (const employee of employeeWipro) {
    console.log(`${employee.emp_name}`);
}

console.log('-----------------------FIND OUT THE EMP IT OR HR-----------------------------');

const employeeItOrHr = arrayEmployees.filter((employee)=>{
    return employee.emp_dept==="IT" || employee.emp_dept ==="HR";
});
for (const employee of employeeItOrHr) {
console.log(`${employee.emp_name}`);
}

console.log('----------------------------------------------------');

const employeeNames = arrayEmployees.filter((employee)=>{
    return employee.emp_id > 50;
});
for (const employee of employeeNames) {
console.log(`${employee.emp_name}`);
}

console.log('--------------------Employee name starts with A V M--------------------------------');

const employeeNamesStarts = arrayEmployees.filter((employee)=>{
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")
});
for (const employee of employeeNamesStarts) {
console.log(`${employee.emp_name}`);
}

console.log('--------------------All employees average Salary--------------------------------');

const sumSalary  =arrayEmployees.reduce((total , employee)=>{
    return total + employee.emp_salary;
  })
  let salarySum = 0;
  for (const employee of arrayEmployees) {
    salarySum= salarySum + employee.emp_salary;
  }
  console.log(`The total of employee salary is : ${salarySum/arrayEmployees.length}`);

console.log('---------------------------------------------------------------------------------------');

const itDepartment  = arrayEmployees.filter((employee)=>{
    return employee.emp_dept=="IT";
  });

  let averageSalary = 0;
  for (const employee of itDepartment) {

    averageSalary = averageSalary + employee.emp_salary;
   
  }
  console.log(`The Average salary sum of IT Department is : ${averageSalary/itDepartment.length}`);