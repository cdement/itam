import { defineStore } from 'pinia'

export const useAppStore = defineStore('appState', {
  state: () => ({
    theme: 'lara-dark-blue',
    darkTheme: true
  }),
  getters: {
    darkMode: (state) => state.darkTheme
  },
  actions: {
    changeTheme (style) {
      this.theme = style.theme
      this.darkTheme = style.dark
    }
  }
})
