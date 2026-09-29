
import ProductSlider from '../components/ProductSlider'
import Product from '../components/Product'
import Feature from '../components/Feature'
import LatestProduct from '../components/LatestProduct'
import BrandSlider from '../components/BrandSlider'
import CategorySlider from '../components/Categoryslider'


export default function Homepage() {
  return (
    <>
    <div className="page-content">
      <section className="slider-section">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active bg-primary">
            <div className="row d-flex align-items-center">
              <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                  <h3 className="h3 fw-light text-white fw-bold">New Arrival</h3>
                  <h1 className="h1 text-white fw-bold">Women Fashion</h1>
                  <p className="text-white fw-bold"><i>Last call for upto 25%</i></p>
                  <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src="assets/images/sliders/s_1.webp" className="img-fluid" alt="..."/>
              </div>
            </div>
          </div>
          <div className="carousel-item bg-red">
            <div className="row d-flex align-items-center">
              <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                  <h3 className="h3 fw-light text-white fw-bold">Latest Trending</h3>
                  <h1 className="h1 text-white fw-bold">Fashion Wear</h1>
                  <p className="text-white fw-bold"><i>Last call for upto 35%</i></p>
                  <div className=""> <a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src="assets/images/sliders/s_2.webp" className="img-fluid" alt="..."/>
              </div>
            </div>
          </div>
          <div className="carousel-item bg-purple">
            <div className="row d-flex align-items-center">
              <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                  <h3 className="h3 fw-light text-white fw-bold">New Trending</h3>
                  <h1 className="h1 text-white fw-bold">Kids Fashion</h1>
                  <p className="text-white fw-bold"><i>Last call for upto 15%</i></p>
                  <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src="assets/images/sliders/s_3.webp" className="img-fluid" alt="..."/>
              </div>
            </div>
          </div>
          <div className="carousel-item bg-yellow">
            <div className="row d-flex align-items-center">
              <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                  <h3 className="h3 fw-light text-dark fw-bold">Latest Trending</h3>
                  <h1 className="h1 text-dark fw-bold">Electronics Items</h1>
                  <p className="text-dark fw-bold"><i>Last call for upto 45%</i></p>
                  <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src="assets/images/sliders/s_4.webp" className="img-fluid" alt="..."/>
              </div>
            </div>
          </div>
          <div className="carousel-item bg-green">
            <div className="row d-flex align-items-center">
              <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                  <h3 className="h3 fw-light text-white fw-bold">Super Deals</h3>
                  <h1 className="h1 text-white fw-bold">Home Furniture</h1>
                  <p className="text-white fw-bold"><i>Last call for upto 24%</i></p>
                  <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src="assets/images/sliders/s_5.webp" className="img-fluid" alt="..."/>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
      <ProductSlider/>
      <Product/>
      <Feature/>
      <LatestProduct/>
      <BrandSlider/>
      <CategorySlider/>
     
      </div>
    </>
  )
}

