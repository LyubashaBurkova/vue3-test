import { defineStore } from 'pinia'

export const useDrinkStore = defineStore({
  id: 'drink',
  state: () => ({
    drinks: [],
    activeDrinkId: '11007',
  }),
  actions: {
      getDrinks(drinks){
        this.drinks = drinks;
      },
      setActiveId(id) {
        this.activeDrinkId = id;
      }
  },
})
