import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services";

const useFetchCategories = () =>
  useQuery({ queryKey: ["categories"], queryFn: fetchCategories });

export default useFetchCategories;
