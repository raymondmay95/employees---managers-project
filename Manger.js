const {Employee} = require("./Employee.js")

class Manager extends Employee {
    constructor(name, title, salary, boss){
        super(name, title, salary, boss)
        this.employees = []

    }

   addEmployee(employee) {
      this.employees.push(employee)
      return employee
   }

   totalSubSalary() {
      let additionalSalary = 0
      this.employees.forEach((employee) => {
         if ( employee instanceof Manager)  {
            additionalSalary += employee.salary + employee.totalSubSalary()
         } else {
            additionalSalary += employee.salary
         }
      })
      return additionalSalary

   }

    bonus(multiplier){
      return (this.salary + this.totalSubSalary()) * multiplier
    }
}
const Hobbes = new Manager('Hobbes', 'Founder', 1000000, null)
const Calvin = new Manager('Calvin', 'Director', 130000, Hobbes)
const Susie = new Manager('Susie', 'TA Manager', 100000, Calvin)
const Clifford = new Employee('Clifford', 'TA', 90000, Susie)
const Lily = new Employee('Lily', 'TA', 90000, Susie)


console.log(Hobbes.bonus(0.05)); // 70500
console.log(Calvin.bonus(0.05)); // 20500
console.log(Susie.bonus(0.05)); // 14000
console.log(Lily.bonus(0.05)); // 4500
console.log(Clifford.bonus(0.05)); // 4500
