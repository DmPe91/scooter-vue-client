import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    message: '',
    timer: null,
  }),

  actions: {
    show(msg) {
      this.message = msg
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.message = ''
      }, 3000)
    },
  },
})