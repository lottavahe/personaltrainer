import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import CustomersPage from './pages/CustomersPage.tsx'
import TrainingsPage from './pages/TrainingsPage.tsx'

//tämä kertoo reactroutterille millä url osoitteella 
//pitää näyttää mitäkin sivua, hoitaa sivujen vaihtamisen
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'customers',
        element: <CustomersPage />,
      },
      {
        path: 'trainings',
        element: <TrainingsPage />,
      },
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

