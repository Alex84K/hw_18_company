class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(emloyee) {
        const index = this._employees.findIndex(({ id }) => id === emloyee.id);
        if (index < 0) {
            this._employees.push(emloyee);
        }
        return index < 0;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get size(){
        return this._employees.length;
    }
}