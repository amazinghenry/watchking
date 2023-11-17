const Footer = () => {
    const thisYear = new Date().getFullYear()



    return ( 
        <footer className="container-fluid">
           <div> Copyright © {thisYear} <a href="https://amazingDojo.xyz">AmazingDojo</a> All rights reserved  </div> 
        </footer>
     );
}
 
export default Footer;