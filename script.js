// javascript for opening and closing navigation in mobile view
const btn = document.querySelector('#navbutton')
// console.log( btn )
const nav = document.querySelector('.navigation')
// console.log( nav )

// function to open the nav
function onClick() {
  if( nav.classList.contains('open') ) {
    nav.classList.remove('open')
  }
  else {
    nav.classList.add('open')
  }
}

// add a click listener to the button
btn.addEventListener( 'click' , onClick )
