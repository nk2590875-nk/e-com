
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (

        <div className="list-group">
            <Link to="/admin" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-house fs-4 "></i><span className='float-end'>Home</span></Link>
            <Link to="/admin/Maincategory" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-grid fs-4"></i><span className='float-end'>Maincategory</span></Link>
            <Link to="/admin/Subcategory" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-grid fs-4"></i><span className='float-end'>Subcategory</span></Link>
            <Link to="/admin/Brand" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-award fs-4"></i><span className='float-end'>Brand</span></Link>
            <Link to="/admin/Product" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-box fs-4"></i><span className='float-end'>Product</span></Link>
            <Link to="/admin/Feature" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-gem fs-4"></i><span className='float-end'>Feature</span></Link>
            <Link to="/admin/Newslatter" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-envelope fs-4"></i><span className='float-end'>Newslatter</span></Link>
            <Link to="/admin/Contactus" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-telephone fs-4"></i><span className='float-end'>Contactus</span></Link>
            <Link to="/admin/Chekouts" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-cart-check fs-4"></i><span className='float-end'>Chekouts</span></Link>
            <Link to="/admin/Settings" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-gear fs-4"></i><span className='float-end'>Settings</span></Link>
            <Link to="/admin/user" className="list-group-item bg-black text-light mb-1 " aria-current="true"><i className="bi bi-people fs-4"></i><span className='float-end'>User</span></Link>

        </div>

    )
}
