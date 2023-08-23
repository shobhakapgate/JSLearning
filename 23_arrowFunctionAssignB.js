

class employee{
    constructor(emp_id, emp_Name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_Name = emp_Name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new employee(22,"Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33,"Radha", "HR",74000, "Wipro");
const emp_rishi = new employee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66,'Sonali',"Finance",450000,'Infoy');
const emp_monika = new employee(77,"Monika","IT",40000,"Wipro");
const emp_vinay = new employee(88,'Vinay','IT',75000,'TCS');
const emp_mahi = new employee(99,'Mahesh','HR',85000,'Infoy');

const empArray = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];

console.log('--------------------TCS Emp-------------------------------');
for (const employee of empArray) {

    if (employee.emp_company == 'TCS') {
        console.log(`Emaployee Name is = ${employee.emp_Name},  company is = ${employee.emp_company}` );
    }
    
} 
console.log('--------------------Emp Dept -------------------------------');
for (const employee of empArray) {
    if (employee.emp_dept == 'Finance') {
        console.log(`Emaployee Name is = ${employee.emp_Name}, Department is = ${employee.emp_dept}` );
    }
    
} 
console.log('--------------------Emp Name Starts "R" -------------------------------');
for (const employee of empArray) {
    if (employee.emp_Name.startsWith("R")) {
        console.log(`Employe ID = ${employee.emp_id}, Emaployee Name is = ${employee.emp_Name}, Department is = ${employee.emp_dept}, Comapny Name ${employee.emp_company}, Salary is ${employee.emp_salary}`);
    }}
console.log('--------------------Emp Salary -------------------------------');
for (const employee of empArray) {
    if (employee.emp_salary > 75000) {
        console.log(`Emaployee Name is = ${employee.emp_Name}, Comany Name is = ${employee.emp_company}, Salary is = ${employee.emp_salary}`);
    }
    
} 
console.log('--------------------Emp Salary & Dept -------------------------------');
for (const employee of empArray) {
    if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
        console.log(`Employe ID = ${employee.emp_id}, Emaployee Name is = ${employee.emp_Name}, Department is = ${employee.emp_dept}, Comapny Name ${employee.emp_company}, Salary is ${employee.emp_salary}`);
    }
    
} 
console.log('--------------------Emp of Info -------------------------------');

for (const employee of empArray) {
    if (employee.emp_company == "Infoy") {
        console.log(`Employe ID = ${employee.emp_id}, Emaployee Name is = ${employee.emp_Name}, Department is = ${employee.emp_dept}, Comapny Name ${employee.emp_company}, Salary is ${employee.emp_salary}`);
    }}
    