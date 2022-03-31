import Link from "next/link";

const Navigation = () => {
    return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Next Practice</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active" aria-current="page"> Index</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link" aria-current="page"> About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/services">
                            <a className="nav-link" aria-current="page"> Services</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )
}
    
export default Navigation;