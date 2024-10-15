import { NavLink } from "react-router-dom"
import { HomeProductArticle } from "../../Components/Header/HomeProductArticle"

const Home = () => {
  return (<>
    <section className="flex mt-2">
      <picture className="w-1/2"><img
        className="rounded-xl" src="https://coffeeshopstartups.com/wp-content/uploads/2023/11/how-to-start-a-coffee-shop-barista-1-1024x1023.png" alt="" /></picture>
      <div className="w-1/2 p-2 text-center flex items-center">
        <p className="text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nulla impedit.</p>
      </div>
    </section>

    <section className="mt-2">
      <div className="flex items-center justify-between px-2 z-10 relative" >
        <p className="border-2 border-[#d03241] text-sm font-bold h-6 rounded-lg px-2 -mb-4 bg-white">Productos</p>
        {<NavLink to='/landingProducts' className="border text-white bg-[#d03241] rounded-full p-1 text-sm font-bold h-7 -mb-3">
          Ver todo
        </NavLink>}
      </div>
      <div className="w-full py-4 border rounded-lg border-[#d03241]   flex gap-2.5 overflow-x-scroll items-center scrollbar-homeProducts">
        <HomeProductArticle />
        <HomeProductArticle />
        <HomeProductArticle />
        <HomeProductArticle />
      </div>
    </section>

    <section className="mt-2">
      <div className="flex items-center justify-between px-2 z-10 relative" >
        <p className="border-2 border-[#d03241] text-sm font-bold h-6 rounded-lg px-2 bg-white">Sobre nosotros</p>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 aspect-square p-2 flex flex-col justify-center gap-4">
          <p className="font-semibold text-sm">Guacari - Valle</p><a href="https://maps.app.goo.gl/RaPNiQ7tsckvvWsW9"><p className="font-semibold text-sm">Google Maps</p></a>

        </div>
        <picture className="w-1/2 aspect-square">
          <iframe className='w-full h-full border rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.82562401837856!2d-76.3323877191267!3d3.7644262448710095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39fbe94824d2db%3A0x9147d9f8ab6c2a65!2sEl%20Arepero%20Mayor!5e0!3m2!1ses!2sco!4v1729015560005!5m2!1ses!2sco" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </picture>

      </div>
    </section>

    <footer className="my-2">
      <div className="flex items-center justify-between px-2 z-10 relative" >
        <p className="border-2 border-[#d03241] text-sm font-bold h-6 rounded-lg px-2 bg-white">Contacto</p>
      </div>
      <div className="w-full px-5 pt-2 flex flex-col gap-1 ">

        <p className="font-medium text-sm">Tel: 3216540987</p>
        <p className="font-medium text-sm">Email: example@example.com</p>

      </div>
    </footer>

  </>
  )
}
export { Home }