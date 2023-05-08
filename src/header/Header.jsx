
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className=''>
            <div className='container'>
                <div className='row header_container'>
                    <div className="col-sm-12 col-md-7 col-lg-5">MATEMATIKA MASTER</div>

                    <div className="col header_link row">
                        <div className=" col-sm-6 col-lg-4">
                            <NavLink to={"/"}>BOSH SAHIFA</NavLink>
                        </div>
                        <div className=" col-sm-6 col-lg-4">
                            <NavLink to={"/about"}>MASALALAR</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header