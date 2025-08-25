import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home"
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])
function App(){
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;