import axios from "axios";

export const getAllProduct = async () => {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");
   
  } catch (error) {
    throw error;
  }
};
