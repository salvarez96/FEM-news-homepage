const header = document.querySelector('.header');
const navImg = document.querySelector('.navbar');
const navMenu = document.createElement('div');
const closeMenu = document.createElement('img');
const listNavItems = document.createElement('ul');
const navItems = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

navMenu.className = 'navbar__menu';
closeMenu.setAttribute('src', '../assets/images/icon-menu-close.svg');

const navItemsToAppend = navItems.map(item => {
  const listItems = document.createElement('li');
  listItems.className = 'navbar__content';
  listItems.innerHTML = item;
  listNavItems.appendChild(listItems);
});
navMenu.append(closeMenu, listNavItems);

navImg.addEventListener('click', () => {
  header.insertAdjacentElement('beforebegin', navMenu);
  navMenu.style.height = '100%';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
  document.body.style.overflow = 'hidden';
  header.style.backgroundColor = 'rgba(0,0,0,0)';
});

closeMenu.addEventListener('click', () => {
  document.body.removeChild(navMenu);
  navMenu.style.height = '0';
  document.body.removeAttribute('style');
  header.style.backgroundColor = 'var(--off-white)';
});