<template>
  <div class="layout-wrapper" :class="containerClass">
    <app-nav-bar />
    <app-sidebar />
    <div class="layout-content">
      <router-view />
    </div>
    <p-toast />
    <p-toast position="top-left" group="tl" />
    <p-toast position="bottom-left" group="bl" />
    <p-toast position="bottom-right" group="br" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useAppStore } from '@/store'
import AppNavBar from '@/components/core/AppNavBar.vue'
import AppSidebar from '@/components/core/AppSidebar.vue'

export default defineComponent({
  name: 'DashboardLayout',
  components: {
    AppNavBar,
    AppSidebar
  },
  setup () {
    const hasClass = (element, className) => {
      if (element.classList) {
        return element.classList.contains(className)
      } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className)
      }
    }
    const addClass = (element, className) => {
      if (!hasClass(element, className)) {
        if (element.classList) {
          element.classList.add(className)
        } else {
          element.className += ' ' + className
        }
      }
    }
    const removeClass = (element, className) => {
      if (element.classLsit) {
        element.classList.remove(className)
      } else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
      }
    }

    const isOutdatedIE = () => {
      const ua = window.navigator.userAgent

      if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0) {
        return true
      }
      return false
    }

    return {
      addClass,
      removeClass,
      hasClass,
      isOutdatedIE
    }
  },
  mounted () {
    if (this.isOutdatedIE()) {
      this.$toast.add({
        severity: 'warn',
        summary: 'Limited Functionality',
        detail: 'Although ITAM supports IE11, ThemeSwitcher in this application cannot be not fully supported by your browser. Please use a modern browser for the best experience of the showcase.'
      })
    }
  },
  computed: {
    containerClass () {
      const appState = useAppStore()
      return [{
        'p-input-filled': this.$primevue.config.inputStyle === 'filled',
        'p-ripple-disabled': this.$primevue.config.ripple === false,
        'layout-wrapper--dark': appState.darkTheme,
        'layout-wrapper--light': !appState.darkTheme
      }]
    }
  }
})
</script>
