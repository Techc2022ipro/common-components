import { BrowserRouter as Router } from 'react-router-dom';


const Navbar = () => {
    return (
        <Router>
        <div className='nav'>
        <div className='logo'>Lookbook</div>
        <div className='links'>
          <a href="http://localhost:7070" className='link'>Home</a>
          <a href="http://localhost:2020" className='link'>Product</a>
          <a href="http://localhost:8080" className='link'>Login</a>
        </div>
        </div>
        </Router>
    )
}

export default Navbar;
