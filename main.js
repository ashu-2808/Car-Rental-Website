let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

const sr = ScrollReveal({
  distance: '50px',
  duration: 2500,
  delay: 300,
  reset: true
})

sr.reveal('.text', { delay: 150, origin: 'top' })
sr.reveal('.form-container form', { delay: 300, origin: 'left' })
sr.reveal('.heading', { delay: 300, origin: 'top' })
sr.reveal('.ride-container .box', { delay: 250, origin: 'top' })
sr.reveal('.services-container .box', { delay: 250, origin: 'top' })
sr.reveal('.about-container .box', { delay: 250, origin: 'top' })
sr.reveal('.reviews-container', { delay: 150, origin: 'top' })
sr.reveal('.newsletter .box', { delay: 150, origin: 'bottom' })



