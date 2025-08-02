import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <h1>Merhaba React</h1> */} 
    {/* Ctrl + Ö Tuşu ile seçili alanı yorum satırı yapalım. */}
  </StrictMode>,
)
