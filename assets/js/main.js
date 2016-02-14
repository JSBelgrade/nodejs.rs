'use strict'

var menu = document.getElementById('menu-button')
  , backgroundWrapper = document.getElementById('background-wrapper')
  , randomNumber = Math.round(Math.random() * 21) + 1

backgroundWrapper.style.backgroundImage = 'url(assets/images/backgrounds/background-' + randomNumber + '.jpg)'

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  document.body.classList.toggle('navigation-is-open')
})
