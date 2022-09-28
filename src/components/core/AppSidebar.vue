<template>
  <div :class="['layout-sidebar', activeClass]">
    <div class="layout-sidebar--header"></div>
    <p-scroll-panel class="layout-sidebar--content">

    </p-scroll-panel>
    <div class="layout-sidebar--footer"></div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'AppSidebar',
  props: {
    active: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const activeClass = computed(() => props.active ? 'layout-sidebar--active' : '')
    return {
      activeClass
    }
  }
})
</script>
