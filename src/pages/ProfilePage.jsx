import React from 'react'
import Breadcrum from '../components/Breadcrum'

export default function ProfilePage() {
  return (
    <>
    <div className="page-content">

   
<Breadcrum title="ProfilePage"/>

   <section className="section-padding">
    <div className="container"/>
       <div className="d-flex align-items-center px-3 py-2 border mb-4">
        <div className="text-start">
          <h4 className="mb-0 h4 fw-bold">Account - Profile</h4>
       </div>
      </div>
      <div className="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarFilter"><span><i className="bi bi-person me-2"></i>Account</span></div>
       <div className="row">
          <div className="col-12 col-xl-3 filter-column">
              <nav className="navbar navbar-expand-xl flex-wrap p-0">
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbarFilter" aria-labelledby="offcanvasNavbarFilterLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title mb-0 fw-bold text-uppercase" id="offcanvasNavbarFilterLabel">Account</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body account-menu">
                    <div className="list-group w-100 rounded-0">
                      <a href="account-dashboard.html" className="list-group-item"><i className="bi bi-house-door me-2"></i>Dashboard</a>
                      <a href="account-orders.html" className="list-group-item"><i className="bi bi-basket3 me-2"></i>Orders</a>
                      <a href="account-profile.html" className="list-group-item active"><i className="bi bi-person me-2"></i>Profile</a>
                      <a href="account-edit-profile.html" className="list-group-item"><i className="bi bi-pencil me-2"></i>Edit Profile</a>
                      <a href="account-saved-address.html" className="list-group-item"><i className="bi bi-pin-map me-2"></i>Saved Address</a>
                      <a href="wishlist.html" className="list-group-item"><i className="bi bi-suit-heart me-2"></i>Wishlist</a>
                      <a href="authentication-login.html" className="list-group-item"><i className="bi bi-power me-2"></i>Logout</a>
                    </div>
                  </div>
                </div>
            </nav>
          </div>
          <div className="col-12 col-xl-9">
            <div className="card rounded-0">
              <div className="card-body p-lg-5">
                  <h5 className="mb-0 fw-bold">Profile Details</h5>
                  <hr/>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>Full Name</td>
                          <td>Jhon Deo</td>
                        </tr>
                        <tr>
                          <td>Mobile Number</td>
                          <td>+99-85XXXXXXXX</td>
                        </tr>
                        <tr>
                          <td>Email ID</td>
                          <td>name@example.com</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>Male</td>
                        </tr>
                        <tr>
                          <td>DOB</td>
                          <td>10/03/1993</td>
                        </tr>
                        <tr>
                          <td>Location</td>
                          <td>United Kingdom</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="">
                      <button type="button" className="btn btn-outline-dark btn-ecomm px-5"><i className="bi bi-pencil me-2"></i>Edit</button>
                  </div>
              </div>
            </div>
          </div>
       
    </div>
  </section>
   


  
    <div className="modal" id="FilterOrders" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Filter Orders</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <h6 className="mb-3 fw-bold">Status</h6>
              <div className="status-radio d-flex flex-column gap-2">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    All 
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                  <label className="form-check-label" for="flexRadioDefault2">
                    On the way
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                  <label className="form-check-label" for="flexRadioDefault3">
                    Delivered
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                  <label className="form-check-label" for="flexRadioDefault4">
                    Cancelled
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
                  <label className="form-check-label" for="flexRadioDefault5">
                    Returned
                  </label>
                </div>
              </div>
              <hr/>
              <h6 className="mb-3 fw-bold">Time</h6>
              <div className="status-radio d-flex flex-column gap-2">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioTime" id="flexRadioDefault6"/>
                  <label className="form-check-label" for="flexRadioDefault6">
                    Anytime 
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioTime" id="flexRadioDefault7"/>
                  <label className="form-check-label" for="flexRadioDefault7">
                    Last 30 days
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioTime" id="flexRadioDefault8"/>
                  <label className="form-check-label" for="flexRadioDefault8">
                    Last 6 months
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioTime" id="flexRadioDefault9"/>
                  <label className="form-check-label" for="flexRadioDefault9">
                    Last year
                  </label>
                </div>
              </div>

          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center gap-3 w-100">
              <button type="button" className="btn btn-outline-dark btn-ecomm w-50">Clear Filters</button>
              <button type="button" className="btn btn-dark btn-ecomm w-50">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


 </div>
    </>
  )
}


