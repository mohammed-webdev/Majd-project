import React from 'react'
import { useTranslation } from "react-i18next";
export default function () {
    const { t } = useTranslation();
    return (
        <div className="allHeight">

            {/* <h1>{t("welcome_message")}</h1>
            CONTACT */}
            <div className="container releativ">
                <video autoPlay loop src="/Videos/Fuego_de_Refineria.mp4"></video>
                <div className="row">
                    <div className="left-img col-lg-6 col-md-6 col-12 text-center">
                        <img src="" alt="" />
                        this is left
                    </div>
                    <div className="right-form col-lg-6 col-md-6 col-12 text-center">
                        this is right
                    </div>
                </div>
            </div>
        </div>
    )
}
