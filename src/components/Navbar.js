const Navbar = () => {
    return ( 
        <nav className="container-fluid">
            <div className="nav container">
            <h1 className='main-logo'>WatchKing</h1>
            <div className="link-group">
                <a href="/" className="link-item"> Home </a>
                <a href="/" className="link-item"> About </a>
                <a href="/" className="link-item"> Collections </a>
                <a href="/" className="link-item"> Testimonials </a>
                <a href="/" className="link-item"> Contact </a>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;