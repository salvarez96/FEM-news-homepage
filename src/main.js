const main = document.querySelector('main');
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

const closeMenuFunction = () => {
  if(navMenu.parentNode === document.body){
    document.body.removeChild(navMenu);
  }
  document.body.removeAttribute('style');
  main.removeEventListener('click', closeMenuFunction);
}

navImg.addEventListener('click', () => {
  header.insertAdjacentElement('beforebegin', navMenu);
  document.body.style.overflow = 'hidden';
  main.addEventListener('click', closeMenuFunction);
});

closeMenu.addEventListener('click', closeMenuFunction);