import React from 'react'
import Breadcrum from '../components/Breadcrum'

export default function UpdateProfile() {
    return (

        <>
            <div className="page-content">


               <Breadcrum title="Updateprofile"/>


                
                <section className="section-padding">
                    <div className="container">
                        <div className="d-flex align-items-center px-3 py-2 border mb-4">
                            <div className="text-start">
                                <h4 className="mb-0 h4 fw-bold">Account - Edit Profile</h4>
                            </div>
                        </div>
                        <div className="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarFilter"><span><i className="bi bi-person me-2"></i>Account</span></div>
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
                                                <a href="account-profile.html" className="list-group-item"><i className="bi bi-person me-2"></i>Profile</a>
                                                <a href="account-edit-profile.html" className="list-group-item active"><i className="bi bi-pencil me-2"></i>Edit Profile</a>
                                                <a href="account-saved-address.html" className="list-group-item"><i className="bi bi-pin-map me-2"></i>Saved Address</a>
                                                <a href="wishlist.html" className="list-group-item"><i className="bi bi-suit-heart me-2"></i>Wishlist</a>
                                                <a href="authentication-login.html" className="list-group-item"><i className="bi bi-power me-2"></i>Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-12 col-xl-7">
                                <div className="card rounded-0">
                                    <div className="card-body p-lg-5">
                                        <h5 className="mb-0 fw-bold">Edit Details</h5>
                                        <hr/>
                                            <form>
                                                <div className="row row-cols-1 g-3">
                                                    <div className="col">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control rounded-0" id="floatingInputName" placeholder="Name" value="jhon Deo"/>
                                                                <label for="floatingInputName">Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control rounded-0" id="floatingInputNumber" placeholder="Name" value="+99-85XXXXXXXX"/>
                                                                <label for="floatingInputNumber">Mobile Number</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control rounded-0" id="floatingInputEmail" placeholder="Email" value="name@example.com"/>
                                                                <label for="floatingInputEmail">Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
                                                                <label className="form-check-label" for="inlineRadio1">Male</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                                <label className="form-check-label" for="inlineRadio2">Female</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-floating">
                                                            <input type="date" className="form-control rounded-0" id="floatingInputDOB" value=""/>
                                                                <label for="floatingInputDOB">Date of Birth</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control rounded-0" id="floatingInputLocation" placeholder="Location" value="United Kingdom"/>
                                                                <label for="floatingInputLocation">Location</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <button type="button" className="btn btn-dark py-3 btn-ecomm w-100">Save Details</button>
                                                    </div>
                                                    <div className="col">
                                                        <button type="button" className="btn btn-outline-dark py-3 btn-ecomm w-100" data-bs-toggle="modal" data-bs-target="#ChangePasswordModal">Change Password</button>
                                                    </div>


                                                </div>
                                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               


                <div className="modal" id="ChangePasswordModal" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content rounded-0">
                            <div className="modal-body">
                                <h5 className="fw-bold mb-3">Change Password</h5>
                                <hr/>
                                    <form>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-0" id="floatingInputOldPass" placeholder="Old Password"/>
                                                <label for="floatingInputOldPass">Old Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-0" id="floatingInputNewPass" placeholder="New Password"/>
                                                <label for="floatingInputNewPass">New Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-0" id="floatingInputConPass" placeholder="Confirm Password"/>
                                                <label for="floatingInputConPass">Confirm Password</label>
                                        </div>
                                        <div className="d-grid gap-3 w-100">
                                            <button type="button" className="btn btn-dark py-3 btn-ecomm">Change</button>
                                            <button type="button" className="btn btn-outline-dark py-3 btn-ecomm" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
