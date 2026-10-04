import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <header className="top-header">
        <nav className="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
          <Link className="navbar-brand d-none d-xl-inline" to=""><img src="/assets/images/logo1.png" className="logo-img" alt="" /></Link>
          <a className="mobile-menu-btn d-inline d-xl-none" href="javascript:;" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar">
            <i className="bi bi-list"></i>
          </a>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <div className="offcanvas-logo"><Link to="/"><img src="assets/images/logo1.png" className="logo-img" alt="" /></Link>
              </div>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body primary-menu">
              <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li className="nav-item">
                  <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="tv-shows.html"
                    data-bs-toggle="dropdown">
                    Categories
                  </a>
                  <div className="dropdown-menu dropdown-large-menu">
                    <div className="row">
                      <div className="col-12 col-xl-4">
                        <h6 className="large-menu-title">Fashion</h6>
                        <ul className="list-unstyled">
                          <li><a href="javascript:;">Casual T-Shirts</a>
                          </li>
                          <li><a href="javascript:;">Formal Shirts</a>
                          </li>
                          <li><a href="javascript:;">Jackets</a>
                          </li>
                          <li><a href="javascript:;">Jeans</a>
                          </li>
                          <li><a href="javascript:;">Dresses</a>
                          </li>
                          <li><a href="javascript:;">Sneakers</a>
                          </li>
                          <li><a href="javascript:;">Belts</a>
                          </li>
                          <li><a href="javascript:;">Sports Shoes</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-12 col-xl-4">
                        <h6 className="large-menu-title">Electronics</h6>
                        <ul className="list-unstyled">
                          <li><a href="javascript:;">Mobiles</a>
                          </li>
                          <li><a href="javascript:;">Laptops</a>
                          </li>
                          <li><a href="javascript:;">Macbook</a>
                          </li>
                          <li><a href="javascript:;">Televisions</a>
                          </li>
                          <li><a href="javascript:;">Lighting</a>
                          </li>
                          <li><a href="javascript:;">Smart Watch</a>
                          </li>
                          <li><a href="javascript:;">Galaxy Phones</a>
                          </li>
                          <li><a href="javascript:;">PC Monitors</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-12 col-xl-4 d-none d-xl-block">
                        <div className="pramotion-banner1">
                          <img src="assets/images/menu-img.webp" className="img-fluid" alt="" />
                        </div>
                      </div>

                    </div>

                  </div>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="cart.html">Shop Cart</a></li>
                    <li><a className="dropdown-item" href="wishlist.html">Wishlist</a></li>
                    <li><a className="dropdown-item" href="product-details.html">Product Details</a></li>
                    <li><a className="dropdown-item" href="payment-method.html">Payment Method</a></li>
                    <li><a className="dropdown-item" href="billing-details.html">Billing Details</a></li>
                    <li><a className="dropdown-item" href="address.html">Addresses</a></li>
                    <li><a className="dropdown-item" href="shop-grid.html">Shop Grid</a></li>
                    <li><a className="dropdown-item" href="shop-grid-type-4.html">Shop Grid 4</a></li>
                    <li><a className="dropdown-item" href="shop-grid-type-5.html">Shop Grid 5</a></li>
                    <li><a className="dropdown-item" href="search.html">Search</a></li>
                  </ul>
                </li> */}
                
                <li className="nav-item">
                  <Link className="nav-link" to="/Shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Feature">Feature</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Testimonial">Testimonial</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="admin">Admin</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                    nikhil bhardwaj
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="dashboard">Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="Profile"> My Profile</Link></li>
                    <li><Link className="dropdown-item" to="Update-Profile"> Edit Profile</Link></li>
                    <li><Link className="dropdown-item" to="Cart"> Cart</Link></li>
                    <li><Link className="dropdown-item" to="Order"> Orders</Link></li>
                    <li><Link className="dropdown-item" to="Wishlisl"> Wishlist</Link></li>
                    <li><Link className="dropdown-item" to="Address">Addresses</Link></li>
                    <hr />
                    <li><button className="dropdown-item" to="Logout"> Logout</button></li>

                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <ul className="navbar-nav secondary-menu flex-row">
            <li className="nav-item">
              <a className="nav-link dark-mode-icon" href="javascript:;">
                <div className="mode-icon">
                  <i className="bi bi-tabIndex"></i>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Wishlist"><i className="bi bi-suit-heart"></i></Link>
            </li>
            <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
              <a className="nav-link position-relative" href="javascript:;">
                <div className="cart-badge">8</div>
                <i className="bi bi-basket2"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard"><i className="bi bi-person-circle"></i></Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header bg-section-2">
          <h5 className="mb-0 fw-bold" id="offcanvasRightLabel">8 items in the cart</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="cart-list">

            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/01.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/02.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/03.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/04.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/05.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/06.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/07.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/08.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/09.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-product-img">
                <a href="product-details.html">
                  <img src="assets/images/new-arrival/10.webp" width="60" alt="" />
                </a>
              </div>
              <div className="">
                <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                <p className="mb-0"><strong>1 X $59.00</strong>
                </p>
              </div>
              <div className="ms-auto fs-5">
                <a href="javascript:" className="link-dark"><i className="bi bi-trash"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer p-3 border-top">
          <div className="d-grid">
            <button type="button" className="btn btn-lg btn-dark btn-ecomm px-5 py-3">Checkout</button>
          </div>
        </div>

      </div>
    </>
  )
}

