class Entity {
    showDetails() {
        const modal = document.querySelector('.modal');
        const modalList = document.getElementById('modalList');
        modalList.innerHTML = '';
        for (let item in this) {
            const detailItem = document.createElement('li');
            if (item === 'owner' && this.owner && this.owner.name) {
                detailItem.textContent = `owner: ${this.owner.name} ${this.owner.surname}`;
            } else {
                detailItem.textContent = `${item}: ${this[item]}`;
            }
            modalList.appendChild(detailItem);
        }
        modal.style.display = 'block';
        modal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
}
class Person extends Entity {
    constructor(name, surname, age) {
        super();
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

class Car extends Entity {
    constructor(model, color, speed) {
        super();
        this.model = model;
        this.color = color;
        this.speed = speed;
        this.owner = null;
    }
    setOwner(person) {
        this.owner = person;
    }
}

function validatePerson (name, surname, age) {
    let errorMessage = '';
    if (!name) {
        errorMessage += 'You entered incorrect name. ';
    }
    if (!surname) {
        errorMessage += 'You entered incorrect surname. ';
    }
    if (isNaN(age) || age <= minAge) {
        errorMessage += "You entered incorrect age.";
    }
    if (errorMessage) {
        showErrorModal("Please correct the following errors: " + errorMessage);
        return false
    } else {
        return true
    }
}

function validateCar (model, color, speed) {
    let errorMessage = '';
    if (!model) {
        errorMessage += 'You entered incorrect model. ';
    }
    if (!color) {
        errorMessage += 'You entered incorrect color. ';
    }
    if (isNaN(speed) || speed >= maxSpeed) {
        errorMessage += "You entered incorrect speed.";
    }
    if (errorMessage) {
        showErrorModal("Please correct the following errors: " + errorMessage);
        return false
    }
    return true
}

function showErrorModal(message) {
    const modal = document.querySelector('.modal');
    const modalList = document.getElementById('modalList');
    modalList.innerHTML = '';
    const errorMessage = document.createElement('li');
    errorMessage.textContent = message;
    modalList.appendChild(errorMessage);
    modal.style.display = 'block';
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

function clearForm(...args) {
    for (const id of args) {
        document.getElementById(id).value = '';
    }
}

