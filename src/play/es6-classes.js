class Person {
    constructor(name = 'Anonymous', age = 0) {
       this.name = name
       this.age = age
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
    getGreeting() {
        return `Hello, ${this.name}.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasLocation() {
        return !!this.homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if (this.hasLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting
    }
}

const me = new Traveller('Raido Kulla', 34, 'Marbella, Spain')
console.log(me.getGreeting())

const unknown = new Traveller()
console.log(unknown.getGreeting())