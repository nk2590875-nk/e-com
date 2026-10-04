
import Newslatter from "./Newslatter"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      <Newslatter />
      <section className="footer-section bg-section-2 section-padding bg-dark" >
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 g-4">
            <div className="col">
              <div className="footer-widget-6">
                <img src="assets/images/logo.png" className="logo-img mb-3" alt="" />
                <h5 className="text-light mb-3 fw-bold">About Us</h5>
                <p className="text-light mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
              <h5 className="text-light mt-3  fw-bold">Follow Us</h5>
              <div href="social-link d-flex align-items-center gap-2">
                <a href="javascript:;"> <i className="text-light me-2 fs-5 bi bi-facebook"></i></a>
                <a href="javascript:;"> <i className="text-light me-2 fs-5 bi bi-twitter"></i></a>
                <a href="javascript:;"> <i className="text-light me-2 fs-5 bi bi-linkedin"></i></a>
                <a href="javascript:;"> <i className="text-light me-2 fs-5 bi bi-youtube"></i></a>
                <a href="javascript:;"> <i className="text-light me-2 fs-5 bi bi-instagram"></i></a>
              </div>

            </div>
            <div className="col">
              <div className="footer-widget-7">
                <h5 className="text-light mt-3 mb-3 fw-bold">Quick Links </h5>
                <ul className=" text-lightwidget-link list-unstyled">
                  <li><Link className="text-light" to="/Home">Home</Link></li>
                  <li><Link className="text-light" to="/About">About</Link></li>
                  <li><Link className="text-light" to="/Shop">Shop</Link></li>
                  <li><Link className="text-light" to="/Features">Features</Link></li>
                  <li><Link className="text-light" to="/Testimonial">Testimonial</Link></li>
                  <li><Link className="text-light" to="/ContactUs">ContactUs</Link></li>

                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget-8">
                <h5 className="text-light mt-3 mb-3 fw-bold">Our policies</h5>
                <ul className="widget-link list-unstyled">
                  <li><Link className="text-light" to="/">privacy Policy</Link></li>
                  <li><Link className="text-light" to="/">Terms & Conditions</Link></li>
                  <li><Link className="text-light" to="/">Refund Policy</Link></li>
                  <li><Link className="text-light" to="/">Data policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-widget-8">
              <div className="mb-3 mt-3">
                <h5 className="text-light mb-0 fw-bold">Address</h5>
                <p className="text-light mb-0 text-light">
                  <Link className="text-light" to={import.meta.env.VITE_SITE_MAP2} target='-blank' rel='noreferrer'>{import.meta.env.VITE_SITE_ADDRESS}</Link>
                </p>
              </div>
              <div className="mb-3 mt-3">
                <h5 className="text-light mb-0 fw-bold">EMAIL</h5>
                <p className="text-light mb-0 text-light">
                  <Link className="text-light" to={`mailto:${import.meta.env.VITE_SITE_EMAIL}`} target='-blank' rel='noreferrer'>{import.meta.env.VITE_SITE_EMAIL}</Link>
                </p>
              </div>
              <div className="">
                <h5 className="text-light mb-0 fw-bold">Contact Us</h5>
                <p className="text-light mb-0 text-light">
                  <Link className="text-light" to={`tel:${import.meta.env.VITE_SITE_PHONE}`} target='-blank' rel='noreferrer'>{import.meta.env.VITE_SITE_PHONE}</Link>
                </p>
              </div>
              <div className="mb-3 mt-3">
                <h5 className="text-light mb-0 fw-bold">Whatssap</h5>
                <p className="text-light mb-0 text-light">
                  <Link className="text-light" to={`https://wa.me/${import.meta.env.VITE_SITE_WHATSSAP}`} target='-blank' rel='noreferrer'>{import.meta.env.VITE_SITE_WHATSSAP}</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="my-5"></div>
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h5 className="text-light fw-bold mb-3">Download Mobile App</h5>
              </div>
              <div className="app-icon d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
                <div>
                  <a href="javascript:;">
                    <img src="assets/images/play-store.webp" width="160" alt="" />
                  </a>
                </div>
                <div>
                  <a href="javascript:;">
                    <img src="assets/images/apple-store.webp" width="160" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >


      <footer className="footer-strip text-center py-3 bg-section-2 border-top positon-absolute bottom-0">
        <p className="text-light mb-0 text-muted">© 2022. www.example.com | All rights reserved.</p>
      </footer>
    </>
  )
}

