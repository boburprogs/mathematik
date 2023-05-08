import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./Home"
import Bosh_sahifa from './Bosh-sahifa'
import Masalalar from './About'
import Quiz from './quiz/Quiz'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children: [
      {
        path:"",
        element: <Bosh_sahifa></Bosh_sahifa>,
      },
      {
        path:"about",
        element: <Masalalar></Masalalar>,
      },
      {
        path:"Contact",
        element: <Quiz></Quiz>,
      },
    ]
  }
  
])

function App() {
  return(
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
