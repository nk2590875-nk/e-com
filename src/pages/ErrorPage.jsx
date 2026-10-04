import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <>
            <div className="page-content">


                <Breadcrum title="404! page not found" />



                <section className="section-padding">
                    <div className="container">

                        <div className="separator mb-3">
                            <div className="line"></div>
                            <h3 className="mb-0 h3 fw-bold">Opps!</h3>
                            <div className="line"></div>
                        </div>

                        <div className="border p-4 text-center w-100">
                            <h5 className="fw-bold mb-2">T404! Page not found.</h5>
                            <div className="btn-group " >
                                <Link to="/Shop" className=' btn btn-primary'>Shop naw</Link>
                                <Link to="/*" className=' btn btn-secondry'>Home</Link>
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        </>
    )
}
