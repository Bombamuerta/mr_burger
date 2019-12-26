// main menu on/off (tablets, phones)
const hiddenMenu = document.querySelector('#hiddenMenu');
const crossBtn = document.querySelector('#cross');
const hamBtn = document.querySelector('#hamburgerBtn');

crossBtn.addEventListener('click', function() {
 hiddenMenu.classList.remove('hidden-menu--active');
});
hamBtn.addEventListener('click', function() {
 hiddenMenu.classList.add('hidden-menu--active');
});
