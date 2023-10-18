let person;
let car;
const minAge = 18;
const maxSpeed = 533;

document.getElementById('submitPerson').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = parseInt(document.getElementById('age').value);
    if (validatePerson(name, surname, age)) {
        person = new Person(name, surname, age);
        clearForm('name', 'surname', 'age');
    }
});

document.getElementById("showPerson").addEventListener("click", function() {
    if (person) {
        person.showDetails();
    } else {
        showErrorModal("No information available.");
    }
});

document.getElementById('submitCar').addEventListener('click', () => {
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const speed = parseInt(document.getElementById('speed').value);
    if (validateCar(model, color, speed)) {
        car = new Car(model, color, speed);
        car.setOwner(person);
        clearForm('model', 'color', 'speed');
    }
});

document.getElementById("showCar").addEventListener("click", function() {
    console.log(car);
    if (car) {
        car.showDetails();
    } else {
        showErrorModal("No information available.");
    }
});