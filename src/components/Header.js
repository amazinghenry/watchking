import headerImage from "../images/header-image.jpg"

const Header = () => {
    return ( 
        <header className="container-fluid">
            <div className="container header-group">
                <div className="header-item">
                    <h1 className="header-title">The time is Now</h1>
                    <p className="watchking-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper libero vel porta faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vehicula arcu quis blandit. </p>
                    <a href="/" className="watchking-button">Get Watch Now</a>
                </div>
                <div className="header-image-container">
                    <img src = {headerImage} alt="header visual" className="header-image" />
                </div>
            </div>
        </header>
     );
}
 
export default Header;