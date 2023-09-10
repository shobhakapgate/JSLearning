

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
  
  const arrayEployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

  console.log(`----------------Sort the array employee Assending and Decending---------------------`);

 const sortArray = arrayEployees.sort((emp1,emp2)=>{
       emp1.emp_id > emp2.emp_id ? 1 : -1;
  });
  for (const emp of sortArray) {

    console.log(`Employee Id ${emp.emp_id}, Employee Name ${emp.emp_name}, Employee Department ${emp.emp_dept}`);
    
  }
  console.log(`----------------Sort the array Department Assending and Decending---------------------`);

 const sortArrayDept = arrayEployees.sort((emp1,emp2)=>{
       emp1.emp_dept > emp2.emp_dept ? 1 : -1;
  });
  for (const emp of sortArray) {

    console.log(`Employee Id ${emp.emp_id}, Employee Department ${emp.emp_dept}, Employee Company ${emp.emp_company}`);
    
  }
  
  console.log(`----------------Sort the array in Decending Order---------------------`);

  const sortArrayDecending = arrayEployees.sort((emp1,emp2)=>{
        emp1.emp_salary < emp2.emp_salary ? 1 : -1;
   });
   for (const emp of sortArrayDecending) {
 
     console.log(`Employee Name ${emp.emp_name}, Employee Salary ${emp.emp_salary}, Employee Company ${emp.emp_company}`);
     
   }
   