import h from 'hyperscript';

export const Footer = h('footer.contact-sect', [
  h('p.contact-sect--name.subtitle', 'Contacto'),
  h('section.contact-sect--data', [
    h('p.sect--data--tel', 'Tel: 3124560987'),
    h('p.sect--data--email', 'Email: example@example.com'),
  ]),
]);
