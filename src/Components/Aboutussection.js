
import React from 'react'
import { useTranslation } from "react-i18next";
export default function AboutusSection() {
  const { t } = useTranslation();
  return (
    <section className='container mt-5' id='aboutUs'>
      <div className="row align-items-center">
        <div className="leftImg col-lg-6 col-md-6 col-12">
          <img src="/Images/aboutus-img.webp" alt="aboutus-img" />
        </div>
        <div className="right-aboutus col-lg-6 col-md-6 col-12">
          <h3>{t("about_us")}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe error repellendus odio qui officia, itaque odit fugit voluptatum porro voluptates esse voluptate soluta eius, dolor veritatis, non earum. Distinctio eum et voluptatum eveniet facere, doloribus numquam dolor unde accusantium fugiat quam temporibus sequi, totam ab iure. Voluptatem aliquid sapiente hic quisquam officiis obcaecati eveniet eius debitis modi aperiam esse aut porro error necessitatibus eos totam praesentium, facere deleniti eligendi et dignissimos ab vitae. Tempore?
          </p>
        </div>
      </div>
    </section>
  )
}
