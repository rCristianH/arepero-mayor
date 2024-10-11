import h from 'hyperscript';

export const Header = h('header.header#header', [
  h('div.header--logo-container'),
  h('nav.header--navigation', [
    h('ul.navigation--list', [
      h('li.navigation--list--item.navigation--home', 'Home'),
      h('li.navigation--list--item.navigation--products', 'Productos'),
      h('li.navigation--list--item.navigation--sobre', 'Sobre'),
    ]),
  ]),
  h('button.material-icons.scrollBtn#scrollBtn', 'arrow_back_ios_new'),
  h('button.material-icons.returnBtn#returnBtn.disable', 'arrow_back_ios_new'),
]);