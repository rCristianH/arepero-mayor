const $root = document.querySelector('#app')
import Listeners from './Utils/listener'
import './styles/style.css'
import { About } from './templates/About/About'
import { Footer } from './templates/Footer/Footer'
import { Header } from './templates/Header/Header'
import { Home } from './templates/Home/Home'
import { AllProducts } from './templates/Products/AllProducts'
import { Products } from './templates/Products/Products'


$root.appendChild(Header)
$root.appendChild(Home)
$root.appendChild(Products)
$root.appendChild(About)
$root.appendChild(Footer)
$root.appendChild(AllProducts)

Listeners()

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("../sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}