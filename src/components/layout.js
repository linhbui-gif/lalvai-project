import React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"
import './styles/setting.scss'
import './styles/grid.scss'
import './styles/slick-slider.scss'
export default function Layout({ children }) {
  return (
    <div>
      <a className="dflex onTop" href="#onTop"><i class="fas fa-angle-up" aria-hidden="true"></i></a>
      <div class="loader dflex"><span></span></div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}