<template>
  <div class="grid">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EventBus from '@/AppEventBus'

export default defineComponent({
  name: 'DashboardPage',
  setup () {
    const darkMode = ref(false)
    return {
      darkMode,
      changeTheme: (event) => {
        const theme = darkMode.value ? { theme: 'arya-blue', dark: true } : { theme: 'saga-blue', dark: false }
        EventBus.emit('theme-change', theme)
        event.preventDefault()
      }
    }
  }
})
</script>
