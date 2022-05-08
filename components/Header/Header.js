import Link from 'next/link';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, logOut, admin } = useAuth();

    return (
        <>
            <div className="container-fluid bg-dark text-muted">
                <div className="container py-1">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                            <p><i className="fas fa-phone-alt"></i> +880174584</p>
                        </div>
                        <div className="col-lg-6 col-md-4 col-6">
                            <p><i className="fas fa-envelope-open"></i> arfin@gmail.com</p>
                        </div>
                        {
                            user ? <div className="col-lg-4 col-md-4 col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    Dashboard
                                </button>

                                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header overflow-hidden">
                                        <p className="offcanvas-title fs-4" id="offcanvasExampleLabel">Dashboard</p>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="card">
                                        <img src={user?.photoURL} className="card-img-top img-fluid img-thumbnail rounded-circle w-50" alt="profile" />
                                        <div className="card-body overflow-hidden">
                                            <p className="card-title fs-4 text-dark">{user?.displayName}</p>
                                            <p className="card-text">{user?.email}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            {
                                                admin && <>
                                                    <li className="list-group-item overflow-hidden">
                                                        <p className="nav-link"><i className="fas fa-user-shield fs-5"></i> <Link href="/Makeadmin">Make Admin</Link></p>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden">
                                                        <p className="nav-link"><i className="fas fa-plus-circle fs-5"></i> <Link href="/Addproduct">Add Product</Link></p>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden">
                                                        <p className="nav-link"><i className="fas fa-tasks fs-5"></i> <Link href="/Manageproduct">Manage Product</Link></p>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden">
                                                        <p className="nav-link"><i className="fas fa-dumpster fs-5"></i> <Link href="/Orders">All Orders</Link></p>
                                                    </li>
                                                </>
                                            }
                                            <li className="list-group-item overflow-hidden">
                                                <p className="nav-link"><i className="fas fa-dumpster-fire fs-5"></i> <Link href="/Myorders">My Orders</Link></p>
                                            </li>
                                            <li className="list-group-item overflow-hidden">
                                                <p className="nav-link"><i className="fas fa-marker fs-5"></i> <Link href="/Makereviews">Give Review</Link></p>
                                            </li>
                                            <li className="list-group-item overflow-hidden">
                                                <p className="nav-link"><i className="fab fa-cc-amazon-pay fs-5"></i> <Link href="/Pay">Payment</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button onClick={logOut} type="button" className="btn bg-white text-dark btn-sm fw-bold">Sign Out</button>
                            </div>
                                : <div className="col-lg-4 col-md-4 col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="button" className="btn bg-white text-dark btn-sm fw-bold"><Link href='/Signin'>Sign In</Link></button>
                                    <button type="button" className="btn bg-white text-dark btn-sm fw-bold"><Link href='/Signup'>Sign Up</Link></button>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <h2 className="navbar-brand fw-bold text-primary logo"><i className="fas fa-traffic-light"></i><Link href="/">Kid's Gallary</Link></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page"><Link href="/">Home</Link></p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link"><Link href="/Toys">Toys</Link></p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link"><Link href="/About">About</Link></p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link"><Link href="/Contact">Contact</Link></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;