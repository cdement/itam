import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './locale/i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import DynamicDialog from 'primevue/dynamicdialog'
import DialogService from 'primevue/dialogservice'
import InputSwitch from 'primevue/inputswitch'
import Sidebar from 'primevue/sidebar'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

// import EventBus from '@/AppEventBus'

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(i18n)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true,
  inputStyle: 'filled',
  zIndex: {
    modal: 3100,
    overlay: 3000,
    menu: 3000,
    tooltip: 3100
  }
})
app.use(DialogService)
app.use(ToastService)

app.component('PButton', Button)
app.component('PDialog', Dialog)
app.component('PDynamicDialog', DynamicDialog)
app.component('PSwitch', InputSwitch)
app.component('PSidebar', Sidebar)
app.component('PToast', Toast)

app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
