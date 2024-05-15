import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services";

const useFetchProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts });

export default useFetchProducts;
