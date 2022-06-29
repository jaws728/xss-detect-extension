import { createApp } from 'vue'
import App from '../view/devtools.vue'
chrome.devtools.panels.create('XSS-det', '', 'devtools.html')
createApp(App).mount('#app')
