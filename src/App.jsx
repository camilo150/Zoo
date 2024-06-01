import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Inicio from "./components/layouts/Inicio"
import Portada from "./components/layouts/Portada"
  let router= createBrowserRouter([
{
  path:"/",
  element:<Portada/>,
},
{
  path:"/inicio",
  element:<Inicio></Inicio>,
}
  ])
  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  export default App;