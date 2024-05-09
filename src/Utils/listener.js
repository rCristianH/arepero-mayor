import { toggleItems } from './navigation';

const Listeners = () => {
  document.body.addEventListener('click', (event) => {
    event.preventDefault();
    const e = event.target.classList;
    if (e.contains('products--view-more')) {
      toggleItems([
        '.home',
        '.products',
        '.about',
        '.contact-sect',
        '.returnBtn',
        '.sectionAllProducts'
      ]);
    }
    if (e.contains('navigation--products')) {
      toggleItems([
        '.home',
        '.products',
        '.about',
        '.contact-sect',
        '.returnBtn',
        '.sectionAllProducts'
      ]);
    }
    if (e.contains('navigation--sobre')) {
      window.location.href = '#sectionAbout';
    }
    if (e.contains('navigation--home')) {
      window.location.href = '#sectionHome';
    }
    if (e.contains('scrollBtn')) {
      window.location.href = '#header';
    }
    if (e.contains('header--logo-container') || e.contains('returnBtn')) {

      
      toggleItems([
        '.home',
        '.products',
        '.about',
        '.contact-sect',
        '.returnBtn',
        '.sectionAllProducts'
      ]);
    }
  });
};

export default Listeners;
