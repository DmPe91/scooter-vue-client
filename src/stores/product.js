import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    types: [],
    conditions: [],
    selectedType: '',
    selectedCondition: '',
    loading: false,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        let url = `${API_URL}/products`
        const params = new URLSearchParams()

        if (this.selectedType) {
          params.append('type_id', this.selectedType)
        }
        if (this.selectedCondition) {
          params.append('condition_id', this.selectedCondition)
        }

        if (params.toString()) {
          url += `?${params.toString()}`
        }

        const response = await axios.get(url)
        this.products = response.data
      } catch (error) {
        console.error('Ошибка загрузки товаров:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchTypes() {
      try {
        const response = await axios.get(`${API_URL}/types`)
        this.types = response.data
      } catch (error) {
        console.error('Ошибка загрузки типов:', error)
      }
    },

    async fetchConditions() {
      try {
        const response = await axios.get(`${API_URL}/conditions`)
        this.conditions = response.data
      } catch (error) {
        console.error('Ошибка загрузки состояний:', error)
      }
    },
  },
})