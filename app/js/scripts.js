// $('#pull').on('click', function() {
// 	$('nav ul').slideToggle();
// 	return false;
// });

const menuButton = document.querySelector('#pull')
const menu = document.querySelector('nav ul')
menuButton.addEventListener('click', toggleMenu)

function toggleMenu(){
	menu.classList.toggle('show');
	event.preventDefault();
}