import React from 'react'
import Title from './Title'

export default function Brief() {
  return (
    <section className='container mb-5'>
      <Title title="Brief" />
      <div className="row align-items-center">
        <div className="left-brief-section col-lg-6  col-12">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner rounded-4">
              <div className="carousel-item active">
                <video loop muted autoPlay src="/Videos/our-production-1.mp4" className="d-block w-100"></video>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Our production 1</h5>
                  <p>This is from our production.</p>
                </div>
              </div>
              <div className="carousel-item">
                <video loop muted autoPlay src="/Videos/our-production-2.mp4" className="d-block w-100"></video>

                <div className="carousel-caption d-none d-md-block">
                  <h5 className='text-dark'>Our production 2</h5>
                  <p className='text-dark'>This is from our production.</p>
                </div>
              </div>
              <div className="carousel-item">
                <video loop muted autoPlay src="/Videos/our-production-3.mp4" className="d-block w-100"></video>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Our production 3</h5>
                  <p>This is from our production.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        <div className="right-brief-section col-lg-6  col-12">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, praesentium quas. Natus, eum saepe! Eligendi, animi exercitationem. Adipisci omnis doloremque quia in. Delectus distinctio id commodi architecto laboriosam, perferendis odio aspernatur ut nihil nemo. Explicabo, quidem! Inventore fugiat rem corporis, amet eos saepe quisquam, illum eligendi voluptatum unde labore quo dolore necessitatibus neque minima libero possimus nihil sed similique natus animi? Laboriosam odio earum hic? Tempore magni a accusamus, quis reprehenderit ipsa ipsum odio ducimus asperiores iure libero perspiciatis officiis ullam cumque! Deleniti numquam sapiente perferendis recusandae veritatis iure, nam reprehenderit, voluptatum hic quae nulla harum culpa, adipisci nemo consequatur ea nihil quo magni aspernatur exercitationem
          </p>
        </div>
      </div>
    </section>
  )
}
