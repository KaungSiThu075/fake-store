import { URL } from "../api/Api";

const fetchProducts = async () => {
  const response: Response = await fetch(`${URL}/products`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("error");
  }

  return result as [];
};
export default fetchProducts;
