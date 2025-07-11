import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login/Login.jsx'

import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Cadastro from './components/cadastro/Cadastro.jsx'
import Logado from './components/logado/Logado.jsx'
import AdotePet from './components/adote/AdotePet.jsx'
import CaminhoPet from './components/cardsLogado/CaminhoPet.jsx'
import CadastroAnimais from './components/screens/CadastroAnimais.jsx'
import TodosPets from './components/cardsLogado/TodosPets.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/logadoUser",
    element: <Logado />
  },
  {
    path: "/todosPets",
    element: <TodosPets />
  },
  {
    path: "/adote",
    element: <AdotePet />
  },
  {
    path: "/caminhoPet",
    element: <CaminhoPet />
  },
  {
    path: "/cadastrarPets",
    element: <CadastroAnimais />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
