import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
import "./index.css"
import "./assets/css/style.css"
import "tw-elements"

const app = createApp(App)
app.use(router)
app.mount("#app")
