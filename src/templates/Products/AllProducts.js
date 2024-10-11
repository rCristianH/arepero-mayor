import h from 'hyperscript';

const GetStock = () => {
  const dataInLs = localStorage.getItem('data');

  //Verifica si puede obtener los productos sino retorna los productos del localstorage
  try {
    GetProducts;
  } catch (error) {
    if (dataInLs === null) {
      console.log(
        'Error 404',
        error,
        'Verifique su conexión a internet o revise su archivo de productos.'
      );
    }
    return JSON.parse(dataInLs);
  }
  //Una vez verificado que puede obtener los productos los guarda
  localStorage.setItem('data', JSON.stringify(GetProducts.data));
  return GetProducts.data;
};
let productos = GetStock();

export const AllProducts = h('main.sectionAllProducts.disable', [
  h('section.allProducts--section__arepas', [
    h('h2.allProducts__title', 'Arepas'),
    h(
      'section.allProducts--cards-container.allProducts--cards-container__arepas',
      [
        h('article.cardProduct.card__arepas', [
          h('picture.card--picture', h('img', { src: '', alt: '' })),
          h('section.card--section--info', [
            h('div.card--info.card--info--name',[
              h("p.card--info-name--p","Name Producto"),
              h("button.material-icons.card--name--btn.card--info-name--btn","question_mark")
            ]),
            h('div.card--info.card--info--price',[
              h("p.card--info-price--p","price product"),
              h("button.material-icons.card--price--btn.card-info-price--btn","shopping_cart")
            ]),
            h('div.card--info--additional',[
              h("button.card--add--btn.card--info-additional--btn","Adición")
            ])
          ]),
        ]),
      ]
    ),
  ]),
  h('section.allProducts--section__drinks', [
    h('h2.allProducts__title', 'Bebidas'),
    h(
      'section.allProducts--cards-container.allProducts--cards-container__drinks',
      [
        h('article.cardProduct.card__arepas', [
          h('picture.card--picture', h('img', { src: '', alt: '' })),
          h('section.card--section--info', [
            h('div.card--info.card--info--name',[
              h("p.card--info-name--p","Name Producto"),
              h("button.material-icons.card--name--btn.card--info-name--btn","question_mark")
            ]),
            h('div.card--info.card--info--price',[
              h("p.card--info-price--p","price product"),
              h("button.material-icons.card--price--btn.card-info-price--btn","shopping_cart")
            ]),
            h('div.card--info--additional',[
              h("button.card--add--btn.card--info-additional--btn","Adición")
            ])
          ]),
        ]),
      ]
    ),
  ]),
  h('section.allProducts--section__eggs', [
    h('h2.allProducts__title', 'Huevos'),
    h(
      'section.allProducts--cards-container.allProducts--cards-container__eggs',
      [
        h('article.cardProduct.card__arepas', [
          h('picture.card--picture', h('img', { src: '', alt: '' })),
          h('section.card--section--info', [
            h('div.card--info.card--info--name',[
              h("p.card--info-name--p","Name Producto"),
              h("button.material-icons.card--name--btn.card--info-name--btn","question_mark")
            ]),
            h('div.card--info.card--info--price',[
              h("p.card--info-price--p","price product"),
              h("button.material-icons.card--price--btn.card-info-price--btn","shopping_cart")
            ]),
            h('div.card--info--additional',[
              h("button.card--add--btn.card--info-additional--btn","Adición")
            ])
          ]),
        ]),
      ]
    ),
  ]),
]);
const getProducts = (type, container) => {
  const nodes = createProducts(type);
  const cont = document.querySelector(container);
  cont.innerHTML = '';
  cont.append(...nodes);
};
const createProducts = (type, container) => {
  productos = GetStock();
  const nodes = [];
  productos[type].forEach((e) => {
    if (e.input == 'input') {
    }
  });
};
