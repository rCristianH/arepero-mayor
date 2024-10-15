import { MdHomeFilled, MdShoppingBag, MdStorefront } from "react-icons/md"
import { NavBarItem } from "./NavBarItem"

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4 decoration-green-700';
  return (
    <nav>
      <ul className="list-none flex gap-5 text-2xl items-center">
        <li>
          <NavBarItem
            activeStyle={activeStyle} to="/">
            <MdHomeFilled />
          </NavBarItem>
        </li>
        <li>
          <NavBarItem
            activeStyle={activeStyle} to="/landingProducts">
            <MdShoppingBag className="text-3xl"/>
          </NavBarItem>
        </li>
        <li>
          <NavBarItem
            activeStyle={activeStyle} to="/about">
            <MdStorefront />
          </NavBarItem>
        </li>
      </ul>
    </nav>
  )
}
export { NavBar }