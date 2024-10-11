import h from 'hyperscript';

export const ModalAdd = h('aside.modalAdd', [
  h('div.modalAdd--msg-box', [
    h(
      'p.modalAdd--msg-box--p',
      'Disfruta de una arepa delgada asada al carbón, con la textura perfecta para un crujido irresistible en cada mordida. Agrega queso y huevos para un sabor clásico que nunca falla.'
    ),
    h('button.modalAdd--close.material-icons', 'close'),
  ]),
  h('section.modalAdd--content', [
    h('article.modalAdd--content--article', [
      h('div.modalAdd--article--info', [
        h('p.modalAdd--article--p', 'Queso Locha'),
        h('p.modalAdd--article--price', '$2600'),
      ]),
      h('button.material-icons.modalAdd--article--btn', 'add'),
    ]),
    h('article.modalAdd--content--article', [
      h('div.modalAdd--article--info', [
        h('p.modalAdd--article--p', 'Queso campesino'),
        h('p.modalAdd--article--price', '$2600'),
      ]),
      h('button.material-icons.modalAdd--article--btn', 'add'),
    ]),
    h('article.modalAdd--content--article', [
      h('div.modalAdd--article--info', [
        h('p.modalAdd--article--p', 'Huevos Revueltos'),
        h('p.modalAdd--article--price', '$2600'),
      ]),
      h('button.material-icons.modalAdd--article--btn', 'add'),
    ]),
    h('article.modalAdd--content--article', [
      h('div.modalAdd--article--info', [
        h('p.modalAdd--article--p', 'Huevos Revueltos'),
        h('p.modalAdd--article--price', '$2600'),
      ]),
      h('button.material-icons.modalAdd--article--btn', 'add'),
    ]),
    h('article.modalAdd--content--article', [
      h('div.modalAdd--article--info', [
        h('p.modalAdd--article--p', 'Huevos Revueltos'),
        h('p.modalAdd--article--price', '$2600'),
      ]),
      h('button.material-icons.modalAdd--article--btn', 'add'),
    ]),
  ]),
]);
