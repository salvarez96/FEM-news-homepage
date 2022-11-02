const main = document.querySelector('main');
const header = document.querySelector('.header');
const nav = document.querySelector('.navbar');
const navMenu = document.createElement('div');
const closeMenu = document.createElement('img');
const listNavItems = document.createElement('ul');
const navItems = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

navMenu.className = 'navbar__menu';
closeMenu.setAttribute('src', 'https://salvarez96.github.io/FEM-news-homepage/assets/images/icon-menu-close.svg');
closeMenu.setAttribute('alt', 'close navigation button');

const navItemsToAppend = navItems.map(item => {
  const listItems = document.createElement('li');
  listItems.className = 'navbar__content';
  listItems.innerHTML = item;
  listNavItems.appendChild(listItems);
});

if(this.innerWidth < 650){
  navMenu.append(closeMenu, listNavItems);
  
  const closeMenuFunction = () => {
    if(navMenu.parentNode === document.body){
      document.body.removeChild(navMenu);
    }
    document.body.removeAttribute('style');
    main.removeEventListener('click', closeMenuFunction);
  }
  
  nav.addEventListener('click', () => {
    header.insertAdjacentElement('beforebegin', navMenu);
    document.body.style.overflow = 'hidden';
    main.addEventListener('click', closeMenuFunction);
  });
  
  closeMenu.addEventListener('click', closeMenuFunction);
} else if (this.innerWidth > 900) {
  nav.append(listNavItems);
}