import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function HeroSection() {
  const { t } = useTranslation()
  const [isShowArrow, setIsShowArrow] = useState(false)
  const arrowUp = document.getElementById("arrowUp");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 170) {
      setIsShowArrow(true)
    } else {
      setIsShowArrow(false)
    }
  })

  return (


    <div className='hero-section' id='top-home-page'>


      <video className='video-home-page' muted loop autoPlay src="https://amsterdamsfilmbedrijf.nl/wp-content/uploads/2019/04/Showreel-Het-Amsterdams-Filmbedrijf-1.webm"></video>

      <p className='find-out'>{t("find_out")} <i className="bi bi-caret-right-square"></i></p>
      <div className="arrow"><a href="#aboutUs">
        <lord-icon src="https://cdn.lordicon.com/xhdhjyqy.json" trigger="hover" colors="primary:#e4e4e4"
          style={{ "width": "50px", "height": "50px" }}>
        </lord-icon>
      </a></div>


      <div className={`arrowUp ${!isShowArrow ? "d-none" : "d-block"}`} id="arrowUp"><a href="#top-home-page">
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/eflfmgmj.json"
          trigger="hover"
          colors="primary:#e4e4e4"
          style={{ "width": "50px", "height": "50px" }}>
        </lord-icon>
      </a></div>
    </div>







  )
}
