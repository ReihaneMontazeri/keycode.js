let $ = document
let locationKey = $.querySelector('#location')
let key = $.querySelector('#key')
let whichkey = $.querySelector('#which')
let code = $.querySelector('#code')
let ascii = $.querySelector('#keyCode')

let title = $.querySelector('title')

document.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	console.log(event)
	event.preventDefault()
	ascii.innerHTML = event.keyCode
	code.innerHTML = event.code
	whichkey.innerHTML = event.which
	key.innerHTML = event.key
	locationKey.innerHTML = event.location
	
})