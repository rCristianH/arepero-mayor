import { createContext, useState } from "react";

const ProductCatalogContext = createContext()

const ProductCatalogProvider = ({ children }) => {
  const [state, setstate] = useState(null);
  return (
    <ProductCatalogContext.Provider
      value={{setstate}}      
    >
      {children}
    </ProductCatalogContext.Provider>
  )
}

export { ProductCatalogContext, ProductCatalogProvider }
