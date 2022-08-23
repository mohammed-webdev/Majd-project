import React from 'react'

export default function Footer() {
  return (
    <footer className="container-fluid bg-footer">
      <div className="row align-items-center">
        <div className='col-lg-4 col-md-4 col-12 address'>
          <h3>Address</h3>
          <h5>Majd company</h5>
          <h5>javastraat 123</h5>
          <h5>Netherland - Amsterdam</h5>
          <h5>KVK: 1234567</h5>
        </div>
        <div className='col-lg-4 col-md-4 col-12 logo-footer mt-lg-0 mb-lg-0 mt-md-5 mb-md-5 mt-5 mb-5'>
          <h1>LOGO</h1>
        </div>
        <div className='col-lg-4 col-md-4  col-12 contact'>
          <h4>Contact us</h4>
          <h5><i className="bi bi-facebook"></i> facebook.com/majdcompany</h5>
          <h5><i className="bi bi-whatsapp"></i> +31-123-45-67-89</h5>
          <h5><i className="bi bi-telephone-fill"></i> +31-123-45-67-89</h5>
          <h5><i className="bi bi-envelope"></i> info@majdcompany.com</h5>
        </div>
      </div>
    </footer>
  )
}
