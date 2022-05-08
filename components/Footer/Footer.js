import Link from 'next/link';

const Footer = () => {
    const payment = 'https://edomainhost.com/img/payment/paysslc.png';
    return (
        <>
            <div className="container-fluid bg-dark p-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card bg-dark text-white">
                            <div className="card-header fs-3 text-primary">
                                Follow Us
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"><i className="fab fa-facebook-square fs-4 text-primary"></i> /kid'sGallary</li>
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"><i className="fab fa-twitter-square fs-4 text-primary"></i> /kid'sGallary</li>
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"><i className="fab fa-youtube-square fs-4 text-primary"></i> /kid'sGallary</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card bg-dark">
                            <div className="card-header fs-3 text-primary">
                                Explore
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark">
                                    <p className="text-muted text-decoration-none fs-5"><Link href="/toys">Toys</Link></p>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <p className="text-muted text-decoration-none fs-5"><Link href="/about">About</Link></p>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <p className="text-muted text-decoration-none fs-5"><Link href="/contact">Contact</Link></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card">
                            <img src={payment} className="img-fluid" alt="payment" />
                        </div>
                    </div>
                </div>
                <p className="text-muted text-center mt-5 fs-5">&#169; Created By Arfin Priom || All Rights Resurved</p>
            </div>
        </>
    );
};

export default Footer;