import { createApp } from 'vue'
import App from './App.vue'
export async function bootstrap() {
    console.log('vite-vue app bootstraped');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render()
} else {
    // __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
function render(props) {
    createApp(App).mount('#viteApp')
}
export async function mount(props) {
    render(props)
}
export async function unmount(props) {

}
export async function update(props) {
    console.log('update props', props);
}