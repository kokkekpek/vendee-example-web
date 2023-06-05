import ReactDOM from 'react-dom/client'
import 'modern-normalize/modern-normalize.css'
import { App } from './components/App'
import './assets/index.sass'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)
root.render(
    <App />
)
