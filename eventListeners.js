/* Get elements by tag name, then convert to an iterable array */
const h1Els = document.getElementsByTagName('h1')
Array.from(h1Els).forEach(el => {
	el.addEventListener(
		'click',
		e => {
			e.stopPropagation() // don't let the event capture or bubble
			console.log(`${el.textContent} (H1) clicked!`)
		},
		{ capture: true } // make the event go inwards towards the document
	)
})

// better option for selecting everything.
const h2Els = document.querySelectorAll('h2').forEach(el => {
	console.log(`${el.textContent} from h2 being created`)
	addGlobalEventListener('click', 'h2', true, e => {
		console.log('you found me!', e.target.textContent)
		e.stopPropagation()
	})
})

// create an event listener with options
function addGlobalEventListener(type, selector, capture, callback) {
	document.addEventListener(
		type,
		e => {
			e.target.matches(selector) ? callback(e) : null
		},
		{ capture: capture }
	)
}

document.addEventListener('click', e => {
	console.log('clicked!')
})
