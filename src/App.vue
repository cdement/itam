<template>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'
import { useAppStore } from './store'
import EventBus from '@/AppEventBus'

export default defineComponent({
  name: 'App',
  setup () {
    const $appState = useAppStore()
    const themeChangeListener = (event) => {
      const elementId = 'theme-link'
      const linkElement = document.getElementById(elementId)
      const cloneLinkElement = linkElement.cloneNode(true)
      const newThemeUrl = linkElement.getAttribute('href').replace($appState.theme, event.theme)

      cloneLinkElement.setAttribute('id', elementId + '-clone')
      cloneLinkElement.setAttribute('href', newThemeUrl)
      cloneLinkElement.addEventListener('load', () => {
        linkElement.remove()
        cloneLinkElement.setAttribute('id', elementId)
      })
      linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling)

      $appState.$patch({ theme: event.theme, darkTheme: event.dark })
    }

    return {
      themeChangeListener
    }
  },
  mounted () {
    EventBus.on('theme-change', this.themeChangeListener)
  },
  beforeUnmount () {
    EventBus.off('theme-change', this.themeChangeListener)
  }
})
</script>

<style lang="scss">
@import './assets/style/app/app.scss';
</style>
