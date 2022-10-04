class Person {
    constructor(name, job, age){
        this.name = name
        this.job = job 
        this.age = age
    }
    exercise() { 
        return(`${this.name} is running`)
    }
    fetchJob(){
        return(`${this.name1} is a ${this.job}`)
    }
}

class Programmer extends Person {

    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

    completeTask(){
        this.busy = false 
    }

    acceptNewTask(){
        this.busy = true
    }

    offerNewTask(){
        if (this.busy){
            return (`${this.name} cant accept any new tasks right now.`)
        } else {
            return (`${this.name } would love to take on a new responsibility.`)
        }
    }

    learnLanguage(newlan){
        this.languages = this.languages + newlan
    }

    listLanguage(){
        return(this.languages)
    }
}

let isaac = new Programmer('Isaac', 'TG', '27', 'JavRICK')
console.log(isaac)
isaac.completeTask()
console.log(isaac)
console.log(isaac.offerNewTask())
isaac.acceptNewTask()
console.log(isaac)
console.log(isaac.offerNewTask())
isaac.learnLanguage('HTML')
console.log(isaac)
console.log(isaac.listLanguage())

