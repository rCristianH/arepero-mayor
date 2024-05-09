import h from "hyperscript";

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

export const AllProducts = h(
  "main.sectionAllProducts.disable"
)
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
