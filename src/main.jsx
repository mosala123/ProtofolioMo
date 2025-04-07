import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter basename="/protofolioME">
      <Routes>

        <App />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
