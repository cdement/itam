import { defineStore } from 'pinia'

export const useAppStore = defineStore('appState', {
  state: () => ({
    theme: 'saga-blue',
    darkTheme: false
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