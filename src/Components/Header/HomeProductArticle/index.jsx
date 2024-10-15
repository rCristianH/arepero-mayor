const HomeProductArticle = () => {
  return (
    <div className="rounded-lg border border-black h-40 aspect-[2/3] flex flex-col items-center justify-evenly bg-white">
      <picture className="flex h-24 w-24 aspect-square"> <img className="max-h-full max-w-f object-cover mx-auto rounded-lg" src="https://cdn2.thecatapi.com/images/AkdUb5Ddk.jpg" alt=""/></picture>
      <p className="text-sm w-full text-center font-bold">Nombre</p>
      <p className="text-sm w-full text-center">$ Price</p>
    </div>
  )
}
export { HomeProductArticle }