import { BrowserRouter } from 'react-router-dom';
import { ProductCatalogProvider } from '../../Services/Context';
import { AppRoutes } from '../../Services/AppRoutes';
import { Header } from "../../Components/Header"


const App = () => {
  return (
    <ProductCatalogProvider>
      <BrowserRouter basename='/arepero-mayor'>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </ProductCatalogProvider>
  );
};

export { App }