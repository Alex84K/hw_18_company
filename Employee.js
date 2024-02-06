class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
        this.getAge = function(){
            const ageDiffMs = (new Date()) - this.birthDate;
            const ageDate = new Date(ageDiffMs);
            return (ageDate.getUTCFullYear() - 1970);
        };
        this.toString = function () {
            return `ID: ${this.id}, ${this.firstName}, ${this.lastName}, age: ${this.getAge()}`;
        }
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    get birthDate() {
        return this._birthDate;
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = +salary;
        this.toString = function () {
            return `ID: ${this.id}, ${this.firstName}, ${this.lastName}, age: ${this.getAge()}, salary: ${this.salary}`;
        }
    }

    get salary() {
        if(this._salary === !Number) {
            this._salary = 0;
        }
        return this._salary;
    }

    set salary(value) {
        if (value > this._salary) {
            this._salary = +value;
        }
    }
}