import h from 'hyperscript';

export const Home = h('div.home#sectionHome', [
  h('picture.home--picture-cont', [
    h('img.home--picture-cont--img', { src: 'h', alt: '' }),
  ]),
  h('div.home--message', [h('p.home--message--text', 'hola')]),
]);
