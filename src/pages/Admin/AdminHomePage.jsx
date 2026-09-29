


import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom'


export default function AdminHomePage() {
    return (
        <>

            <div className="page-content">
                <div className="containar-fluid my-3 px-5">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        < div className="col-md-9">
                            <div className="row">
                                <h5 className='bg-black text-light p-2 text-center'>Admin profile</h5>
                                <div className="col-md-6">
                                    <img src="/assets/images/no image.jpg" style={{ height: 500, width: "100%" }} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <table className='table table-bordered'>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Nikhil kumar</th>
                                            </tr>
                                            <tr>
                                                <th>User Name</th>
                                                <th>Nikhil kumar</th>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <th>nk2590875@gmail.com</th>
                                            </tr>
                                            <tr>
                                                <th>Phone</th>
                                                <th>6204216601</th>
                                            </tr>
                                            <tr>
                                                <th>Role</th>
                                                <th>Super Admin</th>
                                            </tr>
                                            <tr>
                                                <th colSpan={2}>
                                                    <Link to="/update-profile" className='btn btn-dark w-100'> update profile</Link>

                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >

        </>

    )
}
