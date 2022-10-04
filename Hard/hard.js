// First Solution 
function createPerson(personName, personSS, PersonHeight, Favfood) {

    let pi = {
        name: personName,
        ssn: personSS,
        height: PersonHeight,
        food: Favfood
    }

    function getName() {
        return pi.name
    }

    function getHeight() {
        return pi.height
    }

    return {
        name() {
            return getName()
        }, height() {
            return getHeight()
        },
    }
}

let isaac = createPerson('Isaac', '19239239', '5,7', 'sushi')

console.log(isaac.name())

// Second Solution 
// class Person {

//     #ssn

//     constructor(name, ssn) {
//         this.name = name
//         this.#ssn = ssn 
//     }

// }


// function getName() {
//     console.log(gus.name)
// }

// let gus = new Person('Gus', '123455')

// getName()





