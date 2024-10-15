import { ServiceWorker } from "../../Services/ServiceWorker"
import { MdOutlineSettings } from "react-icons/md";
import { NavBar } from "./NavBar";

const Header = () => {
  ServiceWorker()
  return (
    <header className="flex w-full justify-center items-center h-14 relative">
      <picture className="h-8 w-8 absolute left-2 rounded-lg">
        <img src="https://i.imgur.com/doOlD07.png" alt="" />
      </picture>
      <NavBar/>
      <MdOutlineSettings className="absolute right-2 text-lg" />

    </header>
  )
}
export { Header }