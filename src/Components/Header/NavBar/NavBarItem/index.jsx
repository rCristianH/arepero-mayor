import { NavLink } from "react-router-dom"

const NavBarItem = ({ to, children, activeStyle }) => {
  return (
    <NavLink to={to} className={((isActive) => isActive ? activeStyle : undefined)}>
      {children}
    </NavLink>
  )
}
export {NavBarItem}