// creating classes and using them based on what I learned from reading in a day

class Animal {
	constructor(species) {
		this.species = species
	}

	breath() {
		console.log(`${this.name} breaths...`)
	}
}

class Dog extends Animal {
	constructor(name, age) {
		super('Dog')
		this.name = name
		this.age = age
	}

	bark() {
		console.log(`${this.name} barks!`)
	}
}

const Johnny = new Dog('johnny', 2)

Johnny.breath()
Johnny.bark()

console.dir(Johnny)

console.table(Johnny)

Object.entries(Johnny).forEach(entry => {
	console.log(entry)
})

const ANIMALS = []

ANIMALS.push(Johnny)

sessionStorage.setItem('ANIMALS', ANIMALS)
