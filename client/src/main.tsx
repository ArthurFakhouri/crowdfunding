import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Sepolia } from '@thirdweb-dev/chains'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { App } from './app'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <ThirdwebProvider activeChain={Sepolia}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)