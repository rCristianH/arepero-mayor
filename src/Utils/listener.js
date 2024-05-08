const Listeners = () => {
  document.body.addEventListener('click', (event) => {
    event.preventDefault();
    const e = event.target.classList;
    if (e.contains('products--view-more')) {
      console.log('btn view more');
    }
    if (e.contains('navigation--products')) {
      console.log('navigation--products');
    }
    if (e.contains('navigation--sobre')) {
      window.location.href="#sectionAbout"
    }
    if (e.contains('navigation--home')) {
      window.location.href="#sectionHome"
    }
    if(e.contains("scrollBtn")){
      window.location.href="#header"
    }
  });
};

export default Listeners;
