import { URL } from "../api/Api";

const fetchCategories = async () => {
  const response: Response = await fetch(`${URL}/products/categories`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("error");
  }

  return result as [];
};
export default fetchCategories;
