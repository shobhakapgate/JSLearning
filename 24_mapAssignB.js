

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

const array = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];

const newArray = array.map((empName)=>{
    return empName.emp_Name;
});
console.log(newArray);
console.log('------------------------------------------------')
const department = array.map((empName)=>{
    return empName.emp_dept;
});
console.table(department);

console.log('------------------------------------------------')
const employeeId = array.map((employee)=>{
    return employee.emp_id;
});
console.table(employeeId);