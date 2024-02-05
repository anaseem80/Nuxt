import { defineStore } from 'pinia'
import { mande } from 'mande'
import { BASE_URL } from './base/api';
export const useProductsStore = defineStore({
  id: 'ProductsStore',
  state: () => ({
    products: null,
  }),
  actions: {
    async GET_PRODUCTS_DATA(){
      try{
        this.products = await mande(`${BASE_URL}/products`).get();
        console.log("Fetech")
      } catch(error){
        console.log(error)
        return error
      }
    }
  },
  // getters: {
  //   getSubCategories: (state) => state.products
  // }
})
