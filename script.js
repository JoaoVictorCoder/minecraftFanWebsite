const nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    window.location.href = `#${event.target.textContent}`;
  }
});

let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
