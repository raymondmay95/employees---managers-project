class Employee {
   constructor(name, title, salary, boss = null) {
      this.name = name
      this.title = title
      this.salary = salary
      this.boss = boss
      if (boss) boss.addEmployee(this)

   }


   bonus(multiplier) {
      return this.salary * multiplier
   }

}


module.exports = {Employee}
