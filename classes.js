// creating classes and using them based on what I learned from reading in a day

/* class Animal {
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
		this.alive = true
		const sound = 'woof'
	}

	bark() {
		console.log(`${this.name} barks!`, this.sound)
	}
}

//console.log(sound)

const Johnny = new Dog('johnny', 2)
console.log(Johnny.alive)
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
*/

let dog = {
	breed: 'Beagle',
	weight: 30,
	group: 'Hound',
}
let key = 'weight'

console.log(dog[key] === 30)
console.log(dog.hasOwnProperty('weight'))
console.log('weight' in dog)
console.log(dog['weight'] == '30')
console.log(dog.weight ? true : false)
console.log(dog.key === 30)

// access object properties with spaces like this object["hello world"] >> "greetings"
