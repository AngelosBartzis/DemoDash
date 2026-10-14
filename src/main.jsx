import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {ThemeModeProvider} from './theme/ThemeModeProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeModeProvider>
            <App/>
        </ThemeModeProvider>
    </StrictMode>,
)
