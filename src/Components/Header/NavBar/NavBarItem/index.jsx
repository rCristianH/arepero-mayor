import { NavLink } from "react-router-dom"

const NavBarItem = ({ to, children, activeStyle }) => {
  return (
    <NavLink to={to} aria-label="add title" className={((isActive) => isActive ? activeStyle : undefined)}>
      {children}
    </NavLink>
  )
}
export {NavBarItem}