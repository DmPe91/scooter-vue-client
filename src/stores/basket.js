import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const useBasketStore = defineStore('basket', {
  state: () => ({
    basket: null,
  }),

  actions: {
    async fetchBasket() {
      try {
        const response = await axios.get(`${API_URL}/basket`)
        this.basket = response.data
      } catch (error) {
        console.error('Ошибка загрузки корзины:', error)
      }
    },

    async addToBasket(productId, quantity = 1) {
      try {
        await axios.post(`${API_URL}/basket`, {
          product_id: productId,
          quantity,
        })
        await this.fetchBasket()
      } catch (error) {
        console.error('Ошибка добавления в корзину:', error)
        throw error
      }
    },

    async removeFromBasket(productId) {
      try {
        await axios.delete(`${API_URL}/basket/${productId}`)
        await this.fetchBasket()
      } catch (error) {
        console.error('Ошибка удаления из корзины:', error)
        throw error
      }
    },
  },
})