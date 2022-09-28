import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './locale/i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'chart.js'

import PrimeVue from 'primevue/config'
import Accordion from 'primevue/accordion'
import AutoComplete from 'primevue/autocomplete'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'
import Badge from 'primevue/badge'
import BlockUi from 'primevue/blockui'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import Checkbox from 'primevue/checkbox'
import Chip from 'primevue/chip'
import Chips from 'primevue/chips'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmPopup from 'primevue/confirmpopup'
import ConfirmationService from 'primevue/confirmationservice'
import ContextMenu from 'primevue/contextmenu'
import DataTable from 'primevue/datatable'
import DataView from 'primevue/dataview'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Dropdown from 'primevue/dropdown'
import DynamicDialog from 'primevue/dynamicdialog'
import DialogService from 'primevue/dialogservice'
import Editor from 'primevue/editor'
import FileUpload from 'primevue/fileupload'
import Image from 'primevue/image'
import Inplace from 'primevue/inplace'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import Message from 'primevue/message'
import MultiSelect from 'primevue/multiselect'
import OrganizationChart from 'primevue/organizationchart'
import OverlayPanel from 'primevue/overlaypanel'
import Paginator from 'primevue/paginator'
import Panel from 'primevue/panel'
import Password from 'primevue/password'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import RadioButton from 'primevue/radiobutton'
import Rating from 'primevue/rating'
import Row from 'primevue/row'
import ScrollPanel from 'primevue/scrollpanel'
import Sidebar from 'primevue/sidebar'
import Skeleton from 'primevue/skeleton'
import StyleClass from 'primevue/styleclass'
import TabView from 'primevue/tabview'
import Tag from 'primevue/tag'
import TextArea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Toolbar from 'primevue/toolbar'
import Tooltip from 'primevue/tooltip'
import VirtualScroller from 'primevue/virtualscroller'

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
app.use(ConfirmationService)
app.use(DialogService)
app.use(ToastService)

app.component('PAccordion', Accordion)
app.component('PAutoComplete', AutoComplete)
app.component('PAvatar', Avatar)
app.component('PAvatarGroup', AvatarGroup)
app.component('PBadge', Badge)
app.component('PBlockUi', BlockUi)
app.component('PButton', Button)
app.component('PCalendar', Calendar)
app.component('PCard', Card)
app.component('PChart', Chart)
app.component('PCheckBox', Checkbox)
app.component('PChip', Chip)
app.component('PChips', Chips)
app.component('PColumn', Column)
app.component('PColumnGroup', ColumnGroup)
app.component('PConfirmDialog', ConfirmDialog)
app.component('PConfirmPopup', ConfirmPopup)
app.component('PContextMenu', ContextMenu)
app.component('PDataTable', DataTable)
app.component('PDataView', DataView)
app.component('PDialog', Dialog)
app.component('PDivider', Divider)
app.component('PDropDown', Dropdown)
app.component('PDynamicDialog', DynamicDialog)
app.component('PEditor', Editor)
app.component('PFileUpload', FileUpload)
app.component('PImage', Image)
app.component('PInplace', Inplace)
app.component('PInputMask', InputMask)
app.component('PInputNumber', InputNumber)
app.component('PInputSwitch', InputSwitch)
app.component('PInputText', InputText)
app.component('PListbox', Listbox)
app.component('PMenu', Menu)
app.component('PMessage', Message)
app.component('PMultiSelect', MultiSelect)
app.component('POrganizationChart', OrganizationChart)
app.component('POverlayPanel', OverlayPanel)
app.component('PPaginator', Paginator)
app.component('PPanel', Panel)
app.component('PPassword', Password)
app.component('PProgressBar', ProgressBar)
app.component('PProgressSpinner', ProgressSpinner)
app.component('PRadioButton', RadioButton)
app.component('PRating', Rating)
app.component('PRow', Row)
app.component('PScrollPanel', ScrollPanel)
app.component('PSidebar', Sidebar)
app.component('PSkeleton', Skeleton)
app.component('PTabView', TabView)
app.component('PTag', Tag)
app.component('PTextArea', TextArea)
app.component('PToast', Toast)
app.component('PToolbar', Toolbar)
app.component('PTooltip', Tooltip)
app.component('PVirtualScroller', VirtualScroller)

app.directive('styleclass', StyleClass)

app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
