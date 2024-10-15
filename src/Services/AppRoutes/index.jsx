import { useRoutes } from "react-router-dom"
import {Home} from "../../Pages/Home"

const AppRoutes = () => {
  const routes = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/landingProducts", element: {/* <LandingProducts/> */}},
    {path: "/about", element: {/* <About/> */}},

  ])
  return routes
}
export {AppRoutes}