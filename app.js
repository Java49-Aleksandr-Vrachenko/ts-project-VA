"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WageEmployee_1 = require("./WageEmployee");
const SalesPerson_1 = require("./SalesPerson");
const Company_1 = require("./Company");
const employee = new WageEmployee_1.WageEmployee(345451230, "Vasya", 2000, "QA", 10000, 100, 50);
const salesPerson = new SalesPerson_1.SalesPerson(329823519, "Paulo", 1998, "QA", 6000, 81, 123, 15, 15);
const company = new Company_1.Company([]);
company.addEmployee(salesPerson);
company.addEmployee(employee);
console.log("Vasy salary = " + salesPerson.computeSalary());
console.log("Paulo salary = " + employee.computeSalary());
console.log("SUM =  " + company.computeBudget());
//# sourceMappingURL=app.js.map