import React from 'react'
import Title from './Title'

export default function OurAchievements() {
    return (
        <section>
            <Title title="Our Achievements" />
            <div
                id="carouselExampleIndicators"
                className="carousel slide  mx-auto col-lg-6 col-md-6 col-12"
                data-bs-ride="true"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={3}
                        aria-label="Slide 4"
                    />
                </div>
                <div className="container ">
                    <div className="carousel-inner carousel-container">
                        <div className="carousel-item active">
                            <img src="/Images/img-1.webp" className="d-block w-100" alt="img-1" />
                        </div>
                        <div className="carousel-item ">
                            <img src="/Images/img-2.webp" className="d-block w-100" alt="img-2" />
                        </div>
                        <div className="carousel-item ">
                            <img src="/Images/img-3.webp" className="d-block w-100" alt="img-3" />
                        </div>
                        <div className="carousel-item ">
                            <img src="/Images/img-4.webp" className="d-block w-100" alt="img-4" />
                        </div>


                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </section>
    )
}
