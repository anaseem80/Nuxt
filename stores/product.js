import { defineStore } from 'pinia'
import { BASE_URL } from './base/api';
import { mande } from 'mande'

export const useProductStore = defineStore({
  id: 'ProductStore',
  state: () => ({ 
    product:null,
    loading: false,
    error:null,
  }),
  actions: {
    async GET_PRODUCT_DATA(id){
      try {
        this.loading = false;
        this.product = await mande(`${BASE_URL}/products/${id}`).get();
      } catch (error) {
        if (error) {
          this.error = error;
        }
      } finally {
        this.loading = true;
      }
    }
  },
})
