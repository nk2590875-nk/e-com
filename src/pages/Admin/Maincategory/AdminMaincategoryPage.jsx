



import { useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { Link } from 'react-router-dom'

import $ from 'jquery';
import  'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';


export default function AdminMaincategoryPage() {
    let [MaincategoryStateData, setMaincategoryStateData] = useState([])

    async function deleterecord(id) {
        if (confirm("Are you sure delete that item:")) {
            let response = await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}/maincategory/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }

            })
            response = await response.json()
            getAPIData()
        }
    }
    async function getAPIData() {
        let response = await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}/maincategory`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        setMaincategoryStateData(response)
        
            $('#DataTable').DataTable()
       
    }
    useEffect(() => {
        let time = getAPIData()
        return() => clearTimeout(time)

    }, [])
    return (
        <>

            <div className="page-content">
                <div className="containar-fluid my-3 px-5">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        < div className="col-md-9">
                            <div className="row" >
                                <h5 className='bg-black text-light p-2 text-center'>Maincategory< Link to="/Admin/Maincategory/create"><i className='bi bi-plus fs-3 float-end text-light  '></i></Link> </h5>
                                <div className="table-responsive">

                                    <table id="DataTables"className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Pic</th>
                                                <th>Active</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                MaincategoryStateData.map(item => {
                                                    return <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>
                                                            <Link to={`${import.meta.env.VITE_SITR_IMAGE_SERVER}/${item.pic}`} target='_blank' rel='noreferrer '>
                                                                <img src={`${import.meta.env.VITE_SITR_IMAGE_SERVER}/${item.pic}`} height={50} width={80} alt=''></img>
                                                            </Link>
                                                        </td>
                                                        <td>{item.active ? "Yes" : "No"}</td>
                                                        <td><Link to={`/admin/maincategory/edit/${item.id}`} className='btn btn-primart' ><i className='bi bi-pencil-square'></i></Link></td>
                                                        <td><button onClick={() => deleterecord(item.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button></td>
                                                    </tr>
                                                })
                                            }
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
