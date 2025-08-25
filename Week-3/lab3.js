const person = {
    name: 'Reach',
    age: 18,
    greet() {
        console.log(`Hi My Name is ${this.name}.`);
        console.log(`I'm ${this.age} years old.`);
    }
}
person.greet() ;