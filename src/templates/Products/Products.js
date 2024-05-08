import h from 'hyperscript';

export const Products = h('section.products', [
  h('article.products--name.subtitle', 'Products'),
  h('article.products--container-cards', [
    h('article.product-card', [
      h('img.product-card--img'),
      h('p.product-card--description', 'Description'),
      h('p.product-card--price', 'Price'),
    ]),
    h('article.product-card', [
      h('img.product-card--img'),
      h('p.product-card--description', 'Description'),
      h('p.product-card--price', 'Price'),
    ]),
    h('article.product-card', [
      h('img.product-card--img'),
      h('p.product-card--description', 'Description'),
      h('p.product-card--price', 'Price'),
    ]),
    h('article.product-card', [
      h('img.product-card--img'),
      h('p.product-card--description', 'Description'),
      h('p.product-card--price', 'Price'),
    ]),
    h('article.product-card', [
      h('img.product-card--img'),
      h('p.product-card--description', 'Description'),
      h('p.product-card--price', 'Price'),
    ]),
    h('article.product-card', [
      h('img.product-card--img'),
      h('p.product-card--description', 'Description'),
      h('p.product-card--price', 'Price'),
    ]),
  ]),
  h("button.products--view-more","Ver todo")
]);
