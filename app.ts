import { WageEmployee } from "./WageEmployee";
import { SalesPerson } from "./SalesPerson";
import { Company } from "./Company";

const employee: WageEmployee = new WageEmployee(345451230, "Vasya", 2000, "QA",10000, 100,50);
const salesPerson: SalesPerson = new SalesPerson(329823519, "Paulo", 1998,"QA",6000, 81,123,15,15);

const company = new Company([]);
company.addEmployee(salesPerson);
company.addEmployee(employee);
console.log("Vasy salary = " + salesPerson.computeSalary())
console.log("Paulo salary = " + employee.computeSalary());
console.log("SUM =  " + company.computeBudget());