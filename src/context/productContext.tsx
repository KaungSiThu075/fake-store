import React, { useState } from "react";
import { ReactNode } from "react";
import { useFetchProducts } from "../hooks";
import ProductType from "../Type";

type ProductContextType = any;

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = React.createContext<
  ProductContextType | undefined
>(undefined);

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const { data: products, isLoading, isError } = useFetchProducts();

  const [filterWord, setFilterWord] = useState("");

  const [cart, setCart] = useState<ProductType[]>([]);

  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const filteredProducts = products?.filter((product: ProductType) =>
    product.title.toUpperCase().includes(filterWord.toUpperCase())
  );

  const addCart = (Product: ProductType) => {
    const existProduct = cart.find((product) => product.id === Product.id);
    if (existProduct) {
      setCart(
        cart.map((product) => {
          if (product.id === Product.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        })
      );
    } else {
      setCart([...cart, { ...Product, quantity: 1 }]);
    }
  };

  const subCart = (Product: ProductType) => {
    const existProduct = cart.find(
      (product: ProductType) => product.id === Product.id
    );
    if (existProduct) {
      setCart(
        cart
          .map((product: ProductType) => {
            if (product.id === Product.id) {
              return { ...product, quantity: product.quantity - 1 };
            }
            return product;
          })
          .filter((product: ProductType) => product.quantity !== 0)
      );
    }
  };

  const filterSidebar = (Product: ProductType) => {
    setCart(cart?.filter((product: ProductType) => product.id !== Product.id));
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        filterWord,
        setFilterWord,
        filteredProducts,
        cart,
        setCart,
        addCart,
        subCart,
        isShowSidebar,
        setIsShowSidebar,
        filterSidebar,
        isLoading,
        isError,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
