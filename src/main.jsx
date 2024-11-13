import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider   store={ store } > 
        <BrowserRouter   future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
        }}>        
          <App />
        </BrowserRouter>    
      </Provider>    
    </StrictMode>,
)
