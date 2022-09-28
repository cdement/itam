<template>
  <div class="layout-navbar layout-navbar--sticky">
    <div class="flex-auto flex grid">
      <div class="col"></div>
      <div class="col-4 justify-content-end flex align-items-center">
        <!-- <p-button label="Check Out/In" class="nav-button"></p-button>
        <p-button label="New Issue" class="nav-button"></p-button> -->
        <p-button :icon="themeIcon" class="p-button-rounded outline-none theme-button" :class="themeClass" @click="changeTheme"></p-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import { mapState } from 'pinia'
import { useAppStore } from '@/store'
import EventBus from '@/AppEventBus'

const $appState = useAppStore()

export default defineComponent({
  name: 'AppNavBar',
  setup () {
    const changeTheme = (event) => {
      const current = $appState.theme

      if (current === 'lara-light-blue') {
        EventBus.emit('theme-change', { theme: 'lara-dark-blue', dark: true })
      } else {
        EventBus.emit('theme-change', { theme: 'lara-light-blue', dark: false })
      }
    }

    return {
      changeTheme
    }
  },
  computed: {
    themeIcon () {
      return $appState.darkTheme ? 'pi pi-sun' : 'pi pi-moon'
    },
    themeClass () {
      return $appState.darkTheme ? 'text-gray-900 bg-white' : 'text-white bg-gray-900 border-800'
    }
  }
})
</script>
