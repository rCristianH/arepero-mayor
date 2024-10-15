import { NavLink } from "react-router-dom"
import { HomeProductArticle } from "../../Components/Header/HomeProductArticle"

const Home = () => {
  return (<>
    <section className="flex mt-2 lg:max-w-[68%]">
      <picture className="w-1/2"><img
        className="rounded-xl" src="https://coffeeshopstartups.com/wp-content/uploads/2023/11/how-to-start-a-coffee-shop-barista-1-1024x1023.png" alt="" /></picture>
      <div className="w-1/2 p-2 text-center flex items-center">
        <p className="text-sm md:text-xl lg:text-2xl font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nulla impedit.</p>
      </div>
    </section>


    <section className="m-2 lg:max-w-[70%]">
      <div className="flex items-center justify-between px-2 z-10 relative" >
        <p className="border-2 border-[#d03241] text-sm md:text-lg lg:text-2xl font-bold h-6 md:h-8 lg:h-9  rounded-lg px-2 -mb-4 bg-white">Productos</p>
        {<NavLink to='/landingProducts' className="border text-white bg-[#d03241] rounded-full p-2 text-sm md:text-lg lg:text-2xl font-bold -mb-4 md:-mb-5 lg:-mb-5">
          Ver todo
        </NavLink>}
      </div>
      <div className="w-full py-6 px-3 border rounded-lg border-[#d03241] flex gap-2.5 overflow-x-scroll items-center scrollbar-homeProducts">
        <HomeProductArticle />
        <HomeProductArticle />
        <HomeProductArticle />
        <HomeProductArticle />
      </div>
    </section>

    <section className="mt-2 lg:absolute lg:border-2 lg:border-red-300 lg:p-4 lg:rounded-lg lg:top-14 lg:right-0 lg:max-w-[28%]">
      <div className="flex items-center justify-between px-2 z-10 relative" >
        <p className="border-2 border-[#d03241] text-sm md:text-lg font-bold  rounded-lg px-2 bg-white">Sobre nosotros</p>
      </div>
      <div className="w-full flex lg:flex-col">
        <div className="w-1/2 lg:w-full aspect-square lg:aspect-auto p-6 flex flex-col justify-center lg:justify-start gap-4">
          <div className="hidden md:block text-lg font-bold">
            Horarios
            <p className="font-normal text-sm md:text-lg">
              Viernes - 6 a 11 AM<br />
              Sabado - 6 a 11 AM<br />
              Domingo - 6 a 11 AM<br />
              Lunes - 6 a 11 AM<br />
              Martes - 6 a 11 AM<br />
            </p>
          </div>
          <p className="font-semibold text-sm md:text-lg">
            Cl. 5a, Plaza de Mercado - Guacarí
          </p>
          <a href="https://maps.app.goo.gl/RaPNiQ7tsckvvWsW9">
            <p className="font-semibold text-sm md:text-lg text-blue-800">
              Google Maps
            </p>
          </a>

        </div>
        <picture className="w-1/2 lg:w-full aspect-square">
          <iframe
            title="Goole Maps Ubication"
            className='w-full h-full border rounded-xl'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.82562401837856!2d-76.3323877191267!3d3.7644262448710095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39fbe94824d2db%3A0x9147d9f8ab6c2a65!2sEl%20Arepero%20Mayor!5e0!3m2!1ses!2sco!4v1729015560005!5m2!1ses!2sco"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </picture>

      </div>
      <div className="hidden lg:block">

        <div className="mt-4 items-center justify-between px-2 z-10 relative" >
          <p className="border-2 border-[#d03241] text-sm md:text-lg font-bold rounded-lg px-2 bg-white w-fit">Contacto</p>
        </div>
        <div className="w-full px-5 pt-2 flex flex-col gap-1 ">

          <p className="font-medium text-sm md:text-lg">Tel: 3216540987</p>
          <p className="font-medium text-sm md:text-lg">Email: example@example.com</p>

        </div>
      </div>
    </section>

    <section className="my-2 lg:hidden">
      <div className="flex items-center justify-between px-2 z-10 relative" >
        <p className="border-2 border-[#d03241] text-sm md:text-lg font-bold rounded-lg px-2 bg-white">Contacto</p>
      </div>
      <div className="w-full px-5 pt-2 flex flex-col gap-1 ">

        <p className="font-medium text-sm md:text-lg">Tel: 3216540987</p>
        <p className="font-medium text-sm md:text-lg">Email: example@example.com</p>

      </div>
    </section>

  </>
  )
}
export { Home }