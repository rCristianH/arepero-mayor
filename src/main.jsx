import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './Pages/App';
import '../src/styles/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
);
/* const $root = document.querySelector('#app')
import Listeners from './Utils/listener'
import { toggleItems } from './Utils/navigation'
import './styles/style.css'
import { About } from './templates/About/About'
import { Footer } from './templates/Footer/Footer'
import { Header } from './templates/Header/Header'
import { Home } from './templates/Home/Home'
import { ModalAdd } from './templates/Modal/Modal'
import { AllProducts } from './templates/Products/AllProducts'
import { Products } from './templates/Products/Products'


$root.appendChild(Header)
$root.appendChild(Home)
$root.appendChild(Products)
$root.appendChild(About)
$root.appendChild(Footer)
$root.appendChild(AllProducts)
$root.appendChild(ModalAdd)

toggleItems([
  '.home',
  '.products',
  '.about',
  '.contact-sect',
  '.returnBtn',

])

Listeners()

 */