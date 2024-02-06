const firma = new Company();

const addEmpl = document.getElementById('addPerson');
const getStats = document.getElementById('calcStats');

addEmpl.onclick = function () {
    clearStats();
    const employee = new Employee(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), birthDate.value, salary.value.trim());
    firma.addEmployee(employee);
    const li = createInfoElement(employee.toString(), 'li');

    const buttonDel = createButtonDel(() => {
        clearStats();
        const index = firma._employees.findIndex(({ id }) => id === employee.id);
        firma.removeEmployee(employee.id);
    });
    li.append(buttonDel);
    personsList.append(li);
    clearUl();
}


calcStats.onclick = function () {
    clearStats();
    const divStats = document.createElement('div');
    try {
        let age = firma._employees.reduce((accum, p) => accum + p.getAge(), 0) / firma._employees.length;
        const h3avg = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h3');
        age = firma._employees.reduce((min, p) => p.getAge() < min ? p.getAge() : min, firma._employees[0].getAge());
        const h3min = createInfoElement(`Min age: ${age}`, 'h3');
        age = firma._employees.reduce((max, p) => p.getAge() > max ? p.getAge() : max, firma._employees[0].getAge());
        const h3max = createInfoElement(`Max age: ${age}`, 'h3');
        let midlSalary = firma._employees.reduce((accum, p) => accum + p.salary, 0);
        const h3midSal = createInfoElement(`Midl salary: ${midlSalary / firma._employees.length}`, 'h3');
        const qwantEmpl = createInfoElement(`Number of people: ${firma._employees.length}`, 'h3');
        divStats.append(h3avg, h3min, h3max, h3midSal, qwantEmpl);
    } catch (e) {
        console.log(e);
        const h3Error = createInfoElement('No data for processing', 'h3');
        divStats.append(h3Error);
    }
    stats.appendChild(divStats);
};